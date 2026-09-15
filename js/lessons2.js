LESSONS.push({
  id: 10, module: 3, icon: "🔁", title: "Present Simple: утверждение", en: "I work, she works",
  goal: "Говорить о привычках и фактах: I live in Moscow. She speaks English.",
  vocab: [
    "live|lɪv|жить", "work|wɜːk|работать", "study|ˈstʌdi|учиться, изучать", "speak|spiːk|говорить", "like|laɪk|нравиться, любить",
    "love|lʌv|любить, обожать", "want|wɒnt|хотеть", "need|niːd|нуждаться, нужно", "know|nəʊ|знать", "drink|drɪŋk|пить",
    "eat|iːt|есть (пищу)", "read|riːd|читать", "watch|wɒtʃ|смотреть", "play|pleɪ|играть", "go|ɡəʊ|идти, ехать",
    "do|duː|делать", "have|hæv|иметь; (есть, пить)", "listen to|ˈlɪsn tə|слушать", "music|ˈmjuːzɪk|музыка", "every day|ˈevri deɪ|каждый день"
  ],
  theory: `
<h3>Когда используется</h3>
<p><b>Present Simple</b> — настоящее простое время. Для того, что происходит <b>регулярно, обычно, всегда</b>, и для фактов:</p>
<div class="ex"><b>I work in an office.</b> — Я работаю в офисе.</div>
<div class="ex"><b>We live in Kazan.</b> — Мы живём в Казани.</div>
<div class="ex"><b>Water boils at 100 degrees.</b> — Вода кипит при 100 градусах.</div>

<h3>Образование</h3>
<span class="formula">I / you / we / they + глагол</span>
<span class="formula">he / she / it + глагол<mark>-s</mark></span>
<div class="ex"><b>I like coffee. She likes tea.</b> — Я люблю кофе. Она любит чай.</div>
<div class="ex"><b>They play football. He plays tennis.</b> — Они играют в футбол. Он играет в теннис.</div>
<div class="note">Самая частая ошибка — забыть <b>-s</b> после he/she/it: <b>My mother works</b>, <b>Tom speaks</b>.</div>

<h3>Правописание -s / -es / -ies</h3>
<div class="table-wrap"><table>
<tr><th>Правило</th><th>Примеры</th></tr>
<tr><td>обычно + s</td><td>work → works, read → reads</td></tr>
<tr><td>на s, sh, ch, x, o + es</td><td>watch → watches, go → goes, do → does, wash → washes</td></tr>
<tr><td>согласная + y → ies</td><td>study → studies (но play → plays)</td></tr>
<tr><td>исключение</td><td>have → <b>has</b></td></tr>
</table></div>

<h3>Слова-маркеры</h3>
<p><b>every day / week / year</b> (каждый день/неделю/год), <b>usually</b> (обычно), <b>always</b> (всегда), <b>on Mondays</b> (по понедельникам).</p>
<div class="ex"><b>He goes to the gym every day.</b> — Он ходит в спортзал каждый день.</div>
<div class="tip"><b>like</b> + предмет: <i>I like music</i> — мне нравится музыка. Русское «мне нравится» переводится «я люблю/нравлю»: подлежащее — тот, кому нравится.</div>`,
  dialog: [
    "A|Tell me about your family.|Расскажи о своей семье.",
    "B|My dad works in a bank. My mum is a teacher, she teaches English.|Папа работает в банке. Мама — учитель, она преподаёт английский.",
    "A|And your brother?|А брат?",
    "B|He studies at university. He plays the guitar and listens to rock music every day.|Он учится в университете. Он играет на гитаре и слушает рок каждый день.",
    "A|And what about you?|А ты?",
    "B|I work from home. I love my job!|Я работаю из дома. Я люблю свою работу!"
  ],
  ex: [
    { t: "c", q: "She ___ in London.", o: ["live", "lives", "living"], a: 1 },
    { t: "c", q: "We ___ English.", o: ["speak", "speaks", "are speak"], a: 0 },
    { t: "c", q: "He ___ TV every evening.", o: ["watchs", "watches", "watch"], a: 1 },
    { t: "c", q: "My sister ___ at school.", o: ["studys", "studies", "study"], a: 1 },
    { t: "c", q: "Tom ___ a big dog.", o: ["have", "haves", "has"], a: 2 },
    { t: "i", q: "My father ___ (go) to work by bus.", a: ["goes"] },
    { t: "i", q: "They ___ (like) pizza.", a: ["like"] },
    { t: "i", q: "Anna ___ (play) the piano.", a: ["plays"] },
    { t: "i", q: "He ___ (do) his homework every day.", a: ["does"] },
    { t: "o", a: "My friend drinks coffee every morning", ru: "Мой друг пьёт кофе каждое утро.", end: "." },
    { t: "tr", ru: "Она знает английский.", a: ["She knows English"] },
    { t: "tr", ru: "Мы живём в Москве.", a: ["We live in Moscow"] },
    { t: "l", a: "He reads books every day" }
  ]
});

LESSONS.push({
  id: 11, module: 3, icon: "❓", title: "Present Simple: вопросы и отрицания. Работа", en: "Do you work?",
  goal: "Спрашивать и отрицать с do/does; говорить о профессиях.",
  vocab: [
    "job|dʒɒb|работа, должность", "engineer|ˌendʒɪˈnɪə|инженер", "manager|ˈmænɪdʒə|менеджер", "driver|ˈdraɪvə|водитель",
    "nurse|nɜːs|медсестра", "cook|kʊk|повар; готовить", "shop assistant|ʃɒp əˈsɪstənt|продавец", "programmer|ˈprəʊɡræmə|программист",
    "office|ˈɒfɪs|офис", "hospital|ˈhɒspɪtl|больница", "school|skuːl|школа", "factory|ˈfæktri|завод, фабрика",
    "shop|ʃɒp|магазин", "company|ˈkʌmpəni|компания", "university|ˌjuːnɪˈvɜːsəti|университет", "money|ˈmʌni|деньги",
    "understand|ˌʌndəˈstænd|понимать", "help|help|помогать", "earn|ɜːn|зарабатывать", "from home|frəm həʊm|из дома"
  ],
  theory: `
<h3>Вспомогательный глагол do / does</h3>
<p>В Present Simple отрицания и вопросы строятся с помощником <b>do</b> (для he/she/it — <b>does</b>). Основной глагол при этом остаётся <b>без -s</b>.</p>
<div class="table-wrap"><table>
<tr><th></th><th>I / you / we / they</th><th>he / she / it</th></tr>
<tr><td>+</td><td>I work.</td><td>She work<mark>s</mark>.</td></tr>
<tr><td>−</td><td>I <mark>don't</mark> work.</td><td>She <mark>doesn't</mark> work.</td></tr>
<tr><td>?</td><td><mark>Do</mark> you work?</td><td><mark>Does</mark> she work?</td></tr>
<tr><td>ответ</td><td>Yes, I do. / No, I don't.</td><td>Yes, she does. / No, she doesn't.</td></tr>
</table></div>
<div class="note">-s «переезжает» в does: <b>She doesn't work</b>, <b>Does he like</b> — НЕ «doesn't works», «Does he likes».</div>
<div class="ex"><b>I don't understand.</b> — Я не понимаю.</div>
<div class="ex"><b>He doesn't eat meat.</b> — Он не ест мясо.</div>
<div class="ex"><b>Do you speak English? — Yes, I do.</b> — Вы говорите по-английски? — Да.</div>

<h3>Вопросы с вопросительным словом</h3>
<span class="formula">Вопр. слово + do/does + подлежащее + глагол?</span>
<div class="ex"><b>What do you do?</b> — Чем ты занимаешься? (кем работаешь)</div>
<div class="ex"><b>Where does she work?</b> — Где она работает?</div>
<div class="ex"><b>What time do you get up?</b> — Во сколько ты встаёшь?</div>

<h3>Профессии</h3>
<div class="ex"><b>I'm an engineer. I work for a big company.</b> — Я инженер. Я работаю в большой компании.</div>
<div class="note">С профессией нужен артикль: <b>She's a nurse</b>, <b>He's an engineer</b>.</div>
<div class="tip">Не путайте: <b>to be</b> — с существительными/прилагательными (<i>Are you a driver?</i>), <b>do</b> — с глаголами действия (<i>Do you drive?</i>). Нельзя: «Are you work?», «I don't tired».</div>`,
  dialog: [
    "A|What do you do?|Кем ты работаешь?",
    "B|I'm a programmer. I work for an IT company.|Я программист. Работаю в IT-компании.",
    "A|Do you work in an office?|Ты работаешь в офисе?",
    "B|No, I don't. I work from home. And your wife? What does she do?|Нет. Я работаю из дома. А твоя жена? Кем она работает?",
    "A|She's a nurse. She works in a hospital.|Она медсестра. Работает в больнице.",
    "B|Does she like her job?|Ей нравится её работа?",
    "A|Yes, she does. But she doesn't earn much money.|Да. Но она зарабатывает немного."
  ],
  ex: [
    { t: "c", q: "I ___ like coffee.", o: ["don't", "doesn't", "am not"], a: 0 },
    { t: "c", q: "She ___ eat meat.", o: ["don't", "doesn't", "isn't"], a: 1 },
    { t: "c", q: "___ your brother work in a bank?", o: ["Do", "Does", "Is"], a: 1 },
    { t: "c", q: "Does he speak French? — No, he ___", o: ["don't.", "isn't.", "doesn't."], a: 2 },
    { t: "c", q: "Как правильно?", o: ["She doesn't works.", "She doesn't work.", "She don't work."], a: 1 },
    { t: "c", q: "Как правильно?", o: ["Are you work here?", "Do you work here?", "Do you works here?"], a: 1 },
    { t: "c", q: "A person who works in a hospital and helps doctors is a...", o: ["driver", "nurse", "manager"], a: 1 },
    { t: "i", q: "Where ___ you live?", a: ["do"] },
    { t: "i", q: "What ___ your father do?", a: ["does"] },
    { t: "o", a: "Where does your sister work", ru: "Где работает твоя сестра?", end: "?" },
    { t: "tr", ru: "Я не понимаю.", a: ["I don't understand", "I do not understand"] },
    { t: "tr", ru: "Кем ты работаешь?", a: ["What do you do", "What is your job", "What's your job"] },
    { t: "l", a: "Do you like your job" }
  ]
});

LESSONS.push({
  id: 12, module: 3, icon: "⏰", title: "Время и распорядок дня", en: "What time is it?",
  goal: "Называть время и рассказывать, как проходит твой день.",
  vocab: [
    "time|taɪm|время", "o'clock|əˈklɒk|ровно (о часах)", "half past|hɑːf pɑːst|половина (после)", "quarter|ˈkwɔːtə|четверть",
    "past|pɑːst|после", "to|tuː|до, без", "wake up|weɪk ʌp|просыпаться", "get up|ɡet ʌp|вставать",
    "take a shower|teɪk ə ˈʃaʊə|принимать душ", "brush my teeth|brʌʃ maɪ tiːθ|чистить зубы", "have breakfast|hæv ˈbrekfəst|завтракать",
    "have lunch|hæv lʌntʃ|обедать", "have dinner|hæv ˈdɪnə|ужинать", "go to work|ɡəʊ tə wɜːk|идти на работу",
    "start|stɑːt|начинать(ся)", "finish|ˈfɪnɪʃ|заканчивать(ся)", "come home|kʌm həʊm|приходить домой", "go to bed|ɡəʊ tə bed|ложиться спать",
    "morning|ˈmɔːnɪŋ|утро", "afternoon|ˌɑːftəˈnuːn|день (после полудня)", "evening|ˈiːvnɪŋ|вечер", "night|naɪt|ночь"
  ],
  theory: `
<h3>Который час?</h3>
<div class="ex"><b>What time is it?</b> — Который час?</div>
<div class="ex"><b>It's seven o'clock.</b> — Семь часов (ровно).</div>
<div class="table-wrap"><table>
<tr><th>Время</th><th>Британский способ</th><th>Простой способ (цифрами)</th></tr>
<tr><td>7:00</td><td>seven o'clock</td><td>seven</td></tr>
<tr><td>7:15</td><td>a quarter past seven</td><td>seven fifteen</td></tr>
<tr><td>7:30</td><td>half past seven</td><td>seven thirty</td></tr>
<tr><td>7:45</td><td>a quarter to eight</td><td>seven forty-five</td></tr>
<tr><td>7:10</td><td>ten past seven</td><td>seven ten</td></tr>
<tr><td>7:50</td><td>ten to eight</td><td>seven fifty</td></tr>
</table></div>
<p><b>past</b> — «после» (первая половина часа), <b>to</b> — «до» (вторая половина).</p>
<div class="note"><b>half past seven</b> — это 7:30, а не 6:30! По-русски «половина восьмого», а по-английски «половина после семи».</div>
<p><b>a.m.</b> — до полудня (9 a.m. = 9 утра), <b>p.m.</b> — после полудня (9 p.m. = 9 вечера).</p>

<h3>Во сколько? — предлог at</h3>
<div class="ex"><b>I get up at seven o'clock.</b> — Я встаю в семь.</div>
<div class="ex"><b>What time does the film start?</b> — Во сколько начинается фильм?</div>

<h3>Части дня</h3>
<p><b>in the morning</b> (утром), <b>in the afternoon</b> (днём), <b>in the evening</b> (вечером), но <b>at night</b> (ночью).</p>
<div class="tip"><b>have</b> в значении «есть, пить, принимать»: have breakfast, have a coffee, have a shower. Здесь это действие, поэтому: <i>I don't have breakfast</i>.</div>
<div class="note">Без артикля: <b>go to work, go to school, go to bed, come home</b> (без «to»!).</div>`,
  dialog: [
    "A|What time do you get up?|Во сколько ты встаёшь?",
    "B|At half past six. I take a shower and have breakfast.|В полседьмого. Принимаю душ и завтракаю.",
    "A|When do you start work?|Когда ты начинаешь работать?",
    "B|At eight o'clock. I finish at five and come home at six.|В восемь. Заканчиваю в пять и прихожу домой в шесть.",
    "A|And what do you do in the evening?|А что делаешь вечером?",
    "B|I have dinner, read a book and go to bed at eleven.|Ужинаю, читаю книгу и ложусь спать в одиннадцать."
  ],
  ex: [
    { t: "c", q: "8:30 =", o: ["half past eight", "half past seven", "half to eight"], a: 0 },
    { t: "c", q: "3:15 =", o: ["a quarter to three", "a quarter past three", "fifteen to three"], a: 1 },
    { t: "c", q: "5:45 =", o: ["a quarter past five", "a quarter to five", "a quarter to six"], a: 2 },
    { t: "c", q: "I go to bed ___ 11 p.m.", o: ["in", "at", "on"], a: 1 },
    { t: "c", q: "I read ___ the evening.", o: ["in", "at", "on"], a: 0 },
    { t: "c", q: "Как правильно?", o: ["I go to home at six.", "I come home at six.", "I come to the home at six."], a: 1 },
    { t: "i", q: "What ___ is it?", a: ["time"] },
    { t: "i", q: "It's ten ___ nine. (8:50)", a: ["to"] },
    { t: "i", q: "I have ___ at 1 p.m.", a: ["lunch"], ru: "Я обедаю в час дня." },
    { t: "o", a: "What time do you have breakfast", ru: "Во сколько ты завтракаешь?", end: "?" },
    { t: "tr", ru: "Я встаю в семь часов.", a: ["I get up at seven", "I get up at seven o'clock", "I get up at 7", "I wake up at seven", "I wake up at seven o'clock"] },
    { t: "l", a: "It's a quarter past four", alt: ["it is a quarter past four"] }
  ]
});

LESSONS.push({
  id: 13, module: 3, icon: "📅", title: "Дни, месяцы, даты: in / on / at", en: "On Monday, in May",
  goal: "Называть дни недели, месяцы, даты и правильно ставить предлоги времени.",
  vocab: [
    "Monday|ˈmʌndeɪ|понедельник", "Tuesday|ˈtjuːzdeɪ|вторник", "Wednesday|ˈwenzdeɪ|среда", "Thursday|ˈθɜːzdeɪ|четверг",
    "Friday|ˈfraɪdeɪ|пятница", "Saturday|ˈsætədeɪ|суббота", "Sunday|ˈsʌndeɪ|воскресенье", "weekend|ˌwiːkˈend|выходные",
    "January|ˈdʒænjuəri|январь", "February|ˈfebruəri|февраль", "March|mɑːtʃ|март", "April|ˈeɪprəl|апрель",
    "May|meɪ|май", "June|dʒuːn|июнь", "July|dʒuˈlaɪ|июль", "August|ˈɔːɡəst|август", "September|sepˈtembə|сентябрь",
    "October|ɒkˈtəʊbə|октябрь", "November|nəʊˈvembə|ноябрь", "December|dɪˈsembə|декабрь",
    "today|təˈdeɪ|сегодня", "tomorrow|təˈmɒrəʊ|завтра", "week|wiːk|неделя", "month|mʌnθ|месяц", "year|jɪə|год", "birthday|ˈbɜːθdeɪ|день рождения"
  ],
  theory: `
<h3>Дни и месяцы — с большой буквы</h3>
<p>Monday, Tuesday... January, February... Всегда с заглавной!</p>
<div class="note"><b>Wednesday</b> читается [ˈwenzdeɪ] — «уэнздей», первая d не читается.</div>

<h3>Порядковые числительные (для дат)</h3>
<div class="table-wrap"><table>
<tr><td>1st first</td><td>2nd second</td><td>3rd third</td><td>4th fourth</td><td>5th fifth</td></tr>
<tr><td>8th eighth</td><td>9th ninth</td><td>12th twelfth</td><td>20th twentieth</td><td>21st twenty-first</td></tr>
</table></div>
<p>Остальные: + <b>th</b> (sixth, tenth). Дата: <b>the 5th of May</b> или <b>May 5th</b>.</p>
<div class="ex"><b>When is your birthday? — It's on the third of March.</b> — Когда у тебя день рождения? — Третьего марта.</div>
<div class="ex"><b>What's the date today? — It's the first of June.</b> — Какое сегодня число? — Первое июня.</div>

<h3>Предлоги времени in / on / at</h3>
<div class="table-wrap"><table>
<tr><th>Предлог</th><th>С чем</th><th>Примеры</th></tr>
<tr><td><mark>at</mark></td><td>точное время, выходные, ночь</td><td>at 5 o'clock, at night, at the weekend</td></tr>
<tr><td><mark>on</mark></td><td>дни недели и даты</td><td>on Monday, on 8th March, on my birthday</td></tr>
<tr><td><mark>in</mark></td><td>месяцы, годы, сезоны, части дня</td><td>in May, in 2025, in summer, in the morning</td></tr>
</table></div>
<div class="tip">Запомните «пирамиду»: <b>in</b> — большие периоды → <b>on</b> — дни → <b>at</b> — точки времени.</div>
<div class="note">Без предлога: <b>today, tomorrow, yesterday, every day, next week, last year</b>. Не «on tomorrow».</div>`,
  dialog: [
    "A|When is your birthday?|Когда у тебя день рождения?",
    "B|It's on the twelfth of October. And yours?|Двенадцатого октября. А у тебя?",
    "A|In July, on the second.|В июле, второго.",
    "B|What do you do at the weekend?|Что ты делаешь на выходных?",
    "A|On Saturday I play football. On Sunday I relax.|В субботу играю в футбол. В воскресенье отдыхаю.",
    "B|See you on Monday!|Увидимся в понедельник!"
  ],
  ex: [
    { t: "c", q: "I work ___ Monday.", o: ["in", "on", "at"], a: 1 },
    { t: "c", q: "My birthday is ___ June.", o: ["in", "on", "at"], a: 0 },
    { t: "c", q: "The lesson starts ___ 9 o'clock.", o: ["in", "on", "at"], a: 2 },
    { t: "c", q: "We go to the country ___ the weekend.", o: ["in", "on", "at"], a: 2 },
    { t: "c", q: "I see him ___", o: ["tomorrow", "on tomorrow", "at tomorrow"], a: 0 },
    { t: "c", q: "The day after Tuesday is...", o: ["Monday", "Thursday", "Wednesday"], a: 2 },
    { t: "c", q: "The month after April is...", o: ["May", "March", "June"], a: 0 },
    { t: "i", q: "3rd = the ___", a: ["third"] },
    { t: "i", q: "I was born ___ 1999.", a: ["in"] },
    { t: "i", q: "There are seven days in a ___.", a: ["week"] },
    { t: "tr", ru: "Мой день рождения в мае.", a: ["My birthday is in May"] },
    { t: "l", a: "See you on Friday" }
  ]
});

LESSONS.push({
  id: 14, module: 3, icon: "🔄", title: "Как часто? Наречия частоты", en: "I always, I never",
  goal: "Рассказывать, как часто ты что-то делаешь.",
  vocab: [
    "always|ˈɔːlweɪz|всегда", "usually|ˈjuːʒuəli|обычно", "often|ˈɒfn|часто", "sometimes|ˈsʌmtaɪmz|иногда",
    "rarely|ˈreəli|редко", "never|ˈnevə|никогда", "once|wʌns|один раз", "twice|twaɪs|два раза",
    "how often|haʊ ˈɒfn|как часто", "gym|dʒɪm|спортзал", "cinema|ˈsɪnəmə|кинотеатр", "swim|swɪm|плавать",
    "run|rʌn|бегать", "clean|kliːn|убирать, чистить", "visit|ˈvɪzɪt|навещать, посещать", "walk|wɔːk|гулять, ходить пешком",
    "late|leɪt|поздно, опаздывать", "early|ˈɜːli|рано", "free time|friː taɪm|свободное время", "relax|rɪˈlæks|отдыхать, расслабляться"
  ],
  theory: `
<h3>Шкала частоты</h3>
<div class="table-wrap"><table>
<tr><td>100%</td><td><b>always</b> — всегда</td></tr>
<tr><td>80%</td><td><b>usually</b> — обычно</td></tr>
<tr><td>60%</td><td><b>often</b> — часто</td></tr>
<tr><td>40%</td><td><b>sometimes</b> — иногда</td></tr>
<tr><td>10%</td><td><b>rarely</b> — редко</td></tr>
<tr><td>0%</td><td><b>never</b> — никогда</td></tr>
</table></div>

<h3>Место в предложении</h3>
<p><b>Перед</b> основным глаголом:</p>
<div class="ex"><b>I usually get up at seven.</b> — Я обычно встаю в семь.</div>
<div class="ex"><b>She never drinks coffee.</b> — Она никогда не пьёт кофе.</div>
<p><b>После</b> глагола to be:</p>
<div class="ex"><b>He is always late.</b> — Он всегда опаздывает.</div>
<div class="ex"><b>We are often tired.</b> — Мы часто устаём.</div>
<div class="note"><b>never</b> уже отрицательное — второе «не» не нужно: <b>I never eat meat</b> (НЕ «I don't never eat»).</div>

<h3>Как часто? — выражения в конце предложения</h3>
<div class="ex"><b>How often do you go to the gym?</b> — Как часто ты ходишь в спортзал?</div>
<div class="ex"><b>Once a week.</b> — Раз в неделю.</div>
<div class="ex"><b>Twice a month.</b> — Два раза в месяц.</div>
<div class="ex"><b>Three times a year.</b> — Три раза в год.</div>
<div class="ex"><b>Every day.</b> — Каждый день.</div>`,
  dialog: [
    "A|How often do you go to the gym?|Как часто ты ходишь в спортзал?",
    "B|Three times a week. I usually go in the evening.|Три раза в неделю. Обычно вечером.",
    "A|Wow! I never go to the gym. I sometimes walk in the park.|Ого! Я никогда не хожу в спортзал. Иногда гуляю в парке.",
    "B|Do you often go to the cinema?|А в кино часто ходишь?",
    "A|Yes, about once a week. I always buy popcorn!|Да, примерно раз в неделю. Всегда покупаю попкорн!"
  ],
  ex: [
    { t: "c", q: "Как правильно?", o: ["I go always to work by bus.", "I always go to work by bus.", "Always I go to work by bus."], a: 1 },
    { t: "c", q: "Как правильно?", o: ["She is never late.", "She never is late.", "She is late never."], a: 0 },
    { t: "c", q: "0% =", o: ["rarely", "sometimes", "never"], a: 2 },
    { t: "c", q: "«Два раза в неделю» =", o: ["two a week", "twice a week", "twice in week"], a: 1 },
    { t: "c", q: "Как правильно?", o: ["I don't never smoke.", "I never smoke.", "I never don't smoke."], a: 1 },
    { t: "i", q: "___ often do you visit your parents?", a: ["how"] },
    { t: "i", q: "He ___ goes to bed early. (80%)", a: ["usually"] },
    { t: "o", a: "We often watch films at the weekend", ru: "Мы часто смотрим фильмы по выходным.", end: "." },
    { t: "o", a: "My brother is always hungry", ru: "Мой брат всегда голоден.", end: "." },
    { t: "tr", ru: "Я иногда бегаю утром.", a: ["I sometimes run in the morning", "Sometimes I run in the morning"] },
    { t: "tr", ru: "Она никогда не опаздывает.", a: ["She is never late", "She's never late"] },
    { t: "l", a: "once a month" }
  ]
});
