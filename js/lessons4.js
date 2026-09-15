LESSONS.push({
  id: 20, module: 5, icon: "💪", title: "Can / can't: умения и просьбы", en: "I can swim",
  goal: "Говорить, что умеешь и не умеешь; вежливо просить и спрашивать разрешения.",
  vocab: [
    "can|kæn|мочь, уметь", "can't|kɑːnt|не мочь, не уметь", "swim|swɪm|плавать", "dance|dɑːns|танцевать", "sing|sɪŋ|петь",
    "drive|draɪv|водить машину", "cook|kʊk|готовить", "ride a bike|raɪd ə baɪk|ездить на велосипеде", "play the guitar|pleɪ ðə ɡɪˈtɑː|играть на гитаре",
    "draw|drɔː|рисовать", "ski|skiː|кататься на лыжах", "type|taɪp|печатать", "use|juːz|использовать", "open|ˈəʊpən|открыть",
    "close|kləʊz|закрыть", "borrow|ˈbɒrəʊ|одолжить (взять)", "repeat|rɪˈpiːt|повторить", "well|wel|хорошо (наречие)", "at all|ət ɔːl|совсем, вообще", "of course|əv kɔːs|конечно"
  ],
  theory: `
<h3>Can — одинаковый для всех лиц</h3>
<span class="formula">подлежащее + can / can't + глагол (без to и без -s)</span>
<div class="table-wrap"><table>
<tr><th>+</th><th>−</th><th>?</th><th>Ответ</th></tr>
<tr><td>I <mark>can</mark> swim.</td><td>I <mark>can't</mark> swim.</td><td><mark>Can</mark> you swim?</td><td>Yes, I can. / No, I can't.</td></tr>
<tr><td>She <mark>can</mark> drive.</td><td>She <mark>can't</mark> drive.</td><td><mark>Can</mark> she drive?</td><td>Yes, she can. / No, she can't.</td></tr>
</table></div>
<div class="note">После can: без <b>to</b> и без <b>-s</b>. Правильно: <b>He can speak</b>. Неправильно: «He cans», «He can to speak», «He can speaks». И никаких do/does: не «Do you can...?»</div>
<div class="ex"><b>I can play the guitar, but I can't sing.</b> — Я умею играть на гитаре, но не умею петь.</div>
<div class="ex"><b>She can speak three languages.</b> — Она говорит на трёх языках.</div>
<div class="ex"><b>I can't swim at all.</b> — Я совсем не умею плавать.</div>
<div class="ex"><b>He can cook very well.</b> — Он очень хорошо готовит.</div>
<div class="tip">Произношение: в утверждении can звучит слабо [kən], а <b>can't</b> — чётко и долго [kɑːnt]. Слушайте долгий гласный — это отрицание.</div>

<h3>Просьбы и разрешение</h3>
<div class="ex"><b>Can I open the window?</b> — Можно я открою окно?</div>
<div class="ex"><b>Can you help me, please?</b> — Можете мне помочь?</div>
<div class="ex"><b>Could you repeat that, please?</b> — Не могли бы вы повторить? (вежливее)</div>
<div class="ex"><b>Can I borrow your pen? — Of course. / Sure.</b> — Можно взять твою ручку? — Конечно.</div>`,
  dialog: [
    "A|Can you drive?|Ты умеешь водить?",
    "B|No, I can't. But I can ride a bike! And you?|Нет. Но умею ездить на велосипеде! А ты?",
    "A|I can drive, but I can't ride a bike at all.|Я умею водить, но совсем не умею кататься на велосипеде.",
    "B|Really? I can teach you!|Правда? Я могу научить тебя!",
    "A|Thanks! Can you come on Saturday?|Спасибо! Можешь прийти в субботу?",
    "B|Yes, of course.|Да, конечно."
  ],
  ex: [
    { t: "c", q: "She ___ speak Spanish.", o: ["cans", "can", "can to"], a: 1 },
    { t: "c", q: "___ you swim?", o: ["Do", "Are", "Can"], a: 2 },
    { t: "c", q: "Can he cook? — No, he ___", o: ["doesn't.", "can't.", "isn't."], a: 1 },
    { t: "c", q: "Как правильно?", o: ["He can plays tennis.", "He can play tennis.", "He can to play tennis."], a: 1 },
    { t: "c", q: "Вежливая просьба повторить:", o: ["Repeat!", "Could you repeat that, please?", "You repeat?"], a: 1 },
    { t: "i", q: "I ___ ski. I don't know how. (не умею)", a: ["can't", "cannot", "can not"] },
    { t: "i", q: "___ I use your phone, please?", a: ["can", "could"] },
    { t: "o", a: "Can you help me please", ru: "Можете мне помочь, пожалуйста?", end: "?" },
    { t: "o", a: "My sister can sing very well", ru: "Моя сестра очень хорошо поёт.", end: "." },
    { t: "tr", ru: "Я не умею танцевать.", a: ["I can't dance", "I cannot dance"] },
    { t: "tr", ru: "Можно мне открыть окно?", a: ["Can I open the window", "Could I open the window"] },
    { t: "l", a: "He can play the guitar" }
  ]
});

LESSONS.push({
  id: 21, module: 5, icon: "▶️", title: "Present Continuous: что происходит сейчас", en: "I am reading now",
  goal: "Говорить о действиях в момент речи и отличать их от привычек.",
  vocab: [
    "now|naʊ|сейчас", "at the moment|ət ðə ˈməʊmənt|в данный момент", "look|lʊk|смотреть; смотри!", "listen|ˈlɪsn|слушать; послушай!",
    "wait|weɪt|ждать", "sit|sɪt|сидеть", "stand|stænd|стоять", "talk|tɔːk|разговаривать", "write|raɪt|писать",
    "sleep|sliːp|спать", "cry|kraɪ|плакать", "laugh|lɑːf|смеяться", "smile|smaɪl|улыбаться", "wear|weə|носить (одежду)",
    "rain|reɪn|дождь; идти (о дожде)", "make|meɪk|делать, создавать", "take a photo|teɪk ə ˈfəʊtəʊ|фотографировать", "call|kɔːl|звонить",
    "What are you doing?|wɒt ə juː ˈduːɪŋ|Что ты делаешь?", "right now|raɪt naʊ|прямо сейчас"
  ],
  theory: `
<h3>Когда используется</h3>
<p>Действие происходит <b>прямо сейчас</b>, в момент речи, или в текущий период.</p>
<span class="formula">подлежащее + am / is / are + глагол<mark>-ing</mark></span>
<div class="table-wrap"><table>
<tr><th>+</th><th>−</th><th>?</th></tr>
<tr><td>I'm reading.</td><td>I'm not reading.</td><td>Am I reading?</td></tr>
<tr><td>She's working.</td><td>She isn't working.</td><td>Is she working?</td></tr>
<tr><td>They're sleeping.</td><td>They aren't sleeping.</td><td>Are they sleeping?</td></tr>
</table></div>
<div class="ex"><b>What are you doing? — I'm cooking dinner.</b> — Что делаешь? — Готовлю ужин.</div>
<div class="ex"><b>Look! It's raining.</b> — Смотри! Идёт дождь.</div>
<div class="ex"><b>She isn't sleeping, she's reading.</b> — Она не спит, она читает.</div>
<div class="note">Не забывайте am/is/are! Не «I reading», а <b>I am reading</b>.</div>

<h3>Правописание -ing</h3>
<div class="table-wrap"><table>
<tr><td>обычно + ing</td><td>read → reading, play → playing</td></tr>
<tr><td>немая -e исчезает</td><td>write → writing, make → making, dance → dancing</td></tr>
<tr><td>краткий гласный + согласная → удвоение</td><td>sit → sitting, run → running, swim → swimming</td></tr>
<tr><td>-ie → -ying</td><td>lie → lying, die → dying</td></tr>
</table></div>

<h3>Present Simple или Continuous?</h3>
<div class="table-wrap"><table>
<tr><th>Simple — обычно, всегда</th><th>Continuous — сейчас</th></tr>
<tr><td>I usually <b>drink</b> tea.</td><td>But now I'<b>m drinking</b> coffee.</td></tr>
<tr><td>every day, usually, often</td><td>now, at the moment, Look!, Listen!</td></tr>
</table></div>
<div class="tip">Глаголы состояния обычно не бывают в -ing: <b>know, like, love, want, need, understand</b>. Говорим <i>I want coffee now</i>, не «I'm wanting».</div>`,
  dialog: [
    "A|Hi, Sam! What are you doing?|Привет, Сэм! Что делаешь?",
    "B|I'm sitting in a café. I'm waiting for Kate.|Сижу в кафе. Жду Кейт.",
    "A|Is she coming?|Она идёт?",
    "B|Yes, she's walking here now. And what are you doing?|Да, она сейчас идёт сюда. А ты что делаешь?",
    "A|I'm at home. I'm watching a film and it's raining outside.|Я дома. Смотрю фильм, а на улице идёт дождь."
  ],
  ex: [
    { t: "c", q: "Look! The baby ___.", o: ["sleeps", "is sleeping", "sleeping"], a: 1 },
    { t: "c", q: "I usually ___ to work by bus.", o: ["go", "am going", "goes"], a: 0 },
    { t: "c", q: "What ___ you doing?", o: ["do", "are", "is"], a: 1 },
    { t: "c", q: "write → ", o: ["writeing", "writting", "writing"], a: 2 },
    { t: "c", q: "swim → ", o: ["swiming", "swimming", "swimeing"], a: 1 },
    { t: "c", q: "Как правильно?", o: ["I'm knowing the answer.", "I know the answer.", "I knowing the answer."], a: 1 },
    { t: "i", q: "She ___ (talk) on the phone now.", a: ["is talking", "'s talking"] },
    { t: "i", q: "They ___ (not / work) at the moment.", a: ["aren't working", "are not working"] },
    { t: "i", q: "Listen! Somebody ___ (sing).", a: ["is singing"] },
    { t: "o", a: "Why are you laughing", ru: "Почему ты смеёшься?", end: "?" },
    { t: "tr", ru: "Я сейчас читаю книгу.", a: ["I am reading a book now", "I'm reading a book now", "I am reading a book", "I'm reading a book", "Now I am reading a book", "Now I'm reading a book"] },
    { t: "l", a: "It's raining now", alt: ["it is raining now"] }
  ]
});

LESSONS.push({
  id: 22, module: 5, icon: "🧥", title: "Одежда и погода", en: "What's the weather like?",
  goal: "Говорить о погоде и одежде: It's cold. I'm wearing a coat.",
  vocab: [
    "clothes|kləʊðz|одежда", "T-shirt|ˈtiː ʃɜːt|футболка", "shirt|ʃɜːt|рубашка", "trousers|ˈtraʊzəz|брюки", "jeans|dʒiːnz|джинсы",
    "dress|dres|платье", "skirt|skɜːt|юбка", "jacket|ˈdʒækɪt|куртка, пиджак", "coat|kəʊt|пальто", "sweater|ˈswetə|свитер",
    "shoes|ʃuːz|туфли, обувь", "boots|buːts|ботинки, сапоги", "hat|hæt|шапка, шляпа", "scarf|skɑːf|шарф", "socks|sɒks|носки",
    "weather|ˈweðə|погода", "sunny|ˈsʌni|солнечный", "cloudy|ˈklaʊdi|облачный", "windy|ˈwɪndi|ветреный", "hot|hɒt|жаркий",
    "warm|wɔːm|тёплый", "cold|kəʊld|холодный", "snow|snəʊ|снег; идти (о снеге)", "summer|ˈsʌmə|лето", "winter|ˈwɪntə|зима", "spring|sprɪŋ|весна", "autumn|ˈɔːtəm|осень"
  ],
  theory: `
<h3>Погода — всегда через It</h3>
<div class="ex"><b>What's the weather like today?</b> — Какая сегодня погода?</div>
<div class="ex"><b>It's sunny and warm.</b> — Солнечно и тепло.</div>
<div class="ex"><b>It's cold and windy.</b> — Холодно и ветрено.</div>
<div class="ex"><b>It's raining. / It's snowing.</b> — Идёт дождь. / Идёт снег.</div>
<div class="note">В русском «Холодно» — без подлежащего. В английском нужно <b>It</b>: <b>It's cold</b>. А «мне холодно» — <b>I'm cold</b>.</div>
<p>Существительное → прилагательное: sun → <b>sunny</b>, cloud → <b>cloudy</b>, wind → <b>windy</b>, rain → <b>rainy</b>, snow → <b>snowy</b>.</p>
<p>Сезоны: <b>in summer, in winter, in spring, in autumn</b>.</p>

<h3>Одежда</h3>
<div class="ex"><b>What are you wearing? — I'm wearing jeans and a sweater.</b> — Во что ты одет? — На мне джинсы и свитер.</div>
<div class="ex"><b>In winter I wear a coat, a hat and boots.</b> — Зимой я ношу пальто, шапку и сапоги.</div>
<div class="ex"><b>Put on your jacket! It's cold.</b> — Надень куртку! Холодно.</div>
<div class="note"><b>trousers, jeans, shorts</b> — всегда множественное число: <b>These jeans are new</b>. «Одни джинсы» — <b>a pair of jeans</b>.</div>
<div class="tip"><b>wear</b> — носить (состояние), <b>put on</b> — надевать (действие), <b>take off</b> — снимать.</div>`,
  dialog: [
    "A|What's the weather like in Moscow now?|Какая сейчас погода в Москве?",
    "B|It's very cold. It's snowing! What about London?|Очень холодно. Идёт снег! А в Лондоне?",
    "A|It's cloudy and it's raining, as usual.|Облачно и идёт дождь, как обычно.",
    "B|What are you wearing?|Что на тебе надето?",
    "A|A warm sweater and jeans. And you?|Тёплый свитер и джинсы. А на тебе?",
    "B|A coat, a hat, a scarf and big boots!|Пальто, шапка, шарф и большие сапоги!"
  ],
  ex: [
    { t: "c", q: "«Сегодня жарко» =", o: ["Today is hot.", "It's hot today.", "Hot today."], a: 1 },
    { t: "c", q: "Look out of the window! It ___.", o: ["snows", "is snowing", "snowing"], a: 1 },
    { t: "c", q: "My jeans ___ blue.", o: ["is", "are", "am"], a: 1 },
    { t: "c", q: "You wear it on your head:", o: ["scarf", "hat", "socks"], a: 1 },
    { t: "c", q: "Какое слово — время года?", o: ["autumn", "cloudy", "weather"], a: 0 },
    { t: "c", q: "sun → прилагательное", o: ["suny", "sunny", "sunly"], a: 1 },
    { t: "i", q: "What's the ___ like today?", a: ["weather"] },
    { t: "i", q: "I always ___ a scarf in winter. (ношу)", a: ["wear"] },
    { t: "i", q: "It's very ___. Take an umbrella! (дождливо)", a: ["rainy", "wet"] },
    { t: "o", a: "She is wearing a red dress", ru: "На ней красное платье.", end: "." },
    { t: "tr", ru: "Сегодня холодно и ветрено.", a: ["It is cold and windy today", "It's cold and windy today", "Today it is cold and windy", "Today it's cold and windy"] },
    { t: "l", a: "It's sunny and warm", alt: ["it is sunny and warm"] }
  ]
});

LESSONS.push({
  id: 23, module: 5, icon: "🎸", title: "Хобби: like + -ing", en: "I love reading",
  goal: "Рассказывать о хобби и предпочтениях, приглашать куда-нибудь.",
  vocab: [
    "hobby|ˈhɒbi|хобби", "reading|ˈriːdɪŋ|чтение", "travelling|ˈtrævəlɪŋ|путешествия", "cooking|ˈkʊkɪŋ|готовка",
    "drawing|ˈdrɔːɪŋ|рисование", "photography|fəˈtɒɡrəfi|фотография", "football|ˈfʊtbɔːl|футбол", "tennis|ˈtenɪs|теннис",
    "video games|ˈvɪdiəʊ ɡeɪmz|видеоигры", "film|fɪlm|фильм", "series|ˈsɪəriːz|сериал", "enjoy|ɪnˈdʒɔɪ|наслаждаться, любить",
    "hate|heɪt|ненавидеть", "prefer|prɪˈfɜː|предпочитать", "interested in|ˈɪntrəstɪd ɪn|интересоваться", "good at|ɡʊd æt|хорошо умеющий",
    "fun|fʌn|весело, веселье", "boring|ˈbɔːrɪŋ|скучный", "interesting|ˈɪntrəstɪŋ|интересный", "together|təˈɡeðə|вместе"
  ],
  theory: `
<h3>like / love / enjoy / hate + -ing</h3>
<p>Чтобы сказать, что нравится <b>занятие</b>, после этих глаголов ставим глагол с <b>-ing</b>:</p>
<div class="ex"><b>I like reading.</b> — Я люблю читать.</div>
<div class="ex"><b>She loves travelling.</b> — Она обожает путешествовать.</div>
<div class="ex"><b>We enjoy cooking together.</b> — Нам нравится готовить вместе.</div>
<div class="ex"><b>He hates getting up early.</b> — Он терпеть не может рано вставать.</div>
<div class="ex"><b>I don't like watching TV.</b> — Я не люблю смотреть телевизор.</div>
<div class="table-wrap"><table>
<tr><td>❤️❤️ love</td><td>❤️ like</td><td>😐 don't mind (не против)</td><td>👎 don't like</td><td>👎👎 hate</td></tr>
</table></div>

<h3>like или would like?</h3>
<div class="table-wrap"><table>
<tr><th>like + -ing</th><th>would like + to + глагол</th></tr>
<tr><td>нравится вообще, всегда</td><td>хочу сейчас / в конкретной ситуации</td></tr>
<tr><td>I like dancing. — Я люблю танцевать.</td><td>I'd like to dance. — Я бы хотел потанцевать.</td></tr>
</table></div>

<h3>Интересы и способности</h3>
<div class="ex"><b>I'm interested in photography.</b> — Я интересуюсь фотографией.</div>
<div class="ex"><b>She's good at drawing.</b> — Она хорошо рисует.</div>
<div class="note">После предлогов (in, at) глагол тоже с -ing: <b>good at swimming</b>.</div>

<h3>Приглашение</h3>
<div class="ex"><b>Would you like to go to the cinema?</b> — Хочешь пойти в кино?</div>
<div class="ex"><b>Yes, I'd love to! / Sorry, I can't.</b> — Да, с удовольствием! / Извини, не могу.</div>
<div class="ex"><b>What do you do in your free time?</b> — Чем ты занимаешься в свободное время?</div>`,
  dialog: [
    "A|What do you do in your free time?|Чем ты занимаешься в свободное время?",
    "B|I love taking photos. I'm interested in photography. And you?|Обожаю фотографировать. Интересуюсь фотографией. А ты?",
    "A|I enjoy playing tennis, but I hate running!|Мне нравится играть в теннис, но ненавижу бегать!",
    "B|Would you like to play tennis on Sunday?|Хочешь поиграть в теннис в воскресенье?",
    "A|Yes, I'd love to! What time?|Да, с удовольствием! Во сколько?",
    "B|At ten o'clock?|В десять?"
  ],
  ex: [
    { t: "c", q: "I like ___ books.", o: ["read", "reading", "to reading"], a: 1 },
    { t: "c", q: "She hates ___ the dishes.", o: ["washing", "wash", "washes"], a: 0 },
    { t: "c", q: "Would you like ___ to the park?", o: ["going", "go", "to go"], a: 2 },
    { t: "c", q: "He's interested ___ music.", o: ["at", "in", "on"], a: 1 },
    { t: "c", q: "My brother is good ___ football.", o: ["at", "in", "for"], a: 0 },
    { t: "c", q: "Would you like to come to my party? — ___", o: ["Yes, I like.", "Yes, I'd love to!", "Yes, I would like."], a: 1 },
    { t: "i", q: "We enjoy ___ (swim) in the sea.", a: ["swimming"] },
    { t: "i", q: "Do you like ___ (cook)?", a: ["cooking"] },
    { t: "o", a: "What do you do in your free time", ru: "Чем ты занимаешься в свободное время?", end: "?" },
    { t: "tr", ru: "Я люблю путешествовать.", a: ["I like travelling", "I love travelling", "I like traveling", "I love traveling", "I like to travel", "I love to travel"] },
    { t: "tr", ru: "Она не любит готовить.", a: ["She doesn't like cooking", "She does not like cooking", "She doesn't like to cook", "She does not like to cook"] },
    { t: "l", a: "I'm good at drawing", alt: ["I am good at drawing"] }
  ]
});

LESSONS.push({
  id: 24, module: 6, icon: "🕰️", title: "Was / were: прошлое глагола to be", en: "I was at home",
  goal: "Говорить, где и каким ты был в прошлом.",
  vocab: [
    "was|wɒz|был, была, было (I, he, she, it)", "were|wɜː|были; был (you, we, they)", "yesterday|ˈjestədeɪ|вчера",
    "last night|lɑːst naɪt|вчера вечером / ночью", "last week|lɑːst wiːk|на прошлой неделе", "last year|lɑːst jɪə|в прошлом году",
    "ago|əˈɡəʊ|назад", "born|bɔːn|рождённый", "party|ˈpɑːti|вечеринка", "holiday|ˈhɒlədeɪ|отпуск, каникулы, праздник",
    "trip|trɪp|поездка", "concert|ˈkɒnsət|концерт", "ill|ɪl|больной", "bored|bɔːd|скучающий", "great|ɡreɪt|отличный",
    "terrible|ˈterəbl|ужасный", "sea|siː|море", "beach|biːtʃ|пляж", "then|ðen|тогда, потом", "child|tʃaɪld|ребёнок"
  ],
  theory: `
<h3>am / is → was, are → were</h3>
<div class="table-wrap"><table>
<tr><th></th><th>I / he / she / it</th><th>you / we / they</th></tr>
<tr><td>+</td><td>I <mark>was</mark> at home.</td><td>They <mark>were</mark> at home.</td></tr>
<tr><td>−</td><td>She <mark>wasn't</mark> tired.</td><td>We <mark>weren't</mark> tired.</td></tr>
<tr><td>?</td><td><mark>Was</mark> he at work?</td><td><mark>Were</mark> you at work?</td></tr>
<tr><td>ответ</td><td>Yes, he was. / No, he wasn't.</td><td>Yes, I was. / No, I wasn't.</td></tr>
</table></div>
<div class="ex"><b>I was at a party last night.</b> — Вчера вечером я был на вечеринке.</div>
<div class="ex"><b>The film was boring.</b> — Фильм был скучным.</div>
<div class="ex"><b>Where were you yesterday?</b> — Где ты был вчера?</div>
<div class="ex"><b>We weren't at school last week.</b> — На прошлой неделе нас не было в школе.</div>
<div class="note">Вопрос «Were you...?» — к «ты», но ответ «Yes, I <b>was</b>» — потому что I.</div>

<h3>Слова-маркеры прошлого</h3>
<p><b>yesterday</b> (вчера), <b>last night / week / month / year</b> (прошлой ночью / на прошлой неделе...), <b>two days ago</b> (два дня назад), <b>in 2010</b>, <b>when I was a child</b> (когда я был ребёнком).</p>
<div class="note"><b>last week</b> — без предлога (не «on last week»). <b>ago</b> ставится после периода: <b>three years ago</b>.</div>

<h3>Где и когда родился</h3>
<div class="ex"><b>I was born in 1995 in Samara.</b> — Я родился в 1995 году в Самаре.</div>
<div class="ex"><b>When were you born?</b> — Когда ты родился?</div>`,
  dialog: [
    "A|Where were you last week? You weren't at work.|Где ты был на прошлой неделе? Тебя не было на работе.",
    "B|I was on holiday in Turkey.|Я был в отпуске в Турции.",
    "A|Really? How was it?|Правда? Как было?",
    "B|It was great! The weather was hot and the sea was warm.|Отлично! Погода была жаркая, а море тёплое.",
    "A|Were your children with you?|Дети были с тобой?",
    "B|Yes, they were. They were very happy.|Да. Они были очень счастливы."
  ],
  ex: [
    { t: "c", q: "I ___ at home yesterday.", o: ["was", "were", "am"], a: 0 },
    { t: "c", q: "They ___ at the concert last night.", o: ["was", "were", "are"], a: 1 },
    { t: "c", q: "___ you tired yesterday?", o: ["Was", "Were", "Did"], a: 1 },
    { t: "c", q: "Was the film good? — No, it ___", o: ["wasn't.", "weren't.", "didn't."], a: 0 },
    { t: "c", q: "«Два года назад» =", o: ["ago two years", "two years ago", "before two years"], a: 1 },
    { t: "c", q: "«На прошлой неделе» =", o: ["last week", "on last week", "in last week"], a: 0 },
    { t: "i", q: "She ___ ill last week. (была)", a: ["was"] },
    { t: "i", q: "We ___ at school yesterday. (не были)", a: ["weren't", "were not"] },
    { t: "i", q: "I was ___ in 2001. (родился)", a: ["born"] },
    { t: "o", a: "Where were you last night", ru: "Где ты был вчера вечером?", end: "?" },
    { t: "tr", ru: "Вчера было холодно.", a: ["It was cold yesterday", "Yesterday it was cold", "Yesterday was cold"] },
    { t: "l", a: "The party was great" }
  ]
});
