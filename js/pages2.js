/* ===== Карточки ===== */
ROUTES.cards = app => {
  const deckSize = Object.keys(S.cards).length;
  const due = srsDue();
  const boxes = [0, 0, 0, 0, 0, 0];
  Object.values(S.cards).forEach(c => boxes[c.box]++);
  app.innerHTML = `
    <h1>🃏 Карточки</h1>
    <p class="muted">Интервальное повторение: слово, которое вы помните, вернётся через 1, 3, 7, 14 и 30 дней. Забытое — сразу же. Так слова переходят в долговременную память.</p>
    <div class="grid grid-4">
      <div class="card stat"><b>${deckSize}</b><span>слов в колоде</span></div>
      <div class="card stat"><b>${due.length}</b><span>к повторению сегодня</span></div>
      <div class="card stat"><b>${learnedCount()}</b><span>выучено (уровень 3+)</span></div>
      <div class="card stat"><b>${boxes[0] + boxes[1] + boxes[2]}</b><span>в процессе</span></div>
    </div>
    <div class="grid grid-2 section">
      <div class="card">
        <h2>Повторение по расписанию</h2>
        ${deckSize ? `<p>${due.length ? `Сегодня нужно повторить <b>${due.length}</b> слов.` : "На сегодня всё повторено! 🎉 Возвращайтесь завтра."}</p>` :
          `<p>Колода пуста. Слова добавляются автоматически, когда вы проходите урок, или кнопкой «Добавить в карточки» во вкладке «Слова».</p>`}
        <div class="row">
          <button class="btn" id="srsGo" ${due.length ? "" : "disabled"}>Начать повторение</button>
          <label class="row small" style="gap:6px"><select class="text-input" id="dir"><option value="en">EN → RU</option><option value="ru">RU → EN</option><option value="audio">🔊 На слух</option></select></label>
        </div>
      </div>
      <div class="card">
        <h2>Учить слова урока</h2>
        <p class="muted">Свободная тренировка любого урока (не влияет на расписание).</p>
        <div class="row">
          <select class="text-input" id="lessonPick">${LESSONS.map(l => `<option value="${l.id}">${l.id}. ${esc(l.title)}</option>`).join("")}</select>
          <button class="btn secondary" id="freeGo">Учить</button>
        </div>
        <button class="btn secondary sm" id="addAll" style="margin-top:12px">Добавить все слова курса в колоду</button>
      </div>
    </div>`;
  const nl = nextLesson(); if (nl) $("#lessonPick").value = Math.max(1, nl.id - 1) || 1;
  $("#srsGo").onclick = () => flashSession(app, shuffle(due).slice(0, 30), $("#dir").value, true);
  $("#freeGo").onclick = () => {
    const L = lessonById($("#lessonPick").value);
    flashSession(app, shuffle(L.vocab.map(v => parseWord(v).en)), $("#dir").value, false);
  };
  $("#addAll").onclick = () => { const n = srsAdd(ALL_WORDS.map(w => w.en)); toast(`Добавлено: ${n}`); ROUTES.cards(app); };
};

function flashSession(app, list, dir, srs) {
  let queue = list.slice(), done = 0, remembered = 0;
  const total = list.length;
  const draw = () => {
    if (!queue.length) {
      addXP(remembered * 2);
      app.innerHTML = `<div class="flash-wrap"><div class="card result" style="text-align:center">
        <div style="font-size:3rem">🎉</div><h2>Готово!</h2><p>Повторено слов: <b>${total}</b></p>
        <p><span class="badge primary">+${remembered * 2} XP</span></p>
        <a class="btn" href="#/cards" onclick="setTimeout(route,0)">К карточкам</a></div></div>`;
      return;
    }
    const w = WORD_MAP.get(queue[0]);
    const front = dir === "ru" ? `<div class="big">${esc(w.ru)}</div>` : dir === "audio" ? `<div style="font-size:4rem">🔊</div><div class="muted">Что это за слово?</div>` : `<div class="big">${esc(w.en)}</div><div class="ipa">[${esc(w.ipa)}]</div>`;
    const back = `<div class="big">${esc(w.en)}</div><div class="ipa">[${esc(w.ipa)}]</div><div style="font-size:1.25rem;font-weight:700">${esc(w.ru)}</div><div class="muted small">Урок ${w.lesson}</div>`;
    app.innerHTML = `<div class="flash-wrap">
      <div class="quiz-top"><a class="icon-btn" href="#/cards" onclick="setTimeout(route,0)" title="Выйти">✕</a><div class="bar"><span style="width:${(done / total) * 100}%"></span></div><b class="small">${done}/${total}</b></div>
      <div class="flash" id="flash"><div class="flash-inner">
        <div class="flash-face">${front}<div class="muted small" style="margin-top:10px">Нажмите, чтобы перевернуть · <span class="kbd">Пробел</span></div></div>
        <div class="flash-face back">${back}</div>
      </div></div>
      <div class="row" style="justify-content:center;margin-bottom:12px">${sayBtn(w.en, true)}</div>
      <div id="gradeBox"><button class="btn lg" style="width:100%" id="flip">Показать ответ</button></div>
    </div>`;
    const flash = $("#flash");
    if (dir !== "ru") setTimeout(() => TTS.speak(w.en), 200);
    const flip = () => {
      if (flash.classList.contains("flipped")) return;
      flash.classList.add("flipped");
      if (dir === "ru") TTS.speak(w.en);
      $("#gradeBox").innerHTML = `<div class="srs-btns">
        <button class="btn bad" data-g="0">Не помню<br><small>1</small></button>
        <button class="btn warn" data-g="1">Трудно<br><small>2</small></button>
        <button class="btn good" data-g="2">Помню<br><small>3</small></button></div>`;
      $$("[data-g]").forEach(b => b.onclick = () => grade(Number(b.dataset.g)));
    };
    const grade = g => {
      const en = queue.shift();
      if (srs) srsGrade(en, g);
      if (g === 0) queue.splice(Math.min(queue.length, 3), 0, en);
      else { done++; if (g === 2) remembered++; }
      draw();
    };
    flash.onclick = flip;
    $("#flip").onclick = flip;
    document.onkeydown = e => {
      if (e.code === "Space") { e.preventDefault(); flip(); }
      if (flash.classList.contains("flipped") && ["1", "2", "3"].includes(e.key)) grade(Number(e.key) - 1);
    };
  };
  draw();
}

/* ===== Тренажёры ===== */
ROUTES.trainers = (app, which) => {
  const list = [
    ["numbers", "🔢", "Числа на слух", "Услышьте число и напишите его цифрами. Тренирует -teen / -ty."],
    ["time", "⏰", "Время на слух", "Услышьте время и выберите правильный вариант на часах."],
    ["dictation", "📝", "Диктант фраз", "Послушайте фразу из диалогов и разговорника и запишите её."],
    ["speak", "🎤", "Произношение", "Прочитайте фразу вслух — браузер распознает речь и оценит."],
    ["irregular", "⚡", "Неправильные глаголы", "Вспомните форму прошедшего времени."],
    ["mix", "🎲", "Микс по пройденному", "Случайные задания из пройденных уроков."]
  ];
  const run = (qs, label) => runQuiz(app, qs, {
    onExit: () => { location.hash = "#/trainers"; route(); },
    onFinish: r => { addXP(r.correct * 3); return `<p><span class="badge primary">+${r.correct * 3} XP</span></p>`; },
    actions: [{ label: "Ещё раз", onClick: () => ROUTES.trainers(app, which) }, { label: "Все тренажёры", cls: "secondary", onClick: () => { location.hash = "#/trainers"; route(); } }]
  });

  if (which === "numbers") {
    // 13–19, круглые десятки и случайные — чтобы тренировать -teen / -ty
    const pick = () => { const r = Math.random(); return r < .35 ? 13 + Math.floor(Math.random() * 7) : r < .65 ? (2 + Math.floor(Math.random() * 8)) * 10 : Math.floor(Math.random() * 100); };
    const nums = Array.from({ length: 10 }, pick);
    return run(nums.map(n => ({ t: "l", a: String(n) })), "numbers");
  }
  if (which === "time") {
    const words = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"];
    const say = (h, m) => m === 0 ? `${words[h % 12]} o'clock` : m === 15 ? `a quarter past ${words[h % 12]}` : m === 30 ? `half past ${words[h % 12]}` : m === 45 ? `a quarter to ${words[(h + 1) % 12]}` : m < 30 ? `${m === 5 ? "five" : m === 10 ? "ten" : m === 20 ? "twenty" : "twenty-five"} past ${words[h % 12]}` : `${m === 55 ? "five" : m === 50 ? "ten" : m === 40 ? "twenty" : "twenty-five"} to ${words[(h + 1) % 12]}`;
    const fmt = (h, m) => `${h === 0 ? 12 : h}:${String(m).padStart(2, "0")}`;
    const qs = Array.from({ length: 10 }, () => {
      const h = 1 + Math.floor(Math.random() * 11), m = [0, 15, 30, 45, 10, 20, 40, 50][Math.floor(Math.random() * 8)];
      const right = fmt(h, m);
      const wrongs = new Set();
      [[h, (m + 30) % 60], [h === 11 ? 1 : h + 1, m], [h === 1 ? 11 : h - 1, m], [h, (60 - m) % 60]].forEach(([a, b]) => { const f = fmt(a, b); if (f !== right) wrongs.add(f); });
      return { t: "lc", say: `It's ${say(h, m)}.`, q: "Который час?", o: [right, ...Array.from(wrongs).slice(0, 3)], a: 0 };
    });
    return run(qs, "time");
  }
  if (which === "dictation") {
    const pool = [...LESSONS.flatMap(l => l.dialog.map(d => d.split("|")[1])), ...PHRASEBOOK.flatMap(c => c.items.map(i => i.split("|")[0]))]
      .filter(s => s.split(" ").length <= 8 && !s.includes("..."));
    return run(shuffle(pool).slice(0, 8).map(a => ({ t: "l", a: a.replace(/[.!?]+$/, "") })), "dictation");
  }
  if (which === "irregular") {
    const L = lessonById(26);
    const qs = shuffle(L.vocab.map(v => parseWord(v))).slice(0, 12).map(w => {
      const [base, past] = w.en.split(" — ");
      return { t: "i", q: `${base} → ___`, a: [past], ru: w.ru };
    });
    return run(qs, "irregular");
  }
  if (which === "mix") {
    const opened = LESSONS.filter(l => S.lessons[l.id]);
    const src = opened.length ? opened : LESSONS.slice(0, 3);
    const qs = shuffle(src.flatMap(l => l.ex)).slice(0, 15);
    return run(qs, "mix");
  }
  if (which === "speak") return speakTrainer(app);

  app.innerHTML = `<h1>🎯 Тренажёры</h1><p class="muted">Короткие упражнения на 3–5 минут для ежедневной практики навыков.</p>
    <div class="grid grid-3">${list.map(([k, i, t, d]) => `<a class="card lesson-tile" style="display:block" href="#/trainers/${k}">
      <div style="font-size:2.2rem">${i}</div><h3 style="margin-top:8px">${t}</h3><p class="muted" style="margin:0">${d}</p></a>`).join("")}</div>`;
};

function speakTrainer(app) {
  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  const pool = shuffle([...LESSONS.flatMap(l => l.dialog.map(d => d.split("|"))).map(([, en, ru]) => [en, ru]),
    ...PHRASEBOOK.flatMap(c => c.items.map(i => i.split("|")))].filter(([en]) => en.split(" ").length <= 7 && !en.includes("...")));
  let k = 0, rec = null;
  window.stopRecognition = () => { try { rec && rec.abort(); } catch (e) { /* уже остановлено */ } };
  const draw = () => {
    const [en, ru] = pool[k % pool.length];
    app.innerHTML = `<div class="quiz"><div class="crumbs"><a href="#/trainers">Тренажёры</a> › Произношение</div>
      <div class="q-card" style="text-align:center">
        <div class="q-type">Прочитайте вслух</div>
        <div class="q-text" style="font-size:1.6rem">${esc(en)}</div>
        <div class="q-sub">${esc(ru)}</div>
        <div class="row" style="justify-content:center">${sayBtn(en, true)}</div>
        ${Rec ? `<div style="margin:22px 0"><button class="big-listen" id="mic" aria-label="Говорить">🎤</button><div class="muted small" id="micHint" style="margin-top:8px">Нажмите и произнесите фразу</div></div>` :
          `<div class="note" style="text-align:left">Ваш браузер не поддерживает распознавание речи. Откройте сайт в Google Chrome или Microsoft Edge. А пока: послушайте фразу и повторите её вслух 3 раза.</div>`}
        <div class="feedback" id="speakFb"></div>
        <div class="quiz-actions" style="justify-content:center"><button class="btn secondary" id="nextPhrase">Следующая фраза →</button></div>
      </div></div>`;
    $("#nextPhrase").onclick = () => { k++; draw(); };
    if (!Rec) return;
    $("#mic").onclick = () => {
      window.stopRecognition();
      rec = new Rec(); rec.lang = "en-US"; rec.interimResults = false; rec.maxAlternatives = 3;
      const mic = $("#mic"); mic.classList.add("mic-on"); $("#micHint").textContent = "Говорите...";
      rec.onresult = e => {
        const alts = Array.from(e.results[0]).map(a => a.transcript);
        const target = norm(en).split(" ");
        const best = alts.map(a => { const said = norm(a).split(" "); const hit = target.filter(w => said.includes(w)).length; return { a, score: hit / target.length }; }).sort((x, y) => y.score - x.score)[0];
        const pct = Math.round(best.score * 100);
        const fb = $("#speakFb");
        fb.className = `feedback show ${pct >= 80 ? "right" : "wrong"}`;
        fb.innerHTML = `${pct >= 80 ? "✅ Отлично произнесено!" : pct >= 50 ? "🙂 Почти! Попробуйте ещё раз." : "🔁 Послушайте образец и повторите."} (${pct}%)
          <div class="fb-detail">Распознано: «${esc(best.a)}»</div>
          <div class="fb-detail">${target.map(w => `<span style="color:${norm(best.a).split(" ").includes(w) ? "var(--good)" : "var(--bad)"};font-weight:800">${esc(w)}</span>`).join(" ")}</div>`;
        if (pct >= 80) addXP(3);
      };
      rec.onerror = e => { $("#micHint").textContent = e.error === "not-allowed" ? "Разрешите доступ к микрофону в браузере" : "Не удалось распознать, попробуйте ещё раз"; };
      rec.onend = () => { const m = $("#mic"); if (m) m.classList.remove("mic-on"); const h = $("#micHint"); if (h && h.textContent === "Говорите...") h.textContent = "Нажмите и произнесите фразу"; };
      rec.start();
    };
  };
  draw();
}

/* ===== Разговорник ===== */
ROUTES.phrases = app => {
  app.innerHTML = `<h1>💬 Разговорник</h1><p class="muted">Готовые фразы для реальных ситуаций. Нажмите 🔊, чтобы послушать.</p>
    <input class="text-input search" id="phSearch" placeholder="Поиск по фразам...">
    <div class="grid grid-2 section" id="phList"></div>`;
  const draw = f => {
    const q = f.trim().toLowerCase();
    $("#phList").innerHTML = PHRASEBOOK.map(c => {
      const items = c.items.map(i => i.split("|")).filter(([en, ru]) => !q || en.toLowerCase().includes(q) || ru.toLowerCase().includes(q));
      if (!items.length) return "";
      return `<div class="card"><h3>${c.icon} ${esc(c.cat)}</h3>${items.map(([en, ru]) => `
        <div class="phrase">${sayBtn(en.replace(/\.\.\./g, ""))}<div><div class="en">${esc(en)}</div><div class="ru">${esc(ru)}</div></div></div>`).join("")}</div>`;
    }).join("") || `<div class="empty">Ничего не найдено</div>`;
  };
  $("#phSearch").oninput = e => draw(e.target.value);
  draw("");
};

/* ===== Словарь ===== */
ROUTES.dictionary = app => {
  app.innerHTML = `<h1>📚 Словарь курса</h1><p class="muted">Все ${ALL_WORDS.length} слов и выражений курса. Статус показывает, как хорошо вы знаете слово по карточкам.</p>
    <div class="row"><input class="text-input search" id="dSearch" placeholder="Поиск: английский или русский...">
    <select class="text-input" id="dLesson"><option value="">Все уроки</option>${LESSONS.map(l => `<option value="${l.id}">${l.id}. ${esc(l.title)}</option>`).join("")}</select></div>
    <div class="card section" style="padding:8px 16px"><div class="table-wrap"><table class="data-table" style="border:none"><thead><tr><th></th><th>English</th><th>Транскрипция</th><th>Перевод</th><th>Урок</th><th>Статус</th></tr></thead><tbody id="dBody"></tbody></table></div></div>`;
  const draw = () => {
    const q = $("#dSearch").value.trim().toLowerCase(), l = $("#dLesson").value;
    const rows = ALL_WORDS.filter(w => (!l || w.lesson === Number(l)) && (!q || w.en.toLowerCase().includes(q) || w.ru.toLowerCase().includes(q)));
    $("#dBody").innerHTML = rows.map(w => {
      const c = S.cards[w.en];
      const st = !c ? `<span class="badge">новое</span>` : c.box >= 3 ? `<span class="badge good">выучено</span>` : `<span class="badge warn">учу</span>`;
      return `<tr><td>${sayBtn(w.en)}</td><td><b>${esc(w.en)}</b></td><td class="ipa">[${esc(w.ipa)}]</td><td>${esc(w.ru)}</td><td><a href="#/lesson/${w.lesson}">${w.lesson}</a></td><td>${st}</td></tr>`;
    }).join("") || `<tr><td colspan="6" class="empty">Ничего не найдено</td></tr>`;
  };
  $("#dSearch").oninput = draw; $("#dLesson").onchange = draw;
  draw();
};

/* ===== Итоговый тест ===== */
ROUTES.test = app => {
  const best = S.test;
  app.innerHTML = `<div class="quiz"><div class="q-card" style="text-align:center">
    <div style="font-size:3.5rem">🎓</div><h1>Итоговый тест A1</h1>
    <p class="muted">${FINAL_TEST.length} вопросов: грамматика, лексика, аудирование (нужен звук 🔊) и чтение. Займёт около 20 минут. Результат от <b>75%</b> означает, что уровень A1 достигнут.</p>
    ${best ? `<p>Ваш лучший результат: <span class="badge ${best.pct >= 75 ? "good" : "warn"}">${best.pct}%</span></p>` : ""}
    ${lessonsDone() < LESSONS.length ? `<div class="note" style="text-align:left">Вы прошли ${lessonsDone()} из ${LESSONS.length} уроков. Тест можно пройти и сейчас — он покажет, над чем поработать.</div>` : ""}
    <button class="btn lg" id="testGo">Начать тест</button></div></div>`;
  $("#testGo").onclick = () => {
    const readingText = FINAL_TEST.find(q => q.cat === "reading" && !q.sameText).text;
    const qs = FINAL_TEST.map(q => q.sameText ? { ...q, text: readingText } : q);
    const order = [...qs.filter(q => q.cat === "grammar" || q.cat === "vocab"), ...qs.filter(q => q.cat === "listening"), ...qs.filter(q => q.cat === "reading")];
    runQuiz(app, order, {
      onExit: () => ROUTES.test(app),
      onFinish: r => {
        const byCat = {};
        order.forEach(q => { byCat[q.cat] = byCat[q.cat] || { t: 0, ok: 0 }; byCat[q.cat].t++; });
        const wrongPrompts = new Set(r.mistakes.map(m => m.prompt));
        order.forEach(q => { if (!wrongPrompts.has(promptText(q))) byCat[q.cat].ok++; });
        if (!S.test || r.pct > S.test.pct) S.test = { pct: r.pct, at: Date.now() };
        addXP(r.correct * 5); save();
        return `<p style="font-size:1.15rem">${r.pct >= 75 ? "🎉 <b>Поздравляем! Ваш уровень — A1.</b> Можно переходить к программе A2." : "Уровень A1 пока не достигнут. Повторите слабые темы и попробуйте снова."}</p>
          <div class="grid grid-2" style="text-align:left;margin-top:12px">${Object.entries(byCat).map(([c, v]) => { const p = Math.round(v.ok / v.t * 100); return `
            <div class="card flat"><div class="row"><b>${TEST_CATS[c]}</b><div class="spacer"></div><span>${v.ok}/${v.t}</span></div>
            <div class="bar" style="margin-top:8px"><span style="width:${p}%;background:${p >= 75 ? "var(--good)" : p >= 50 ? "var(--warn)" : "var(--bad)"}"></span></div></div>`; }).join("")}</div>`;
      },
      actions: [{ label: "Пройти заново", cls: "secondary", onClick: () => ROUTES.test(app) }, { label: "К урокам", onClick: () => { location.hash = "#/lessons"; } }]
    });
  };
};

/* ===== Прогресс и настройки ===== */
ROUTES.progress = app => {
  const days = [];
  for (let d = 27; d >= 0; d--) { const dt = new Date(); dt.setDate(dt.getDate() - d); days.push([dateKey(dt), S.days[dateKey(dt)] || 0, dt]); }
  const maxDay = Math.max(20, ...days.map(d => d[1]));
  app.innerHTML = `<h1>📈 Прогресс</h1>
    <div class="grid grid-4">
      <div class="card stat"><b>${lessonsDone()}/${LESSONS.length}</b><span>уроков пройдено</span></div>
      <div class="card stat"><b>${learnedCount()}</b><span>слов выучено</span></div>
      <div class="card stat"><b>🔥 ${currentStreak()}</b><span>дней подряд</span></div>
      <div class="card stat"><b>${S.test ? S.test.pct + "%" : "—"}</b><span>тест A1</span></div>
    </div>
    <div class="card section">
      <h2>Активность за 4 недели</h2>
      <div style="display:grid;grid-template-columns:repeat(28,1fr);gap:4px;align-items:end;height:120px">
        ${days.map(([k, v, dt]) => `<div title="${dt.toLocaleDateString("ru-RU")}: ${v} XP" style="height:${Math.max(4, (v / maxDay) * 100)}%;background:${v ? "var(--primary)" : "var(--surface-2)"};border-radius:4px"></div>`).join("")}
      </div>
      <div class="row small muted" style="justify-content:space-between;margin-top:6px"><span>4 недели назад</span><span>сегодня</span></div>
    </div>
    <div class="card section">
      <h2>Уроки</h2>
      ${MODULES.map(M => `<h3 style="margin-top:14px">Модуль ${M.id}. ${esc(M.title)}</h3>
        ${LESSONS.filter(l => l.module === M.id).map(l => { const s = lessonState(l.id); return `
        <div class="row" style="padding:6px 0;border-bottom:1px solid var(--border)"><span>${l.icon}</span><a href="#/lesson/${l.id}" style="flex:1;color:var(--text)">${l.id}. ${esc(l.title)}</a>
        <div class="bar" style="width:120px"><span style="width:${s.best || 0}%;background:${s.done ? "var(--good)" : "var(--warn)"}"></span></div><span class="small" style="width:44px;text-align:right">${s.best != null ? s.best + "%" : "—"}</span></div>`; }).join("")}`).join("")}
    </div>
    <div class="card section">
      <h2>⚙️ Настройки озвучки</h2>
      <div class="grid grid-2">
        <label><div class="small muted">Голос</div><select class="text-input" id="voiceSel" style="width:100%"></select></label>
        <label><div class="small muted">Скорость: <b id="rateVal">${S.settings.rate}</b></div><input type="range" id="rateSel" min="0.5" max="1.2" step="0.05" value="${S.settings.rate}" style="width:100%"></label>
      </div>
      <div class="row" style="margin-top:12px"><button class="btn secondary sm" data-say="Hello! This is how I sound. Nice to meet you.">🔊 Проверить голос</button></div>
      <p class="small muted" style="margin-top:10px">Список голосов зависит от браузера и системы. Самые естественные голоса — в Microsoft Edge (Natural) и Google Chrome (Google UK English).</p>
    </div>
    <div class="card section">
      <h2>Данные</h2>
      <p class="muted">Прогресс хранится только в этом браузере. Сброс удалит пройденные уроки, карточки и очки.</p>
      <button class="btn bad" id="resetAll">Сбросить весь прогресс</button>
    </div>`;
  const fillVoices = () => {
    const sel = $("#voiceSel"); if (!sel) return;
    const cur = TTS.voice();
    sel.innerHTML = TTS.voices.length ? TTS.voices.map(v => `<option value="${esc(v.name)}" ${cur && cur.name === v.name ? "selected" : ""}>${esc(v.name)} (${v.lang})</option>`).join("") : `<option>Голоса не найдены</option>`;
  };
  fillVoices();
  if (TTS.supported) setTimeout(fillVoices, 600);
  $("#voiceSel").onchange = e => { S.settings.voice = e.target.value; save(); TTS.speak("Hello! Nice to meet you."); };
  $("#rateSel").oninput = e => { S.settings.rate = Number(e.target.value); $("#rateVal").textContent = S.settings.rate; save(); };
  $("#resetAll").onclick = () => {
    if (!confirm("Точно сбросить весь прогресс? Это нельзя отменить.")) return;
    const settings = S.settings, theme = S.theme;
    S = JSON.parse(JSON.stringify(DEFAULT_STATE)); S.settings = settings; S.theme = theme; save();
    toast("Прогресс сброшен"); route();
  };
};

startRouter();
