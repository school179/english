// ===== Уровень A2 · Модуль 7 =====
MODULES.push(
  { id: 7, level: "A2", title: "Сравнение и опыт", desc: "Сравнительная степень, Present Perfect" },
  { id: 8, level: "A2", title: "Истории из прошлого", desc: "Past Continuous, used to, наречия" },
  { id: 9, level: "A2", title: "Будущее и условия", desc: "Планы, прогнозы, условные предложения, путешествия" },
  { id: 10, level: "A2", title: "Правила и советы", desc: "have to, must, should, вежливые просьбы" },
  { id: 11, level: "A2", title: "Люди и вещи", desc: "Количество, some/any-слова, глагольные модели, who/which" },
  { id: 12, level: "A2", title: "Жизнь и медиа", desc: "for/since, пассивный залог, фразовые глаголы, письма" }
);

LESSONS.push({
  id: 29, module: 7, icon: "⚖️", title: "Сравнительная степень", en: "Bigger, more expensive",
  goal: "Сравнивать людей, места и вещи: Moscow is bigger than Kazan. The bus is cheaper than a taxi.",
  vocab: [
    "than|ðæn|чем", "fast|fɑːst|быстрый; быстро", "slow|sləʊ|медленный", "easy|ˈiːzi|лёгкий, простой", "difficult|ˈdɪfɪkəlt|трудный",
    "comfortable|ˈkʌmftəbl|удобный", "dangerous|ˈdeɪndʒərəs|опасный", "safe|seɪf|безопасный", "healthy|ˈhelθi|здоровый, полезный",
    "quiet|ˈkwaɪət|тихий", "noisy|ˈnɔɪzi|шумный", "crowded|ˈkraʊdɪd|многолюдный", "modern|ˈmɒdn|современный",
    "traditional|trəˈdɪʃənl|традиционный", "clean|kliːn|чистый", "dirty|ˈdɜːti|грязный", "better|ˈbetə|лучше",
    "worse|wɜːs|хуже", "a bit|ə bɪt|немного, чуть-чуть", "much|mʌtʃ|намного (перед сравнительной степенью)", "as ... as|æz ... æz|такой же ... как", "village|ˈvɪlɪdʒ|деревня"
  ],
  theory: `
<h3>Как образуется сравнительная степень</h3>
<div class="table-wrap"><table>
<tr><th>Прилагательное</th><th>Правило</th><th>Примеры</th></tr>
<tr><td>короткое (1 слог)</td><td>+ <mark>-er</mark></td><td>cheap → cheaper, fast → faster, old → older</td></tr>
<tr><td>на -e</td><td>+ <mark>-r</mark></td><td>safe → safer, nice → nicer</td></tr>
<tr><td>гласная + согласная</td><td>удвоение + -er</td><td>big → bigger, hot → hotter, thin → thinner</td></tr>
<tr><td>на -y</td><td>y → <mark>-ier</mark></td><td>easy → easier, busy → busier, noisy → noisier</td></tr>
<tr><td>длинное (2+ слога)</td><td><mark>more</mark> + прил.</td><td>more expensive, more comfortable, more modern</td></tr>
<tr><td>исключения</td><td>—</td><td>good → <b>better</b>, bad → <b>worse</b>, far → <b>further/farther</b></td></tr>
</table></div>

<h3>than — «чем»</h3>
<div class="ex"><b>Moscow is bigger than St Petersburg.</b> — Москва больше Санкт-Петербурга.</div>
<div class="ex"><b>A taxi is more expensive than the metro.</b> — Такси дороже метро.</div>
<div class="ex"><b>My English is better than last year.</b> — Мой английский лучше, чем в прошлом году.</div>
<div class="ex"><b>She is older than me.</b> — Она старше меня.</div>
<div class="note">Нельзя смешивать два способа: <b>more cheap</b> и <b>more cheaper</b> — ошибки. Правильно: <b>cheaper</b>. После than в разговоре используют <b>me, him, her</b>: <i>taller than me</i>.</div>

<h3>Насколько? much / a bit</h3>
<div class="ex"><b>The train is much faster than the bus.</b> — Поезд намного быстрее автобуса.</div>
<div class="ex"><b>This jacket is a bit cheaper.</b> — Эта куртка чуть дешевле.</div>

<h3>as ... as — «такой же, как»</h3>
<div class="ex"><b>My brother is as tall as my father.</b> — Мой брат такого же роста, как отец.</div>
<div class="ex"><b>The village isn't as noisy as the city.</b> — В деревне не так шумно, как в городе.</div>
<div class="tip">Спросить мнение: <b>Which is better, the city or the country?</b> — Что лучше: город или деревня?</div>`,
  dialog: [
    "A|Do you prefer living in the city or in a village?|Тебе больше нравится жить в городе или в деревне?",
    "B|The city, I think. Life is more interesting and it's easier to find a job.|Думаю, в городе. Жизнь интереснее, и работу найти легче.",
    "A|But villages are quieter and cleaner. And houses are much cheaper.|Но в деревнях тише и чище. И дома намного дешевле.",
    "B|That's true. The air is healthier too.|Это правда. И воздух полезнее.",
    "A|And people are friendlier!|И люди дружелюбнее!",
    "B|Maybe. But the city isn't as boring as a village!|Может быть. Но в городе не так скучно, как в деревне!"
  ],
  ex: [
    { t: "c", q: "An elephant is ___ than a horse.", o: ["big", "bigger", "more big"], a: 1 },
    { t: "c", q: "English is ___ than Chinese for me.", o: ["easyer", "more easy", "easier"], a: 2 },
    { t: "c", q: "A plane is ___ than a train.", o: ["more expensive", "expensiver", "more expensiver"], a: 0 },
    { t: "c", q: "My cooking is ___ than my sister's. She's a terrible cook!", o: ["gooder", "better", "more good"], a: 1 },
    { t: "c", q: "Today the weather is ___ than yesterday. It's raining again.", o: ["worse", "badder", "more bad"], a: 0 },
    { t: "c", q: "Tom is ___ tall ___ his brother. They're the same height.", o: ["as / than", "more / than", "as / as"], a: 2 },
    { t: "i", q: "The metro is ___ (fast) than the bus.", a: ["faster"] },
    { t: "i", q: "This chair is more ___ than that sofa. (удобный)", a: ["comfortable"] },
    { t: "i", q: "July is ___ (hot) than May.", a: ["hotter"] },
    { t: "i", q: "My sister is two years older ___ me.", a: ["than"] },
    { t: "o", a: "The city is much noisier than the village", ru: "Город намного шумнее деревни.", end: "." },
    { t: "tr", ru: "Кофе дороже чая.", a: ["Coffee is more expensive than tea"] },
    { t: "tr", ru: "Мой брат выше меня.", a: ["My brother is taller than me", "My brother is taller than I am"] },
    { t: "l", a: "It's a bit cheaper than the other one", alt: ["it is a bit cheaper than the other one"] }
  ]
});

LESSONS.push({
  id: 30, module: 7, icon: "🏔️", title: "Превосходная степень. География", en: "The biggest in the world",
  goal: "Говорить о самом лучшем, большом, интересном: the highest mountain, the most popular city.",
  vocab: [
    "mountain|ˈmaʊntən|гора", "river|ˈrɪvə|река", "lake|leɪk|озеро", "ocean|ˈəʊʃn|океан", "desert|ˈdezət|пустыня",
    "island|ˈaɪlənd|остров", "forest|ˈfɒrɪst|лес", "coast|kəʊst|побережье", "population|ˌpɒpjuˈleɪʃn|население",
    "high|haɪ|высокий (о горе, здании)", "long|lɒŋ|длинный", "deep|diːp|глубокий", "wide|waɪd|широкий",
    "famous|ˈfeɪməs|знаменитый", "popular|ˈpɒpjələ|популярный", "ancient|ˈeɪnʃənt|древний", "amazing|əˈmeɪzɪŋ|потрясающий",
    "in the world|ɪn ðə wɜːld|в мире", "the best|ðə best|самый лучший", "the worst|ðə wɜːst|самый худший", "sight|saɪt|достопримечательность", "ever|ˈevə|когда-либо"
  ],
  theory: `
<h3>Образование: the + -est / the most</h3>
<div class="table-wrap"><table>
<tr><th>Прилагательное</th><th>Сравнительная</th><th>Превосходная</th></tr>
<tr><td>cheap</td><td>cheaper</td><td><mark>the cheapest</mark></td></tr>
<tr><td>big</td><td>bigger</td><td><mark>the biggest</mark></td></tr>
<tr><td>happy</td><td>happier</td><td><mark>the happiest</mark></td></tr>
<tr><td>beautiful</td><td>more beautiful</td><td><mark>the most beautiful</mark></td></tr>
<tr><td>good</td><td>better</td><td><mark>the best</mark></td></tr>
<tr><td>bad</td><td>worse</td><td><mark>the worst</mark></td></tr>
<tr><td>far</td><td>further</td><td><mark>the furthest</mark></td></tr>
</table></div>
<div class="note">С превосходной степенью почти всегда нужен артикль <b>the</b>: <b>the longest river</b>, а не «longest river».</div>

<h3>in или of?</h3>
<p>После превосходной степени место — с <b>in</b>, группа — с <b>of</b>:</p>
<div class="ex"><b>Baikal is the deepest lake in the world.</b> — Байкал — самое глубокое озеро в мире.</div>
<div class="ex"><b>Russia is the biggest country in the world.</b> — Россия — самая большая страна в мире.</div>
<div class="ex"><b>She is the youngest of three sisters.</b> — Она самая младшая из трёх сестёр.</div>

<h3>Самый ... из тех, что я когда-либо ...</h3>
<div class="ex"><b>It's the best film I've ever seen.</b> — Это лучший фильм, который я когда-либо видел.</div>
<p>Форма <i>I've ever seen</i> — это Present Perfect, подробно — в следующем уроке.</p>

<h3>one of the ... — один из самых</h3>
<div class="ex"><b>Paris is one of the most popular cities in Europe.</b> — Париж — один из самых популярных городов Европы.</div>
<div class="note">После <b>one of the</b> — существительное во множественном числе: one of the best <b>restaurants</b>.</div>
<div class="tip"><b>high</b> — для гор, зданий, цен (high mountain, high prices). <b>tall</b> — для людей, деревьев и узких высоких зданий (a tall man, a tall tower).</div>`,
  dialog: [
    "A|What's the most interesting place in your country?|Какое самое интересное место в твоей стране?",
    "B|I think it's Lake Baikal. It's the deepest lake in the world.|Думаю, озеро Байкал. Это самое глубокое озеро в мире.",
    "A|Wow! Is it the biggest lake too?|Ого! И самое большое тоже?",
    "B|No, the Caspian Sea is bigger. But Baikal is one of the most beautiful places I've ever seen.|Нет, Каспийское море больше. Но Байкал — одно из самых красивых мест, что я видел.",
    "A|When is the best time to go there?|Когда туда лучше всего ехать?",
    "B|In winter, when the ice is clear. But it's the coldest time, of course!|Зимой, когда лёд прозрачный. Но это, конечно, самое холодное время!"
  ],
  ex: [
    { t: "c", q: "The Nile is ___ river in Africa.", o: ["the longest", "longest", "the most long"], a: 0 },
    { t: "c", q: "It's ___ film of the year.", o: ["the most bad", "the worst", "the baddest"], a: 1 },
    { t: "c", q: "This is the most expensive hotel ___ the city.", o: ["of", "in", "than"], a: 1 },
    { t: "c", q: "Kate is the oldest ___ the three children.", o: ["in", "of", "than"], a: 1 },
    { t: "c", q: "London is one of the biggest ___ in Europe.", o: ["city", "cities", "citys"], a: 1 },
    { t: "c", q: "Everest is the ___ mountain in the world.", o: ["tallest", "highest", "longest"], a: 1 },
    { t: "i", q: "Monday is the ___ (busy) day of the week.", a: ["busiest"] },
    { t: "i", q: "It's the most ___ (famous) museum in Paris.", a: ["famous"] },
    { t: "i", q: "This is the ___ (good) pizza in town!", a: ["best"] },
    { t: "i", q: "Russia is the ___ (big) country in the world.", a: ["biggest"] },
    { t: "o", a: "It is the most beautiful place in the world", ru: "Это самое красивое место в мире.", end: "." },
    { t: "tr", ru: "Это самый дешёвый магазин в городе.", a: ["It is the cheapest shop in the city", "It's the cheapest shop in the city", "This is the cheapest shop in the city", "It is the cheapest shop in town", "It's the cheapest shop in town", "This is the cheapest shop in town"] },
    { t: "l", a: "It's the best day of my life", alt: ["it is the best day of my life"] }
  ]
});

LESSONS.push({
  id: 31, module: 7, icon: "🌟", title: "Present Perfect: жизненный опыт", en: "Have you ever been...?",
  goal: "Рассказывать о своём опыте: I've been to Italy. Have you ever tried sushi?",
  vocab: [
    "been (be)|biːn|был (3-я форма be)", "gone (go)|ɡɒn|ушёл, уехал (3-я форма go)", "seen (see)|siːn|видел", "done (do)|dʌn|сделал",
    "eaten (eat)|ˈiːtn|съел", "tried (try)|traɪd|попробовал", "flown (fly)|fləʊn|летал", "ridden (ride)|ˈrɪdn|ездил верхом",
    "won (win)|wʌn|выиграл", "lost (lose)|lɒst|потерял, проиграл", "met (meet)|met|встретил", "broken (break)|ˈbrəʊkən|сломал",
    "climb|klaɪm|взбираться", "taste|teɪst|пробовать на вкус", "horse|hɔːs|лошадь", "competition|ˌkɒmpəˈtɪʃn|соревнование, конкурс",
    "celebrity|səˈlebrəti|знаменитость", "abroad|əˈbrɔːd|за границей", "ever|ˈevə|когда-нибудь", "never|ˈnevə|никогда",
    "once|wʌns|однажды, один раз", "several times|ˈsevrəl taɪmz|несколько раз"
  ],
  theory: `
<h3>Что это за время</h3>
<p><b>Present Perfect</b> связывает прошлое с настоящим. На A2 главное применение — <b>жизненный опыт</b>: что вы делали (или не делали) когда-либо в жизни, <b>не уточняя когда</b>.</p>
<span class="formula">have / has + 3-я форма глагола (Past Participle)</span>
<div class="table-wrap"><table>
<tr><th></th><th>I / you / we / they</th><th>he / she / it</th></tr>
<tr><td>+</td><td>I <mark>have</mark> (I've) <mark>been</mark> to Spain.</td><td>She <mark>has</mark> (she's) <mark>seen</mark> this film.</td></tr>
<tr><td>−</td><td>I <mark>haven't</mark> tried it.</td><td>He <mark>hasn't</mark> flown.</td></tr>
<tr><td>?</td><td><mark>Have</mark> you ever <mark>eaten</mark> sushi?</td><td><mark>Has</mark> she ever <mark>won</mark>?</td></tr>
<tr><td>ответ</td><td>Yes, I have. / No, I haven't.</td><td>Yes, she has. / No, she hasn't.</td></tr>
</table></div>

<h3>3-я форма глагола</h3>
<p>У правильных глаголов она совпадает с прошедшим: work → worked → <b>worked</b>, visit → visited → <b>visited</b>.<br>У неправильных — своя форма (3-я колонка таблицы неправильных глаголов):</p>
<div class="table-wrap"><table>
<tr><th>Инфинитив</th><th>Past Simple</th><th>Past Participle</th></tr>
<tr><td>be</td><td>was/were</td><td><b>been</b></td></tr><tr><td>go</td><td>went</td><td><b>gone</b></td></tr>
<tr><td>see</td><td>saw</td><td><b>seen</b></td></tr><tr><td>do</td><td>did</td><td><b>done</b></td></tr>
<tr><td>eat</td><td>ate</td><td><b>eaten</b></td></tr><tr><td>fly</td><td>flew</td><td><b>flown</b></td></tr>
<tr><td>meet</td><td>met</td><td><b>met</b></td></tr><tr><td>win</td><td>won</td><td><b>won</b></td></tr>
</table></div>

<h3>ever, never, once, twice</h3>
<div class="ex"><b>Have you ever been to London?</b> — Ты когда-нибудь был в Лондоне?</div>
<div class="ex"><b>I've never ridden a horse.</b> — Я никогда не ездил на лошади.</div>
<div class="ex"><b>We've been to Turkey twice.</b> — Мы были в Турции дважды.</div>
<div class="ex"><b>She's met a celebrity once.</b> — Она однажды встречала знаменитость.</div>
<div class="note"><b>been to</b> — был и вернулся (опыт). <b>gone to</b> — уехал и сейчас там: <i>Tom has gone to Paris</i> = Том уехал в Париж (его здесь нет).</div>

<h3>Опыт + подробности = Past Simple</h3>
<p>Если называем <b>когда</b> или рассказываем детали — переходим в Past Simple:</p>
<div class="ex"><b>I've been to Italy. I went there in 2019.</b> — Я был в Италии. Я ездил туда в 2019 году.</div>
<div class="note">С точным временем Present Perfect нельзя: <b>I saw him yesterday</b>, а не «I've seen him yesterday».</div>`,
  dialog: [
    "A|Have you ever been abroad?|Ты когда-нибудь был за границей?",
    "B|Yes, I have. I've been to Turkey and Georgia. And you?|Да. Я был в Турции и Грузии. А ты?",
    "A|I've never been abroad, but I've flown to Vladivostok.|Я никогда не был за границей, но летал во Владивосток.",
    "B|Wow, that's far! Have you ever tried Georgian food?|Ого, это далеко! Ты когда-нибудь пробовал грузинскую еду?",
    "A|Yes, I have. I tried khachapuri last year. It was delicious!|Да. Я пробовал хачапури в прошлом году. Было очень вкусно!",
    "B|I've eaten it several times. It's my favourite!|Я ел его несколько раз. Это моё любимое блюдо!"
  ],
  ex: [
    { t: "c", q: "I ___ been to Spain.", o: ["has", "have", "am"], a: 1 },
    { t: "c", q: "She ___ never seen snow.", o: ["has", "have", "is"], a: 0 },
    { t: "c", q: "Have you ever ___ a horse?", o: ["rode", "ride", "ridden"], a: 2 },
    { t: "c", q: "Has he ever won a competition? — No, he ___", o: ["didn't.", "hasn't.", "haven't."], a: 1 },
    { t: "c", q: "I ___ Anna yesterday.", o: ["have met", "met", "have meet"], a: 1 },
    { t: "c", q: "«Том уехал в Лондон (он сейчас там)» =", o: ["Tom has been to London.", "Tom has gone to London.", "Tom has went to London."], a: 1 },
    { t: "i", q: "eat → ate → ___", a: ["eaten"] },
    { t: "i", q: "fly → flew → ___", a: ["flown"] },
    { t: "i", q: "Have you ___ tried Indian food? (когда-нибудь)", a: ["ever"] },
    { t: "i", q: "We have ___ (visit) Kazan twice.", a: ["visited"] },
    { t: "o", a: "Have you ever met a famous person", ru: "Ты когда-нибудь встречал знаменитого человека?", end: "?" },
    { t: "tr", ru: "Я никогда не был в Лондоне.", a: ["I have never been to London", "I've never been to London"] },
    { t: "tr", ru: "Ты когда-нибудь пробовал суши?", a: ["Have you ever tried sushi", "Have you ever eaten sushi"] },
    { t: "l", a: "She has been to Italy three times", alt: ["she's been to Italy three times"] }
  ]
});

LESSONS.push({
  id: 32, module: 7, icon: "✔️", title: "Present Perfect: just, already, yet", en: "I've just finished",
  goal: "Говорить о недавних событиях и результатах: I've just arrived. Have you done it yet?",
  vocab: [
    "just|dʒʌst|только что", "already|ɔːlˈredi|уже", "yet|jet|ещё (не); уже (в вопросе)", "recently|ˈriːsntli|недавно",
    "finish|ˈfɪnɪʃ|заканчивать", "send — sent|send — sent|отправлять — отправил", "receive|rɪˈsiːv|получать",
    "pack|pæk|упаковывать, собирать (вещи)", "tidy|ˈtaɪdi|убирать, прибирать", "do the washing-up|duː ðə ˌwɒʃɪŋ ˈʌp|мыть посуду",
    "make the bed|meɪk ðə bed|заправлять кровать", "do the shopping|duː ðə ˈʃɒpɪŋ|делать покупки", "iron|ˈaɪən|гладить (утюгом)",
    "take out the rubbish|teɪk aʊt ðə ˈrʌbɪʃ|выносить мусор", "book|bʊk|бронировать", "ticket|ˈtɪkɪt|билет",
    "message|ˈmesɪdʒ|сообщение", "homework|ˈhəʊmwɜːk|домашнее задание", "news|njuːz|новости", "decide|dɪˈsaɪd|решать"
  ],
  theory: `
<h3>Результат важен сейчас</h3>
<p>Present Perfect используют, когда действие завершилось, а его <b>результат виден сейчас</b>. Время не называем.</p>
<div class="ex"><b>I've lost my keys.</b> — Я потерял ключи. (сейчас их нет)</div>
<div class="ex"><b>She's cleaned the kitchen.</b> — Она убрала кухню. (сейчас чисто)</div>

<h3>just — только что</h3>
<p>Ставится между have/has и глаголом:</p>
<div class="ex"><b>I've just finished my homework.</b> — Я только что закончил домашку.</div>
<div class="ex"><b>The train has just arrived.</b> — Поезд только что прибыл.</div>

<h3>already — уже (в утверждении)</h3>
<div class="ex"><b>We've already booked the tickets.</b> — Мы уже забронировали билеты.</div>
<div class="ex"><b>He's already gone home.</b> — Он уже ушёл домой.</div>

<h3>yet — в конце отрицания и вопроса</h3>
<div class="ex"><b>I haven't packed yet.</b> — Я ещё не собрал вещи.</div>
<div class="ex"><b>Have you done the shopping yet?</b> — Ты уже сделал покупки?</div>
<div class="note"><b>yet</b> всегда в <b>конце</b> предложения и только в <b>вопросах и отрицаниях</b>. <b>already</b> — в утверждениях, в середине.</div>

<h3>Present Perfect или Past Simple?</h3>
<div class="table-wrap"><table>
<tr><th>Present Perfect</th><th>Past Simple</th></tr>
<tr><td>время не указано, важен результат</td><td>указано время или понятно, когда</td></tr>
<tr><td>just, already, yet, ever, never, recently</td><td>yesterday, last week, in 2020, ago, when...</td></tr>
<tr><td>I've sent the email.</td><td>I sent the email an hour ago.</td></tr>
<tr><td>Have you seen my phone?</td><td>Did you see the match last night?</td></tr>
</table></div>
<div class="tip">В американском английском вместо Present Perfect часто говорят Past Simple: <i>I just finished</i>, <i>Did you eat yet?</i> Это нормально, но в тестах используйте британский вариант.</div>`,
  dialog: [
    "A|Are you ready for the trip? Have you packed yet?|Ты готов к поездке? Уже собрал вещи?",
    "B|Yes, I've just finished. And I've already printed the tickets.|Да, только что закончил. И уже распечатал билеты.",
    "A|Great. Have you booked a taxi?|Отлично. Такси заказал?",
    "B|No, not yet. I'll do it now.|Нет, ещё нет. Сейчас сделаю.",
    "A|And have you taken out the rubbish?|А мусор вынес?",
    "B|Oh no, I haven't! I forgot.|Ой, нет! Забыл."
  ],
  ex: [
    { t: "c", q: "I've ___ eaten. I'm not hungry.", o: ["yet", "already", "ever"], a: 1 },
    { t: "c", q: "Have you finished your homework ___?", o: ["yet", "already", "just"], a: 0 },
    { t: "c", q: "She hasn't called me ___.", o: ["already", "just", "yet"], a: 2 },
    { t: "c", q: "Look! It ___ stopped raining.", o: ["has just", "just has", "did just"], a: 0 },
    { t: "c", q: "I ___ my passport last week.", o: ["have lost", "lost", "has lost"], a: 1 },
    { t: "c", q: "Где правильно?", o: ["I have sent it yesterday.", "I sent it yesterday.", "I have send it yesterday."], a: 1 },
    { t: "i", q: "We haven't decided ___. (ещё)", a: ["yet"] },
    { t: "i", q: "He has ___ (send) me a message.", a: ["sent"] },
    { t: "i", q: "Have you ___ (do) the washing-up?", a: ["done"] },
    { t: "o", a: "The film has just started", ru: "Фильм только что начался.", end: "." },
    { t: "o", a: "Have you tidied your room yet", ru: "Ты уже убрал свою комнату?", end: "?" },
    { t: "tr", ru: "Я уже купил билеты.", a: ["I have already bought the tickets", "I've already bought the tickets", "I have already bought tickets", "I've already bought tickets"] },
    { t: "tr", ru: "Она ещё не пришла.", a: ["She hasn't come yet", "She has not come yet", "She hasn't arrived yet", "She has not arrived yet"] },
    { t: "l", a: "I haven't made the bed yet", alt: ["I have not made the bed yet"] }
  ]
});
