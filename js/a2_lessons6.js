// ===== Уровень A2 · Модуль 12 =====
LESSONS.push({
  id: 49, module: 12, icon: "⏳", title: "Present Perfect: for, since, how long", en: "I've lived here for 5 years",
  goal: "Говорить о том, что началось в прошлом и продолжается: I've known her since 2015.",
  vocab: [
    "for|fɔː|в течение (период)", "since|sɪns|с (момента)", "how long|haʊ lɒŋ|как долго, сколько времени", "known (know)|nəʊn|знал (3-я форма know)",
    "had (have)|hæd|имел (3-я форма have)", "move|muːv|переезжать", "own|əʊn|владеть; собственный", "graduate|ˈɡrædʒueɪt|окончить (вуз)",
    "career|kəˈrɪə|карьера", "degree|dɪˈɡriː|учёная степень, диплом", "relationship|rɪˈleɪʃnʃɪp|отношения", "hometown|ˈhəʊmtaʊn|родной город",
    "neighbourhood|ˈneɪbəhʊd|район, округа", "stay|steɪ|оставаться", "ages|ˈeɪdʒɪz|целую вечность (разг.)", "a long time|ə lɒŋ taɪm|долгое время",
    "a while|ə waɪl|некоторое время", "married|ˈmærid|женат, замужем", "these days|ðiːz deɪz|в эти дни, сейчас", "change|tʃeɪndʒ|менять(ся)"
  ],
  theory: `
<h3>Началось в прошлом — продолжается сейчас</h3>
<p>По-русски мы говорим в настоящем: «Я живу здесь 5 лет». По-английски в таких фразах нужен <b>Present Perfect</b>:</p>
<div class="ex"><b>I've lived here for five years.</b> — Я живу здесь пять лет.</div>
<div class="ex"><b>We've been married since 2010.</b> — Мы женаты с 2010 года.</div>
<div class="ex"><b>She's worked at this company for a long time.</b> — Она давно работает в этой компании.</div>
<div class="note">Ошибка: «I live here for five years» или «I am here since Monday». Если есть <b>for / since</b> и действие продолжается — Present Perfect: <b>I've been here since Monday</b>.</div>

<h3>for или since?</h3>
<div class="table-wrap"><table>
<tr><th>for + период (сколько?)</th><th>since + точка начала (с какого момента?)</th></tr>
<tr><td>for two hours</td><td>since 9 o'clock</td></tr>
<tr><td>for three days</td><td>since Monday</td></tr>
<tr><td>for ten years</td><td>since 2015</td></tr>
<tr><td>for a long time / for ages</td><td>since I was a child</td></tr>
</table></div>

<h3>Вопрос: How long...?</h3>
<div class="ex"><b>How long have you lived in Moscow?</b> — Сколько ты живёшь в Москве?</div>
<div class="ex"><b>How long have you known Tom? — Since school.</b> — Как давно ты знаешь Тома? — Со школы.</div>
<div class="ex"><b>How long has she had her dog?</b> — Как давно у неё собака?</div>

<h3>Сравните с Past Simple</h3>
<div class="table-wrap"><table>
<tr><td>I've lived in Kazan for 3 years.</td><td>живу до сих пор</td></tr>
<tr><td>I lived in Kazan for 3 years.</td><td>жил когда-то, сейчас не живу</td></tr>
</table></div>
<div class="tip"><b>ago</b> — с Past Simple (<i>I moved here 3 years ago</i>). <b>for / since</b> — с Present Perfect (<i>I've lived here for 3 years</i>). Смысл один, грамматика разная.</div>`,
  dialog: [
    "A|How long have you lived in this neighbourhood?|Сколько ты живёшь в этом районе?",
    "B|Since 2018. We moved here when my daughter was born. And you?|С 2018 года. Мы переехали, когда родилась дочь. А ты?",
    "A|Only for a few months. I've had this flat since March.|Всего несколько месяцев. Эта квартира у меня с марта.",
    "B|Do you like it?|Нравится?",
    "A|Yes, but I haven't met many people yet. How long have you known the neighbours?|Да, но я ещё мало с кем познакомился. Как давно ты знаешь соседей?",
    "B|For ages! Come to our barbecue on Saturday, I'll introduce you.|Целую вечность! Приходи на наше барбекю в субботу, я тебя познакомлю."
  ],
  ex: [
    { t: "c", q: "I've known Anna ___ ten years.", o: ["since", "for", "ago"], a: 1 },
    { t: "c", q: "They've been married ___ 2019.", o: ["since", "for", "from"], a: 0 },
    { t: "c", q: "«Я живу в Москве 5 лет» =", o: ["I live in Moscow for 5 years.", "I've lived in Moscow for 5 years.", "I lived in Moscow since 5 years."], a: 1 },
    { t: "c", q: "How long ___ you had this car?", o: ["do", "did", "have"], a: 2 },
    { t: "c", q: "She moved to Paris three years ___.", o: ["for", "since", "ago"], a: 2 },
    { t: "c", q: "I haven't seen him ___ ages.", o: ["for", "since", "ago"], a: 0 },
    { t: "i", q: "We've been here ___ 8 o'clock.", a: ["since"] },
    { t: "i", q: "How long have you ___ (know) your best friend?", a: ["known"] },
    { t: "i", q: "He has ___ (work) here since January.", a: ["worked"] },
    { t: "o", a: "How long have you been a teacher", ru: "Как давно ты работаешь учителем?", end: "?" },
    { t: "tr", ru: "Я знаю его с детства.", a: ["I have known him since childhood", "I've known him since childhood", "I have known him since I was a child", "I've known him since I was a child"] },
    { t: "tr", ru: "Мы живём здесь два года.", a: ["We have lived here for two years", "We've lived here for two years", "We have been living here for two years", "We've been living here for two years", "We have lived here for 2 years", "We've lived here for 2 years"] },
    { t: "l", a: "She has had a cat since two thousand twenty", alt: ["she has had a cat since 2020", "she's had a cat since 2020", "she's had a cat since two thousand twenty"] }
  ]
});

LESSONS.push({
  id: 50, module: 12, icon: "🏭", title: "Пассивный залог: is made, was built", en: "It was built in 1850",
  goal: "Говорить о том, что с чем-то делают или сделали: Coffee is grown in Brazil. The bridge was built in 1900.",
  vocab: [
    "made of|meɪd əv|сделан из", "produce|prəˈdjuːs|производить", "invent|ɪnˈvent|изобретать", "discover|dɪˈskʌvə|открывать (находить)",
    "build — built|bɪld — bɪlt|строить — построил", "design|dɪˈzaɪn|проектировать; дизайн", "grow — grown|ɡrəʊ — ɡrəʊn|выращивать — выращен",
    "sell — sold|sel — səʊld|продавать — продан", "write — written|raɪt — ˈrɪtn|писать — написан", "steal — stolen|stiːl — ˈstəʊlən|красть — украден",
    "export|ɪkˈspɔːt|экспортировать", "material|məˈtɪəriəl|материал", "wood|wʊd|дерево (материал)", "metal|ˈmetl|металл",
    "glass|ɡlɑːs|стекло", "cotton|ˈkɒtn|хлопок", "leather|ˈleðə|кожа (материал)", "invention|ɪnˈvenʃn|изобретение", "century|ˈsentʃəri|век, столетие", "by|baɪ|кем (в пассиве)"
  ],
  theory: `
<h3>Активный и пассивный залог</h3>
<p><b>Активный</b>: важно, <b>кто</b> делает. <b>Пассивный</b>: важно, <b>что</b> сделано, а кто делает — неизвестно или неважно.</p>
<div class="table-wrap"><table>
<tr><td>Актив</td><td>They <b>make</b> cars in this factory.</td><td>На этой фабрике делают машины.</td></tr>
<tr><td>Пассив</td><td>Cars <b>are made</b> in this factory.</td><td>Машины делаются на этой фабрике.</td></tr>
</table></div>
<span class="formula">be (am/is/are/was/were) + 3-я форма глагола</span>

<h3>Present Simple Passive — факты, процессы</h3>
<div class="ex"><b>Coffee is grown in Brazil.</b> — Кофе выращивают в Бразилии.</div>
<div class="ex"><b>English is spoken all over the world.</b> — На английском говорят по всему миру.</div>
<div class="ex"><b>These bags are made of leather.</b> — Эти сумки сделаны из кожи.</div>

<h3>Past Simple Passive — история</h3>
<div class="ex"><b>The Eiffel Tower was built in 1889.</b> — Эйфелева башня была построена в 1889 году.</div>
<div class="ex"><b>The telephone was invented by Bell.</b> — Телефон был изобретён Беллом.</div>
<div class="ex"><b>My bike was stolen yesterday.</b> — Мой велосипед украли вчера.</div>
<div class="note">Русское неопределённо-личное «<b>украли</b>», «<b>построили</b>», «<b>говорят</b>» часто переводится пассивом: <i>It was stolen</i>, <i>It was built</i>.</div>

<h3>Отрицание и вопрос — через be</h3>
<div class="ex"><b>The letter wasn't sent.</b> — Письмо не отправили.</div>
<div class="ex"><b>Where are these phones made?</b> — Где делают эти телефоны?</div>
<div class="ex"><b>When was this church built?</b> — Когда была построена эта церковь?</div>

<h3>by — кем</h3>
<p>Исполнителя называем с <b>by</b>, только если это важно: <i>"Harry Potter" was written <b>by</b> J.K. Rowling.</i></p>
<div class="tip"><b>made of</b> — из чего (материал виден: made of wood). <b>made in</b> — где (made in China). <b>made by</b> — кем (made by Apple).</div>`,
  dialog: [
    "A|What a beautiful old building! When was it built?|Какое красивое старое здание! Когда его построили?",
    "B|It was built in the 18th century. It was designed by an Italian architect.|В 18 веке. Его спроектировал итальянский архитектор.",
    "A|What is it used for now?|Для чего его сейчас используют?",
    "B|It's a museum. Old toys are shown there. Most of them are made of wood.|Это музей. Там показывают старинные игрушки. Большинство сделаны из дерева.",
    "A|Can we go in?|Можно зайти?",
    "B|Not today, I'm afraid. It's closed on Mondays.|Боюсь, не сегодня. По понедельникам закрыто."
  ],
  ex: [
    { t: "c", q: "Tea ___ in India and China.", o: ["grows", "is grown", "is grow"], a: 1 },
    { t: "c", q: "This bridge ___ in 1905.", o: ["built", "was built", "is built"], a: 1 },
    { t: "c", q: "My phone ___ yesterday!", o: ["was stolen", "stole", "is stealing"], a: 0 },
    { t: "c", q: "The table is made ___ wood.", o: ["in", "by", "of"], a: 2 },
    { t: "c", q: "\"Romeo and Juliet\" was written ___ Shakespeare.", o: ["by", "of", "from"], a: 0 },
    { t: "c", q: "Where ___ these shoes made?", o: ["is", "are", "do"], a: 1 },
    { t: "i", q: "Spanish is ___ (speak) in Mexico.", a: ["spoken"] },
    { t: "i", q: "The pyramids were ___ (build) thousands of years ago.", a: ["built"] },
    { t: "i", q: "Penicillin ___ discovered in 1928.", a: ["was"] },
    { t: "o", a: "When was the telephone invented", ru: "Когда был изобретён телефон?", end: "?" },
    { t: "tr", ru: "Этот дом был построен в 1990 году.", a: ["This house was built in 1990", "The house was built in 1990"] },
    { t: "tr", ru: "Эта сумка сделана из кожи.", a: ["This bag is made of leather", "The bag is made of leather", "This bag is made from leather"] },
    { t: "l", a: "These cars are made in Germany" }
  ]
});

LESSONS.push({
  id: 51, module: 12, icon: "🧷", title: "Фразовые глаголы", en: "Look for, turn off, find out",
  goal: "Понимать и использовать 20 самых частых фразовых глаголов.",
  vocab: [
    "look for|lʊk fɔː|искать", "look after|lʊk ˈɑːftə|присматривать, заботиться", "look forward to|lʊk ˈfɔːwəd tuː|с нетерпением ждать",
    "find out|faɪnd aʊt|узнать, выяснить", "put on|pʊt ɒn|надевать", "take off|teɪk ɒf|снимать (одежду); взлетать", "try on|traɪ ɒn|примерять",
    "turn on / turn off|tɜːn ɒn / tɜːn ɒf|включать / выключать", "fill in|fɪl ɪn|заполнять (анкету)", "go out|ɡəʊ aʊt|выходить, гулять (вечером)",
    "come back|kʌm bæk|возвращаться", "get on / get off|ɡet ɒn / ɡet ɒf|садиться / выходить (из транспорта)", "grow up|ɡrəʊ ʌp|вырастать",
    "give back|ɡɪv bæk|возвращать (вещь)", "throw away|θrəʊ əˈweɪ|выбрасывать", "run out of|rʌn aʊt əv|закончиться (о запасах)",
    "set off|set ɒf|отправляться (в путь)", "pick up|pɪk ʌp|поднимать; забирать", "put off|pʊt ɒf|откладывать", "call back|kɔːl bæk|перезвонить"
  ],
  theory: `
<h3>Что такое фразовый глагол</h3>
<p>Глагол + маленькое слово (up, on, off, out, back...). Вместе они получают <b>новое значение</b>, которое не всегда можно угадать:</p>
<div class="table-wrap"><table>
<tr><td>look</td><td>смотреть</td></tr>
<tr><td>look <b>for</b></td><td>искать</td></tr>
<tr><td>look <b>after</b></td><td>присматривать за</td></tr>
<tr><td>look <b>forward to</b></td><td>с нетерпением ждать</td></tr>
</table></div>
<div class="ex"><b>I'm looking for my keys.</b> — Я ищу ключи.</div>
<div class="ex"><b>Can you look after my cat?</b> — Можешь присмотреть за моей кошкой?</div>
<div class="ex"><b>I'm looking forward to the holidays.</b> — Жду не дождусь каникул.</div>
<div class="note">После <b>look forward to</b> — существительное или <b>-ing</b>: <i>I look forward to <b>hearing</b> from you</i> (стандартная фраза в конце письма).</div>

<h3>Частицы подсказывают смысл</h3>
<div class="table-wrap"><table>
<tr><td><b>on / off</b></td><td>включение/выключение, надеть/снять</td><td>turn on, turn off, put on, take off</td></tr>
<tr><td><b>back</b></td><td>обратно</td><td>come back, give back, call back</td></tr>
<tr><td><b>out</b></td><td>наружу; до конца</td><td>go out, find out, run out of</td></tr>
<tr><td><b>up</b></td><td>вверх; полностью</td><td>get up, grow up, pick up</td></tr>
<tr><td><b>away</b></td><td>прочь</td><td>throw away, go away</td></tr>
</table></div>

<h3>Где ставить дополнение</h3>
<p>У многих фразовых глаголов предмет можно поставить в середину или в конец:</p>
<div class="ex"><b>Turn off the light. / Turn the light off.</b> — Выключи свет.</div>
<p>Но если это <b>местоимение</b> (it, them, him) — только в середину:</p>
<div class="ex"><b>Turn it off.</b> — Выключи его. (не «Turn off it»)</div>
<div class="ex"><b>Put them on.</b> — Надень их.</div>
<div class="note">У глаголов с предлогом (look for, look after, get on) предмет всегда после: <b>I'm looking for it</b>, а не «looking it for».</div>`,
  dialog: [
    "A|Hurry up! Put on your coat. We have to set off in five minutes.|Поторопись! Надевай пальто. Выходим через пять минут.",
    "B|I'm looking for my phone. Have you seen it?|Я ищу телефон. Ты его не видела?",
    "A|It's on the table. And turn off the TV, please.|Он на столе. И выключи телевизор, пожалуйста.",
    "B|OK, I've turned it off. Who's looking after the dog while we're away?|Ок, выключил. А кто присмотрит за собакой, пока нас нет?",
    "A|My mum. She'll pick up the keys at six.|Моя мама. Она заберёт ключи в шесть.",
    "B|Great. I'm really looking forward to this trip!|Отлично. Я правда жду не дождусь этой поездки!"
  ],
  ex: [
    { t: "c", q: "It's cold. ___ your jacket.", o: ["Put on", "Take off", "Turn on"], a: 0 },
    { t: "c", q: "Can you ___ my children tonight?", o: ["look for", "look after", "look at"], a: 1 },
    { t: "c", q: "We've ___ milk. Can you buy some?", o: ["run out of", "given back", "found out"], a: 0 },
    { t: "c", q: "Где правильно?", o: ["Turn off it.", "Turn it off.", "It turn off."], a: 1 },
    { t: "c", q: "Please ___ this form. (заполните)", o: ["fill in", "fill on", "fill up in"], a: 0 },
    { t: "c", q: "I look forward to ___ you.", o: ["see", "seeing", "saw"], a: 1 },
    { t: "c", q: "I'm busy now. Can I ___ later?", o: ["call you back", "call back you", "back call you"], a: 0 },
    { t: "i", q: "Don't throw ___ these bottles. We can recycle them.", a: ["away"] },
    { t: "i", q: "I want to find ___ more about this course.", a: ["out"] },
    { t: "i", q: "Where did you grow ___?", a: ["up"] },
    { t: "o", a: "Can I try these jeans on", ru: "Можно примерить эти джинсы?", end: "?" },
    { t: "tr", ru: "Я ищу свой паспорт.", a: ["I am looking for my passport", "I'm looking for my passport"] },
    { t: "l", a: "Please give it back tomorrow" }
  ]
});

LESSONS.push({
  id: 52, module: 12, icon: "✉️", title: "Письма, сообщения и итог A2", en: "Dear..., Best wishes",
  goal: "Писать короткие письма и сообщения, связывать мысли и повторить все времена A2.",
  vocab: [
    "email|ˈiːmeɪl|электронное письмо", "subject|ˈsʌbdʒɪkt|тема (письма)", "attach|əˈtætʃ|прикреплять", "reply|rɪˈplaɪ|отвечать; ответ",
    "Dear ...|dɪə|Дорогой/Уважаемый ...", "Best wishes|best ˈwɪʃɪz|С наилучшими пожеланиями", "Kind regards|kaɪnd rɪˈɡɑːdz|С уважением",
    "however|haʊˈevə|однако", "although|ɔːlˈðəʊ|хотя", "also|ˈɔːlsəʊ|также", "as well|əz wel|тоже (в конце)", "instead|ɪnˈsted|вместо этого",
    "apologise|əˈpɒlədʒaɪz|извиняться", "confirm|kənˈfɜːm|подтверждать", "unfortunately|ʌnˈfɔːtʃənətli|к сожалению",
    "request|rɪˈkwest|просьба, запрос", "information|ˌɪnfəˈmeɪʃn|информация", "details|ˈdiːteɪlz|подробности", "form|fɔːm|анкета, бланк", "soon|suːn|скоро"
  ],
  theory: `
<h3>Неформальное письмо (другу)</h3>
<div class="card flat" style="background:var(--surface-2)">
<b>Hi Sam,</b><br>
Thanks for your message! Sorry I didn't reply earlier — I've been really busy at work.<br>
Guess what? I've just booked tickets to London! I'm arriving on 12th May. Are you free that weekend? It would be great to meet up.<br>
Write back soon!<br>
<b>Love / Best wishes,</b><br>Anna
</div>

<h3>Официальное письмо</h3>
<div class="card flat" style="background:var(--surface-2)">
<b>Dear Mr Brown,</b><br>
I am writing to ask for information about your English course. Could you please send me the details and prices?<br>
I would also like to know if there are evening classes.<br>
I look forward to hearing from you.<br>
<b>Kind regards,</b><br>Ivan Petrov
</div>
<div class="table-wrap"><table>
<tr><th></th><th>Неформально</th><th>Формально</th></tr>
<tr><td>Начало</td><td>Hi Sam, / Hello Kate,</td><td>Dear Mr / Ms Brown, / Dear Sir or Madam,</td></tr>
<tr><td>Цель</td><td>Just a quick message to...</td><td>I am writing to...</td></tr>
<tr><td>Сокращения</td><td>I'm, don't, can't</td><td>I am, do not, cannot</td></tr>
<tr><td>Конец</td><td>See you soon! / Write back soon!</td><td>I look forward to hearing from you.</td></tr>
<tr><td>Подпись</td><td>Love, / Best wishes, / Cheers,</td><td>Kind regards, / Yours sincerely,</td></tr>
</table></div>

<h3>Связки</h3>
<div class="ex"><b>The hotel was nice. However, the food was terrible.</b> — Отель был хороший. Однако еда ужасная.</div>
<div class="ex"><b>Although it was raining, we went for a walk.</b> — Хотя шёл дождь, мы пошли гулять.</div>
<div class="ex"><b>I can't come on Friday. Can we meet on Saturday instead?</b> — Я не могу в пятницу. Может, встретимся в субботу вместо этого?</div>
<div class="ex"><b>I speak English and I also speak a little German.</b> — Я говорю по-английски и также немного по-немецки.</div>

<h3>Итог: все времена A2</h3>
<div class="table-wrap"><table>
<tr><th>Время</th><th>Когда</th><th>Пример</th></tr>
<tr><td>Present Simple</td><td>привычки, факты, расписания</td><td>I work in a bank.</td></tr>
<tr><td>Present Continuous</td><td>сейчас; договорённости</td><td>I'm reading. I'm flying tomorrow.</td></tr>
<tr><td>Past Simple</td><td>законченное в прошлом, известно когда</td><td>I visited Rome in 2020.</td></tr>
<tr><td>Past Continuous</td><td>процесс в прошлом, фон</td><td>I was sleeping when you called.</td></tr>
<tr><td>Present Perfect</td><td>опыт, результат, for/since</td><td>I've been to Rome. I've lived here for 5 years.</td></tr>
<tr><td>be going to</td><td>планы, намерения</td><td>I'm going to learn French.</td></tr>
<tr><td>will</td><td>прогнозы, решения сейчас, обещания</td><td>It will rain. I'll help you.</td></tr>
<tr><td>used to</td><td>прошлые привычки</td><td>I used to smoke.</td></tr>
<tr><td>Passive</td><td>важно действие, а не исполнитель</td><td>It was built in 1900.</td></tr>
</table></div>
<div class="tip">🎓 Это последний урок A2. Пройдите <b>Итоговый тест A2</b> в разделе «Тесты»!</div>`,
  dialog: [
    "A|Have you replied to Mr Smith's email?|Ты ответил на письмо мистера Смита?",
    "B|Not yet. How should I start? «Hi Mr Smith»?|Ещё нет. Как начать? «Привет, мистер Смит»?",
    "A|No, it's a formal email. Write «Dear Mr Smith».|Нет, это официальное письмо. Пиши «Dear Mr Smith».",
    "B|OK. «I am writing to confirm the meeting on Tuesday. Unfortunately, I cannot come at ten. Could we meet at eleven instead?»|Хорошо. «Пишу, чтобы подтвердить встречу во вторник. К сожалению, я не могу в десять. Можем встретиться в одиннадцать вместо этого?»",
    "A|Perfect. And finish with «I look forward to hearing from you. Kind regards».|Идеально. И закончи «Жду вашего ответа. С уважением».",
    "B|Done! I've also attached the document. Sent!|Готово! Ещё прикрепил документ. Отправлено!"
  ],
  ex: [
    { t: "c", q: "Как начать официальное письмо?", o: ["Hi Mr Brown,", "Dear Mr Brown,", "Hey Brown!"], a: 1 },
    { t: "c", q: "Как закончить официальное письмо?", o: ["Kind regards,", "Love,", "Cheers,"], a: 0 },
    { t: "c", q: "I look forward to ___ from you.", o: ["hear", "hearing", "heard"], a: 1 },
    { t: "c", q: "___ it was cold, we went swimming.", o: ["However", "Although", "Instead"], a: 1 },
    { t: "c", q: "The flat is small. ___, it's very cheap.", o: ["Although", "However", "Also"], a: 1 },
    { t: "c", q: "I ___ in this city since 2019.", o: ["live", "lived", "have lived"], a: 2 },
    { t: "c", q: "When I arrived, they ___ dinner.", o: ["were having", "have had", "are having"], a: 0 },
    { t: "c", q: "Look at the sky! It ___ rain.", o: ["is going to", "will to", "rains"], a: 0 },
    { t: "i", q: "I am writing ___ ask about the price. (чтобы)", a: ["to"] },
    { t: "i", q: "Please find ___ the document. (прикреплённый)", a: ["attached"] },
    { t: "i", q: "We can't go to the cinema, so let's watch a film at home ___. (вместо этого)", a: ["instead"] },
    { t: "o", a: "I am writing to apologise for the delay", ru: "Пишу, чтобы извиниться за задержку.", end: "." },
    { t: "tr", ru: "Спасибо за ваше письмо.", a: ["Thank you for your email", "Thanks for your email", "Thank you for your letter", "Thanks for your letter", "Thank you for your message", "Thanks for your message"] },
    { t: "l", a: "I look forward to hearing from you" }
  ]
});
