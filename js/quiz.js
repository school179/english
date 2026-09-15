/* ===== Движок упражнений =====
   Типы: c — выбор, lc — послушать и выбрать, i — вставить слово, o — порядок слов,
         tr — перевод, l — диктант, m — соединить пары */
const Q_LABELS = {
  c: "Выберите ответ", lc: "Послушайте и выберите", i: "Вставьте пропущенное", o: "Составьте предложение",
  tr: "Переведите на английский", l: "Напишите, что услышали", m: "Соедините пары"
};

function distractors(word, pool, field) {
  const others = shuffle(pool.filter(x => x[field] !== word[field])).map(x => x[field]);
  return [word[field], ...Array.from(new Set(others)).slice(0, 3)];
}

function buildLessonQuiz(L) {
  const words = L.vocab.map(v => parseWord(v, L.id));
  const pool = words.length >= 6 ? words : ALL_WORDS;
  const p = shuffle(words);
  const qs = [];
  p.slice(0, 3).forEach(w => qs.push({ t: "c", q: w.en, sub: "Как переводится?", say: w.en, o: distractors(w, pool, "ru"), a: 0 }));
  p.slice(3, 5).forEach(w => qs.push({ t: "c", q: w.ru, sub: "Как это по-английски?", o: distractors(w, pool, "en"), a: 0, after: w.en }));
  p.slice(5, 7).forEach(w => qs.push({ t: "lc", say: w.en, q: "Какое слово прозвучало?", o: distractors(w, pool, "en"), a: 0 }));
  qs.push({ t: "m", pairs: p.slice(7, 12).length >= 4 ? p.slice(7, 12) : p.slice(0, 5) });
  return [...qs, ...L.ex];
}

function runQuiz(root, questions, opts = {}) {
  let i = 0, correct = 0, answered = false, checkFn = null;
  const mistakes = [];
  const total = questions.length;

  function show() {
    if (i >= total) return finish();
    answered = false; checkFn = null;
    const q = questions[i];
    root.innerHTML = `
      <div class="quiz fade-in">
        <div class="quiz-top">
          <button class="icon-btn" data-act="exit" title="Выйти" aria-label="Выйти">✕</button>
          <div class="bar"><span style="width:${(i / total) * 100}%"></span></div>
          <b class="small">${i + 1} / ${total}</b>
        </div>
        <div class="q-card">
          ${q.text ? `<div class="card flat" style="margin-bottom:16px;max-height:240px;overflow:auto;background:var(--surface-2)">${esc(q.text)}</div>` : ""}
          <div class="q-type">${Q_LABELS[q.t]}</div>
          <div class="q-body"></div>
          <div class="feedback"></div>
          <div class="quiz-actions"></div>
        </div>
      </div>`;
    $("[data-act=exit]", root).onclick = () => { TTS.stop(); opts.onExit ? opts.onExit() : history.back(); };
    TYPES[q.t](q, $(".q-body", root), api);
    const actions = $(".quiz-actions", root);
    actions.innerHTML = `<button class="btn secondary" data-act="skip">Не знаю</button>` + (checkFn ? `<button class="btn" data-act="check">Проверить</button>` : "");
    $("[data-act=skip]", actions).onclick = () => api.skip();
    if (checkFn) $("[data-act=check]", actions).onclick = () => checkFn();
    const inp = $("input.text-input", root); if (inp) setTimeout(() => inp.focus(), 50);
  }

  const api = {
    setCheck(fn) { checkFn = fn; },
    skip() { if (answered) return; const q = questions[i]; api.done(false, "—", rightText(q)); },
    done(ok, your, right, speakText) {
      if (answered) return;
      answered = true;
      const q = questions[i];
      if (ok) correct++; else mistakes.push({ prompt: promptText(q), your, right });
      $$(".opt, .chip, .text-input, .big-listen", root).forEach(el => { if (el.tagName !== "BUTTON" || !el.classList.contains("big-listen")) el.disabled = true; });
      const fb = $(".feedback", root);
      const praise = ["Отлично!", "Верно!", "Правильно!", "Супер!", "Молодец!"][Math.floor(Math.random() * 5)];
      fb.className = `feedback show ${ok ? "right" : "wrong"}`;
      fb.innerHTML = (ok ? `✅ ${praise}` : `❌ Не совсем.`) +
        (!ok && right ? `<div class="fb-detail">Правильно: <b>${esc(right)}</b></div>` : "") +
        (speakText ? `<div class="fb-detail row" style="margin-top:6px">${sayBtn(speakText)} <span>${esc(speakText)}</span></div>` : "");
      if (speakText) TTS.speak(speakText);
      const actions = $(".quiz-actions", root);
      actions.innerHTML = `<button class="btn ${ok ? "good" : ""}" data-act="next">Дальше →</button>`;
      const next = $("[data-act=next]", actions);
      next.onclick = () => { i++; show(); };
      next.focus();
    }
  };

  document.onkeydown = e => {
    if (e.key !== "Enter") return;
    const q = questions[i]; if (!q) return;
    if (answered) { e.preventDefault(); i++; show(); }
    else if (checkFn) { e.preventDefault(); checkFn(); }
  };

  function finish() {
    document.onkeydown = null;
    const pct = Math.round((correct / total) * 100);
    const result = { correct, total, pct, mistakes };
    const extra = opts.onFinish ? opts.onFinish(result) || "" : "";
    const emoji = pct >= 90 ? "🏆" : pct >= 70 ? "🎉" : pct >= 50 ? "👍" : "💪";
    const msg = pct >= 90 ? "Превосходно!" : pct >= 70 ? "Хороший результат!" : pct >= 50 ? "Неплохо, но стоит повторить." : "Повторите теорию и попробуйте ещё раз.";
    root.innerHTML = `
      <div class="quiz fade-in"><div class="q-card result">
        <div style="font-size:3rem">${emoji}</div>
        <div class="score">${pct}%</div>
        <p class="muted">${correct} из ${total} правильно</p>
        <h2>${msg}</h2>
        ${extra}
        <div class="row" style="justify-content:center;margin-top:16px" id="resActions"></div>
        ${mistakes.length ? `<div class="mistakes"><h3>Работа над ошибками</h3>${mistakes.map(m => `
          <div class="mistake"><div><b>${esc(m.prompt)}</b></div>
          <div>Ваш ответ: <span style="color:var(--bad)">${esc(m.your || "—")}</span></div>
          ${m.right ? `<div>Правильно: <span style="color:var(--good)"><b>${esc(m.right)}</b></span></div>` : ""}</div>`).join("")}</div>` : ""}
      </div></div>`;
    const ra = $("#resActions", root);
    (opts.actions || []).forEach(a => {
      const b = document.createElement("button");
      b.className = `btn ${a.cls || ""}`; b.textContent = a.label; b.onclick = a.onClick; ra.appendChild(b);
    });
  }

  show();
}

function rightText(q) {
  switch (q.t) {
    case "c": case "lc": return q.o[q.a];
    case "i": return q.q.replace("___", q.a[0]).replace(/\s*\(.*?\)\s*$/, "");
    case "o": return q.a + (q.end || "");
    case "tr": return q.a[0];
    case "l": return q.a;
    default: return "";
  }
}
function promptText(q) {
  switch (q.t) {
    case "c": return q.sub ? `${q.q} — ${q.sub}` : q.q;
    case "lc": return `🔊 ${q.say} — ${q.q}`;
    case "i": return q.q + (q.ru ? ` (${q.ru})` : "");
    case "o": case "tr": return q.ru;
    case "l": return "Диктант";
    case "m": return "Соединить пары";
    default: return "";
  }
}

function listenBlock(text) {
  return `<div class="row" style="justify-content:center;margin:6px 0 18px">
    <button class="big-listen" data-say="${esc(text)}" aria-label="Послушать">🔊</button>
    <button class="btn secondary sm" data-say="${esc(text)}" data-rate="0.55">🐢 Медленно</button></div>`;
}

const TYPES = {
  c(q, body, api) {
    const opts = shuffle(q.o.map((t, idx) => ({ t, ok: idx === q.a })));
    body.innerHTML = `
      <div class="row" style="margin-bottom:6px">${q.say ? sayBtn(q.say) : ""}<div class="q-text">${esc(q.q)}</div></div>
      ${q.sub ? `<div class="q-sub">${esc(q.sub)}</div>` : ""}${q.ru ? `<div class="q-sub">${esc(q.ru)}</div>` : ""}
      <div class="options">${opts.map((o, k) => `<button class="opt" data-k="${k}">${esc(o.t)}</button>`).join("")}</div>`;
    if (q.say) setTimeout(() => TTS.speak(q.say), 250);
    $$(".opt", body).forEach(b => b.onclick = () => {
      const o = opts[b.dataset.k];
      $$(".opt", body).forEach((x, k) => { if (opts[k].ok) x.classList.add("right"); });
      if (!o.ok) b.classList.add("wrong");
      const english = q.after || (/[a-z]/i.test(q.q) && q.q.includes("___") ? q.q.replace("___", q.o[q.a].replace(/\.$/, "")) : "");
      api.done(o.ok, o.t, q.o[q.a], english && !q.say ? english : "");
    });
  },
  lc(q, body, api) {
    body.innerHTML = listenBlock(q.say);
    const inner = document.createElement("div");
    body.appendChild(inner);
    TYPES.c({ ...q, say: null, t: "c" }, inner, {
      ...api, done: (ok, your, right) => api.done(ok, your, right, q.say)
    });
    setTimeout(() => TTS.speak(q.say), 300);
  },
  i(q, body, api) {
    const parts = esc(q.q).split("___");
    body.innerHTML = `<div class="q-text">${parts.join('<span style="color:var(--primary)">_____</span>')}</div>
      ${q.ru ? `<div class="q-sub">${esc(q.ru)}</div>` : '<div class="q-sub"></div>'}
      <input class="text-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Ваш ответ">`;
    const inp = $("input", body);
    api.setCheck(() => {
      const v = inp.value.trim(); if (!v) return inp.focus();
      const full = q.q.replace(/\s*\(.*?\)\s*$/, "");
      const ok = isCorrect(v, q.a) || q.a.some(a => norm(full.replace("___", a)) === norm(v));
      inp.classList.add(ok ? "right" : "wrong");
      const sentence = full.replace("___", q.a[0]);
      api.done(ok, v, rightText(q), /[a-z]/i.test(sentence) && !/[=+−]/.test(sentence) ? sentence : "");
    });
  },
  tr(q, body, api) {
    body.innerHTML = `<div class="q-text">${esc(q.ru)}</div><div class="q-sub">Напишите по-английски</div>
      <input class="text-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type in English...">`;
    const inp = $("input", body);
    api.setCheck(() => {
      const v = inp.value.trim(); if (!v) return inp.focus();
      const ok = isCorrect(v, q.a);
      inp.classList.add(ok ? "right" : "wrong");
      api.done(ok, v, q.a[0], q.a[0]);
    });
  },
  l(q, body, api) {
    body.innerHTML = listenBlock(q.a) + `<input class="text-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Напишите услышанное...">`;
    setTimeout(() => TTS.speak(q.a), 300);
    const inp = $("input", body);
    api.setCheck(() => {
      const v = inp.value.trim(); if (!v) return inp.focus();
      const ok = isCorrect(v, [q.a, ...(q.alt || [])]);
      inp.classList.add(ok ? "right" : "wrong");
      api.done(ok, v, q.a);
    });
  },
  o(q, body, api) {
    const tokens = q.a.split(" ");
    let order = shuffle(tokens.map((t, k) => k));
    if (tokens.length > 1 && order.every((v, k) => v === k)) order = order.reverse();
    const picked = [];
    body.innerHTML = `<div class="q-text">${esc(q.ru)}</div><div class="q-sub">Нажимайте на слова по порядку</div>
      <div class="chips answer-line" data-line></div><div class="chips" data-bank>${order.map(k => `<button class="chip" data-k="${k}">${esc(tokens[k])}</button>`).join("")}</div>`;
    const line = $("[data-line]", body), bank = $("[data-bank]", body);
    const redraw = () => {
      line.innerHTML = picked.map((k, pos) => `<button class="chip" data-pos="${pos}">${esc(tokens[k])}</button>`).join("") + (picked.length === tokens.length && q.end ? `<b style="font-size:1.3rem;align-self:center">${esc(q.end)}</b>` : "");
      $$(".chip", bank).forEach(c => c.classList.toggle("used", picked.includes(Number(c.dataset.k))));
      $$(".chip", line).forEach(c => c.onclick = () => { picked.splice(Number(c.dataset.pos), 1); redraw(); });
    };
    $$(".chip", bank).forEach(c => c.onclick = () => { const k = Number(c.dataset.k); if (!picked.includes(k)) { picked.push(k); redraw(); } });
    api.setCheck(() => {
      if (!picked.length) return;
      const v = picked.map(k => tokens[k]).join(" ");
      const ok = norm(v) === norm(q.a);
      api.done(ok, v + (q.end || ""), q.a + (q.end || ""), q.a + (q.end || ""));
    });
  },
  m(q, body, api) {
    const left = shuffle(q.pairs), right = shuffle(q.pairs);
    let selL = null, selR = null, matched = 0, errors = 0;
    body.innerHTML = `<div class="q-sub">Нажмите на слово слева, затем на перевод справа</div>
      <div class="match"><div class="col">${left.map(w => `<button class="opt" data-en="${esc(w.en)}">${esc(w.en)}</button>`).join("")}</div>
      <div class="col">${right.map(w => `<button class="opt" data-ru="${esc(w.en)}">${esc(w.ru)}</button>`).join("")}</div></div>`;
    const tryMatch = () => {
      if (!selL || !selR) return;
      if (selL.dataset.en === selR.dataset.ru) {
        [selL, selR].forEach(b => { b.classList.remove("sel"); b.classList.add("gone"); b.disabled = true; });
        TTS.speak(selL.dataset.en);
        matched++;
        if (matched === q.pairs.length) api.done(errors <= 1, `ошибок: ${errors}`, errors <= 1 ? "" : "Повторите слова урока");
      } else {
        errors++;
        const a = selL, b = selR;
        [a, b].forEach(x => { x.classList.remove("sel"); x.classList.add("wrong"); });
        setTimeout(() => [a, b].forEach(x => x.classList.remove("wrong")), 500);
      }
      selL = selR = null;
    };
    $$("[data-en]", body).forEach(b => b.onclick = () => { $$("[data-en]", body).forEach(x => x.classList.remove("sel")); selL = b; b.classList.add("sel"); TTS.speak(b.dataset.en); tryMatch(); });
    $$("[data-ru]", body).forEach(b => b.onclick = () => { $$("[data-ru]", body).forEach(x => x.classList.remove("sel")); selR = b; b.classList.add("sel"); tryMatch(); });
  }
};
