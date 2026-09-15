// ===== Уровень A2 · Модуль 11 =====
LESSONS.push({
  id: 45, module: 11, icon: "♻️", title: "Количество: too much, enough, a few", en: "Too much plastic",
  goal: "Говорить о количестве точнее: too many cars, not enough time, a few friends, a little money.",
  vocab: [
    "a lot of|ə lɒt əv|много", "lots of|lɒts əv|много (разг.)", "too much|tuː mʌtʃ|слишком много (неисч.)", "too many|tuː ˈmeni|слишком много (исч.)",
    "enough|ɪˈnʌf|достаточно", "a few|ə fjuː|несколько", "a little|ə ˈlɪtl|немного", "few|fjuː|мало (исч.)", "little|ˈlɪtl|мало (неисч.)",
    "plastic|ˈplæstɪk|пластик", "rubbish|ˈrʌbɪʃ|мусор", "waste|weɪst|отходы; тратить впустую", "packaging|ˈpækɪdʒɪŋ|упаковка",
    "energy|ˈenədʒi|энергия", "electricity|ɪˌlekˈtrɪsəti|электричество", "bin|bɪn|мусорное ведро", "reusable|ˌriːˈjuːzəbl|многоразовый",
    "traffic|ˈtræfɪk|дорожное движение, пробки", "reduce|rɪˈdjuːs|сокращать", "protect|prəˈtekt|защищать"
  ],
  theory: `
<h3>Много: a lot of / much / many</h3>
<div class="table-wrap"><table>
<tr><th></th><th>Исчисляемые (cars, people)</th><th>Неисчисляемые (water, time)</th></tr>
<tr><td>+ утверждение</td><td><mark>a lot of</mark> cars</td><td><mark>a lot of</mark> time</td></tr>
<tr><td>− отрицание</td><td>not <mark>many</mark> cars</td><td>not <mark>much</mark> time</td></tr>
<tr><td>? вопрос</td><td>How <mark>many</mark> cars?</td><td>How <mark>much</mark> time?</td></tr>
</table></div>
<div class="note">В утверждениях <b>much</b> звучит неестественно: <i>I have a lot of work</i> лучше, чем «I have much work».</div>

<h3>Немного: a few / a little</h3>
<div class="ex"><b>I've got a few friends in London.</b> — У меня есть несколько друзей в Лондоне. (исчисляемые)</div>
<div class="ex"><b>Can I have a little milk?</b> — Можно немного молока? (неисчисляемые)</div>
<div class="note">Без <b>a</b> смысл негативный: <b>few / little</b> = «мало, почти нет». <i>He has <b>few</b> friends</i> — у него мало друзей (и это плохо). <i>He has <b>a few</b> friends</i> — у него есть несколько друзей (и это нормально).</div>

<h3>Слишком: too much / too many / too + прилагательное</h3>
<div class="ex"><b>There are too many cars in the city.</b> — В городе слишком много машин.</div>
<div class="ex"><b>We use too much plastic.</b> — Мы используем слишком много пластика.</div>
<div class="ex"><b>This coffee is too hot.</b> — Этот кофе слишком горячий.</div>
<div class="note"><b>too</b> — «слишком» (плохо). <b>very</b> — «очень» (просто сильно). <i>It's very expensive, but I'll buy it.</i> / <i>It's too expensive. I can't buy it.</i></div>

<h3>Достаточно: enough</h3>
<p>Перед существительным, но <b>после</b> прилагательного:</p>
<div class="ex"><b>We haven't got enough time.</b> — У нас недостаточно времени.</div>
<div class="ex"><b>He isn't old enough to drive.</b> — Он недостаточно взрослый, чтобы водить.</div>
<div class="ex"><b>Is it warm enough for you?</b> — Тебе достаточно тепло?</div>`,
  dialog: [
    "A|Look at all this rubbish! We throw away too much plastic.|Посмотри на весь этот мусор! Мы выбрасываем слишком много пластика.",
    "B|I know. There's too much packaging on everything.|Знаю. На всём слишком много упаковки.",
    "A|I've started to use a reusable bag and a few glass bottles.|Я начала пользоваться многоразовой сумкой и несколькими стеклянными бутылками.",
    "B|That's a good idea. But there aren't enough recycling bins in our area.|Хорошая идея. Но в нашем районе недостаточно контейнеров для переработки.",
    "A|True. And there are too many cars. The air isn't clean enough.|Правда. И машин слишком много. Воздух недостаточно чистый.",
    "B|Maybe we should walk a little more!|Может, нам стоит немного больше ходить пешком!"
  ],
  ex: [
    { t: "c", q: "There are ___ people in the metro in the morning.", o: ["too much", "too many", "enough much"], a: 1 },
    { t: "c", q: "I can't buy it. It's ___ expensive.", o: ["too", "very", "enough"], a: 0 },
    { t: "c", q: "How ___ sugar do you take?", o: ["many", "much", "few"], a: 1 },
    { t: "c", q: "I've got ___ questions for you.", o: ["a little", "a few", "much"], a: 1 },
    { t: "c", q: "He isn't ___ to play basketball.", o: ["enough tall", "tall enough", "too tall enough"], a: 1 },
    { t: "c", q: "We haven't got ___ chairs for everyone.", o: ["enough", "too", "a little"], a: 0 },
    { t: "c", q: "Could I have ___ more tea, please?", o: ["a few", "a little", "many"], a: 1 },
    { t: "i", q: "We use ___ much energy. (слишком)", a: ["too"] },
    { t: "i", q: "There isn't ___ time. Let's hurry! (достаточно)", a: ["enough"] },
    { t: "i", q: "I don't have ___ friends here — only two. (много)", a: ["many"] },
    { t: "o", a: "There is too much traffic in the city", ru: "В городе слишком много машин (пробок).", end: "." },
    { t: "tr", ru: "У меня недостаточно денег.", a: ["I don't have enough money", "I do not have enough money", "I haven't got enough money", "I have not got enough money"] },
    { t: "l", a: "We should reduce plastic waste" }
  ]
});

LESSONS.push({
  id: 46, module: 11, icon: "🔍", title: "Something, anybody, nowhere", en: "Is anybody here?",
  goal: "Использовать неопределённые слова: something, anyone, nothing, everywhere.",
  vocab: [
    "something|ˈsʌmθɪŋ|что-то", "anything|ˈeniθɪŋ|что-нибудь; ничего (в отриц.)", "nothing|ˈnʌθɪŋ|ничего", "everything|ˈevriθɪŋ|всё",
    "somebody / someone|ˈsʌmbədi / ˈsʌmwʌn|кто-то", "anybody / anyone|ˈenibɒdi / ˈeniwʌn|кто-нибудь; никого (в отриц.)",
    "nobody / no one|ˈnəʊbədi / ˈnəʊ wʌn|никто", "everybody / everyone|ˈevribɒdi / ˈevriwʌn|все", "somewhere|ˈsʌmweə|где-то, куда-то",
    "anywhere|ˈeniweə|где-нибудь; нигде (в отриц.)", "nowhere|ˈnəʊweə|нигде, никуда", "everywhere|ˈevriweə|везде",
    "look for|lʊk fɔː|искать", "search|sɜːtʃ|обыскивать, искать", "hide — hid|haɪd — hɪd|прятать — спрятал", "wallet|ˈwɒlɪt|кошелёк",
    "else|els|ещё, другой (something else)", "happen|ˈhæpən|случаться", "empty|ˈempti|пустой", "at home|ət həʊm|дома"
  ],
  theory: `
<h3>Система: some- / any- / no- / every-</h3>
<div class="table-wrap"><table>
<tr><th></th><th>вещи</th><th>люди</th><th>места</th></tr>
<tr><td><b>some-</b> (+)</td><td>something — что-то</td><td>somebody / someone — кто-то</td><td>somewhere — где-то</td></tr>
<tr><td><b>any-</b> (− и ?)</td><td>anything</td><td>anybody / anyone</td><td>anywhere</td></tr>
<tr><td><b>no-</b> (− смысл)</td><td>nothing — ничего</td><td>nobody / no one — никто</td><td>nowhere — нигде</td></tr>
<tr><td><b>every-</b></td><td>everything — всё</td><td>everybody / everyone — все</td><td>everywhere — везде</td></tr>
</table></div>
<p>Правило то же, что у some/any: <b>some-</b> в утверждениях, <b>any-</b> в вопросах и отрицаниях.</p>
<div class="ex"><b>Somebody is at the door.</b> — Кто-то у двери.</div>
<div class="ex"><b>Is there anything in the fridge?</b> — В холодильнике что-нибудь есть?</div>
<div class="ex"><b>I've looked everywhere for my keys.</b> — Я везде искал ключи.</div>

<h3>Одно отрицание!</h3>
<p>В русском говорим «Я <b>ничего не</b> знаю» — два отрицания. В английском — только одно:</p>
<div class="table-wrap"><table>
<tr><td>I <b>don't</b> know <b>anything</b>.</td><td>=</td><td>I know <b>nothing</b>.</td></tr>
<tr><td>There <b>isn't anybody</b> here.</td><td>=</td><td>There's <b>nobody</b> here.</td></tr>
</table></div>
<div class="note">Ошибка: «I don't know nothing», «Nobody didn't come». Правильно: <b>I don't know anything</b>, <b>Nobody came</b>.</div>

<h3>Глагол — в единственном числе</h3>
<div class="ex"><b>Everybody is here.</b> — Все здесь. (не «are»)</div>
<div class="ex"><b>Everything was great.</b> — Всё было отлично.</div>

<h3>Полезные сочетания</h3>
<div class="ex"><b>Would you like something to drink?</b> — Хотите чего-нибудь выпить? (предложение — some-)</div>
<div class="ex"><b>Let's go somewhere else.</b> — Пойдём куда-нибудь в другое место.</div>
<div class="ex"><b>Anything else?</b> — Что-нибудь ещё?</div>
<div class="ex"><b>Nothing special.</b> — Ничего особенного.</div>`,
  dialog: [
    "A|Have you seen my wallet? I can't find it anywhere.|Ты видел мой кошелёк? Нигде не могу его найти.",
    "B|Did you leave it somewhere in the kitchen?|Может, ты оставил его где-то на кухне?",
    "A|No, there's nothing there. I've searched everywhere!|Нет, там ничего нет. Я везде искал!",
    "B|Did anybody come to the house today?|Сегодня кто-нибудь приходил домой?",
    "A|No, nobody. Oh wait... Here it is, in my jacket pocket!|Нет, никто. Ой, подожди... Вот он, в кармане куртки!",
    "B|Everything's OK then!|Значит, всё в порядке!"
  ],
  ex: [
    { t: "c", q: "There's ___ at the door. Can you open it?", o: ["anybody", "somebody", "nobody"], a: 1 },
    { t: "c", q: "I didn't buy ___ at the market.", o: ["nothing", "anything", "something"], a: 1 },
    { t: "c", q: "Is there ___ interesting on TV?", o: ["anything", "nothing", "everything"], a: 0 },
    { t: "c", q: "___ likes him. He's very kind.", o: ["Anybody", "Everybody", "Nobody"], a: 1 },
    { t: "c", q: "Где правильно?", o: ["I don't know nobody here.", "I don't know anybody here.", "I know anybody here."], a: 1 },
    { t: "c", q: "Everyone ___ tired after the trip.", o: ["are", "were", "was"], a: 2 },
    { t: "c", q: "Would you like ___ to eat?", o: ["something", "anything", "nothing"], a: 0 },
    { t: "i", q: "I've looked ___ but I can't find my phone. (везде)", a: ["everywhere"] },
    { t: "i", q: "We didn't go ___ at the weekend. (никуда)", a: ["anywhere"] },
    { t: "i", q: "The room was empty. There was ___ there. (никого)", a: ["nobody", "no one", "no-one"] },
    { t: "o", a: "Did anyone call me this morning", ru: "Мне кто-нибудь звонил сегодня утром?", end: "?" },
    { t: "tr", ru: "Я ничего не знаю.", a: ["I don't know anything", "I do not know anything", "I know nothing"] },
    { t: "l", a: "Let's go somewhere else" }
  ]
});

LESSONS.push({
  id: 47, module: 11, icon: "🎯", title: "Want to или enjoy -ing? Цели и учёба", en: "I decided to learn",
  goal: "Правильно сочетать глаголы: decide to do, enjoy doing; говорить о целях: I'm learning English to travel.",
  vocab: [
    "decide|dɪˈsaɪd|решать", "hope|həʊp|надеяться", "plan|plæn|планировать", "try|traɪ|пытаться, пробовать", "manage|ˈmænɪdʒ|суметь, справиться",
    "learn|lɜːn|учиться, учить", "agree|əˈɡriː|соглашаться", "promise|ˈprɒmɪs|обещать", "avoid|əˈvɔɪd|избегать",
    "give up|ɡɪv ʌp|бросать (привычку), сдаваться", "keep|kiːp|продолжать (keep doing)", "practise|ˈpræktɪs|практиковаться",
    "improve|ɪmˈpruːv|улучшать", "goal|ɡəʊl|цель", "achieve|əˈtʃiːv|достигать", "succeed|səkˈsiːd|добиться успеха",
    "mistake|mɪˈsteɪk|ошибка", "progress|ˈprəʊɡres|прогресс", "course|kɔːs|курс", "mind|maɪnd|возражать (don't mind)"
  ],
  theory: `
<h3>Глагол + to + глагол</h3>
<p>После этих глаголов — <b>to + начальная форма</b>:</p>
<p><b>want, would like, decide, hope, plan, need, try, learn, agree, promise, forget, manage, offer</b></p>
<div class="ex"><b>I've decided to learn Spanish.</b> — Я решил выучить испанский.</div>
<div class="ex"><b>We hope to see you soon.</b> — Надеемся скоро увидеться.</div>
<div class="ex"><b>She promised to call me.</b> — Она обещала позвонить мне.</div>
<div class="ex"><b>I managed to find a job.</b> — Мне удалось найти работу.</div>

<h3>Глагол + -ing</h3>
<p>После этих глаголов — <b>-ing</b>:</p>
<p><b>enjoy, like, love, hate, finish, stop, mind, avoid, give up, keep, practise, spend time</b></p>
<div class="ex"><b>I enjoy learning languages.</b> — Мне нравится учить языки.</div>
<div class="ex"><b>He's given up smoking.</b> — Он бросил курить.</div>
<div class="ex"><b>Keep practising!</b> — Продолжай практиковаться!</div>
<div class="ex"><b>Do you mind waiting?</b> — Ты не против подождать?</div>
<div class="note">После <b>предлогов</b> — всегда -ing: <i>I'm interested <b>in learning</b></i>, <i>good <b>at speaking</b></i>, <i>before <b>going</b></i>, <i>Thank you <b>for helping</b></i>.</div>

<h3>Цель: to + глагол = «чтобы»</h3>
<div class="ex"><b>I'm learning English to travel.</b> — Я учу английский, чтобы путешествовать.</div>
<div class="ex"><b>She went to the shop to buy some bread.</b> — Она пошла в магазин купить хлеба.</div>
<div class="note">Не «for travel», не «for to travel». Цель действия — <b>to + глагол</b>. <b>for</b> — только с существительным: <i>I went there <b>for</b> a coffee</i>.</div>

<h3>-ing как подлежащее</h3>
<div class="ex"><b>Learning a language takes time.</b> — Изучение языка требует времени.</div>
<div class="ex"><b>Swimming is good for you.</b> — Плавание полезно.</div>`,
  dialog: [
    "A|Why are you learning English?|Зачем ты учишь английский?",
    "B|I want to find a better job. And I enjoy watching films in English.|Хочу найти работу получше. И мне нравится смотреть фильмы на английском.",
    "A|Is it difficult?|Трудно?",
    "B|Sometimes. I keep making mistakes with tenses, but I try to practise every day.|Иногда. Всё время ошибаюсь во временах, но стараюсь практиковаться каждый день.",
    "A|Don't give up! My goal is to reach B1 by summer.|Не сдавайся! Моя цель — дойти до B1 к лету.",
    "B|Great. I hope to pass the A2 exam first. I've decided to take it in May.|Отлично. Я надеюсь сначала сдать экзамен A2. Я решил сдавать его в мае."
  ],
  ex: [
    { t: "c", q: "I've decided ___ a new car.", o: ["buying", "to buy", "buy"], a: 1 },
    { t: "c", q: "She enjoys ___ in the garden.", o: ["working", "to work", "work"], a: 0 },
    { t: "c", q: "Have you finished ___ your homework?", o: ["to do", "doing", "do"], a: 1 },
    { t: "c", q: "He promised ___ late again.", o: ["not being", "not to be", "to not being"], a: 1 },
    { t: "c", q: "I went to the pharmacy ___ some medicine.", o: ["for buy", "to buy", "for buying"], a: 1 },
    { t: "c", q: "I'm interested in ___ photography.", o: ["learn", "to learn", "learning"], a: 2 },
    { t: "c", q: "My dad gave up ___ ten years ago.", o: ["smoking", "to smoke", "smoke"], a: 0 },
    { t: "i", q: "We hope ___ (see) you soon.", a: ["to see"] },
    { t: "i", q: "Do you mind ___ (open) the window?", a: ["opening"] },
    { t: "i", q: "I didn't manage ___ (finish) the book.", a: ["to finish"] },
    { t: "o", a: "I am learning English to get a better job", ru: "Я учу английский, чтобы получить работу получше.", end: "." },
    { t: "tr", ru: "Мне нравится путешествовать.", a: ["I enjoy travelling", "I like travelling", "I love travelling", "I enjoy traveling", "I like traveling", "I love traveling", "I like to travel", "I love to travel"] },
    { t: "tr", ru: "Я решил бросить курить.", a: ["I decided to give up smoking", "I've decided to give up smoking", "I have decided to give up smoking", "I decided to stop smoking", "I've decided to stop smoking", "I have decided to stop smoking", "I decided to quit smoking"] },
    { t: "l", a: "Keep practising every day", alt: ["keep practicing every day"] }
  ]
});

LESSONS.push({
  id: 48, module: 11, icon: "🧩", title: "Who, which, that, where. Характер", en: "A person who...",
  goal: "Описывать людей, вещи и места одним предложением: a friend who lives in London, the café where we met.",
  vocab: [
    "who|huː|который (о людях)", "which|wɪtʃ|который (о вещах)", "that|ðæt|который (о людях и вещах)", "where|weə|где (в котором)",
    "friendly|ˈfrendli|дружелюбный", "kind|kaɪnd|добрый", "honest|ˈɒnɪst|честный", "generous|ˈdʒenərəs|щедрый", "lazy|ˈleɪzi|ленивый",
    "hard-working|ˌhɑːd ˈwɜːkɪŋ|трудолюбивый", "funny|ˈfʌni|смешной, забавный", "clever|ˈklevə|умный", "polite|pəˈlaɪt|вежливый",
    "rude|ruːd|грубый", "selfish|ˈselfɪʃ|эгоистичный", "patient|ˈpeɪʃnt|терпеливый", "confident|ˈkɒnfɪdənt|уверенный в себе",
    "reliable|rɪˈlaɪəbl|надёжный", "character|ˈkærəktə|характер", "get on with|ɡet ɒn wɪð|ладить с"
  ],
  theory: `
<h3>Определительные придаточные</h3>
<p>Помогают объяснить, <b>о ком или о чём</b> мы говорим, соединяя два предложения в одно.</p>
<div class="table-wrap"><table>
<tr><th>Слово</th><th>Для</th><th>Пример</th></tr>
<tr><td><mark>who</mark></td><td>людей</td><td>A doctor is a person <b>who</b> helps sick people.</td></tr>
<tr><td><mark>which</mark></td><td>вещей, животных</td><td>This is the phone <b>which</b> I bought yesterday.</td></tr>
<tr><td><mark>that</mark></td><td>людей и вещей (разговорное)</td><td>The man <b>that</b> lives next door is a pilot.</td></tr>
<tr><td><mark>where</mark></td><td>мест</td><td>This is the café <b>where</b> we first met.</td></tr>
</table></div>
<div class="ex"><b>I have a friend who lives in Canada.</b> — У меня есть друг, который живёт в Канаде.</div>
<div class="ex"><b>It's a film which everybody loves.</b> — Это фильм, который все любят.</div>
<div class="ex"><b>That's the hotel where we stayed.</b> — Это отель, в котором мы останавливались.</div>

<h3>Не повторяйте подлежащее!</h3>
<div class="note">Ошибка: «The woman who <b>she</b> works here». Слово who уже заменяет she. Правильно: <b>The woman who works here</b>. И то же с дополнением: «the book which I read <b>it</b>» — ошибка.</div>

<h3>Когда who / which / that можно пропустить</h3>
<p>Если после него идёт <b>другое подлежащее</b> (I, you, she...), слово можно опустить:</p>
<div class="ex"><b>The book (that) I'm reading is great.</b> — Книга, которую я читаю, отличная.</div>
<div class="ex"><b>The man (who) you met is my boss.</b> — Мужчина, с которым ты познакомился, — мой начальник.</div>
<p>Но: <i>The man <b>who lives</b> here</i> — пропустить нельзя (who — подлежащее).</p>

<h3>Описание характера</h3>
<div class="ex"><b>What's he like? — He's friendly and very reliable.</b> — Какой он? — Дружелюбный и очень надёжный.</div>
<div class="note"><b>What is he like?</b> — «какой он (по характеру)?» А <b>What does he like?</b> — «что ему нравится?». <b>What does he look like?</b> — «как он выглядит?»</div>
<div class="ex"><b>I get on well with my sister.</b> — Я хорошо лажу с сестрой.</div>`,
  dialog: [
    "A|Who's that girl who's talking to Anna?|Кто та девушка, которая разговаривает с Анной?",
    "B|That's Lena, the colleague who started last month.|Это Лена, коллега, которая начала работать в прошлом месяце.",
    "A|What's she like?|Какая она?",
    "B|She's really friendly and hard-working. And she's very patient with customers who are rude.|Очень дружелюбная и трудолюбивая. И очень терпелива с грубыми клиентами.",
    "A|Do you get on with her?|Ты с ней ладишь?",
    "B|Yes! We often have lunch at the café where you and I went last week.|Да! Мы часто обедаем в кафе, куда мы с тобой ходили на прошлой неделе."
  ],
  ex: [
    { t: "c", q: "A teacher is a person ___ teaches students.", o: ["which", "who", "where"], a: 1 },
    { t: "c", q: "This is the laptop ___ I bought last year.", o: ["who", "which", "where"], a: 1 },
    { t: "c", q: "That's the school ___ I studied.", o: ["which", "who", "where"], a: 2 },
    { t: "c", q: "Где правильно?", o: ["The man who he lives here is old.", "The man who lives here is old.", "The man which lives here is old."], a: 1 },
    { t: "c", q: "Someone who always tells the truth is...", o: ["honest", "rude", "lazy"], a: 0 },
    { t: "c", q: "Someone who doesn't like working is...", o: ["generous", "lazy", "patient"], a: 1 },
    { t: "c", q: "— What's your brother ___? — He's funny and clever.", o: ["like", "look like", "likes"], a: 0 },
    { t: "i", q: "I've got a friend ___ speaks five languages.", a: ["who", "that"] },
    { t: "i", q: "Paris is the city ___ I want to live.", a: ["where"] },
    { t: "i", q: "Someone who gives a lot to other people is ___. (щедрый)", a: ["generous"] },
    { t: "o", a: "This is the restaurant where we had dinner", ru: "Это ресторан, где мы ужинали.", end: "." },
    { t: "tr", ru: "У меня есть друг, который живёт в Лондоне.", a: ["I have a friend who lives in London", "I've got a friend who lives in London", "I have got a friend who lives in London", "I have a friend that lives in London", "I've got a friend that lives in London"] },
    { t: "l", a: "The book which I'm reading is interesting", alt: ["the book which I am reading is interesting", "the book that I'm reading is interesting", "the book I'm reading is interesting"] }
  ]
});
