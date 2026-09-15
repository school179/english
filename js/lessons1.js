// Формат: vocab "english|ipa|перевод", dialog "A|english|перевод", phrases "english|перевод"
// Упражнения: c = выбор, i = вставить слово, o = порядок слов, tr = перевод, l = диктант
window.MODULES = [
  { id: 1, title: "Старт", desc: "Первые фразы, глагол to be, числа, артикли" },
  { id: 2, title: "Я и мой мир", desc: "Семья, страны, предметы, внешность" },
  { id: 3, title: "Каждый день", desc: "Present Simple, время, распорядок, даты" },
  { id: 4, title: "Вокруг меня", desc: "Еда, дом, город, покупки" },
  { id: 5, title: "Умения и сейчас", desc: "Can, Present Continuous, одежда, погода, хобби" },
  { id: 6, title: "Прошлое и будущее", desc: "Was/were, Past Simple, going to, вопросы" }
];
window.LESSONS = [];

LESSONS.push({
  id: 1, module: 1, icon: "👋", title: "Привет! Знакомство", en: "Hello!",
  goal: "Здороваться и прощаться, называть своё имя, спрашивать «как дела?».",
  vocab: [
    "hello|həˈləʊ|привет, здравствуйте", "hi|haɪ|привет (неформально)", "goodbye|ɡʊdˈbaɪ|до свидания",
    "bye|baɪ|пока", "good morning|ɡʊd ˈmɔːnɪŋ|доброе утро", "good afternoon|ɡʊd ˌɑːftəˈnuːn|добрый день",
    "good evening|ɡʊd ˈiːvnɪŋ|добрый вечер", "good night|ɡʊd naɪt|спокойной ночи", "name|neɪm|имя",
    "please|pliːz|пожалуйста (просьба)", "thank you|ˈθæŋk juː|спасибо", "thanks|θæŋks|спасибо (проще)",
    "yes|jes|да", "no|nəʊ|нет", "sorry|ˈsɒri|извините, простите", "excuse me|ɪkˈskjuːz miː|извините (обратить внимание)",
    "friend|frend|друг", "nice to meet you|naɪs tə miːt juː|приятно познакомиться", "fine|faɪn|хорошо, в порядке", "and you?|ənd juː|а ты? а вы?"
  ],
  theory: `
<h3>Как поздороваться</h3>
<p><b>Hello</b> — универсальное «здравствуйте/привет». <b>Hi</b> — дружеское «привет». Для приветствия по времени суток используют:</p>
<div class="table-wrap"><table>
<tr><th>Фраза</th><th>Когда</th></tr>
<tr><td>Good morning</td><td>утром, до 12:00</td></tr>
<tr><td>Good afternoon</td><td>днём, 12:00–18:00</td></tr>
<tr><td>Good evening</td><td>вечером (при встрече!)</td></tr>
<tr><td>Good night</td><td>только при прощании, перед сном</td></tr>
</table></div>
<div class="note"><b>Good night</b> — это не «добрый вечер», а «спокойной ночи». При встрече вечером говорят <b>Good evening</b>.</div>

<h3>Как представиться</h3>
<div class="ex"><b>My name is Anna.</b> — Меня зовут Анна.</div>
<div class="ex"><b>I'm Anna.</b> — Я Анна.</div>
<div class="ex"><b>What's your name?</b> — Как тебя (вас) зовут?</div>
<div class="ex"><b>Nice to meet you.</b> — Приятно познакомиться.</div>
<div class="ex"><b>Nice to meet you too.</b> — Мне тоже.</div>

<h3>Как дела?</h3>
<div class="ex"><b>How are you?</b> — Как дела? / Как поживаете?</div>
<div class="ex"><b>I'm fine, thanks. And you?</b> — Хорошо, спасибо. А у тебя?</div>
<div class="ex"><b>I'm OK.</b> — Нормально.</div>
<div class="tip">В английском <b>you</b> — это и «ты», и «вы». Вежливость передаётся словами <b>please</b>, <b>thank you</b>, <b>sorry</b> и интонацией.</div>

<h3>Sorry или Excuse me?</h3>
<p><b>Excuse me</b> — перед тем как побеспокоить: «Извините, где метро?». <b>Sorry</b> — когда уже что-то сделали не так: «Простите, я опоздал». Также <b>Sorry?</b> с вопросительной интонацией = «Простите, что вы сказали?»</p>`,
  dialog: [
    "A|Hello! My name is Tom. What's your name?|Привет! Меня зовут Том. Как тебя зовут?",
    "B|Hi, Tom! I'm Anna.|Привет, Том! Я Анна.",
    "A|Nice to meet you, Anna.|Приятно познакомиться, Анна.",
    "B|Nice to meet you too. How are you?|Мне тоже. Как дела?",
    "A|I'm fine, thanks. And you?|Хорошо, спасибо. А у тебя?",
    "B|I'm OK, thank you. Goodbye!|Нормально, спасибо. До свидания!",
    "A|Bye!|Пока!"
  ],
  ex: [
    { t: "c", q: "Вы встречаете коллегу в 9 утра. Что скажете?", o: ["Good morning!", "Good night!", "Goodbye!"], a: 0 },
    { t: "c", q: "Вы уходите домой вечером и прощаетесь с соседом перед сном.", o: ["Good evening!", "Good night!", "Good afternoon!"], a: 1 },
    { t: "c", q: "What's your name?", o: ["I'm fine.", "My name is Kate.", "Nice to meet you."], a: 1 },
    { t: "c", q: "How are you?", o: ["I'm fine, thanks.", "My name is Oleg.", "Goodbye."], a: 0 },
    { t: "c", q: "Вы хотите спросить дорогу у прохожего. Начните фразу:", o: ["Sorry!", "Excuse me,", "Thank you,"], a: 1 },
    { t: "i", q: "Nice to ___ you.", a: ["meet"], ru: "Приятно познакомиться." },
    { t: "i", q: "My ___ is Ivan.", a: ["name"], ru: "Меня зовут Иван." },
    { t: "o", a: "What is your name", ru: "Как тебя зовут?", end: "?" },
    { t: "o", a: "I am fine thank you", ru: "Я в порядке, спасибо.", end: "." },
    { t: "tr", ru: "Приятно познакомиться.", a: ["Nice to meet you"] },
    { t: "l", a: "How are you" }
  ]
});

LESSONS.push({
  id: 2, module: 1, icon: "🙋", title: "Я, ты, он: глагол to be", en: "I am, you are",
  goal: "Говорить, кто ты и какой ты: I am a student. She is happy. Задавать вопросы Are you...?",
  vocab: [
    "I|aɪ|я", "you|juː|ты, вы", "he|hiː|он", "she|ʃiː|она", "it|ɪt|оно, это (предмет, животное)", "we|wiː|мы", "they|ðeɪ|они",
    "student|ˈstjuːdnt|студент", "teacher|ˈtiːtʃə|учитель", "doctor|ˈdɒktə|врач", "happy|ˈhæpi|счастливый, довольный",
    "tired|ˈtaɪəd|уставший", "hungry|ˈhʌŋɡri|голодный", "busy|ˈbɪzi|занятой", "ready|ˈredi|готовый",
    "late|leɪt|опоздавший, поздно", "here|hɪə|здесь", "at home|ət həʊm|дома", "at work|ət wɜːk|на работе", "cold|kəʊld|холодный; мне холодно"
  ],
  theory: `
<h3>Главная идея</h3>
<p>В русском мы говорим «Я студент», «Она дома» — без глагола. В английском <b>так нельзя</b>: в каждом предложении нужен глагол. Если действия нет, ставим глагол <b>to be</b> («быть, являться, находиться»).</p>
<div class="table-wrap"><table>
<tr><th>Утверждение</th><th>Сокращение</th><th>Отрицание</th><th>Вопрос</th></tr>
<tr><td>I <mark>am</mark></td><td>I'm</td><td>I'm not</td><td>Am I...?</td></tr>
<tr><td>you <mark>are</mark></td><td>you're</td><td>you aren't</td><td>Are you...?</td></tr>
<tr><td>he / she / it <mark>is</mark></td><td>he's / she's / it's</td><td>he isn't</td><td>Is he...?</td></tr>
<tr><td>we / they <mark>are</mark></td><td>we're / they're</td><td>we aren't</td><td>Are they...?</td></tr>
</table></div>
<div class="ex"><b>I am a student.</b> — Я студент.</div>
<div class="ex"><b>She is at home.</b> — Она дома.</div>
<div class="ex"><b>We are tired.</b> — Мы устали.</div>
<div class="ex"><b>It is cold.</b> — Холодно.</div>

<h3>Отрицание: + not</h3>
<span class="formula">подлежащее + am/is/are + not</span>
<div class="ex"><b>I'm not hungry.</b> — Я не голоден.</div>
<div class="ex"><b>He isn't a doctor.</b> — Он не врач.</div>
<div class="ex"><b>They aren't here.</b> — Их здесь нет.</div>

<h3>Вопрос: меняем местами</h3>
<span class="formula">Am/Is/Are + подлежащее + ...?</span>
<div class="ex"><b>Are you busy?</b> — Ты занят?</div>
<div class="ex"><b>Is she a teacher?</b> — Она учитель?</div>
<p>Короткие ответы: <b>Yes, I am.</b> / <b>No, I'm not.</b> — <b>Yes, she is.</b> / <b>No, she isn't.</b></p>
<div class="note">В коротком положительном ответе сокращать нельзя: <b>Yes, I am</b> (а не «Yes, I'm»).</div>
<div class="tip"><b>It</b> — это «он/она/оно» для предметов и животных: <i>Where is my bag? — It's here.</i> (Где моя сумка? — Она здесь.)</div>`,
  dialog: [
    "A|Are you a student?|Ты студент?",
    "B|Yes, I am. And you?|Да. А ты?",
    "A|No, I'm not. I'm a teacher.|Нет. Я учитель.",
    "B|Is your friend a teacher too?|Твой друг тоже учитель?",
    "A|No, he isn't. He's a doctor. He's at work now.|Нет. Он врач. Он сейчас на работе.",
    "B|Are you tired?|Ты устал?",
    "A|Yes, I am. And I'm hungry!|Да. И я голоден!"
  ],
  ex: [
    { t: "c", q: "I ___ a student.", o: ["am", "is", "are"], a: 0 },
    { t: "c", q: "She ___ tired.", o: ["am", "is", "are"], a: 1 },
    { t: "c", q: "They ___ at home.", o: ["am", "is", "are"], a: 2 },
    { t: "c", q: "___ you busy?", o: ["Am", "Is", "Are"], a: 2 },
    { t: "c", q: "Is he a doctor? — No, ___", o: ["he isn't.", "he not.", "he aren't."], a: 0 },
    { t: "i", q: "We ___ ready.", a: ["are"], ru: "Мы готовы." },
    { t: "i", q: "It ___ cold today.", a: ["is"], ru: "Сегодня холодно." },
    { t: "i", q: "I ___ not hungry.", a: ["am"], ru: "Я не голоден." },
    { t: "o", a: "Is she at work", ru: "Она на работе?", end: "?" },
    { t: "o", a: "He is not a teacher", ru: "Он не учитель.", end: "." },
    { t: "tr", ru: "Я студент.", a: ["I am a student", "I'm a student"] },
    { t: "tr", ru: "Они здесь.", a: ["They are here", "They're here"] },
    { t: "l", a: "We are at home" }
  ]
});

LESSONS.push({
  id: 3, module: 1, icon: "🔢", title: "Числа 0–100 и возраст", en: "Numbers",
  goal: "Считать до 100, называть возраст и номер телефона.",
  vocab: [
    "zero|ˈzɪərəʊ|ноль", "one|wʌn|один", "two|tuː|два", "three|θriː|три", "four|fɔː|четыре", "five|faɪv|пять",
    "six|sɪks|шесть", "seven|ˈsevn|семь", "eight|eɪt|восемь", "nine|naɪn|девять", "ten|ten|десять",
    "eleven|ɪˈlevn|одиннадцать", "twelve|twelv|двенадцать", "thirteen|ˌθɜːˈtiːn|тринадцать", "fifteen|ˌfɪfˈtiːn|пятнадцать",
    "twenty|ˈtwenti|двадцать", "thirty|ˈθɜːti|тридцать", "forty|ˈfɔːti|сорок", "fifty|ˈfɪfti|пятьдесят",
    "a hundred|ə ˈhʌndrəd|сто", "old|əʊld|старый; (о возрасте) лет", "phone number|fəʊn ˈnʌmbə|номер телефона"
  ],
  theory: `
<h3>1–12 нужно просто запомнить</h3>
<p>one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve.</p>

<h3>13–19: окончание -teen</h3>
<p>thirteen (13), fourteen (14), fifteen (15), sixteen (16), seventeen (17), eighteen (18), nineteen (19). Ударение на <b>-teen</b>: thir<b>TEEN</b>.</p>

<h3>20, 30 ... 90: окончание -ty</h3>
<p>twenty, thirty, forty (без u!), fifty, sixty, seventy, eighty, ninety. Ударение на первый слог: <b>THIR</b>ty.</p>
<div class="note">Не путайте на слух: <b>thirTEEN</b> (13) — <b>THIRty</b> (30); <b>fifTEEN</b> (15) — <b>FIFty</b> (50). Слушайте ударение и долгое «ии» в -teen.</div>

<h3>21–99: через дефис</h3>
<div class="ex"><b>twenty-one</b> — 21</div>
<div class="ex"><b>forty-five</b> — 45</div>
<div class="ex"><b>ninety-nine</b> — 99</div>
<div class="ex"><b>a hundred</b> — 100</div>

<h3>Возраст — через to be, а не have!</h3>
<div class="ex"><b>How old are you?</b> — Сколько тебе лет?</div>
<div class="ex"><b>I'm twenty-five.</b> — Мне 25.</div>
<div class="ex"><b>She is thirty years old.</b> — Ей 30 лет.</div>
<div class="note">Буквально англичане говорят «Я есть 25». Ошибка русскоговорящих — «I have 25 years». Так нельзя.</div>

<h3>Номер телефона</h3>
<p>Называют по одной цифре. 0 часто читают как <b>oh</b> [əʊ], две одинаковые цифры — <b>double</b>:</p>
<div class="ex"><b>What's your phone number?</b> — Какой у тебя номер телефона?</div>
<div class="ex"><b>It's oh seven nine, double four, five two.</b> — 079 44 52</div>`,
  dialog: [
    "A|How old are you, Max?|Сколько тебе лет, Макс?",
    "B|I'm nineteen. And you?|Мне девятнадцать. А тебе?",
    "A|I'm twenty-two. What's your phone number?|Мне двадцать два. Какой у тебя номер?",
    "B|It's oh eight three, double five, one six.|083 55 16.",
    "A|Thanks!|Спасибо!"
  ],
  ex: [
    { t: "c", q: "15 — это...", o: ["fifty", "fifteen", "five"], a: 1 },
    { t: "c", q: "40 — это...", o: ["fourty", "forty", "fourteen"], a: 1 },
    { t: "c", q: "Как сказать «Мне 20 лет»?", o: ["I have twenty years.", "I'm twenty.", "I twenty years."], a: 1 },
    { t: "c", q: "How old ___ your mother?", o: ["is", "are", "has"], a: 0 },
    { t: "i", q: "7 + 5 = ___ (словом)", a: ["twelve"] },
    { t: "i", q: "10 + 3 = ___ (словом)", a: ["thirteen"] },
    { t: "i", q: "30 + 3 = ___ (словом)", a: ["thirty-three", "thirty three"] },
    { t: "i", q: "100 − 1 = ___ (словом)", a: ["ninety-nine", "ninety nine"] },
    { t: "o", a: "How old are you", ru: "Сколько тебе лет?", end: "?" },
    { t: "tr", ru: "Ему 18 лет.", a: ["He is eighteen", "He's eighteen", "He is 18", "He's 18", "He is eighteen years old", "He's eighteen years old"] },
    { t: "l", a: "sixty-seven", alt: ["sixty seven", "67"] }
  ]
});

LESSONS.push({
  id: 4, module: 1, icon: "📦", title: "Артикли a/an/the и множественное число", en: "A book, two books",
  goal: "Правильно ставить a, an, the и образовывать множественное число.",
  vocab: [
    "book|bʊk|книга", "pen|pen|ручка", "apple|ˈæpl|яблоко", "egg|eɡ|яйцо", "orange|ˈɒrɪndʒ|апельсин",
    "umbrella|ʌmˈbrelə|зонт", "hour|ˈaʊə|час", "box|bɒks|коробка", "bus|bʌs|автобус", "city|ˈsɪti|город",
    "baby|ˈbeɪbi|малыш", "man — men|mæn — men|мужчина — мужчины", "woman — women|ˈwʊmən — ˈwɪmɪn|женщина — женщины",
    "child — children|tʃaɪld — ˈtʃɪldrən|ребёнок — дети", "person — people|ˈpɜːsn — ˈpiːpl|человек — люди",
    "foot — feet|fʊt — fiːt|стопа — стопы", "tooth — teeth|tuːθ — tiːθ|зуб — зубы", "house|haʊs|дом", "sun|sʌn|солнце", "car|kɑː|машина"
  ],
  theory: `
<h3>Артикль a / an — «один, какой-то»</h3>
<p>Ставится перед <b>исчисляемым</b> существительным в <b>единственном числе</b>, когда говорим о нём впервые или о «каком-то одном».</p>
<div class="table-wrap"><table>
<tr><th>a — перед согласным ЗВУКОМ</th><th>an — перед гласным ЗВУКОМ</th></tr>
<tr><td>a book, a car, a university [ju:]</td><td>an apple, an egg, an hour [aʊə]</td></tr>
</table></div>
<div class="ex"><b>I have a pen.</b> — У меня есть ручка.</div>
<div class="ex"><b>It's an orange.</b> — Это апельсин.</div>
<div class="note">Важен звук, а не буква: <b>an hour</b> (h не читается), но <b>a university</b> (звучит «ю»).</div>

<h3>Артикль the — «тот самый»</h3>
<p>Когда понятно, о каком именно предмете речь: уже упоминали, он единственный, или ясно из ситуации.</p>
<div class="ex"><b>I have a cat. The cat is black.</b> — У меня есть кошка. Кошка (эта) чёрная.</div>
<div class="ex"><b>The sun is hot.</b> — Солнце горячее.</div>
<div class="ex"><b>Close the door, please.</b> — Закрой дверь, пожалуйста.</div>
<div class="tip">Без артикля: имена (Anna), страны и города (Russia, London), множественное число «вообще» (I like apples).</div>

<h3>Множественное число</h3>
<div class="table-wrap"><table>
<tr><th>Правило</th><th>Примеры</th></tr>
<tr><td>обычно + <b>s</b></td><td>book → books, car → cars</td></tr>
<tr><td>на s, x, sh, ch, (o) + <b>es</b></td><td>bus → buses, box → boxes, watch → watches, tomato → tomatoes</td></tr>
<tr><td>согласная + y → <b>ies</b></td><td>city → cities, baby → babies (но boy → boys)</td></tr>
<tr><td>f / fe → <b>ves</b></td><td>knife → knives, wife → wives</td></tr>
<tr><td>особые формы</td><td>man → men, woman → women, child → children, person → people, foot → feet, tooth → teeth, mouse → mice</td></tr>
</table></div>
<p>Окончание читается по-разному: [s] после глухих — books; [z] после звонких и гласных — pens; [ɪz] после s, x, sh, ch — boxes.</p>
<div class="note">Во множественном числе <b>a/an не ставится</b>: two books, some apples.</div>`,
  dialog: [
    "A|What's in the box?|Что в коробке?",
    "B|An apple, an orange and two eggs.|Яблоко, апельсин и два яйца.",
    "A|And what's that?|А что это?",
    "B|It's an umbrella. The umbrella is for you!|Это зонт. Зонт — для тебя!",
    "A|Thank you! It's a nice umbrella.|Спасибо! Хороший зонт."
  ],
  ex: [
    { t: "c", q: "___ apple", o: ["a", "an", "—"], a: 1 },
    { t: "c", q: "___ book", o: ["a", "an", "—"], a: 0 },
    { t: "c", q: "___ hour", o: ["a", "an", "—"], a: 1 },
    { t: "c", q: "I have a dog. ___ dog is white.", o: ["A", "An", "The"], a: 2 },
    { t: "c", q: "Множественное число: child →", o: ["childs", "children", "childes"], a: 1 },
    { t: "c", q: "Множественное число: city →", o: ["citys", "cityes", "cities"], a: 2 },
    { t: "i", q: "one box — two ___", a: ["boxes"] },
    { t: "i", q: "one person — five ___", a: ["people"] },
    { t: "i", q: "one woman — three ___", a: ["women"] },
    { t: "i", q: "one tooth — all my ___", a: ["teeth"] },
    { t: "i", q: "It's ___ umbrella.", a: ["an"], ru: "Это зонт." },
    { t: "tr", ru: "Это яйцо.", a: ["It is an egg", "It's an egg", "This is an egg"] },
    { t: "l", a: "three buses" }
  ]
});

LESSONS.push({
  id: 5, module: 2, icon: "👨‍👩‍👧", title: "Семья и притяжательные слова", en: "My family",
  goal: "Рассказать о семье: my mother, his sister, Anna's brother.",
  vocab: [
    "family|ˈfæməli|семья", "mother|ˈmʌðə|мать", "father|ˈfɑːðə|отец", "parents|ˈpeərənts|родители",
    "sister|ˈsɪstə|сестра", "brother|ˈbrʌðə|брат", "son|sʌn|сын", "daughter|ˈdɔːtə|дочь",
    "husband|ˈhʌzbənd|муж", "wife|waɪf|жена", "grandmother|ˈɡrænmʌðə|бабушка", "grandfather|ˈɡrænfɑːðə|дедушка",
    "grandparents|ˈɡrænpeərənts|бабушка и дедушка", "uncle|ˈʌŋkl|дядя", "aunt|ɑːnt|тётя", "cousin|ˈkʌzn|двоюродный брат/сестра",
    "married|ˈmærid|женат, замужем", "single|ˈsɪŋɡl|холост, не замужем", "mum|mʌm|мама", "dad|dæd|папа"
  ],
  theory: `
<h3>Притяжательные местоимения — «чей?»</h3>
<div class="table-wrap"><table>
<tr><th>Кто</th><th>Чей</th><th>Пример</th></tr>
<tr><td>I</td><td><mark>my</mark> — мой</td><td>my mother</td></tr>
<tr><td>you</td><td><mark>your</mark> — твой, ваш</td><td>your brother</td></tr>
<tr><td>he</td><td><mark>his</mark> — его</td><td>his wife</td></tr>
<tr><td>she</td><td><mark>her</mark> — её</td><td>her husband</td></tr>
<tr><td>it</td><td><mark>its</mark> — его/её (о предмете, животном)</td><td>its name</td></tr>
<tr><td>we</td><td><mark>our</mark> — наш</td><td>our parents</td></tr>
<tr><td>they</td><td><mark>their</mark> — их</td><td>their children</td></tr>
</table></div>
<div class="ex"><b>This is my sister. Her name is Olga.</b> — Это моя сестра. Её зовут Ольга.</div>
<div class="ex"><b>His father is a doctor.</b> — Его отец врач.</div>
<div class="note">В английском нет слова «свой»: «Я люблю свою маму» = <b>I love my mum</b>, «Она любит своего брата» = <b>She loves her brother</b>.</div>

<h3>'s — принадлежность человеку</h3>
<span class="formula">кто + 's + что</span>
<div class="ex"><b>Anna's brother</b> — брат Анны</div>
<div class="ex"><b>my father's car</b> — машина моего отца</div>
<div class="ex"><b>my parents' house</b> — дом моих родителей (после -s только апостроф)</div>
<div class="note">Не путайте <b>its</b> (его/её — чей?) и <b>it's</b> (= it is). И <b>'s</b> в «Anna's» — это не «is».</div>

<h3>Полезные вопросы</h3>
<div class="ex"><b>Have you got any brothers or sisters?</b> — У тебя есть братья или сёстры?</div>
<div class="ex"><b>Are you married?</b> — Ты женат / замужем?</div>
<div class="ex"><b>Who is this?</b> — Кто это?</div>`,
  dialog: [
    "A|Who is this in the photo?|Кто это на фото?",
    "B|That's my family. This is my mum and this is my dad.|Это моя семья. Это моя мама, а это мой папа.",
    "A|And who is the girl?|А кто эта девочка?",
    "B|She's my sister. Her name is Lisa. She's ten.|Это моя сестра. Её зовут Лиза. Ей десять.",
    "A|Is this your brother?|Это твой брат?",
    "B|No, he's my cousin, Mike. He's my uncle's son.|Нет, это мой двоюродный брат Майк. Он сын моего дяди."
  ],
  ex: [
    { t: "c", q: "She is married. ___ husband is a teacher.", o: ["His", "Her", "Their"], a: 1 },
    { t: "c", q: "Tom and Kate have a son. ___ son is five.", o: ["Our", "Its", "Their"], a: 2 },
    { t: "c", q: "брат Максима =", o: ["Max's brother", "brother Max", "Max brother's"], a: 0 },
    { t: "c", q: "The mother of my mother is my...", o: ["aunt", "grandmother", "cousin"], a: 1 },
    { t: "c", q: "My father's brother is my...", o: ["uncle", "son", "grandfather"], a: 0 },
    { t: "i", q: "We love ___ parents.", a: ["our"], ru: "Мы любим своих родителей." },
    { t: "i", q: "I have a brother. ___ name is Pavel.", a: ["his"], ru: "У меня есть брат. Его зовут Павел." },
    { t: "i", q: "My dog is black. ___ name is Rex.", a: ["its"] },
    { t: "o", a: "This is my sister's husband", ru: "Это муж моей сестры.", end: "." },
    { t: "tr", ru: "Её мама — врач.", a: ["Her mother is a doctor", "Her mum is a doctor", "Her mother's a doctor", "Her mum's a doctor"] },
    { t: "tr", ru: "Как зовут твоего брата?", a: ["What is your brother's name", "What's your brother's name"] },
    { t: "l", a: "my grandparents" }
  ]
});

LESSONS.push({
  id: 6, module: 2, icon: "🌍", title: "Страны, языки, вопросы", en: "Where are you from?",
  goal: "Говорить, откуда ты, какой язык знаешь; задавать вопросы What / Where / Who.",
  vocab: [
    "country|ˈkʌntri|страна", "language|ˈlæŋɡwɪdʒ|язык", "Russia — Russian|ˈrʌʃə — ˈrʌʃn|Россия — русский",
    "England — English|ˈɪŋɡlənd — ˈɪŋɡlɪʃ|Англия — английский", "the USA — American|ðə ˌjuː es ˈeɪ — əˈmerɪkən|США — американский",
    "Germany — German|ˈdʒɜːməni — ˈdʒɜːmən|Германия — немецкий", "France — French|frɑːns — frentʃ|Франция — французский",
    "Spain — Spanish|speɪn — ˈspænɪʃ|Испания — испанский", "Italy — Italian|ˈɪtəli — ɪˈtæliən|Италия — итальянский",
    "China — Chinese|ˈtʃaɪnə — ˌtʃaɪˈniːz|Китай — китайский", "Japan — Japanese|dʒəˈpæn — ˌdʒæpəˈniːz|Япония — японский",
    "Turkey — Turkish|ˈtɜːki — ˈtɜːkɪʃ|Турция — турецкий", "capital|ˈkæpɪtl|столица", "from|frɒm|из, от",
    "where|weə|где, куда", "what|wɒt|что, какой", "who|huː|кто", "live|lɪv|жить", "speak|spiːk|говорить (на языке)", "a little|ə ˈlɪtl|немного"
  ],
  theory: `
<h3>Откуда ты?</h3>
<div class="ex"><b>Where are you from?</b> — Откуда ты?</div>
<div class="ex"><b>I'm from Russia.</b> — Я из России.</div>
<div class="ex"><b>I'm Russian.</b> — Я русский / россиянин.</div>
<div class="ex"><b>Where is she from? — She's from Spain. She's Spanish.</b> — Откуда она? — Из Испании. Она испанка.</div>

<h3>Заглавная буква</h3>
<div class="note">Страны, национальности и языки всегда пишутся с большой буквы: <b>Russia, Russian, English, French</b>. Также с большой буквы: дни недели, месяцы и местоимение <b>I</b>.</div>
<p>Слово национальности = название языка: <i>He's French. He speaks French.</i></p>

<h3>Вопросительные слова + to be</h3>
<span class="formula">Вопросительное слово + is/are + подлежащее?</span>
<div class="ex"><b>What is your name?</b> — Как тебя зовут?</div>
<div class="ex"><b>Where is London?</b> — Где Лондон?</div>
<div class="ex"><b>Who is he?</b> — Кто он?</div>
<div class="ex"><b>What is the capital of France?</b> — Какая столица Франции?</div>

<h3>Языки</h3>
<div class="ex"><b>I speak Russian and a little English.</b> — Я говорю по-русски и немного по-английски.</div>
<div class="ex"><b>Do you speak English?</b> — Вы говорите по-английски?</div>
<div class="tip">Перед названием языка артикль не нужен: <b>speak English</b> (не «the English»).</div>`,
  dialog: [
    "A|Hi! Where are you from?|Привет! Откуда ты?",
    "B|I'm from Italy. I live in Rome. And you?|Я из Италии. Я живу в Риме. А ты?",
    "A|I'm from Russia, from Kazan.|Я из России, из Казани.",
    "B|Cool! What languages do you speak?|Круто! На каких языках ты говоришь?",
    "A|Russian, Tatar and a little English.|На русском, татарском и немного на английском.",
    "B|Your English is good!|У тебя хороший английский!"
  ],
  ex: [
    { t: "c", q: "He's from Germany. He's ___", o: ["Germany", "German", "Germanian"], a: 1 },
    { t: "c", q: "They're from China. They speak ___", o: ["China", "Chinish", "Chinese"], a: 2 },
    { t: "c", q: "___ are you from?", o: ["What", "Where", "Who"], a: 1 },
    { t: "c", q: "___ is your name?", o: ["What", "Where", "Who"], a: 0 },
    { t: "c", q: "___ is that man? — He's my teacher.", o: ["What", "Where", "Who"], a: 2 },
    { t: "c", q: "Как правильно?", o: ["I speak english.", "I speak English.", "i speak English."], a: 1 },
    { t: "i", q: "Madrid is the capital ___ Spain.", a: ["of"] },
    { t: "i", q: "She is ___ France.", a: ["from"], ru: "Она из Франции." },
    { t: "o", a: "Where is your friend from", ru: "Откуда твой друг?", end: "?" },
    { t: "tr", ru: "Я из России.", a: ["I am from Russia", "I'm from Russia"] },
    { t: "tr", ru: "Откуда они?", a: ["Where are they from"] },
    { t: "l", a: "I speak a little English" }
  ]
});

LESSONS.push({
  id: 7, module: 2, icon: "👉", title: "This, that, these, those", en: "What is this?",
  goal: "Указывать на предметы рядом и вдали; спрашивать «что это?».",
  vocab: [
    "this|ðɪs|это, этот (рядом)", "that|ðæt|то, тот (далеко)", "these|ðiːz|эти (рядом)", "those|ðəʊz|те (далеко)",
    "phone|fəʊn|телефон", "key|kiː|ключ", "bag|bæɡ|сумка", "chair|tʃeə|стул", "table|ˈteɪbl|стол",
    "window|ˈwɪndəʊ|окно", "door|dɔː|дверь", "cup|kʌp|чашка", "glass|ɡlɑːs|стакан; стекло", "computer|kəmˈpjuːtə|компьютер",
    "watch|wɒtʃ|наручные часы", "wallet|ˈwɒlɪt|кошелёк", "glasses|ˈɡlɑːsɪz|очки", "notebook|ˈnəʊtbʊk|тетрадь, блокнот", "picture|ˈpɪktʃə|картина, рисунок", "thing|θɪŋ|вещь"
  ],
  theory: `
<div class="table-wrap"><table>
<tr><th></th><th>Рядом (здесь)</th><th>Далеко (там)</th></tr>
<tr><th>Один предмет</th><td><mark>this</mark> — это, этот</td><td><mark>that</mark> — то, тот</td></tr>
<tr><th>Много</th><td><mark>these</mark> — эти</td><td><mark>those</mark> — те</td></tr>
</table></div>
<div class="ex"><b>This is my phone.</b> — Это мой телефон.</div>
<div class="ex"><b>That is a window.</b> — Вон то — окно.</div>
<div class="ex"><b>These are my keys.</b> — Это мои ключи.</div>
<div class="ex"><b>Those are nice pictures.</b> — Вон те — красивые картины.</div>
<div class="note">Не путайте звуки: <b>this</b> [ðɪs] — короткое «и», <b>these</b> [ðiːz] — долгое «ии» и звонкое [z] в конце.</div>

<h3>Что это?</h3>
<div class="ex"><b>What is this? — It's a key.</b> — Что это? — Это ключ.</div>
<div class="ex"><b>What are these? — They're glasses.</b> — Что это? — Это очки.</div>
<div class="tip">В ответе используем <b>it</b> (один предмет) и <b>they</b> (несколько), а не повторяем this/these.</div>

<h3>Как определитель</h3>
<div class="ex"><b>This bag is new.</b> — Эта сумка новая.</div>
<div class="ex"><b>I like those shoes.</b> — Мне нравятся вон те туфли.</div>
<p><b>glasses</b> (очки), <b>trousers</b> (брюки), <b>scissors</b> (ножницы) — всегда множественное число: <i>These glasses are mine.</i></p>`,
  dialog: [
    "A|Excuse me, is this your bag?|Извините, это ваша сумка?",
    "B|No, it isn't. My bag is black. That's my bag, on the chair.|Нет. Моя сумка чёрная. Вон моя сумка, на стуле.",
    "A|And are these your keys?|А это ваши ключи?",
    "B|Yes, they are! Thank you!|Да! Спасибо!",
    "A|What's that?|А что это там?",
    "B|That's my wallet. Oh, and those are my glasses!|Это мой кошелёк. О, и вон мои очки!"
  ],
  ex: [
    { t: "c", q: "(рядом, один) ___ is my cup.", o: ["This", "These", "Those"], a: 0 },
    { t: "c", q: "(далеко, много) ___ are my friends.", o: ["That", "These", "Those"], a: 2 },
    { t: "c", q: "(рядом, много) ___ keys are new.", o: ["This", "These", "That"], a: 1 },
    { t: "c", q: "What is this? — ___", o: ["It's a pen.", "They're a pen.", "This a pen."], a: 0 },
    { t: "c", q: "What are those? — ___", o: ["It's chairs.", "They're chairs.", "That are chairs."], a: 1 },
    { t: "i", q: "___ are my glasses. (рядом)", a: ["these"] },
    { t: "i", q: "___ is a big window. (далеко)", a: ["that"] },
    { t: "o", a: "What are these things", ru: "Что это за вещи?", end: "?" },
    { t: "tr", ru: "Это мой телефон.", a: ["This is my phone", "It is my phone", "It's my phone"] },
    { t: "tr", ru: "Эти чашки новые.", a: ["These cups are new"] },
    { t: "l", a: "Is that your computer" }
  ]
});

LESSONS.push({
  id: 8, module: 2, icon: "🎨", title: "Цвета и прилагательные", en: "A big red car",
  goal: "Описывать предметы: цвет, размер, возраст, цена.",
  vocab: [
    "red|red|красный", "blue|bluː|синий, голубой", "green|ɡriːn|зелёный", "yellow|ˈjeləʊ|жёлтый", "black|blæk|чёрный",
    "white|waɪt|белый", "grey|ɡreɪ|серый", "brown|braʊn|коричневый", "pink|pɪŋk|розовый", "purple|ˈpɜːpl|фиолетовый",
    "big|bɪɡ|большой", "small|smɔːl|маленький", "new|njuː|новый", "old|əʊld|старый", "young|jʌŋ|молодой",
    "long|lɒŋ|длинный", "short|ʃɔːt|короткий; невысокий", "beautiful|ˈbjuːtɪfl|красивый", "good|ɡʊd|хороший", "bad|bæd|плохой",
    "cheap|tʃiːp|дешёвый", "expensive|ɪkˈspensɪv|дорогой", "very|ˈveri|очень", "colour|ˈkʌlə|цвет"
  ],
  theory: `
<h3>Прилагательное стоит ПЕРЕД существительным</h3>
<div class="ex"><b>a red car</b> — красная машина</div>
<div class="ex"><b>an old house</b> — старый дом (an — потому что old начинается с гласного звука)</div>
<div class="ex"><b>beautiful flowers</b> — красивые цветы</div>

<h3>Прилагательные не изменяются</h3>
<p>Нет родов, падежей и множественного числа — одно слово на все случаи:</p>
<div class="ex"><b>a big dog, a big cat, big houses</b> — большая собака, большой кот, большие дома</div>
<div class="note">Нельзя добавлять -s к прилагательному: <b>new books</b>, а не «news books».</div>

<h3>После to be</h3>
<div class="ex"><b>The car is red.</b> — Машина красная.</div>
<div class="ex"><b>My phone is very old.</b> — Мой телефон очень старый.</div>
<div class="ex"><b>These shoes are expensive.</b> — Эти туфли дорогие.</div>

<h3>Порядок нескольких прилагательных</h3>
<p>Обычно: <b>мнение → размер → возраст → цвет</b> + предмет.</p>
<div class="ex"><b>a beautiful big old white house</b> — красивый большой старый белый дом</div>

<h3>Какого цвета?</h3>
<div class="ex"><b>What colour is your bag? — It's brown.</b> — Какого цвета твоя сумка? — Коричневая.</div>
<div class="tip"><b>colour</b> — британское написание, <b>color</b> — американское. Оба верны.</div>`,
  dialog: [
    "A|I like your new jacket! What colour is it?|Мне нравится твоя новая куртка! Какого она цвета?",
    "B|It's dark blue. And it was very cheap!|Тёмно-синяя. И она была очень дешёвая!",
    "A|Nice! My jacket is old and grey.|Классно! Моя куртка старая и серая.",
    "B|Look at that red jacket. It's beautiful.|Посмотри на ту красную куртку. Она красивая.",
    "A|Yes, but it's very expensive.|Да, но она очень дорогая."
  ],
  ex: [
    { t: "c", q: "Как правильно?", o: ["a car red", "a red car", "red a car"], a: 1 },
    { t: "c", q: "Как правильно?", o: ["olds houses", "old houses", "houses olds"], a: 1 },
    { t: "c", q: "___ old book", o: ["a", "an", "—"], a: 1 },
    { t: "c", q: "The opposite of «cheap» is...", o: ["expensive", "small", "bad"], a: 0 },
    { t: "c", q: "The opposite of «old» (о человеке) is...", o: ["new", "young", "short"], a: 1 },
    { t: "i", q: "Snow is ___.", a: ["white"] },
    { t: "i", q: "Bananas are ___.", a: ["yellow"] },
    { t: "i", q: "What ___ is your car?", a: ["colour", "color"], ru: "Какого цвета твоя машина?" },
    { t: "o", a: "She has a beautiful black dog", ru: "У неё красивая чёрная собака.", end: "." },
    { t: "tr", ru: "Мой дом очень маленький.", a: ["My house is very small"] },
    { t: "tr", ru: "Это новая зелёная машина.", a: ["It is a new green car", "It's a new green car", "This is a new green car"] },
    { t: "l", a: "a big brown bag" }
  ]
});

LESSONS.push({
  id: 9, module: 2, icon: "🧑", title: "Have got: у меня есть. Внешность", en: "I've got blue eyes",
  goal: "Говорить, что у тебя есть, и описывать внешность.",
  vocab: [
    "have got|hæv ɡɒt|иметь (у меня есть)", "head|hed|голова", "face|feɪs|лицо", "eyes|aɪz|глаза", "hair|heə|волосы",
    "nose|nəʊz|нос", "mouth|maʊθ|рот", "ear|ɪə|ухо", "hand|hænd|рука (кисть)", "arm|ɑːm|рука (от плеча)",
    "leg|leɡ|нога", "tall|tɔːl|высокий", "dark|dɑːk|тёмный", "fair|feə|светлый (о волосах)", "curly|ˈkɜːli|кудрявый",
    "straight|streɪt|прямой", "beard|bɪəd|борода", "pet|pet|домашнее животное", "bike|baɪk|велосипед", "flat|flæt|квартира"
  ],
  theory: `
<h3>Как сказать «у меня есть»</h3>
<p>По-русски «У меня есть машина». По-английски — «Я имею машину»: <b>I have got a car</b> (британский вариант) или <b>I have a car</b> (американский и тоже универсальный).</p>
<div class="table-wrap"><table>
<tr><th></th><th>I / you / we / they</th><th>he / she / it</th></tr>
<tr><td>+</td><td>I <mark>have got</mark> (I've got)</td><td>she <mark>has got</mark> (she's got)</td></tr>
<tr><td>−</td><td>I <mark>haven't got</mark></td><td>she <mark>hasn't got</mark></td></tr>
<tr><td>?</td><td><mark>Have</mark> you <mark>got</mark>...?</td><td><mark>Has</mark> she <mark>got</mark>...?</td></tr>
<tr><td>ответ</td><td>Yes, I have. / No, I haven't.</td><td>Yes, she has. / No, she hasn't.</td></tr>
</table></div>
<div class="ex"><b>I've got a brother.</b> — У меня есть брат.</div>
<div class="ex"><b>She's got long dark hair.</b> — У неё длинные тёмные волосы.</div>
<div class="ex"><b>We haven't got a car.</b> — У нас нет машины.</div>
<div class="ex"><b>Have you got a pet?</b> — У тебя есть питомец?</div>
<div class="note"><b>she's got</b> = she <b>has</b> got (а не she is). Смысл подсказывает слово got.</div>

<h3>Вариант без got (с do/does)</h3>
<div class="ex"><b>Do you have a pet? — Yes, I do.</b> — У тебя есть питомец? — Да.</div>
<div class="ex"><b>He doesn't have a bike.</b> — У него нет велосипеда.</div>
<p>Подробнее про do/does — в уроке 11.</p>

<h3>Описание внешности</h3>
<div class="ex"><b>He is tall. He has got blue eyes and short fair hair.</b> — Он высокий. У него голубые глаза и короткие светлые волосы.</div>
<div class="note"><b>hair</b> — неисчисляемое: <b>Her hair is long</b> (не «hairs are»). Рост — через be: <b>She is tall</b>.</div>`,
  dialog: [
    "A|Have you got a sister?|У тебя есть сестра?",
    "B|Yes, I have. Her name is Mia.|Да. Её зовут Миа.",
    "A|What does she look like?|Как она выглядит?",
    "B|She's tall. She's got long curly hair and green eyes.|Она высокая. У неё длинные кудрявые волосы и зелёные глаза.",
    "A|Has she got a pet?|У неё есть питомец?",
    "B|Yes, she has. She's got a cat and two fish.|Да. У неё кошка и две рыбки."
  ],
  ex: [
    { t: "c", q: "I ___ got a new phone.", o: ["have", "has", "am"], a: 0 },
    { t: "c", q: "My brother ___ got a beard.", o: ["have", "has", "is"], a: 1 },
    { t: "c", q: "___ you got a car?", o: ["Do", "Has", "Have"], a: 2 },
    { t: "c", q: "Has she got a dog? — No, she ___", o: ["hasn't.", "haven't.", "isn't."], a: 0 },
    { t: "c", q: "Как правильно?", o: ["Her hair are long.", "Her hair is long.", "Her hairs is long."], a: 1 },
    { t: "c", q: "«Он высокий» =", o: ["He has got tall.", "He is tall.", "He have tall."], a: 1 },
    { t: "i", q: "We ___ got a flat in Moscow.", a: ["have"] },
    { t: "i", q: "They haven't ___ a pet.", a: ["got"] },
    { t: "o", a: "She has got blue eyes", ru: "У неё голубые глаза.", end: "." },
    { t: "tr", ru: "У меня есть велосипед.", a: ["I have got a bike", "I've got a bike", "I have a bike"] },
    { t: "tr", ru: "У него нет машины.", a: ["He has not got a car", "He hasn't got a car", "He doesn't have a car", "He does not have a car"] },
    { t: "l", a: "He has got dark hair" }
  ]
});
