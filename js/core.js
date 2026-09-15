/* ===== Утилиты ===== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function parseWord(str, lesson) { const [en, ipa, ru] = str.split("|"); return { en, ipa, ru, lesson }; }
const lessonById = id => LESSONS.find(l => l.id === Number(id));

// Все слова курса без повторов (первое появление)
const ALL_WORDS = (() => {
  const seen = new Map();
  LESSONS.forEach(L => L.vocab.forEach(v => { const w = parseWord(v, L.id); if (!seen.has(w.en)) seen.set(w.en, w); }));
  return Array.from(seen.values());
})();
const WORD_MAP = new Map(ALL_WORDS.map(w => [w.en, w]));

/* ===== Проверка ответов ===== */
const CONTRACTIONS = [
  [/\bcan't\b/g, "cannot"], [/\bcan not\b/g, "cannot"], [/\bwon't\b/g, "will not"], [/\blet's\b/g, "let us"],
  [/n't\b/g, " not"], [/'m\b/g, " am"], [/'re\b/g, " are"], [/'ve\b/g, " have"], [/'ll\b/g, " will"], [/'d\b/g, " would"],
  [/\b(he|she|it|that|what|where|who|there|here|how|when|why)'s\b/g, "$1 is"], [/\bis got\b/g, "has got"]
];
function norm(s) {
  let t = String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/[.,!?;:"«»()]/g, " ").replace(/-/g, " ");
  CONTRACTIONS.forEach(([re, rep]) => { t = t.replace(re, rep); });
  return t.replace(/\s+/g, " ").trim();
}
const isCorrect = (input, answers) => answers.some(a => norm(a) === norm(input));

/* ===== Хранилище ===== */
const STORE_KEY = "englishStartA1";
const DEFAULT_STATE = { lessons: {}, cards: {}, xp: 0, streak: { last: null, count: 0 }, days: {}, settings: { voice: "", rate: 0.9 }, test: null, theme: null };
let S = (() => {
  try {
    const raw = JSON.parse(localStorage.getItem(STORE_KEY));
    if (raw) return { ...DEFAULT_STATE, ...raw, settings: { ...DEFAULT_STATE.settings, ...(raw.settings || {}) } };
  } catch (e) { /* пустое хранилище */ }
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
})();
function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { /* приватный режим */ } }

function dateKey(d = new Date()) { return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; }
function dayNum(d = new Date()) { return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000); }
function yesterdayKey() { const d = new Date(); d.setDate(d.getDate() - 1); return dateKey(d); }

function currentStreak() {
  const { last, count } = S.streak;
  return last === dateKey() || last === yesterdayKey() ? count : 0;
}
function addXP(n) {
  if (n <= 0) return;
  const today = dateKey();
  if (S.streak.last !== today) {
    S.streak.count = S.streak.last === yesterdayKey() ? S.streak.count + 1 : 1;
    S.streak.last = today;
  }
  S.xp += n;
  S.days[today] = (S.days[today] || 0) + n;
  save();
  updateTopbar();
}
function updateTopbar() {
  $("#xp").textContent = S.xp;
  $("#streak").textContent = currentStreak();
}

/* ===== Интервальное повторение ===== */
const SRS_INTERVALS = [0, 1, 3, 7, 14, 30];
function srsAdd(words) {
  let added = 0;
  words.forEach(en => { if (!S.cards[en] && WORD_MAP.has(en)) { S.cards[en] = { box: 0, due: dayNum() }; added++; } });
  save();
  return added;
}
function srsDue() { const t = dayNum(); return Object.keys(S.cards).filter(en => S.cards[en].due <= t && WORD_MAP.has(en)); }
function srsGrade(en, grade) {
  const c = S.cards[en]; if (!c) return;
  if (grade === 0) { c.box = 0; c.due = dayNum(); }
  else if (grade === 1) { c.due = dayNum() + 1; }
  else { c.box = Math.min(c.box + 1, SRS_INTERVALS.length - 1); c.due = dayNum() + Math.max(1, SRS_INTERVALS[c.box]); }
  save();
}
const learnedCount = () => Object.values(S.cards).filter(c => c.box >= 3).length;

/* ===== Озвучка ===== */
const TTS = {
  voices: [],
  supported: "speechSynthesis" in window,
  load() { if (this.supported) this.voices = speechSynthesis.getVoices().filter(v => /^en([-_]|$)/i.test(v.lang)); },
  voice() {
    const v = this.voices;
    return v.find(x => x.name === S.settings.voice)
      || v.find(x => /en[-_]GB/i.test(x.lang) && /google|natural|online/i.test(x.name))
      || v.find(x => /en[-_]US/i.test(x.lang) && /google|natural|online/i.test(x.name))
      || v.find(x => /en[-_]GB/i.test(x.lang)) || v.find(x => /en[-_]US/i.test(x.lang)) || v[0];
  },
  speak(text, { rate, onend } = {}) {
    if (!this.supported) { toast("Ваш браузер не поддерживает озвучку. Попробуйте Chrome или Edge."); onend && onend(); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/ — /g, ", "));
    const v = this.voice();
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = "en-GB";
    u.rate = rate || S.settings.rate;
    if (onend) { u.onend = onend; u.onerror = onend; }
    speechSynthesis.speak(u);
  },
  stop() { if (this.supported) speechSynthesis.cancel(); }
};
if (TTS.supported) { TTS.load(); speechSynthesis.onvoiceschanged = () => TTS.load(); }
const sayBtn = (text, slow) => `<button class="say" data-say="${esc(text)}" title="Послушать" aria-label="Послушать">🔊</button>` +
  (slow ? `<button class="say slow" data-say="${esc(text)}" data-rate="0.55" title="Медленно">🐢</button>` : "");

document.addEventListener("click", e => {
  const b = e.target.closest("[data-say]");
  if (b) { e.preventDefault(); e.stopPropagation(); TTS.speak(b.dataset.say, { rate: b.dataset.rate ? Number(b.dataset.rate) : undefined }); }
}, true);

// Добавляет кнопки озвучки к примерам в теории
function enhanceExamples(root) {
  $$(".ex", root).forEach(ex => {
    const b = $("b", ex); if (!b) return;
    ex.insertAdjacentHTML("afterbegin", sayBtn(b.textContent));
  });
}

/* ===== Интерфейс ===== */
let toastTimer;
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}
function applyTheme() { if (S.theme) document.documentElement.dataset.theme = S.theme; else delete document.documentElement.dataset.theme; }
function toggleTheme() {
  const dark = S.theme ? S.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  S.theme = dark ? "light" : "dark"; save(); applyTheme();
}
applyTheme();
$("#themeBtn").addEventListener("click", toggleTheme);

/* ===== Прогресс уроков ===== */
const lessonState = id => S.lessons[id] || {};
const lessonsDone = () => LESSONS.filter(l => lessonState(l.id).done).length;
const nextLesson = () => LESSONS.find(l => !lessonState(l.id).done) || null;

/* ===== Роутер ===== */
const ROUTES = {};
function route() {
  TTS.stop();
  if (window.stopRecognition) window.stopRecognition();
  const parts = location.hash.replace(/^#\/?/, "").split("/");
  const name = parts[0] || "";
  const app = $("#app");
  document.onkeydown = null;
  app.innerHTML = "";
  app.classList.remove("fade-in"); void app.offsetWidth; app.classList.add("fade-in");
  (ROUTES[name] || ROUTES[""])(app, ...parts.slice(1));
  $$("#nav a").forEach(a => a.classList.toggle("active", a.dataset.route === (name === "lesson" ? "lessons" : name)));
  window.scrollTo(0, 0);
  updateTopbar();
}
function startRouter() { window.addEventListener("hashchange", route); route(); }
