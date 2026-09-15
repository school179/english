// ===== Уровень A2 · Модуль 9 =====
LESSONS.push({
  id: 37, module: 9, icon: "🗓️", title: "Договорённости: Present Continuous о будущем", en: "I'm meeting Tom tomorrow",
  goal: "Говорить о планах, которые уже договорены, и приглашать: What are you doing on Saturday?",
  vocab: [
    "appointment|əˈpɔɪntmənt|запись, встреча (к врачу и т. п.)", "meeting|ˈmiːtɪŋ|совещание, встреча", "dentist|ˈdentɪst|стоматолог",
    "flight|flaɪt|рейс, перелёт", "wedding|ˈwedɪŋ|свадьба", "celebrate|ˈselɪbreɪt|праздновать", "invite|ɪnˈvaɪt|приглашать",
    "invitation|ˌɪnvɪˈteɪʃn|приглашение", "accept|əkˈsept|принимать (приглашение)", "arrange|əˈreɪndʒ|договариваться, организовывать",
    "free|friː|свободный", "plans|plænz|планы", "this weekend|ðɪs ˌwiːkˈend|в эти выходные", "the day after tomorrow|ðə deɪ ˈɑːftə təˈmɒrəʊ|послезавтра",
    "in two weeks|ɪn tuː wiːks|через две недели", "diary|ˈdaɪəri|ежедневник", "Are you free?|ɑː juː friː|Ты свободен?", "What about...?|wɒt əˈbaʊt|Как насчёт...?",
    "I'm afraid|aɪm əˈfreɪd|боюсь, что (вежливый отказ)", "another time|əˈnʌðə taɪm|в другой раз"
  ],
  theory: `
<h3>Present Continuous для будущего</h3>
<p>Если о встрече <b>уже договорились</b> (есть время, место, билеты, запись), англичане используют Present Continuous + указание на будущее время.</p>
<div class="ex"><b>I'm meeting Tom at 6 tomorrow.</b> — Завтра в 6 я встречаюсь с Томом.</div>
<div class="ex"><b>We're flying to Rome on Friday.</b> — В пятницу мы летим в Рим.</div>
<div class="ex"><b>She's seeing the dentist next Monday.</b> — В следующий понедельник она идёт к стоматологу.</div>
<div class="ex"><b>What are you doing this weekend?</b> — Что ты делаешь в эти выходные?</div>
<div class="note">Без слова о будущем фраза значит «сейчас»: <i>I'm meeting Tom</i> = я сейчас встречаюсь с Томом. Добавляйте <b>tomorrow, on Friday, next week</b>.</div>

<h3>Сравним три способа говорить о будущем</h3>
<div class="table-wrap"><table>
<tr><th>Форма</th><th>Значение</th><th>Пример</th></tr>
<tr><td>Present Continuous</td><td>договорённость, всё организовано</td><td>I'm playing tennis with Ann on Sunday.</td></tr>
<tr><td>be going to</td><td>намерение, решил заранее</td><td>I'm going to play tennis more often.</td></tr>
<tr><td>will</td><td>решение в момент речи, обещание</td><td>OK, I'll play with you!</td></tr>
</table></div>
<div class="tip">Расписания (поезда, фильмы, уроки) — Present Simple: <b>The train leaves at 7.15.</b> <b>The film starts at 8.</b></div>

<h3>Как пригласить и ответить</h3>
<div class="ex"><b>Are you free on Saturday evening?</b> — Ты свободен в субботу вечером?</div>
<div class="ex"><b>Would you like to come to my birthday party?</b> — Хочешь прийти на мой день рождения?</div>
<div class="ex"><b>What about Sunday?</b> — Как насчёт воскресенья?</div>
<div class="ex"><b>I'd love to, thanks!</b> — С удовольствием, спасибо!</div>
<div class="ex"><b>I'm afraid I can't. I'm working that day.</b> — Боюсь, не смогу. Я работаю в тот день.</div>
<div class="ex"><b>Maybe another time.</b> — Может, в другой раз.</div>`,
  dialog: [
    "A|Hi Kate! Are you free on Saturday? It's my birthday and I'm having a party.|Привет, Кейт! Ты свободна в субботу? У меня день рождения, я устраиваю вечеринку.",
    "B|Oh, I'd love to come, but I'm afraid I can't. I'm going to my cousin's wedding.|Ой, я бы с радостью, но, боюсь, не смогу. Я иду на свадьбу к двоюродной сестре.",
    "A|What a pity! What are you doing on Sunday?|Как жаль! А что ты делаешь в воскресенье?",
    "B|Nothing special. I'm meeting my sister in the morning, but I'm free in the afternoon.|Ничего особенного. Утром встречаюсь с сестрой, а днём свободна.",
    "A|Great! What about lunch together at 2?|Отлично! Как насчёт обеда вместе в 2?",
    "B|Perfect. See you on Sunday!|Идеально. Увидимся в воскресенье!"
  ],
  ex: [
    { t: "c", q: "I ___ my grandmother tomorrow. I've already bought the train tickets.", o: ["visit", "am visiting", "visited"], a: 1 },
    { t: "c", q: "What ___ you doing on Friday evening?", o: ["do", "are", "will"], a: 1 },
    { t: "c", q: "The film ___ at 7.30. (расписание)", o: ["starts", "is starting", "will starting"], a: 0 },
    { t: "c", q: "— Would you like to come? — ___", o: ["Yes, I'd love to!", "Yes, I like.", "Yes, I would love."], a: 0 },
    { t: "c", q: "Вежливый отказ:", o: ["No. I don't want.", "I'm afraid I can't.", "Never!"], a: 1 },
    { t: "c", q: "«Послезавтра» =", o: ["after tomorrow", "the day after tomorrow", "the next tomorrow"], a: 1 },
    { t: "i", q: "We ___ (fly) to Sochi next Monday.", a: ["are flying", "'re flying"] },
    { t: "i", q: "I've got an ___ with the doctor at 10. (запись)", a: ["appointment"] },
    { t: "i", q: "___ you free tomorrow?", a: ["are"] },
    { t: "o", a: "Are you doing anything this weekend", ru: "Ты чем-нибудь занят в эти выходные?", end: "?" },
    { t: "tr", ru: "Завтра я встречаюсь с Анной.", a: ["I am meeting Anna tomorrow", "I'm meeting Anna tomorrow", "Tomorrow I am meeting Anna", "Tomorrow I'm meeting Anna", "I'm seeing Anna tomorrow", "I am seeing Anna tomorrow"] },
    { t: "l", a: "What about another time" }
  ]
});

LESSONS.push({
  id: 38, module: 9, icon: "🔮", title: "Прогнозы: will, might, probably", en: "It might rain",
  goal: "Делать предсказания и говорить о вероятности: Robots will do the housework. I might be late.",
  vocab: [
    "future|ˈfjuːtʃə|будущее", "robot|ˈrəʊbɒt|робот", "technology|tekˈnɒlədʒi|технология", "environment|ɪnˈvaɪrənmənt|окружающая среда",
    "pollution|pəˈluːʃn|загрязнение", "climate|ˈklaɪmət|климат", "electric car|ɪˈlektrɪk kɑː|электромобиль", "space|speɪs|космос",
    "planet|ˈplænɪt|планета", "invent|ɪnˈvent|изобретать", "disappear|ˌdɪsəˈpɪə|исчезать", "increase|ɪnˈkriːs|увеличиваться",
    "might|maɪt|может быть, возможно (сделает)", "may|meɪ|возможно; можно", "probably|ˈprɒbəbli|вероятно", "definitely|ˈdefɪnətli|определённо",
    "certainly|ˈsɜːtnli|конечно, несомненно", "perhaps|pəˈhæps|возможно, может быть", "I'm sure|aɪm ʃʊə|я уверен", "I doubt|aɪ daʊt|сомневаюсь"
  ],
  theory: `
<h3>will — предсказание, мнение о будущем</h3>
<span class="formula">will / won't + глагол</span>
<div class="ex"><b>People will live on Mars.</b> — Люди будут жить на Марсе.</div>
<div class="ex"><b>I think it will be sunny tomorrow.</b> — Думаю, завтра будет солнечно.</div>
<div class="ex"><b>Cash won't disappear.</b> — Наличные не исчезнут.</div>
<div class="note">Сомнение: <b>I don't think it will rain</b> (не «I think it won't rain»). Отрицание ставим к think.</div>

<h3>Насколько уверен? Шкала вероятности</h3>
<div class="table-wrap"><table>
<tr><td>100%</td><td>It <b>will definitely</b> happen. / I'm sure it <b>will</b> happen.</td></tr>
<tr><td>80%</td><td>It <b>will probably</b> happen.</td></tr>
<tr><td>50%</td><td>It <b>might / may</b> happen. / <b>Perhaps</b> it will happen.</td></tr>
<tr><td>20%</td><td>It <b>probably won't</b> happen.</td></tr>
<tr><td>0%</td><td>It <b>definitely won't</b> happen.</td></tr>
</table></div>
<div class="note">Порядок слов: <b>will probably</b> (наречие после will), но <b>probably won't</b> (наречие перед won't).</div>

<h3>might / may — «возможно»</h3>
<span class="formula">might / might not + глагол (без to, без -s)</span>
<div class="ex"><b>Take an umbrella. It might rain.</b> — Возьми зонт. Может пойти дождь.</div>
<div class="ex"><b>I might go to the party, I'm not sure.</b> — Может, пойду на вечеринку, не уверен.</div>
<div class="ex"><b>She may not come today.</b> — Возможно, она сегодня не придёт.</div>
<div class="tip">Вопросы с might звучат книжно. В разговоре спрашивают: <b>Do you think you'll come?</b> — Думаешь, придёшь?</div>`,
  dialog: [
    "A|What do you think life will be like in 50 years?|Как думаешь, какой будет жизнь через 50 лет?",
    "B|I'm sure robots will do all the housework. And everybody will have an electric car.|Уверен, роботы будут делать всю работу по дому. И у всех будут электромобили.",
    "A|Will people live on other planets?|Люди будут жить на других планетах?",
    "B|They might live on Mars, but I doubt it. It's too expensive.|Может быть, на Марсе, но я сомневаюсь. Это слишком дорого.",
    "A|And will there be less pollution?|А загрязнения станет меньше?",
    "B|I hope so. But I don't think the climate will get better quickly.|Надеюсь. Но не думаю, что климат быстро станет лучше."
  ],
  ex: [
    { t: "c", q: "I think people ___ on the Moon one day.", o: ["will live", "will living", "live will"], a: 0 },
    { t: "c", q: "Take a jacket. It ___ cold later.", o: ["might be", "might is", "might to be"], a: 0 },
    { t: "c", q: "He will ___ be late. He's always late. (вероятно)", o: ["probable", "probably", "probably to"], a: 1 },
    { t: "c", q: "Как лучше сказать «Думаю, он не придёт»?", o: ["I think he won't come.", "I don't think he'll come.", "I think he doesn't will come."], a: 1 },
    { t: "c", q: "She ___ come to the party. She isn't sure. (может быть)", o: ["might", "will definitely", "must"], a: 0 },
    { t: "c", q: "Где правильно?", o: ["It probably won't rain.", "It won't probably rain.", "It will probably not raining."], a: 0 },
    { t: "i", q: "I'm ___ you'll pass the exam. (уверен)", a: ["sure"] },
    { t: "i", q: "Cars will ___ (not / need) drivers.", a: ["not need"] },
    { t: "i", q: "We might ___ (go) to the beach tomorrow.", a: ["go"] },
    { t: "o", a: "Robots will probably do the housework", ru: "Роботы, вероятно, будут делать работу по дому.", end: "." },
    { t: "tr", ru: "Может пойти снег.", a: ["It might snow", "It may snow"] },
    { t: "tr", ru: "Думаю, завтра будет жарко.", a: ["I think it will be hot tomorrow", "I think it'll be hot tomorrow", "I think tomorrow will be hot", "I think it will be hot tomorrow"] },
    { t: "l", a: "I might not have time" }
  ]
});

LESSONS.push({
  id: 39, module: 9, icon: "🔀", title: "Условные предложения: if + will", en: "If it rains, I'll stay home",
  goal: "Говорить о реальных условиях и их последствиях в будущем.",
  vocab: [
    "if|ɪf|если", "unless|ənˈles|если не", "as soon as|əz suːn əz|как только", "miss the bus|mɪs ðə bʌs|опоздать на автобус",
    "be late|bi leɪt|опоздать", "pass an exam|pɑːs ən ɪɡˈzæm|сдать экзамен", "fail|feɪl|провалить", "get wet|ɡet wet|промокнуть",
    "catch a cold|kætʃ ə kəʊld|простудиться", "save money|seɪv ˈmʌni|копить, экономить деньги", "spend|spend|тратить",
    "hurry up|ˈhʌri ʌp|поторопиться", "get lost|ɡet lɒst|заблудиться", "recycle|ˌriːˈsaɪkl|перерабатывать", "wake up|weɪk ʌp|просыпаться",
    "alarm clock|əˈlɑːm klɒk|будильник", "on time|ɒn taɪm|вовремя", "worry|ˈwʌri|волноваться", "prepare|prɪˈpeə|готовиться", "promise|ˈprɒmɪs|обещать"
  ],
  theory: `
<h3>First Conditional — реальное условие в будущем</h3>
<span class="formula">If + Present Simple, ... will + глагол</span>
<div class="ex"><b>If it rains, we'll stay at home.</b> — Если пойдёт дождь, мы останемся дома.</div>
<div class="ex"><b>If you don't hurry up, you'll miss the bus.</b> — Если не поторопишься, опоздаешь на автобус.</div>
<div class="ex"><b>If I pass the exam, I'll celebrate.</b> — Если я сдам экзамен, я отпраздную.</div>
<div class="note">Главная ловушка для русскоговорящих: после <b>if</b> будущее время <b>не ставится</b>, хотя по-русски «если пойдёт». Правильно: <b>If it rains</b>, а не «If it will rain».</div>

<h3>Порядок частей можно менять</h3>
<div class="ex"><b>We'll stay at home if it rains.</b> — Мы останемся дома, если пойдёт дождь.</div>
<p>Когда if в начале — ставим запятую. Когда в середине — запятая не нужна.</p>

<h3>Вопросы</h3>
<div class="ex"><b>What will you do if you don't get the job?</b> — Что ты будешь делать, если не получишь работу?</div>

<h3>when, as soon as, unless — то же правило</h3>
<div class="ex"><b>I'll call you when I arrive.</b> — Я позвоню тебе, когда приеду. (не «when I will arrive»)</div>
<div class="ex"><b>As soon as I get home, I'll have a shower.</b> — Как только приду домой, приму душ.</div>
<div class="ex"><b>You'll be late unless you leave now.</b> — Ты опоздаешь, если не выйдешь сейчас.</div>
<p><b>unless</b> = <b>if ... not</b>.</p>

<h3>Вместо will — might, can, повелительное</h3>
<div class="ex"><b>If you're tired, you can go home.</b> — Если устал, можешь идти домой.</div>
<div class="ex"><b>If you see Tom, tell him to call me.</b> — Если увидишь Тома, скажи ему мне позвонить.</div>
<div class="tip"><b>Zero Conditional</b> — для общих истин: <b>If you heat ice, it melts</b> (Present Simple в обеих частях). Если нагреть лёд, он тает — всегда.</div>`,
  dialog: [
    "A|Are you coming to the picnic tomorrow?|Ты придёшь на пикник завтра?",
    "B|If the weather is good, I'll come. But if it rains, I'll stay at home.|Если погода будет хорошая, приду. Но если пойдёт дождь, останусь дома.",
    "A|The forecast says it might rain in the afternoon.|Прогноз говорит, что днём может пойти дождь.",
    "B|Then let's start early. If we meet at ten, we'll have more time.|Тогда давай начнём пораньше. Если встретимся в десять, у нас будет больше времени.",
    "A|OK. I'll text you as soon as I wake up.|Хорошо. Напишу тебе, как только проснусь.",
    "B|Don't forget an umbrella! If you get wet, you'll catch a cold.|Не забудь зонт! Если промокнешь — простудишься."
  ],
  ex: [
    { t: "c", q: "If it ___ tomorrow, we'll go to the beach.", o: ["will be sunny", "is sunny", "sunny"], a: 1 },
    { t: "c", q: "If you study hard, you ___ the exam.", o: ["pass", "will pass", "passed"], a: 1 },
    { t: "c", q: "I'll call you when I ___ home.", o: ["get", "will get", "got"], a: 0 },
    { t: "c", q: "What will you do if you ___ the bus?", o: ["will miss", "miss", "missing"], a: 1 },
    { t: "c", q: "You won't get the job ___ you speak English. (если не)", o: ["if", "unless", "when"], a: 1 },
    { t: "c", q: "If you heat water to 100°C, it ___.", o: ["boils", "will boiling", "boiled"], a: 0 },
    { t: "i", q: "If I ___ (have) time, I'll help you.", a: ["have"] },
    { t: "i", q: "If you don't wear a coat, you ___ (be) cold.", a: ["will be", "'ll be"] },
    { t: "i", q: "As ___ as I arrive, I'll send you a message.", a: ["soon"] },
    { t: "o", a: "If you are hungry I will make a sandwich", ru: "Если ты голоден, я сделаю бутерброд.", end: "." },
    { t: "tr", ru: "Если пойдёт дождь, я возьму такси.", a: ["If it rains I will take a taxi", "If it rains I'll take a taxi", "I will take a taxi if it rains", "I'll take a taxi if it rains"] },
    { t: "tr", ru: "Я позвоню тебе, когда приеду.", a: ["I will call you when I arrive", "I'll call you when I arrive", "I will call you when I get there", "I'll call you when I get there", "I'll phone you when I arrive", "I will phone you when I arrive"] },
    { t: "l", a: "If you hurry up you won't be late", alt: ["if you hurry up you will not be late"] }
  ]
});

LESSONS.push({
  id: 40, module: 9, icon: "🧳", title: "Путешествие: аэропорт и отель", en: "Check in, please",
  goal: "Уверенно проходить аэропорт, заселяться в отель и решать проблемы в поездке.",
  vocab: [
    "passport|ˈpɑːspɔːt|паспорт", "luggage|ˈlʌɡɪdʒ|багаж", "suitcase|ˈsuːtkeɪs|чемодан", "hand luggage|hænd ˈlʌɡɪdʒ|ручная кладь",
    "boarding pass|ˈbɔːdɪŋ pɑːs|посадочный талон", "check in|tʃek ɪn|регистрироваться; заселяться", "check out|tʃek aʊt|выезжать из отеля",
    "departure|dɪˈpɑːtʃə|отправление, вылет", "arrival|əˈraɪvl|прибытие", "delay|dɪˈleɪ|задержка; задерживать", "cancel|ˈkænsl|отменять",
    "gate|ɡeɪt|выход (на посадку)", "security|sɪˈkjʊərəti|досмотр, безопасность", "reservation|ˌrezəˈveɪʃn|бронь", "single room|ˈsɪŋɡl ruːm|одноместный номер",
    "double room|ˈdʌbl ruːm|двухместный номер (с одной кроватью)", "reception|rɪˈsepʃn|стойка регистрации", "key card|kiː kɑːd|ключ-карта",
    "sightseeing|ˈsaɪtsiːɪŋ|осмотр достопримечательностей", "guided tour|ˌɡaɪdɪd ˈtʊə|экскурсия с гидом", "souvenir|ˌsuːvəˈnɪə|сувенир", "view|vjuː|вид"
  ],
  theory: `
<h3>В аэропорту</h3>
<div class="ex"><b>Where is the check-in desk for flight BA 208?</b> — Где стойка регистрации на рейс BA 208?</div>
<div class="ex"><b>Can I see your passport, please?</b> — Можно ваш паспорт?</div>
<div class="ex"><b>How many bags are you checking in?</b> — Сколько сумок сдаёте в багаж?</div>
<div class="ex"><b>Just one suitcase and this hand luggage.</b> — Один чемодан и эта ручная кладь.</div>
<div class="ex"><b>Could I have a window seat, please?</b> — Можно место у окна?</div>
<div class="ex"><b>Boarding starts at 10.15 at gate 12.</b> — Посадка начинается в 10:15 у выхода 12.</div>
<div class="ex"><b>My flight has been delayed.</b> — Мой рейс задержали.</div>

<h3>В отеле</h3>
<div class="ex"><b>Hello, I have a reservation. My name is Ivanov.</b> — Здравствуйте, у меня бронь на фамилию Иванов.</div>
<div class="ex"><b>I'd like to book a double room for three nights.</b> — Я бы хотел забронировать двухместный номер на три ночи.</div>
<div class="ex"><b>Is breakfast included?</b> — Завтрак включён?</div>
<div class="ex"><b>What time is check-out?</b> — Во сколько выезд?</div>
<div class="ex"><b>Could you call a taxi for me, please?</b> — Не могли бы вы вызвать мне такси?</div>

<h3>Если что-то не так</h3>
<div class="ex"><b>There's a problem with my room. The shower doesn't work.</b> — С номером проблема. Не работает душ.</div>
<div class="ex"><b>My suitcase hasn't arrived.</b> — Мой чемодан не прибыл.</div>
<div class="ex"><b>I've lost my key card.</b> — Я потерял ключ-карту.</div>
<div class="ex"><b>Could I change rooms, please?</b> — Можно поменять номер?</div>
<div class="note"><b>luggage</b> — неисчисляемое: <b>How much luggage</b>, <b>a piece of luggage</b>. Нельзя «luggages». Для штук — <b>bags / suitcases</b>.</div>
<div class="tip">Полезная грамматика: Present Perfect для проблем (<i>I've lost..., It hasn't arrived</i>) и Present Simple для расписания (<i>The flight leaves at 9</i>).</div>`,
  dialog: [
    "A|Good evening. Welcome to the Park Hotel. How can I help you?|Добрый вечер. Добро пожаловать в отель «Парк». Чем могу помочь?",
    "B|Hi, I have a reservation for two nights. The name is Petrova.|Здравствуйте, у меня бронь на две ночи. Фамилия Петрова.",
    "A|Yes, a single room with a sea view. Can I see your passport, please?|Да, одноместный номер с видом на море. Можно ваш паспорт?",
    "B|Here you are. Is breakfast included?|Вот, пожалуйста. Завтрак включён?",
    "A|Yes, it's served from 7 to 10 in the restaurant. Here's your key card. Room 305.|Да, с 7 до 10 в ресторане. Вот ваша ключ-карта. Номер 305.",
    "B|Thank you. And what time is check-out?|Спасибо. А во сколько выезд?",
    "A|At twelve o'clock. Enjoy your stay!|В двенадцать часов. Приятного отдыха!"
  ],
  ex: [
    { t: "c", q: "You show this document at passport control:", o: ["boarding pass", "passport", "receipt"], a: 1 },
    { t: "c", q: "Your flight leaves late. It is...", o: ["cancelled", "delayed", "booked"], a: 1 },
    { t: "c", q: "How much ___ have you got?", o: ["luggages", "luggage", "suitcase"], a: 1 },
    { t: "c", q: "You go to the ___ to check in at a hotel.", o: ["reception", "gate", "security"], a: 0 },
    { t: "c", q: "Вежливо попросить место у окна:", o: ["Give me window.", "Could I have a window seat, please?", "I want window seat."], a: 1 },
    { t: "c", q: "A room for one person is a ___ room.", o: ["double", "single", "twin"], a: 1 },
    { t: "i", q: "Is breakfast ___? (включён)", a: ["included"] },
    { t: "i", q: "What time is check-___?", a: ["out"] },
    { t: "i", q: "My suitcase hasn't ___ (arrive).", a: ["arrived"] },
    { t: "o", a: "I would like to book a double room", ru: "Я бы хотел забронировать двухместный номер.", end: "." },
    { t: "tr", ru: "У меня есть бронь.", a: ["I have a reservation", "I've got a reservation", "I have a booking", "I've got a booking"] },
    { t: "tr", ru: "Мой рейс отменили.", a: ["My flight has been cancelled", "My flight was cancelled", "My flight has been canceled", "My flight was canceled", "They cancelled my flight", "They have cancelled my flight"] },
    { t: "l", a: "Boarding starts at gate twelve", alt: ["boarding starts at gate 12"] }
  ]
});
