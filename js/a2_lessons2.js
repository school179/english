// ===== Уровень A2 · Модуль 8 =====
LESSONS.push({
  id: 33, module: 8, icon: "🎬", title: "Past Continuous: что происходило", en: "I was sleeping",
  goal: "Описывать процесс в прошлом: At 8 p.m. I was watching TV.",
  vocab: [
    "happen|ˈhæpən|случаться", "suddenly|ˈsʌdənli|внезапно", "fall — fell|fɔːl — fel|падать — упал", "drop|drɒp|ронять",
    "hear — heard|hɪə — hɜːd|слышать — услышал", "noise|nɔɪz|шум", "storm|stɔːm|гроза, шторм", "accident|ˈæksɪdənt|авария, несчастный случай",
    "ring — rang|rɪŋ — ræŋ|звонить — зазвонил", "knock|nɒk|стучать", "shout|ʃaʊt|кричать", "wait for|weɪt fɔː|ждать (кого-то)",
    "while|waɪl|в то время как, пока", "when|wen|когда", "at that moment|ət ðæt ˈməʊmənt|в тот момент", "all day|ɔːl deɪ|весь день",
    "shine|ʃaɪn|светить", "blow|bləʊ|дуть", "street|striːt|улица", "neighbour|ˈneɪbə|сосед"
  ],
  theory: `
<h3>Процесс в определённый момент прошлого</h3>
<p><b>Past Continuous</b> отвечает на вопрос «что происходило (было в процессе) в тот момент?». Это как Present Continuous, только am/is/are превращаются в <b>was/were</b>.</p>
<span class="formula">was / were + глагол-ing</span>
<div class="table-wrap"><table>
<tr><th>+</th><th>−</th><th>?</th></tr>
<tr><td>I / he / she / it <mark>was</mark> working.</td><td>I <mark>wasn't</mark> working.</td><td><mark>Was</mark> she working?</td></tr>
<tr><td>you / we / they <mark>were</mark> working.</td><td>They <mark>weren't</mark> working.</td><td><mark>Were</mark> you working?</td></tr>
</table></div>
<div class="ex"><b>At 8 o'clock yesterday I was having dinner.</b> — Вчера в 8 часов я ужинал.</div>
<div class="ex"><b>What were you doing at midnight?</b> — Что ты делал в полночь?</div>
<div class="ex"><b>We weren't sleeping. We were talking.</b> — Мы не спали. Мы разговаривали.</div>

<h3>Фон истории</h3>
<p>Past Continuous часто описывает обстановку в начале рассказа:</p>
<div class="ex"><b>It was raining and the wind was blowing.</b> — Шёл дождь и дул ветер.</div>
<div class="ex"><b>The sun was shining and birds were singing.</b> — Светило солнце, пели птицы.</div>

<h3>Два процесса одновременно — while</h3>
<div class="ex"><b>While I was cooking, my husband was watching TV.</b> — Пока я готовила, муж смотрел телевизор.</div>

<div class="table-wrap"><table>
<tr><th>Past Simple — законченное действие</th><th>Past Continuous — процесс</th></tr>
<tr><td>I read a book yesterday. (прочитал)</td><td>I was reading at 9 p.m. (читал, был в процессе)</td></tr>
</table></div>
<div class="note">Глаголы состояния (know, like, want, need) в Continuous не ставятся: <b>I wanted</b>, а не «I was wanting».</div>`,
  dialog: [
    "A|I called you last night at ten, but you didn't answer. What were you doing?|Я звонил тебе вчера в десять, но ты не ответил. Что ты делал?",
    "B|Sorry, I was taking a shower. And then I was helping my brother with his homework.|Прости, я был в душе. А потом помогал брату с домашкой.",
    "A|Oh, I see. Was it still raining at that time?|Понятно. В то время ещё шёл дождь?",
    "B|Yes, it was. There was a big storm!|Да. Была сильная гроза!",
    "A|I know. While I was walking home, the wind was blowing so hard!|Знаю. Пока я шёл домой, ветер так сильно дул!"
  ],
  ex: [
    { t: "c", q: "At 7 a.m. yesterday I ___.", o: ["was sleeping", "were sleeping", "slept was"], a: 0 },
    { t: "c", q: "What ___ you doing at 5 o'clock?", o: ["was", "were", "did"], a: 1 },
    { t: "c", q: "They ___ playing football. They were at home.", o: ["wasn't", "weren't", "didn't"], a: 1 },
    { t: "c", q: "___ it raining when you left?", o: ["Were", "Did", "Was"], a: 2 },
    { t: "c", q: "While Tom was reading, his sister ___ the piano.", o: ["was playing", "were playing", "plays"], a: 0 },
    { t: "c", q: "Где правильно?", o: ["I was knowing the answer.", "I knew the answer.", "I was know the answer."], a: 1 },
    { t: "i", q: "The sun ___ (shine) all day.", a: ["was shining"] },
    { t: "i", q: "We ___ (wait) for the bus at 8 a.m.", a: ["were waiting"] },
    { t: "i", q: "She ___ (not / listen) to the teacher.", a: ["wasn't listening", "was not listening"] },
    { t: "o", a: "What were you doing at midnight", ru: "Что ты делал в полночь?", end: "?" },
    { t: "tr", ru: "Вчера в шесть я работал.", a: ["I was working at six yesterday", "Yesterday at six I was working", "I was working yesterday at six", "At six yesterday I was working", "I was working at 6 yesterday", "Yesterday at 6 I was working"] },
    { t: "l", a: "It was snowing and the wind was blowing" }
  ]
});

LESSONS.push({
  id: 34, module: 8, icon: "📖", title: "Рассказываем историю: when, while, связки", en: "I was walking when...",
  goal: "Рассказывать истории: I was walking home when I saw an old friend.",
  vocab: [
    "first|fɜːst|сначала", "then|ðen|потом", "after that|ˈɑːftə ðæt|после этого", "later|ˈleɪtə|позже",
    "finally|ˈfaɪnəli|наконец", "in the end|ɪn ði end|в конце концов", "luckily|ˈlʌkɪli|к счастью", "unfortunately|ʌnˈfɔːtʃənətli|к сожалению",
    "so|səʊ|поэтому, так что", "because|bɪˈkɒz|потому что", "story|ˈstɔːri|история, рассказ", "surprise|səˈpraɪz|сюрприз; удивлять",
    "lose — lost|luːz — lɒst|терять — потерял", "find — found|faɪnd — faʊnd|находить — нашёл", "notice|ˈnəʊtɪs|замечать",
    "break down|breɪk daʊn|сломаться (о машине)", "get lost|ɡet lɒst|заблудиться", "run out of|rʌn aʊt əv|закончиться (о запасе)",
    "strange|streɪndʒ|странный", "scared|skeəd|испуганный"
  ],
  theory: `
<h3>Длинное действие прерывается коротким</h3>
<p>Самая частая схема рассказа: <b>процесс</b> (Past Continuous) + <b>внезапное событие</b> (Past Simple).</p>
<span class="formula">was/were + -ing ... when + Past Simple</span>
<div class="ex"><b>I was walking home when I saw an old friend.</b> — Я шёл домой, когда увидел старого друга.</div>
<div class="ex"><b>We were having dinner when the phone rang.</b> — Мы ужинали, когда зазвонил телефон.</div>
<span class="formula">while + was/were -ing, Past Simple</span>
<div class="ex"><b>While she was driving, the car broke down.</b> — Пока она ехала, машина сломалась.</div>
<div class="note"><b>when</b> — обычно перед коротким действием (Past Simple). <b>while</b> — перед длинным (Past Continuous).</div>

<h3>Последовательные действия — только Past Simple</h3>
<div class="ex"><b>When I got home, I had a shower and went to bed.</b> — Когда я пришёл домой, я принял душ и лёг спать.</div>
<div class="table-wrap"><table>
<tr><td>When he arrived, we <b>were having</b> dinner.</td><td>= он пришёл во время ужина</td></tr>
<tr><td>When he arrived, we <b>had</b> dinner.</td><td>= он пришёл, и потом мы поужинали</td></tr>
</table></div>

<h3>Связки для рассказа</h3>
<p><b>First</b> → <b>Then</b> → <b>After that</b> → <b>Later</b> → <b>Finally / In the end</b></p>
<p>Оценка: <b>Luckily</b> (к счастью), <b>Unfortunately</b> (к сожалению), <b>Suddenly</b> (вдруг).</p>
<p>Причина и следствие: <b>because</b> (потому что) и <b>so</b> (поэтому):</p>
<div class="ex"><b>We got lost because we didn't have a map.</b> — Мы заблудились, потому что у нас не было карты.</div>
<div class="ex"><b>We didn't have a map, so we got lost.</b> — У нас не было карты, поэтому мы заблудились.</div>
<div class="tip">Структура хорошей истории: фон (Past Continuous) → события (Past Simple + связки) → чем закончилось (In the end...) → ваши чувства (I was so happy / scared).</div>`,
  dialog: [
    "A|You look tired. What happened?|Выглядишь уставшим. Что случилось?",
    "B|What a day! I was driving to work when my car suddenly broke down.|Ну и день! Я ехал на работу, когда машина вдруг сломалась.",
    "A|Oh no! What did you do?|О нет! И что ты сделал?",
    "B|First I called my boss. Then I waited for help, but my phone ran out of battery!|Сначала позвонил начальнику. Потом ждал помощь, но у телефона села батарея!",
    "A|Unfortunately, that always happens.|К сожалению, так всегда бывает.",
    "B|Luckily, while I was waiting, a kind man stopped and helped me. In the end I arrived at twelve.|К счастью, пока я ждал, добрый человек остановился и помог. В итоге я приехал в двенадцать."
  ],
  ex: [
    { t: "c", q: "I was having a shower when the doorbell ___.", o: ["was ringing", "rang", "rings"], a: 1 },
    { t: "c", q: "She ___ TV when she heard a strange noise.", o: ["watched", "was watching", "were watching"], a: 1 },
    { t: "c", q: "___ we were walking in the park, it started to rain.", o: ["While", "When", "So"], a: 0 },
    { t: "c", q: "It was late, ___ we took a taxi.", o: ["because", "so", "while"], a: 1 },
    { t: "c", q: "I couldn't sleep ___ I was worried.", o: ["so", "then", "because"], a: 2 },
    { t: "c", q: "When the film ended, we ___ home.", o: ["went", "were going", "was going"], a: 0 },
    { t: "i", q: "They were playing tennis ___ it started to rain.", a: ["when"] },
    { t: "i", q: "I lost my keys but ___ I found them in my bag. (к счастью)", a: ["luckily"] },
    { t: "i", q: "While I ___ (cook), I cut my finger.", a: ["was cooking"] },
    { t: "o", a: "I was reading when the lights went out", ru: "Я читал, когда погас свет.", end: "." },
    { t: "tr", ru: "Мы ужинали, когда он пришёл.", a: ["We were having dinner when he came", "We were having dinner when he arrived", "We were eating dinner when he came", "We were eating dinner when he arrived"] },
    { t: "l", a: "Unfortunately we got lost" }
  ]
});

LESSONS.push({
  id: 35, module: 8, icon: "🧸", title: "Used to: как было раньше", en: "I used to live...",
  goal: "Рассказывать о привычках и состояниях в прошлом, которых больше нет.",
  vocab: [
    "used to|juːst tuː|раньше (делал, бывало)", "childhood|ˈtʃaɪldhʊd|детство", "grow up — grew up|ɡrəʊ ʌp — ɡruː ʌp|расти — вырос",
    "primary school|ˈpraɪməri skuːl|начальная школа", "kindergarten|ˈkɪndəɡɑːtn|детский сад", "toy|tɔɪ|игрушка",
    "cartoon|kɑːˈtuːn|мультфильм", "strict|strɪkt|строгий", "naughty|ˈnɔːti|непослушный", "shy|ʃaɪ|застенчивый",
    "remember|rɪˈmembə|помнить", "forget — forgot|fəˈɡet — fəˈɡɒt|забывать — забыл", "miss|mɪs|скучать; пропускать",
    "change|tʃeɪndʒ|меняться; перемена", "anymore|ˌeniˈmɔː|больше не (в отриц.)", "still|stɪl|всё ещё",
    "sweets|swiːts|конфеты", "hide and seek|haɪd ənd siːk|прятки", "countryside|ˈkʌntrisaɪd|сельская местность", "nowadays|ˈnaʊədeɪz|в наши дни"
  ],
  theory: `
<h3>used to + глагол — «раньше (бывало)»</h3>
<p>Говорим о <b>привычках или состояниях в прошлом</b>, которых <b>сейчас уже нет</b>.</p>
<span class="formula">used to + глагол (одинаково для всех лиц)</span>
<div class="ex"><b>I used to play the piano.</b> — Раньше я играл на пианино. (сейчас — нет)</div>
<div class="ex"><b>We used to live in a small village.</b> — Раньше мы жили в маленькой деревне.</div>
<div class="ex"><b>She used to be very shy.</b> — Раньше она была очень застенчивой.</div>

<h3>Отрицание и вопрос — с did, и used без -d</h3>
<div class="table-wrap"><table>
<tr><th>+</th><th>−</th><th>?</th></tr>
<tr><td>He <mark>used to</mark> smoke.</td><td>He <mark>didn't use to</mark> smoke.</td><td><mark>Did</mark> he <mark>use to</mark> smoke?</td></tr>
</table></div>
<div class="ex"><b>I didn't use to like vegetables.</b> — Раньше я не любил овощи.</div>
<div class="ex"><b>Did you use to watch cartoons?</b> — Ты раньше смотрел мультики?</div>
<div class="note">После <b>did / didn't</b> пишем <b>use to</b> (без d), как и любой глагол после did. Произносится одинаково: [juːs tuː].</div>

<h3>used to или Past Simple?</h3>
<div class="table-wrap"><table>
<tr><td>I <b>used to go</b> to the sea every summer.</td><td>регулярно, много раз, привычка</td></tr>
<tr><td>I <b>went</b> to the sea in 2015.</td><td>один раз, конкретный случай</td></tr>
</table></div>
<p>Past Simple тоже можно использовать для привычек (<i>I went to the sea every summer</i>), но <b>used to</b> подчёркивает, что это <b>в прошлом и закончилось</b>.</p>

<h3>anymore и still</h3>
<div class="ex"><b>I don't play the piano anymore.</b> — Я больше не играю на пианино.</div>
<div class="ex"><b>I still love cartoons!</b> — Я до сих пор люблю мультики!</div>
<div class="note">Для настоящих привычек used to не используется. «Я обычно встаю в 7» = <b>I usually get up at 7</b>.</div>`,
  dialog: [
    "A|Where did you grow up?|Где ты вырос?",
    "B|In a small village. We used to have a big garden and a dog.|В маленькой деревне. У нас был большой сад и собака.",
    "A|That sounds nice. What did you use to do after school?|Звучит здорово. Чем ты раньше занимался после школы?",
    "B|We used to play hide and seek and swim in the river. We didn't use to have computers!|Мы играли в прятки и купались в реке. Компьютеров у нас не было!",
    "A|Do you miss those days?|Скучаешь по тем временам?",
    "B|Sometimes. I don't live there anymore, but my grandparents still do.|Иногда. Я больше там не живу, а бабушка с дедушкой до сих пор живут."
  ],
  ex: [
    { t: "c", q: "When I was a child, I ___ to be afraid of dogs.", o: ["use", "used", "was used"], a: 1 },
    { t: "c", q: "Did you ___ to go to kindergarten?", o: ["used", "use", "using"], a: 1 },
    { t: "c", q: "She ___ like coffee, but now she drinks it every day.", o: ["didn't use to", "didn't used to", "doesn't use to"], a: 0 },
    { t: "c", q: "I ___ go to the gym every day. (сейчас — привычка)", o: ["use to", "used to", "usually"], a: 2 },
    { t: "c", q: "He doesn't work here ___.", o: ["still", "anymore", "already"], a: 1 },
    { t: "c", q: "We ___ to Spain in 2018. (один раз)", o: ["used to go", "went", "use to go"], a: 1 },
    { t: "i", q: "My father ___ to have long hair.", a: ["used"] },
    { t: "i", q: "I've known her for years and we're ___ friends. (всё ещё)", a: ["still"] },
    { t: "i", q: "Where did you grow ___?", a: ["up"] },
    { t: "o", a: "We used to live in the countryside", ru: "Раньше мы жили за городом.", end: "." },
    { t: "o", a: "Did you use to play with toys", ru: "Ты раньше играл с игрушками?", end: "?" },
    { t: "tr", ru: "Раньше я был застенчивым.", a: ["I used to be shy"] },
    { t: "tr", ru: "Я больше не курю.", a: ["I don't smoke anymore", "I do not smoke anymore", "I don't smoke any more", "I do not smoke any more"] },
    { t: "l", a: "My teacher used to be very strict" }
  ]
});

LESSONS.push({
  id: 36, module: 8, icon: "🏃", title: "Наречия образа действия. Bored или boring?", en: "Quickly, well, interesting",
  goal: "Описывать, как что-то делается, и выражать чувства: She speaks slowly. I'm bored — the film is boring.",
  vocab: [
    "quickly|ˈkwɪkli|быстро", "slowly|ˈsləʊli|медленно", "carefully|ˈkeəfəli|осторожно, внимательно", "loudly|ˈlaʊdli|громко",
    "quietly|ˈkwaɪətli|тихо", "well|wel|хорошо", "badly|ˈbædli|плохо", "hard|hɑːd|усердно; тяжёлый", "easily|ˈiːzɪli|легко",
    "fluently|ˈfluːəntli|бегло, свободно", "bored — boring|bɔːd — ˈbɔːrɪŋ|скучающий — скучный", "interested — interesting|ˈɪntrəstɪd — ˈɪntrəstɪŋ|заинтересованный — интересный",
    "excited — exciting|ɪkˈsaɪtɪd — ɪkˈsaɪtɪŋ|взволнованный — захватывающий", "tired — tiring|ˈtaɪəd — ˈtaɪərɪŋ|уставший — утомительный",
    "surprised — surprising|səˈpraɪzd — səˈpraɪzɪŋ|удивлённый — удивительный", "worried — worrying|ˈwʌrid — ˈwʌriɪŋ|обеспокоенный — тревожный",
    "relaxed — relaxing|rɪˈlækst — rɪˈlæksɪŋ|расслабленный — расслабляющий", "confused — confusing|kənˈfjuːzd — kənˈfjuːzɪŋ|сбитый с толку — запутанный",
    "careful|ˈkeəfl|осторожный", "loud|laʊd|громкий"
  ],
  theory: `
<h3>Прилагательное или наречие?</h3>
<p><b>Прилагательное</b> описывает предмет (какой?). <b>Наречие</b> описывает действие (как?).</p>
<div class="ex"><b>She is a careful driver.</b> — Она осторожный водитель. (какой?)</div>
<div class="ex"><b>She drives carefully.</b> — Она водит осторожно. (как?)</div>

<h3>Образование: + -ly</h3>
<div class="table-wrap"><table>
<tr><td>обычно + ly</td><td>slow → slowly, quiet → quietly, careful → carefully</td></tr>
<tr><td>-y → -ily</td><td>easy → easily, happy → happily</td></tr>
<tr><td>-le → -ly</td><td>terrible → terribly, comfortable → comfortably</td></tr>
<tr><td><b>исключения</b></td><td>good → <b>well</b>, fast → <b>fast</b>, hard → <b>hard</b>, late → <b>late</b>, early → <b>early</b></td></tr>
</table></div>
<div class="note">Частая ошибка: «He speaks English very good». Правильно: <b>He speaks English very well</b>. Но: <i>His English is very <b>good</b></i> (после be — прилагательное).</div>
<div class="note"><b>hardly</b> — это не «усердно», а «едва, почти не»: <i>I hardly know him</i> — я его почти не знаю.</div>
<p>Место наречия — обычно <b>после глагола или дополнения</b>: <i>She speaks English fluently</i> (не «speaks fluently English»).</p>

<h3>-ed и -ing: чувства и причины</h3>
<div class="table-wrap"><table>
<tr><th>-ed — что я чувствую</th><th>-ing — что вызывает чувство</th></tr>
<tr><td>I'm <mark>bored</mark>. — Мне скучно.</td><td>The lesson is <mark>boring</mark>. — Урок скучный.</td></tr>
<tr><td>I'm <mark>interested</mark> in history.</td><td>History is <mark>interesting</mark>.</td></tr>
<tr><td>We were <mark>tired</mark>.</td><td>The trip was <mark>tiring</mark>.</td></tr>
</table></div>
<div class="note">«I'm boring» означает «я скучный человек», а не «мне скучно»! Про свои чувства — всегда <b>-ed</b>.</div>`,
  dialog: [
    "A|How was the concert? Were you excited?|Как концерт? Ты был в восторге?",
    "B|At first, yes. But the music was so loud and the singer sang badly.|Сначала да. Но музыка была такой громкой, а певец пел плохо.",
    "A|Really? That's surprising. She usually sings really well.|Правда? Удивительно. Обычно она поёт очень хорошо.",
    "B|Maybe she was tired. After an hour I was bored, so I left quietly.|Может, она устала. Через час мне стало скучно, и я тихо ушёл.",
    "A|What a disappointing evening!|Какой разочаровывающий вечер!"
  ],
  ex: [
    { t: "c", q: "Please drive ___. The road is dangerous.", o: ["careful", "carefully", "carefuly"], a: 1 },
    { t: "c", q: "He speaks English very ___.", o: ["good", "well", "goodly"], a: 1 },
    { t: "c", q: "She works very ___.", o: ["hard", "hardly", "harder"], a: 0 },
    { t: "c", q: "The film was really long and ___.", o: ["bored", "boring", "bore"], a: 1 },
    { t: "c", q: "I'm very ___ in modern art.", o: ["interesting", "interest", "interested"], a: 2 },
    { t: "c", q: "After the long flight we were very ___.", o: ["tiring", "tired", "tire"], a: 1 },
    { t: "c", q: "Где правильно?", o: ["She speaks fluently French.", "She speaks French fluently.", "She fluently speaks French very."], a: 1 },
    { t: "i", q: "easy → ___ (наречие)", a: ["easily"] },
    { t: "i", q: "Can you speak more ___? I don't understand. (медленно)", a: ["slowly"] },
    { t: "i", q: "The news was really ___ (surprise).", a: ["surprising"] },
    { t: "o", a: "The children were playing quietly in their room", ru: "Дети тихо играли в своей комнате.", end: "." },
    { t: "tr", ru: "Мне скучно.", a: ["I am bored", "I'm bored"] },
    { t: "tr", ru: "Она хорошо готовит.", a: ["She cooks well", "She is a good cook", "She's a good cook"] },
    { t: "l", a: "It was a very exciting game" }
  ]
});
