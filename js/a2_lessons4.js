// ===== Уровень A2 · Модуль 10 =====
LESSONS.push({
  id: 41, module: 10, icon: "💼", title: "Have to / don't have to. Работа", en: "I have to wear a uniform",
  goal: "Говорить об обязанностях и их отсутствии, рассказывать о работе.",
  vocab: [
    "have to|hæv tuː|быть должным, приходиться", "don't have to|dəʊnt hæv tuː|не обязательно, не нужно", "uniform|ˈjuːnɪfɔːm|форма (одежда)",
    "shift|ʃɪft|смена", "salary|ˈsæləri|зарплата", "boss|bɒs|начальник", "colleague|ˈkɒliːɡ|коллега", "customer|ˈkʌstəmə|клиент",
    "deadline|ˈdedlaɪn|срок сдачи", "overtime|ˈəʊvətaɪm|сверхурочно", "full-time|ˌfʊl ˈtaɪm|полный рабочий день", "part-time|ˌpɑːt ˈtaɪm|неполный рабочий день",
    "day off|deɪ ɒf|выходной день", "apply for|əˈplaɪ fɔː|подавать заявку на", "interview|ˈɪntəvjuː|собеседование, интервью",
    "experience|ɪkˈspɪəriəns|опыт", "skills|skɪlz|навыки", "responsible for|rɪˈspɒnsəbl fɔː|ответственный за", "employee|ɪmˈplɔɪiː|сотрудник", "retire|rɪˈtaɪə|уходить на пенсию"
  ],
  theory: `
<h3>have to — «приходится, нужно, обязан»</h3>
<p>Обязанность из-за правил или обстоятельств.</p>
<div class="table-wrap"><table>
<tr><th></th><th>I / you / we / they</th><th>he / she / it</th></tr>
<tr><td>+</td><td>I <mark>have to</mark> get up early.</td><td>She <mark>has to</mark> wear a uniform.</td></tr>
<tr><td>−</td><td>I <mark>don't have to</mark> work on Sundays.</td><td>He <mark>doesn't have to</mark> work overtime.</td></tr>
<tr><td>?</td><td><mark>Do</mark> you <mark>have to</mark> travel?</td><td><mark>Does</mark> she <mark>have to</mark> work late?</td></tr>
</table></div>
<div class="note"><b>don't have to</b> — это «не обязательно, нет необходимости», а НЕ «нельзя»! <i>You don't have to come</i> = можешь не приходить.</div>

<h3>Прошлое и будущее</h3>
<div class="ex"><b>Yesterday I had to stay at work until 9.</b> — Вчера мне пришлось остаться на работе до 9.</div>
<div class="ex"><b>Did you have to wait long?</b> — Тебе пришлось долго ждать?</div>
<div class="ex"><b>You'll have to finish it by Friday.</b> — Тебе придётся закончить это к пятнице.</div>
<div class="tip"><b>have to</b> читается [ˈhæftə], <b>has to</b> — [ˈhæstə]. С глухим звуком!</div>

<h3>Разговор о работе</h3>
<div class="ex"><b>I work full-time for an IT company.</b> — Я работаю полный день в IT-компании.</div>
<div class="ex"><b>I'm responsible for customer service.</b> — Я отвечаю за обслуживание клиентов.</div>
<div class="ex"><b>I'm going to apply for a new job.</b> — Я собираюсь подать заявку на новую работу.</div>
<div class="ex"><b>What skills do you need for this job?</b> — Какие навыки нужны для этой работы?</div>
<div class="note">Работать <b>for</b> компанию (work <b>for</b> Google), <b>in</b> отрасли/месте (work <b>in</b> a bank, <b>in</b> IT), <b>as</b> кем-то (work <b>as</b> a manager).</div>`,
  dialog: [
    "A|How's your new job?|Как новая работа?",
    "B|It's good, but I have to get up at six because I work the morning shift.|Хорошая, но приходится вставать в шесть, потому что я работаю в утреннюю смену.",
    "A|Do you have to wear a uniform?|Тебе нужно носить форму?",
    "B|Yes, I do. But I don't have to work at weekends, and the salary is better.|Да. Но по выходным работать не надо, и зарплата лучше.",
    "A|Sounds great! Are your colleagues nice?|Звучит отлично! Коллеги приятные?",
    "B|Very. My boss is a bit strict, but last week I had to work overtime and she thanked me.|Очень. Начальница немного строгая, но на прошлой неделе мне пришлось работать сверхурочно, и она меня поблагодарила."
  ],
  ex: [
    { t: "c", q: "Doctors ___ work at night sometimes.", o: ["have to", "has to", "haves to"], a: 0 },
    { t: "c", q: "My mother ___ drive to work. She walks.", o: ["don't have to", "doesn't have to", "hasn't to"], a: 1 },
    { t: "c", q: "___ you have to wear a tie at work?", o: ["Have", "Do", "Are"], a: 1 },
    { t: "c", q: "Yesterday I ___ wait for the bus for an hour.", o: ["have to", "had to", "must"], a: 1 },
    { t: "c", q: "«You don't have to pay» означает:", o: ["Платить нельзя.", "Платить не нужно.", "Нужно заплатить."], a: 1 },
    { t: "c", q: "She works ___ a nurse ___ a big hospital.", o: ["as / in", "like / at", "for / as"], a: 0 },
    { t: "i", q: "He ___ to start work at 8.", a: ["has"] },
    { t: "i", q: "I'm going to apply ___ this job.", a: ["for"] },
    { t: "i", q: "The ___ for this project is Friday. (срок)", a: ["deadline"] },
    { t: "o", a: "Do you have to work at weekends", ru: "Тебе приходится работать по выходным?", end: "?" },
    { t: "tr", ru: "Мне нужно идти.", a: ["I have to go", "I've got to go", "I need to go", "I must go"] },
    { t: "tr", ru: "Тебе не обязательно приходить.", a: ["You don't have to come", "You do not have to come"] },
    { t: "l", a: "She has to work overtime this week" }
  ]
});

LESSONS.push({
  id: 42, module: 10, icon: "🚫", title: "Must / mustn't. Правила и знаки", en: "You mustn't smoke here",
  goal: "Понимать и объяснять правила, запреты и надписи.",
  vocab: [
    "must|mʌst|должен (обязан)", "mustn't|ˈmʌsnt|нельзя, запрещено", "rule|ruːl|правило", "sign|saɪn|знак, табличка",
    "law|lɔː|закон", "allowed|əˈlaʊd|разрешено", "not allowed|nɒt əˈlaʊd|не разрешено", "fine|faɪn|штраф",
    "seat belt|ˈsiːt belt|ремень безопасности", "speed limit|ˈspiːd lɪmɪt|ограничение скорости", "smoke|sməʊk|курить", "park|pɑːk|парковаться",
    "feed|fiːd|кормить", "touch|tʌtʃ|трогать", "switch off|swɪtʃ ɒf|выключать", "keep quiet|kiːp ˈkwaɪət|соблюдать тишину",
    "entrance|ˈentrəns|вход", "exit|ˈeksɪt|выход", "library|ˈlaɪbrəri|библиотека", "permission|pəˈmɪʃn|разрешение"
  ],
  theory: `
<h3>must — сильная обязанность</h3>
<span class="formula">must / mustn't + глагол (без to, без -s)</span>
<div class="ex"><b>You must wear a seat belt.</b> — Вы обязаны пристегнуть ремень.</div>
<div class="ex"><b>Passengers must show their tickets.</b> — Пассажиры должны предъявить билеты.</div>
<div class="ex"><b>I must call my mum tonight.</b> — Я обязательно должен позвонить маме сегодня. (я сам так считаю)</div>

<h3>mustn't — запрет</h3>
<div class="ex"><b>You mustn't smoke here.</b> — Здесь нельзя курить.</div>
<div class="ex"><b>You mustn't touch the paintings.</b> — Картины трогать нельзя.</div>

<h3>Главное отличие: mustn't ≠ don't have to</h3>
<div class="table-wrap"><table>
<tr><th>mustn't</th><th>don't have to</th></tr>
<tr><td>НЕЛЬЗЯ — запрещено</td><td>НЕ НУЖНО — можно, но не обязательно</td></tr>
<tr><td>You <b>mustn't</b> use your phone in the exam.</td><td>You <b>don't have to</b> bring a pen. We have pens.</td></tr>
</table></div>

<h3>must или have to?</h3>
<p>Часто взаимозаменяемы. Но <b>must</b> — чаще в правилах, надписях и когда говорящий сам считает что-то важным. <b>have to</b> — внешние обстоятельства, разговорная речь. У must нет прошедшего времени — используем <b>had to</b>.</p>
<div class="ex"><b>I had to show my passport.</b> — Мне пришлось показать паспорт.</div>

<h3>can / can't и be allowed to</h3>
<div class="ex"><b>You can park here after 6 p.m.</b> — Здесь можно парковаться после 18:00.</div>
<div class="ex"><b>You can't take photos in the museum.</b> — В музее нельзя фотографировать.</div>
<div class="ex"><b>Dogs are not allowed.</b> — С собаками нельзя.</div>
<div class="ex"><b>Are we allowed to swim here?</b> — Нам разрешено здесь купаться?</div>
<div class="tip">Надписи: <b>No smoking</b> (не курить), <b>No entry</b> (вход воспрещён), <b>Keep off the grass</b> (по газонам не ходить), <b>Do not disturb</b> (не беспокоить), <b>Mind the gap</b> (осторожно, зазор).</div>`,
  dialog: [
    "A|Excuse me, sir. You mustn't park here. It's a bus stop.|Извините, сэр. Здесь нельзя парковаться. Это остановка.",
    "B|Oh, sorry! I didn't see the sign. Where can I park?|Ой, простите! Я не видел знак. Где можно парковаться?",
    "A|There's a car park behind the library. But you have to pay there.|За библиотекой есть парковка. Но там нужно платить.",
    "B|Do I have to pay by card?|Нужно платить картой?",
    "A|No, you don't have to. You can pay in cash too.|Нет, не обязательно. Можно и наличными.",
    "B|Thank you. I don't want to get a fine!|Спасибо. Не хочу получить штраф!"
  ],
  ex: [
    { t: "c", q: "You ___ smoke in the hospital. It's forbidden.", o: ["mustn't", "don't have to", "must"], a: 0 },
    { t: "c", q: "It's Sunday. You ___ get up early.", o: ["mustn't", "don't have to", "must"], a: 1 },
    { t: "c", q: "Drivers ___ stop at a red light.", o: ["must", "mustn't", "don't have to"], a: 0 },
    { t: "c", q: "Где правильно?", o: ["He musts go.", "He must to go.", "He must go."], a: 2 },
    { t: "c", q: "Yesterday I ___ go to the police station.", o: ["must", "had to", "musted"], a: 1 },
    { t: "c", q: "«Dogs are not allowed» означает:", o: ["Собаки обязательны.", "С собаками нельзя.", "Собак можно не брать."], a: 1 },
    { t: "i", q: "You ___ touch the animals. They're dangerous. (нельзя)", a: ["mustn't", "must not", "can't", "cannot"] },
    { t: "i", q: "You must ___ off your phone in the cinema.", a: ["switch", "turn"] },
    { t: "i", q: "Are we ___ to take photos here? (разрешено)", a: ["allowed"] },
    { t: "o", a: "You must wear a seat belt in the car", ru: "В машине нужно пристёгиваться.", end: "." },
    { t: "tr", ru: "Здесь нельзя курить.", a: ["You mustn't smoke here", "You must not smoke here", "You can't smoke here", "You cannot smoke here", "Smoking is not allowed here"] },
    { t: "l", a: "You mustn't feed the animals", alt: ["you must not feed the animals"] }
  ]
});

LESSONS.push({
  id: 43, module: 10, icon: "🩺", title: "Should: советы. Здоровье", en: "You should see a doctor",
  goal: "Описывать самочувствие и давать советы: I've got a headache. — You should take a break.",
  vocab: [
    "should|ʃʊd|следует, стоит", "shouldn't|ˈʃʊdnt|не следует", "headache|ˈhedeɪk|головная боль", "stomachache|ˈstʌmək eɪk|боль в животе",
    "toothache|ˈtuːθeɪk|зубная боль", "sore throat|sɔː ˈθrəʊt|боль в горле", "cough|kɒf|кашель", "temperature|ˈtemprətʃə|температура",
    "flu|fluː|грипп", "pain|peɪn|боль", "hurt|hɜːt|болеть, причинять боль", "medicine|ˈmedsn|лекарство", "pill|pɪl|таблетка",
    "prescription|prɪˈskrɪpʃn|рецепт", "rest|rest|отдых; отдыхать", "feel|fiːl|чувствовать (себя)", "get better|ɡet ˈbetə|поправляться",
    "healthy|ˈhelθi|здоровый", "diet|ˈdaɪət|рацион, диета", "exercise|ˈeksəsaɪz|физические упражнения", "advice|ədˈvaɪs|совет"
  ],
  theory: `
<h3>should — совет, рекомендация</h3>
<span class="formula">should / shouldn't + глагол (без to, без -s)</span>
<div class="ex"><b>You should see a doctor.</b> — Тебе стоит сходить к врачу.</div>
<div class="ex"><b>You shouldn't eat so much sugar.</b> — Тебе не следует есть так много сахара.</div>
<div class="ex"><b>Should I take this medicine?</b> — Мне стоит принимать это лекарство?</div>
<div class="ex"><b>What should I do?</b> — Что мне делать?</div>
<div class="table-wrap"><table>
<tr><td><b>must</b></td><td>обязан, очень сильно</td><td>You must stop smoking! (врач требует)</td></tr>
<tr><td><b>should</b></td><td>совет, мнение</td><td>You should do more exercise.</td></tr>
</table></div>

<h3>Мягкие советы</h3>
<div class="ex"><b>I think you should rest.</b> — Думаю, тебе стоит отдохнуть.</div>
<div class="ex"><b>I don't think you should go to work.</b> — Не думаю, что тебе стоит идти на работу.</div>
<div class="ex"><b>Why don't you take a day off?</b> — Почему бы тебе не взять выходной?</div>
<div class="ex"><b>If I were you, I'd go to bed.</b> — На твоём месте я бы лёг спать.</div>
<div class="note"><b>advice</b> — неисчисляемое: <b>some advice, a piece of advice</b>. Нельзя «an advice», «advices».</div>

<h3>Как описать самочувствие</h3>
<div class="ex"><b>I don't feel well. / I feel sick.</b> — Я плохо себя чувствую. / Меня тошнит.</div>
<div class="ex"><b>I've got a headache and a sore throat.</b> — У меня болит голова и горло.</div>
<div class="ex"><b>My back hurts.</b> — У меня болит спина.</div>
<div class="ex"><b>I've got a temperature.</b> — У меня температура.</div>
<div class="ex"><b>What's the matter? / What's wrong?</b> — Что случилось? Что с тобой?</div>
<div class="ex"><b>Get well soon!</b> — Выздоравливай!</div>
<div class="tip">Боли на <b>-ache</b>: head<b>ache</b>, tooth<b>ache</b>, stomach<b>ache</b>, back<b>ache</b>, ear<b>ache</b>. Для остального — <b>My ... hurts</b> или <b>a pain in my ...</b>.</div>`,
  dialog: [
    "A|You look terrible. What's the matter?|Ужасно выглядишь. Что случилось?",
    "B|I don't feel well. I've got a headache and a sore throat.|Мне нехорошо. Болит голова и горло.",
    "A|Have you got a temperature?|Температура есть?",
    "B|Yes, a little. Thirty-seven and a half.|Да, немного. Тридцать семь с половиной.",
    "A|You shouldn't go to work today. You should stay in bed and drink hot tea with lemon.|Тебе не стоит идти сегодня на работу. Лучше лежать в постели и пить горячий чай с лимоном.",
    "B|Maybe you're right. Should I call a doctor?|Может, ты прав. Вызвать врача?",
    "A|If you don't feel better tomorrow, yes. Get well soon!|Если завтра не станет лучше — да. Выздоравливай!"
  ],
  ex: [
    { t: "c", q: "You look tired. You ___ go to bed.", o: ["should", "shouldn't", "should to"], a: 0 },
    { t: "c", q: "You ___ eat so many sweets. They're bad for your teeth.", o: ["should", "shouldn't", "must"], a: 1 },
    { t: "c", q: "___ I call the doctor?", o: ["Do", "Should", "Am"], a: 1 },
    { t: "c", q: "Can you give me some ___?", o: ["advices", "advice", "an advice"], a: 1 },
    { t: "c", q: "My tooth hurts. I've got a ___.", o: ["headache", "toothache", "sore tooth"], a: 1 },
    { t: "c", q: "— I've got a cold. — ___", o: ["Get well soon!", "Congratulations!", "Good luck!"], a: 0 },
    { t: "i", q: "What's the ___? You look pale.", a: ["matter"] },
    { t: "i", q: "I don't ___ well today. (чувствую себя)", a: ["feel"] },
    { t: "i", q: "My back ___. I can't sit. (болит)", a: ["hurts"] },
    { t: "o", a: "I think you should do more exercise", ru: "Думаю, тебе стоит больше заниматься спортом.", end: "." },
    { t: "tr", ru: "Тебе стоит сходить к врачу.", a: ["You should see a doctor", "You should go to the doctor", "You should go to a doctor", "You should visit a doctor"] },
    { t: "tr", ru: "У меня болит голова.", a: ["I have a headache", "I've got a headache", "I have got a headache", "My head hurts"] },
    { t: "l", a: "You shouldn't work so hard", alt: ["you should not work so hard"] }
  ]
});

LESSONS.push({
  id: 44, module: 10, icon: "🤲", title: "Просьбы, предложения, идеи", en: "Could you...? Shall I...?",
  goal: "Вежливо просить, предлагать помощь и идеи: Could you help me? Shall I open the window? How about going out?",
  vocab: [
    "could|kʊd|не могли бы (вежливо)", "would you mind|wʊd juː maɪnd|вы не против", "shall I|ʃæl aɪ|мне (сделать)?",
    "favour|ˈfeɪvə|одолжение, услуга", "lend — lent|lend — lent|давать взаймы — дал", "borrow|ˈbɒrəʊ|брать взаймы",
    "give somebody a lift|ɡɪv ə lɪft|подвезти кого-то", "turn on|tɜːn ɒn|включать", "turn off|tɜːn ɒf|выключать", "turn up|tɜːn ʌp|сделать громче",
    "turn down|tɜːn daʊn|сделать тише", "pick up|pɪk ʌp|забрать (кого-то); поднять", "carry|ˈkæri|нести", "fix|fɪks|чинить",
    "offer|ˈɒfə|предлагать (помощь)", "suggest|səˈdʒest|предлагать (идею)", "How about...?|haʊ əˈbaʊt|Как насчёт...?", "Why don't we...?|waɪ dəʊnt wiː|Почему бы нам не...?",
    "of course|əv kɔːs|конечно", "actually|ˈæktʃuəli|вообще-то, на самом деле"
  ],
  theory: `
<h3>Просьбы: от простого к вежливому</h3>
<div class="table-wrap"><table>
<tr><td>Can you help me?</td><td>обычно, с друзьями</td></tr>
<tr><td>Could you help me, please?</td><td>вежливо — универсальный вариант</td></tr>
<tr><td>Would you help me, please?</td><td>вежливо</td></tr>
<tr><td>Would you mind helping me?</td><td>очень вежливо (+ -ing!)</td></tr>
</table></div>
<div class="ex"><b>Could you open the window, please?</b> — Не могли бы вы открыть окно?</div>
<div class="ex"><b>Could you do me a favour?</b> — Можешь сделать мне одолжение?</div>
<div class="ex"><b>Would you mind closing the door?</b> — Вы не против закрыть дверь?</div>
<div class="note">На <b>Would you mind...?</b> согласие — это «нет»: <b>No, not at all.</b> / <b>Of course not.</b> (Нет, не против.)</div>

<h3>Разрешение: Can I / Could I / May I</h3>
<div class="ex"><b>Could I borrow your pen?</b> — Можно одолжить твою ручку?</div>
<div class="ex"><b>May I come in?</b> — Можно войти? (официально)</div>
<div class="note"><b>borrow</b> — брать взаймы (Can I <b>borrow</b> your book?), <b>lend</b> — давать (Can you <b>lend</b> me your book?).</div>

<h3>Предложить помощь</h3>
<div class="ex"><b>Shall I carry your bag?</b> — Давай я понесу твою сумку?</div>
<div class="ex"><b>I'll help you.</b> — Я помогу тебе.</div>
<div class="ex"><b>Would you like me to call a taxi?</b> — Хотите, я вызову такси?</div>
<div class="ex"><b>Do you want me to pick you up?</b> — Хочешь, я тебя заберу?</div>

<h3>Предложить идею</h3>
<div class="ex"><b>Let's go to the cinema.</b> — Давай пойдём в кино.</div>
<div class="ex"><b>Why don't we order a pizza?</b> — Почему бы нам не заказать пиццу?</div>
<div class="ex"><b>How about going for a walk?</b> — Как насчёт прогуляться? (+ -ing!)</div>
<div class="ex"><b>Shall we meet at 7?</b> — Встретимся в 7?</div>

<h3>Как ответить</h3>
<p>Да: <b>Sure. / Of course. / No problem. / Good idea! / That would be great, thanks.</b><br>
Нет: <b>I'm sorry, I can't. / I'm afraid not. / Actually, I'd rather stay at home.</b></p>`,
  dialog: [
    "A|Hi Max, could you do me a favour?|Привет, Макс, можешь сделать мне одолжение?",
    "B|Sure. What is it?|Конечно. Какое?",
    "A|My car's broken. Could you give me a lift to the station tomorrow?|У меня сломалась машина. Не мог бы ты подвезти меня завтра до вокзала?",
    "B|No problem. Shall I pick you up at eight?|Без проблем. Заехать за тобой в восемь?",
    "A|That would be great, thanks! Would you mind waiting a few minutes if I'm late?|Было бы здорово, спасибо! Ты не против подождать пару минут, если я задержусь?",
    "B|Not at all. And why don't we have a coffee at the station?|Совсем нет. А почему бы нам не выпить кофе на вокзале?",
    "A|Good idea!|Хорошая идея!"
  ],
  ex: [
    { t: "c", q: "Самая вежливая просьба:", o: ["Open the door.", "Can you open the door?", "Would you mind opening the door?"], a: 2 },
    { t: "c", q: "Would you mind ___ the music down?", o: ["turn", "turning", "to turn"], a: 1 },
    { t: "c", q: "The bag looks heavy. ___ I carry it for you?", o: ["Shall", "Will", "Do"], a: 0 },
    { t: "c", q: "How about ___ to the park?", o: ["go", "to go", "going"], a: 2 },
    { t: "c", q: "Can I ___ your umbrella? I'll bring it back tomorrow.", o: ["lend", "borrow", "give"], a: 1 },
    { t: "c", q: "— Would you mind if I sit here? — ___", o: ["Yes, sit.", "No, not at all.", "Yes, I mind, please sit."], a: 1 },
    { t: "i", q: "Could you ___ me some money? (дать взаймы)", a: ["lend"] },
    { t: "i", q: "Why ___ we order a pizza?", a: ["don't"] },
    { t: "i", q: "It's dark. Could you turn ___ the light?", a: ["on"] },
    { t: "o", a: "Could you give me a lift to the airport", ru: "Не мог бы ты подвезти меня в аэропорт?", end: "?" },
    { t: "tr", ru: "Давай я помогу тебе?", a: ["Shall I help you", "Can I help you", "Do you want me to help you", "Would you like me to help you"] },
    { t: "tr", ru: "Не могли бы вы повторить, пожалуйста?", a: ["Could you repeat that please", "Could you repeat please", "Could you repeat it please", "Could you say that again please"] },
    { t: "l", a: "Would you like me to call a taxi" }
  ]
});
