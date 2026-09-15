/* ===== Главная ===== */
ROUTES[""] = app => {
  const done = lessonsDone();
  const next = nextLesson();
  const due = srsDue().length;
  const lv = LEVELS.map(l => { const total = lessonsOfLevel(l).length, d = levelDone(l); return { l, total, d, pct: Math.round((d / total) * 100) }; });
  const passed = l => S.tests[l] && S.tests[l].pct >= 75;
  const level = lv[1].pct >= 100 || passed("A2") ? "A2" : lv[0].pct >= 100 || passed("A1") ? "A1 → A2" : lv[0].pct >= 50 ? "A0 → A1" : "A0";
  app.innerHTML = `
    <section class="hero">
      <div>
        <h1>Английский с нуля до A2</h1>
        <p>52 урока в двух частях: <b>A0 → A1</b> — основы, и <b>A1 → A2</b> — уверенный базовый уровень. ${ALL_WORDS.length} слов и выражений с озвучкой и транскрипцией, грамматика простым языком, диалоги, тренажёры и итоговые тесты. Занимайтесь 20–30 минут в день.</p>
        <div class="row" style="margin-top:18px">
          ${next ? `<a class="btn lg primary-inv" href="#/lesson/${next.id}">${done ? "Продолжить" : "Начать"}: урок ${next.id} →</a>` : `<a class="btn lg primary-inv" href="#/test/A2">Итоговый тест A2 →</a>`}
          <a class="btn lg secondary" href="#/alphabet">Алфавит и звуки</a>
        </div>
      </div>
      <div class="hero-level">
        <div class="level-track"><span>Ваш уровень: ${level}</span></div>
        ${lv.map(x => `<div class="row small" style="justify-content:space-between;margin-top:12px"><b>Часть ${x.l === "A1" ? 1 : 2}: ${LEVEL_NAMES[x.l]}</b><span>${x.d} / ${x.total}${passed(x.l) ? " · тест ✓" : ""}</span></div>
          <div class="bar" style="margin-top:4px"><span style="width:${x.pct}%"></span></div>`).join("")}
        ${next ? `<p class="small" style="margin:14px 0 0">Следующий: ${next.icon} <b>${esc(next.title)}</b></p>` : ""}
      </div>
    </section>

    <section class="section grid grid-4">
      <div class="card stat"><b>🔥 ${currentStreak()}</b><span>дней подряд</span></div>
      <div class="card stat"><b>⭐ ${S.xp}</b><span>очков опыта</span></div>
      <div class="card stat"><b>📚 ${learnedCount()}</b><span>слов выучено</span></div>
      <div class="card stat"><b>🃏 ${due}</b><span>карточек к повторению</span></div>
    </section>

    ${due ? `<div class="card section row" style="background:var(--accent-soft);border-color:transparent">
      <div style="font-size:2rem">🧠</div><div><b>Пора повторить слова!</b><div class="muted small">${due} карточек ждут повторения — это займёт пару минут.</div></div>
      <div class="spacer"></div><a class="btn accent" href="#/cards">Повторить</a></div>` : ""}

    <section class="section">
      <h2>Как устроен курс</h2>
      <div class="grid grid-3">
        <div class="card"><h3>1. Звуки и буквы</h3><p class="muted">Алфавит, трудные звуки (th, w, короткие и долгие гласные) и правила чтения.</p><a href="#/alphabet">Открыть →</a></div>
        <div class="card"><h3>2. 52 урока</h3><p class="muted">28 уроков до A1 и 24 урока до A2. В каждом: слова с озвучкой, грамматика на русском, диалог и 15–20 упражнений.</p><a href="#/lessons">К урокам →</a></div>
        <div class="card"><h3>3. Повторение</h3><p class="muted">Карточки с интервальным повторением: слова возвращаются, когда вы начинаете их забывать.</p><a href="#/cards">Карточки →</a></div>
        <div class="card"><h3>4. Тренажёры</h3><p class="muted">Числа на слух, диктант, спеллинг и произношение с распознаванием речи.</p><a href="#/trainers">Тренажёры →</a></div>
        <div class="card"><h3>5. Разговорник</h3><p class="muted">Готовые фразы для кафе, магазина, города, отеля и экстренных ситуаций.</p><a href="#/phrases">Разговорник →</a></div>
        <div class="card"><h3>6. Тесты A1 и A2</h3><p class="muted">По 40 вопросов: грамматика, лексика, аудирование и чтение. Покажут, достигнут ли уровень.</p><a href="#/test">К тесту →</a></div>
      </div>
    </section>

    <section class="section grid grid-2">
      <div class="card">
        <h2>План одного занятия</h2>
        <ol class="steps">
          <li><div><b>Слова (5 мин).</b> Прослушайте каждое слово и повторите вслух 2–3 раза.</div></li>
          <li><div><b>Грамматика (7 мин).</b> Прочитайте правило, прослушайте примеры.</div></li>
          <li><div><b>Диалог (5 мин).</b> Послушайте, затем скройте перевод и попробуйте понять.</div></li>
          <li><div><b>Практика (8 мин).</b> Выполните упражнения. Урок засчитывается от 70%.</div></li>
          <li><div><b>Карточки (5 мин).</b> Каждый день повторяйте слова, даже если нет времени на урок.</div></li>
        </ol>
      </div>
      <div class="card">
        <h2>Что вы будете уметь на A1</h2>
        <ul style="padding-left:20px;margin:0">
          <li>Представиться и рассказать о себе, семье, работе</li>
          <li>Понимать простые медленные фразы о знакомых темах</li>
          <li>Называть время, даты, цены, номера телефонов</li>
          <li>Заказать еду, сделать покупку, спросить дорогу</li>
          <li>Рассказать о распорядке дня, хобби и умениях</li>
          <li>Коротко рассказать о прошлом и планах</li>
          <li>Читать короткие простые тексты и заполнять анкеты</li>
        </ul>
        <h2 style="margin-top:20px">А на A2</h2>
        <ul style="padding-left:20px;margin:0">
          <li>Рассказывать истории и о своём опыте (Present Perfect, Past Continuous)</li>
          <li>Сравнивать, давать советы, говорить о правилах и обязанностях</li>
          <li>Обсуждать планы, прогнозы и условия: «если..., то...»</li>
          <li>Справляться в поездке: аэропорт, отель, врач, проблемы</li>
          <li>Говорить по телефону и писать короткие письма</li>
          <li>Понимать главное в разговорах и текстах на знакомые темы</li>
        </ul>
      </div>
    </section>`;
};

/* ===== Список уроков ===== */
function lessonTile(L) {
  const st = lessonState(L.id);
  const badge = st.done ? `<span class="badge good">✓ ${st.best}%</span>` : st.best != null ? `<span class="badge warn">${st.best}%</span>` : `<span class="badge">${L.vocab.length} ${plural(L.vocab.length, "слово", "слова", "слов")}</span>`;
  return `<a class="lesson-tile ${st.done ? "done" : ""}" href="#/lesson/${L.id}">
    <div class="lesson-icon">${st.done ? "✅" : L.icon}</div>
    <div style="flex:1;min-width:0"><div class="s">Урок ${L.id} · ${esc(L.en)}</div><div class="t">${esc(L.title)}</div></div>${badge}</a>`;
}
ROUTES.lessons = (app, lvlParam) => {
  const nl = nextLesson();
  const lvl = LEVELS.includes(lvlParam) ? lvlParam : nl ? levelOf(nl) : "A2";
  const info = {
    A1: "Часть 1: от нуля до A1 — первые фразы, базовая грамматика, повседневные темы.",
    A2: "Часть 2: от A1 до A2 — Present Perfect, Past Continuous, условные предложения, модальные глаголы, пассив, письма."
  };
  const a1Ready = levelDone("A1") === lessonsOfLevel("A1").length || (S.tests.A1 && S.tests.A1.pct >= 75);
  app.innerHTML = `<h1>Уроки</h1>
    <div class="tabs">${LEVELS.map(l => { const d = levelDone(l), t = lessonsOfLevel(l).length; return `<button data-l="${l}" class="${l === lvl ? "active" : ""}">${LEVEL_NAMES[l]} <span class="badge ${d === t ? "good" : ""}">${d}/${t}</span></button>`; }).join("")}</div>
    <p class="muted">${info[lvl]} Проходите по порядку: урок считается пройденным, если в практике набрано 70% и больше.</p>
    ${lvl === "A1" ? `<a class="lesson-tile" href="#/alphabet" style="max-width:520px"><div class="lesson-icon">🔤</div><div style="flex:1"><div class="s">Урок 0 · Alphabet</div><div class="t">Алфавит, звуки и правила чтения</div></div><span class="badge primary">начните здесь</span></a>` :
      a1Ready ? "" : `<div class="note">Эта часть рассчитана на тех, кто уже знает материал A1. Если вы начинаете не с нуля — пройдите <a href="#/test/A1">тест A1</a>: результат от 75% покажет, что можно смело идти дальше.</div>`}
    ${MODULES.filter(M => (M.level || "A1") === lvl).map(M => {
      const ls = LESSONS.filter(l => l.module === M.id);
      const d = ls.filter(l => lessonState(l.id).done).length;
      return `<section class="module"><div class="module-head"><h2>Модуль ${M.id}. ${esc(M.title)}</h2><span class="muted">${esc(M.desc)}</span><span class="badge ${d === ls.length ? "good" : ""}">${d}/${ls.length}</span></div>
        <div class="grid grid-2">${ls.map(lessonTile).join("")}</div></section>`;
    }).join("")}
    <div class="card section row"><div style="font-size:2rem">🎓</div><div><b>Итоговый тест ${lvl}</b><div class="muted small">40 вопросов по всей части. ${S.tests[lvl] ? `Лучший результат: ${S.tests[lvl].pct}%` : "Ещё не пройден."}</div></div><div class="spacer"></div><a class="btn" href="#/test/${lvl}">Пройти тест</a></div>`;
  $$(".tabs button", app).forEach(b => b.onclick = () => { location.hash = `#/lessons/${b.dataset.l}`; });
};

/* ===== Страница урока ===== */
ROUTES.lesson = (app, id, tab) => {
  const L = lessonById(id);
  if (!L) { location.hash = "#/lessons"; return; }
  const M = MODULES.find(m => m.id === L.module);
  const st = lessonState(L.id);
  const words = L.vocab.map(v => parseWord(v, L.id));
  const prev = lessonById(L.id - 1), next = lessonById(L.id + 1);
  const lvl = levelOf(L), lastOfLevel = !next || levelOf(next) !== lvl;
  const tabs = [["words", "📖 Слова"], ["grammar", "🧠 Грамматика"], ["dialog", "💬 Диалог"], ["practice", "✍️ Практика"]];
  let current = tabs.some(t => t[0] === tab) ? tab : "words";

  app.innerHTML = `
    <div class="crumbs"><a href="#/lessons/${lvl}">Уроки ${LEVEL_NAMES[lvl]}</a> › Модуль ${M.id}. ${esc(M.title)}</div>
    <div class="lesson-header">
      <div class="lesson-icon">${L.icon}</div>
      <div><div class="muted small">Урок ${L.id} из ${LESSONS.length} · ${esc(L.en)}</div><h1 style="margin:0">${esc(L.title)}</h1>
      ${st.best != null ? `<span class="badge ${st.done ? "good" : "warn"}">Лучший результат: ${st.best}%</span>` : ""}</div>
    </div>
    <div class="goal"><b>🎯 Цель урока:</b> ${esc(L.goal)}</div>
    <div class="tabs" role="tablist">${tabs.map(([k, t]) => `<button data-tab="${k}">${t}</button>`).join("")}</div>
    <div id="tabBody"></div>
    <div class="row section" style="justify-content:space-between">
      ${prev ? `<a class="btn secondary" href="#/lesson/${prev.id}">← Урок ${prev.id}</a>` : `<a class="btn secondary" href="#/alphabet">← Алфавит</a>`}
      <span class="row">${lastOfLevel ? `<a class="btn" href="#/test/${lvl}">Итоговый тест ${lvl} →</a>` : ""}${next ? `<a class="btn secondary" href="#/lesson/${next.id}">Урок ${next.id} →</a>` : ""}</span>
    </div>`;

  const body = $("#tabBody");
  const renderTab = () => {
    TTS.stop();
    document.onkeydown = null;
    $$(".tabs button", app).forEach(b => b.classList.toggle("active", b.dataset.tab === current));
    history.replaceState(null, "", `#/lesson/${L.id}/${current}`);
    body.classList.remove("fade-in"); void body.offsetWidth; body.classList.add("fade-in");

    if (current === "words") {
      const inDeck = words.filter(w => S.cards[w.en]).length;
      body.innerHTML = `
        <div class="row" style="margin-bottom:14px">
          <p class="muted" style="margin:0">Нажмите 🔊, послушайте и повторите вслух. 🐢 — медленно.</p><div class="spacer"></div>
          <button class="btn secondary sm" id="playAll">▶ Прослушать все</button>
          <button class="btn sm" id="toDeck">${inDeck === words.length ? "✓ Все слова в карточках" : "🃏 Добавить в карточки"}</button>
        </div>
        <div class="word-grid">${words.map(w => `
          <div class="word">${sayBtn(w.en)}<div style="flex:1;min-width:0"><div class="en">${esc(w.en)}</div>
          <div class="ipa small">[${esc(w.ipa)}]</div><div class="ru">${esc(w.ru)}</div></div>
          <button class="say slow" data-say="${esc(w.en)}" data-rate="0.55" title="Медленно">🐢</button></div>`).join("")}</div>
        <div class="row" style="margin-top:20px;justify-content:center"><button class="btn" data-go="grammar">Дальше: грамматика →</button></div>`;
      $("#toDeck").onclick = () => { const n = srsAdd(words.map(w => w.en)); toast(n ? `Добавлено карточек: ${n}` : "Все слова уже в карточках"); $("#toDeck").textContent = "✓ Все слова в карточках"; };
      let playing = false;
      $("#playAll").onclick = () => {
        if (playing) { playing = false; TTS.stop(); $("#playAll").textContent = "▶ Прослушать все"; return; }
        playing = true; $("#playAll").textContent = "■ Стоп";
        const cards = $$(".word", body);
        const step = k => {
          cards.forEach(c => c.style.borderColor = "");
          if (!playing || k >= words.length) { playing = false; const b = $("#playAll"); if (b) b.textContent = "▶ Прослушать все"; return; }
          cards[k].style.borderColor = "var(--primary)";
          cards[k].scrollIntoView({ block: "nearest", behavior: "smooth" });
          TTS.speak(words[k].en, { onend: () => setTimeout(() => step(k + 1), 700) });
        };
        step(0);
      };
    } else if (current === "grammar") {
      body.innerHTML = `<div class="theory">${L.theory}</div>
        <div class="row" style="margin-top:20px;justify-content:center"><button class="btn" data-go="dialog">Дальше: диалог →</button></div>`;
      enhanceExamples(body);
    } else if (current === "dialog") {
      const lines = L.dialog.map(d => d.split("|"));
      body.innerHTML = `
        <div class="row" style="margin-bottom:14px">
          <button class="btn sm" id="playDialog">▶ Прослушать диалог</button>
          <button class="btn secondary sm" id="toggleRu">🙈 Скрыть перевод</button>
        </div>
        <div class="dialog" id="dialog">${lines.map(([who, en, ru]) => `
          <div class="bubble ${who === "B" ? "b" : ""}"><div class="who">${who}</div>
          <div class="txt"><div class="row" style="gap:8px;flex-wrap:nowrap;align-items:flex-start">${sayBtn(en)}<div><div><b>${esc(en)}</b></div><div class="ru">${esc(ru)}</div></div></div></div></div>`).join("")}</div>
        <div class="tip section">Совет: прослушайте диалог 2–3 раза. Затем скройте перевод и попробуйте понять всё на слух. Потом прочитайте реплики вслух за A и за B.</div>
        <div class="row" style="margin-top:20px;justify-content:center"><button class="btn" data-go="practice">Дальше: практика →</button></div>`;
      $("#toggleRu").onclick = () => { const d = $("#dialog"); d.classList.toggle("hide-ru"); $("#toggleRu").textContent = d.classList.contains("hide-ru") ? "👁 Показать перевод" : "🙈 Скрыть перевод"; };
      let playing = false;
      $("#playDialog").onclick = () => {
        if (playing) { playing = false; TTS.stop(); $("#playDialog").textContent = "▶ Прослушать диалог"; return; }
        playing = true; $("#playDialog").textContent = "■ Стоп";
        const bubbles = $$(".bubble", body);
        const step = k => {
          bubbles.forEach(b => b.classList.remove("playing"));
          if (!playing || k >= lines.length) { playing = false; const b = $("#playDialog"); if (b) b.textContent = "▶ Прослушать диалог"; return; }
          bubbles[k].classList.add("playing");
          TTS.speak(lines[k][1], { onend: () => setTimeout(() => step(k + 1), 600) });
        };
        step(0);
      };
    } else {
      const qs = buildLessonQuiz(L);
      body.innerHTML = `<div class="card" style="max-width:720px;margin:0 auto;text-align:center">
        <div style="font-size:3rem">✍️</div><h2>Практика</h2>
        <p class="muted">${qs.length} заданий: слова, аудирование, грамматика, перевод и диктант.<br>Урок засчитывается при результате <b>от 70%</b>. <span class="kbd">Enter</span> — проверить / дальше.</p>
        <button class="btn lg" id="startQuiz">Начать</button></div>`;
      $("#startQuiz").onclick = () => startPractice();
    }
    $$("[data-go]", body).forEach(b => b.onclick = () => { current = b.dataset.go; renderTab(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  };

  const startPractice = () => {
    runQuiz(body, buildLessonQuiz(L), {
      onExit: () => renderTab(),
      onFinish: r => {
        const old = S.lessons[L.id] || {};
        const passed = r.pct >= 70;
        const firstPass = passed && !old.done;
        S.lessons[L.id] = { best: Math.max(old.best || 0, r.pct), done: old.done || passed, at: Date.now() };
        const xp = r.correct * 5 + (firstPass ? 50 : 0);
        addXP(xp);
        if (passed) srsAdd(words.map(w => w.en));
        save();
        return `<p><span class="badge primary">+${xp} XP</span> ${firstPass ? '<span class="badge good">Урок пройден! +50 XP бонус</span>' : ""}</p>
          ${passed ? `<p class="muted small">Слова урока добавлены в карточки для повторения.</p>` : `<p class="muted small">Нужно 70%, чтобы засчитать урок. Перечитайте грамматику и попробуйте снова.</p>`}`;
      },
      actions: [
        { label: "Пройти ещё раз", cls: "secondary", onClick: () => startPractice() },
        ...(lastOfLevel ? [{ label: `Итоговый тест ${lvl} →`, onClick: () => { location.hash = `#/test/${lvl}`; } }] : [{ label: `Урок ${next.id} →`, onClick: () => { location.hash = `#/lesson/${next.id}`; } }])
      ]
    });
  };

  $$(".tabs button", app).forEach(b => b.onclick = () => { current = b.dataset.tab; renderTab(); });
  if (!S.lessons[L.id]) { S.lessons[L.id] = { opened: true }; save(); }
  renderTab();
};

/* ===== Алфавит, звуки, чтение ===== */
ROUTES.alphabet = app => {
  app.innerHTML = `
    <h1>🔤 Алфавит, звуки и правила чтения</h1>
    <p class="muted">В английском 26 букв, но около 44 звуков. Поэтому одна буква может читаться по-разному — выучите название букв (нужно для спеллинга имён и адресов), трудные звуки и базовые правила чтения.</p>
    <div class="tabs"><button data-t="letters" class="active">Алфавит</button><button data-t="sounds">Трудные звуки</button><button data-t="rules">Правила чтения</button><button data-t="spell">Спеллинг</button></div>
    <div id="alphaBody"></div>`;
  const body = $("#alphaBody");
  const show = t => {
    $$(".tabs button", app).forEach(b => b.classList.toggle("active", b.dataset.t === t));
    TTS.stop();
    if (t === "letters") {
      body.innerHTML = `<div class="row" style="margin-bottom:14px"><p class="muted" style="margin:0">Нажмите на букву: прозвучит её название и слово-пример.</p><div class="spacer"></div><button class="btn sm secondary" id="abcSong">▶ Весь алфавит</button></div>
        <div class="letters">${ALPHABET.map(([L, ipa, ru, ex]) => { const [w, tr] = ex.split("|"); return `
          <div class="letter" data-l="${L}" data-w="${esc(w)}"><div class="L">${L}<small>${L.toLowerCase()}</small></div>
          <div class="ipa n">[${ipa}]</div><div class="n">${esc(ru)}</div><div class="w">${esc(w)}</div><div class="muted small">${esc(tr)}</div></div>`; }).join("")}</div>`;
      $$(".letter", body).forEach(el => el.onclick = () => TTS.speak(`${el.dataset.l}. ${el.dataset.w}`, { rate: 0.8 }));
      $("#abcSong").onclick = () => TTS.speak(ALPHABET.map(a => a[0]).join(", "), { rate: 0.8 });
      body.insertAdjacentHTML("beforeend", `<div class="note section">Буквы, которые часто путают: <b>E</b> [iː] и <b>I</b> [aɪ]; <b>G</b> [dʒiː] и <b>J</b> [dʒeɪ]; <b>A</b> [eɪ] и <b>R</b> [ɑː]. Попрактикуйтесь во вкладке «Спеллинг».</div>`);
    } else if (t === "sounds") {
      body.innerHTML = `<div class="grid grid-2">${SOUNDS.map(s => `
        <div class="card"><div class="row"><span class="badge primary" style="font-size:1.1rem">[${esc(s.s)}]</span><h3 style="margin:0">${esc(s.title)}</h3></div>
        <p style="margin-top:10px">${esc(s.how)}</p>
        <div class="row">${s.words.map(w => `<button class="btn secondary sm" data-say="${esc(w)}">🔊 ${esc(w)}</button>`).join("")}</div></div>`).join("")}</div>
        <div class="tip section">Произносите звуки вслух перед зеркалом. Для th проверьте, что кончик языка виден между зубами.</div>`;
    } else if (t === "rules") {
      body.innerHTML = `
        <div class="theory">
        <h3>Открытый и закрытый слог</h3>
        <p>Гласная читается <b>как в алфавите</b> (открытый слог), если после неё стоит немая <b>e</b> или другая гласная: n<b>a</b>m<i>e</i>, b<b>i</b>k<i>e</i>. Если слово заканчивается на согласную — гласная <b>краткая</b> (закрытый слог): c<b>a</b>t, s<b>i</b>t. С буквой <b>r</b> — третий вариант.</p>
        <div class="table-wrap"><table class="data-table"><tr><th>Буква</th><th>Открытый слог</th><th>Закрытый слог</th><th>Гласная + r</th></tr>
        ${READING.vowels.map(r => `<tr><td><b>${r[0]}</b></td>${r.slice(1).map(c => { const w = c.split(/[ ,[]/)[0]; return `<td>${sayBtn(w)} ${esc(c)}</td>`; }).join("")}</tr>`).join("")}</table></div>
        <div class="note">Немая <b>e</b> на конце слова не читается, но «открывает» слог: hat [hæt] — hate [heɪt], kit [kɪt] — kite [kaɪt].</div>
        <h3>Буквосочетания</h3>
        <div class="table-wrap"><table class="data-table"><tr><th>Сочетание</th><th>Звук</th><th>Примеры</th></tr>
        ${READING.combos.map(([c, s, ex]) => `<tr><td><b>${esc(c)}</b></td><td class="ipa">[${esc(s)}]</td><td>${ex.split(/,\s*|\s\/\s/).map(w => `<button class="btn secondary sm" style="margin:2px" data-say="${esc(w.trim())}">${esc(w.trim())}</button>`).join("")}</td></tr>`).join("")}</table></div>
        <div class="tip">Правила работают примерно в 70–80% случаев. Поэтому всегда слушайте произношение новых слов и смотрите транскрипцию.</div>
        </div>`;
    } else {
      spellTrainer(body);
    }
  };
  $$(".tabs button", app).forEach(b => b.onclick = () => show(b.dataset.t));
  show("letters");
};

function spellTrainer(body) {
  const pool = ALL_WORDS.filter(w => /^[a-z]{3,7}$/.test(w.en));
  const qs = shuffle(pool).slice(0, 8).map(w => ({ t: "l", a: w.en, spell: true }));
  body.innerHTML = `<div class="card" style="max-width:720px;margin:0 auto;text-align:center">
    <div style="font-size:3rem">🔡</div><h2>Спеллинг на слух</h2>
    <p class="muted">Слово будет продиктовано по буквам (как англичане диктуют имена и email). Напишите слово целиком.</p>
    <button class="btn lg" id="spellGo">Начать</button></div>`;
  $("#spellGo").onclick = () => {
    // диктуем по буквам, принимаем и слово целиком, и буквы через пробел
    const spelled = qs.map(q => ({ t: "l", a: q.a.split("").join(", ").toUpperCase(), alt: [q.a] }));
    runQuiz(body, spelled, {
      onExit: () => ROUTES.alphabet($("#app")),
      onFinish: r => { addXP(r.correct * 3); return `<p><span class="badge primary">+${r.correct * 3} XP</span></p>`; },
      actions: [{ label: "Ещё раз", onClick: () => spellTrainer(body) }]
    });
  };
}
