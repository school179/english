LESSONS.push({
  id: 25, module: 6, icon: "✅", title: "Past Simple: правильные глаголы", en: "I worked, I played",
  goal: "Рассказывать, что ты делал вчера, с правильными глаголами; вопросы с did.",
  vocab: [
    "worked|wɜːkt|работал", "played|pleɪd|играл", "watched|wɒtʃt|смотрел", "visited|ˈvɪzɪtɪd|посетил, навестил",
    "walked|wɔːkt|гулял, шёл пешком", "cooked|kʊkt|готовил", "cleaned|kliːnd|убирал", "stayed|steɪd|оставался",
    "travelled|ˈtrævld|путешествовал", "called|kɔːld|звонил", "wanted|ˈwɒntɪd|хотел", "started|ˈstɑːtɪd|начал",
    "finished|ˈfɪnɪʃt|закончил", "listened|ˈlɪsnd|слушал", "talked|tɔːkt|разговаривал", "arrived|əˈraɪvd|прибыл",
    "lived|lɪvd|жил", "studied|ˈstʌdid|учился, изучал", "stopped|stɒpt|остановился", "did|dɪd|вспомогательный глагол прошлого"
  ],
  theory: `
<h3>Утверждение: глагол + -ed</h3>
<p>Past Simple — для законченных действий в прошлом (вчера, в прошлом году, 5 минут назад). Форма <b>одинакова для всех лиц</b>.</p>
<div class="ex"><b>I worked yesterday.</b> — Я работал вчера.</div>
<div class="ex"><b>She visited her grandmother last week.</b> — Она навестила бабушку на прошлой неделе.</div>
<div class="table-wrap"><table>
<tr><th>Правило</th><th>Примеры</th></tr>
<tr><td>обычно + ed</td><td>work → worked, play → played</td></tr>
<tr><td>на -e + d</td><td>live → lived, arrive → arrived</td></tr>
<tr><td>согласная + y → ied</td><td>study → studied, cry → cried</td></tr>
<tr><td>краткий гласный + согласная → удвоение</td><td>stop → stopped, plan → planned</td></tr>
</table></div>
<p>Произношение -ed: [t] после глухих — worked, watched; [d] после звонких — played, lived; [ɪd] после t, d — wanted, visited.</p>

<h3>Отрицание и вопрос: did</h3>
<div class="table-wrap"><table>
<tr><th>−</th><th>?</th><th>Ответ</th></tr>
<tr><td>I <mark>didn't</mark> work.</td><td><mark>Did</mark> you work?</td><td>Yes, I did. / No, I didn't.</td></tr>
<tr><td>He <mark>didn't</mark> call.</td><td><mark>Did</mark> he call?</td><td>Yes, he did. / No, he didn't.</td></tr>
</table></div>
<div class="note">С did глагол возвращается в начальную форму: <b>I didn't watch</b>, <b>Did you play?</b> — НЕ «didn't watched», «Did you played».</div>
<div class="ex"><b>What did you do yesterday?</b> — Что ты делал вчера?</div>
<div class="ex"><b>Where did you live in 2020?</b> — Где ты жил в 2020 году?</div>
<div class="tip">Схема та же, что с do/does в настоящем: do/does → <b>did</b>.</div>`,
  dialog: [
    "A|What did you do at the weekend?|Что ты делал на выходных?",
    "B|On Saturday I cleaned the flat and cooked dinner for my friends.|В субботу убрал квартиру и приготовил ужин для друзей.",
    "A|Nice! Did you watch the football match on Sunday?|Здорово! Ты смотрел футбольный матч в воскресенье?",
    "B|No, I didn't. I visited my parents. We walked in the park and talked a lot.|Нет. Я навещал родителей. Мы гуляли в парке и много разговаривали.",
    "A|Did you stay there all day?|Ты пробыл там весь день?",
    "B|Yes, I did. I arrived home at ten.|Да. Домой вернулся в десять."
  ],
  ex: [
    { t: "c", q: "Yesterday I ___ football.", o: ["play", "played", "playd"], a: 1 },
    { t: "c", q: "study → прошедшее", o: ["studyed", "studied", "studed"], a: 1 },
    { t: "c", q: "stop → прошедшее", o: ["stoped", "stopped", "stopt"], a: 1 },
    { t: "c", q: "She ___ call me yesterday.", o: ["didn't", "doesn't", "wasn't"], a: 0 },
    { t: "c", q: "Как правильно?", o: ["Did you watched the film?", "Did you watch the film?", "Do you watched the film?"], a: 1 },
    { t: "c", q: "Did they arrive on time? — Yes, they ___", o: ["did.", "were.", "arrived."], a: 0 },
    { t: "i", q: "We ___ (live) in Minsk two years ago.", a: ["lived"] },
    { t: "i", q: "He ___ (not / finish) his work.", a: ["didn't finish", "did not finish"] },
    { t: "i", q: "What ___ you do last night?", a: ["did"] },
    { t: "o", a: "Did you visit the museum", ru: "Ты посетил музей?", end: "?" },
    { t: "tr", ru: "Я работал вчера.", a: ["I worked yesterday", "Yesterday I worked"] },
    { t: "tr", ru: "Она не смотрела телевизор.", a: ["She didn't watch TV", "She did not watch TV"] },
    { t: "l", a: "I stayed at home yesterday" }
  ]
});

LESSONS.push({
  id: 26, module: 6, icon: "⚡", title: "Past Simple: неправильные глаголы", en: "I went, I saw",
  goal: "Выучить 20 самых частых неправильных глаголов и рассказать историю.",
  vocab: [
    "go — went|ɡəʊ — went|идти — пошёл", "have — had|hæv — hæd|иметь — имел", "do — did|duː — dɪd|делать — сделал",
    "see — saw|siː — sɔː|видеть — увидел", "eat — ate|iːt — et|есть — съел", "drink — drank|drɪŋk — dræŋk|пить — выпил",
    "buy — bought|baɪ — bɔːt|покупать — купил", "make — made|meɪk — meɪd|делать — сделал", "take — took|teɪk — tʊk|брать — взял",
    "come — came|kʌm — keɪm|приходить — пришёл", "get — got|ɡet — ɡɒt|получать — получил", "meet — met|miːt — met|встречать — встретил",
    "write — wrote|raɪt — rəʊt|писать — написал", "read — read|riːd — red|читать — прочитал", "say — said|seɪ — sed|сказать — сказал",
    "give — gave|ɡɪv — ɡeɪv|давать — дал", "know — knew|nəʊ — njuː|знать — знал", "think — thought|θɪŋk — θɔːt|думать — думал",
    "leave — left|liːv — left|уходить — ушёл", "fly — flew|flaɪ — fluː|летать — полетел", "sleep — slept|sliːp — slept|спать — спал", "swim — swam|swɪm — swæm|плавать — плавал"
  ],
  theory: `
<h3>Особая форма прошедшего</h3>
<p>Около 100 частых глаголов не добавляют -ed, а имеют свою форму. Их нужно выучить — начните со списка во вкладке «Слова» и тренируйте в «Карточках».</p>
<div class="ex"><b>I went to the cinema yesterday.</b> — Вчера я ходил в кино.</div>
<div class="ex"><b>We had dinner at a restaurant.</b> — Мы поужинали в ресторане.</div>
<div class="ex"><b>She bought a new dress.</b> — Она купила новое платье.</div>
<div class="ex"><b>I saw Tom in the street.</b> — Я видел Тома на улице.</div>

<h3>Отрицание и вопрос — как у правильных</h3>
<p>С <b>did / didn't</b> глагол всегда в начальной форме (1-й форме):</p>
<div class="ex"><b>I didn't go to work.</b> — Я не ходил на работу. (не «didn't went»)</div>
<div class="ex"><b>Did you see the film?</b> — Ты видел фильм? (не «Did you saw»)</div>
<div class="ex"><b>What did you buy?</b> — Что ты купил?</div>
<div class="ex"><b>Where did you go on holiday?</b> — Куда ты ездил в отпуск?</div>

<h3>Как запоминать</h3>
<div class="table-wrap"><table>
<tr><th>Группа</th><th>Глаголы</th></tr>
<tr><td>-ought / -aught</td><td>buy → bought, think → thought, bring → brought, teach → taught</td></tr>
<tr><td>i → a</td><td>drink → drank, swim → swam, sing → sang, begin → began</td></tr>
<tr><td>ee/ea → e</td><td>meet → met, sleep → slept, leave → left, feel → felt</td></tr>
<tr><td>одинаковое написание</td><td>read → read (но читается [red]!), put → put, cut → cut</td></tr>
</table></div>
<div class="tip">Рассказывая историю, используйте связки: <b>first</b> (сначала), <b>then</b> (потом), <b>after that</b> (после этого), <b>finally</b> (наконец).</div>`,
  dialog: [
    "A|How was your trip to St Petersburg?|Как прошла поездка в Петербург?",
    "B|Amazing! We flew there on Friday. First we went to the Hermitage.|Потрясающе! Мы прилетели в пятницу. Сначала пошли в Эрмитаж.",
    "A|Did you see the bridges at night?|Вы видели разводные мосты ночью?",
    "B|Yes, we did! Then we met my old friend and had dinner together.|Да! Потом встретили моего старого друга и вместе поужинали.",
    "A|Did you buy any souvenirs?|Купили сувениры?",
    "B|I bought a book, but I didn't take many photos.|Я купил книгу, но сделал мало фотографий."
  ],
  ex: [
    { t: "c", q: "Yesterday I ___ to the gym.", o: ["goed", "went", "go"], a: 1 },
    { t: "c", q: "She ___ a new phone last week.", o: ["buyed", "bought", "brought"], a: 1 },
    { t: "c", q: "We ___ a great time at the party.", o: ["had", "haved", "has"], a: 0 },
    { t: "c", q: "Did you ___ my message?", o: ["saw", "see", "seen"], a: 1 },
    { t: "c", q: "I didn't ___ breakfast this morning.", o: ["ate", "eat", "eaten"], a: 1 },
    { t: "i", q: "think → ___", a: ["thought"] },
    { t: "i", q: "meet → ___", a: ["met"] },
    { t: "i", q: "write → ___", a: ["wrote"] },
    { t: "i", q: "come → ___", a: ["came"] },
    { t: "i", q: "They ___ (leave) at 6 o'clock.", a: ["left"] },
    { t: "o", a: "Where did you go on holiday", ru: "Куда ты ездил в отпуск?", end: "?" },
    { t: "tr", ru: "Я видел его вчера.", a: ["I saw him yesterday", "Yesterday I saw him"] },
    { t: "tr", ru: "Мы не пошли в кино.", a: ["We didn't go to the cinema", "We did not go to the cinema"] },
    { t: "l", a: "He took a taxi" }
  ]
});

LESSONS.push({
  id: 27, module: 6, icon: "🚀", title: "Будущее: going to и will", en: "I'm going to travel",
  goal: "Говорить о планах (going to) и о решениях, обещаниях, предсказаниях (will).",
  vocab: [
    "tomorrow|təˈmɒrəʊ|завтра", "tonight|təˈnaɪt|сегодня вечером", "next week|nekst wiːk|на следующей неделе", "next year|nekst jɪə|в следующем году",
    "soon|suːn|скоро", "later|ˈleɪtə|позже", "plan|plæn|план; планировать", "future|ˈfjuːtʃə|будущее",
    "learn|lɜːn|учить, узнавать", "move|muːv|переезжать", "travel|ˈtrævl|путешествовать", "get married|ɡet ˈmærid|пожениться",
    "become|bɪˈkʌm|становиться", "save money|seɪv ˈmʌni|копить деньги", "abroad|əˈbrɔːd|за границей, за границу",
    "maybe|ˈmeɪbi|может быть", "probably|ˈprɒbəbli|вероятно", "promise|ˈprɒmɪs|обещать", "I'll|aɪl|я (сделаю) — сокращение I will", "the day after tomorrow|ðə deɪ ˈɑːftə təˈmɒrəʊ|послезавтра"
  ],
  theory: `
<h3>be going to — планы и намерения</h3>
<span class="formula">am / is / are + going to + глагол</span>
<div class="ex"><b>I'm going to learn English this year.</b> — Я собираюсь выучить английский в этом году.</div>
<div class="ex"><b>She's going to move to Canada.</b> — Она собирается переехать в Канаду.</div>
<div class="ex"><b>We aren't going to buy a car.</b> — Мы не собираемся покупать машину.</div>
<div class="ex"><b>What are you going to do tomorrow?</b> — Что ты собираешься делать завтра?</div>
<p>Также — когда видим признаки: <b>Look at the clouds! It's going to rain.</b> — Смотри на тучи! Сейчас пойдёт дождь.</p>

<h3>will — решение в момент речи, обещание, предположение</h3>
<span class="formula">подлежащее + will ('ll) + глагол; отрицание — won't</span>
<div class="ex"><b>It's cold. I'll close the window.</b> — Холодно. Я закрою окно. (решил сейчас)</div>
<div class="ex"><b>I'll help you.</b> — Я тебе помогу. (предложение)</div>
<div class="ex"><b>I won't be late, I promise.</b> — Я не опоздаю, обещаю.</div>
<div class="ex"><b>I think it will be sunny tomorrow.</b> — Думаю, завтра будет солнечно.</div>
<div class="ex"><b>Will you come to my party?</b> — Ты придёшь на мою вечеринку?</div>

<div class="table-wrap"><table>
<tr><th>going to</th><th>will</th></tr>
<tr><td>решил заранее, план</td><td>решил прямо сейчас</td></tr>
<tr><td>I'm going to visit Rome in May. (билеты куплены)</td><td>— The phone is ringing. — I'll answer it!</td></tr>
</table></div>
<div class="note">После will и going to — глагол без -s и без -ing: <b>He will go</b>, <b>She's going to work</b>. Слова-маркеры будущего <b>tomorrow, next week, soon</b> — без предлогов.</div>`,
  dialog: [
    "A|What are you going to do next summer?|Что ты собираешься делать следующим летом?",
    "B|I'm going to travel abroad. I'm saving money now.|Я собираюсь поехать за границу. Сейчас коплю деньги.",
    "A|Where are you going to go?|Куда поедешь?",
    "B|Maybe Italy. I'm going to learn some Italian too!|Может быть, в Италию. Ещё собираюсь немного выучить итальянский!",
    "A|Great idea! I've got an Italian book. I'll give it to you.|Отличная идея! У меня есть итальянская книга. Я тебе её дам.",
    "B|Thank you! I'll bring it back soon, I promise.|Спасибо! Скоро верну, обещаю."
  ],
  ex: [
    { t: "c", q: "I ___ going to visit my friends.", o: ["am", "will", "do"], a: 0 },
    { t: "c", q: "She's going ___ a new job.", o: ["find", "to find", "finding"], a: 1 },
    { t: "c", q: "— I'm thirsty. — ___ get you some water.", o: ["I'm going to", "I'll", "I"], a: 1 },
    { t: "c", q: "Look at those black clouds! It ___ rain.", o: ["is going to", "will to", "going to"], a: 0 },
    { t: "c", q: "Как правильно?", o: ["He will goes.", "He will go.", "He wills go."], a: 1 },
    { t: "c", q: "«Я не опоздаю» =", o: ["I will not late.", "I won't be late.", "I don't will be late."], a: 1 },
    { t: "i", q: "What are you going to ___ tomorrow? (делать)", a: ["do"] },
    { t: "i", q: "They are going to ___ married next year.", a: ["get"] },
    { t: "o", a: "We are going to move to a new flat", ru: "Мы собираемся переехать в новую квартиру.", end: "." },
    { t: "tr", ru: "Я помогу тебе.", a: ["I will help you", "I'll help you"] },
    { t: "tr", ru: "Что ты собираешься делать сегодня вечером?", a: ["What are you going to do tonight", "What are you going to do this evening"] },
    { t: "l", a: "I'm going to learn English", alt: ["I am going to learn English"] }
  ]
});

LESSONS.push({
  id: 28, module: 6, icon: "🏁", title: "Вопросы и местоимения-дополнения. Итог A1", en: "Who, why, me, him",
  goal: "Уверенно задавать любые вопросы и использовать me, him, her, us, them.",
  vocab: [
    "who|huː|кто", "what|wɒt|что", "where|weə|где, куда", "when|wen|когда", "why|waɪ|почему", "because|bɪˈkɒz|потому что",
    "how|haʊ|как", "which|wɪtʃ|который (из)", "whose|huːz|чей", "how long|haʊ lɒŋ|как долго", "how far|haʊ fɑː|как далеко",
    "what time|wɒt taɪm|во сколько", "me|miː|меня, мне", "him|hɪm|его, ему", "her|hɜː|её, ей", "us|ʌs|нас, нам",
    "them|ðem|их, им", "it|ɪt|его, её (о предмете)", "about|əˈbaʊt|о, про", "with|wɪð|с"
  ],
  theory: `
<h3>Вопросительные слова</h3>
<div class="table-wrap"><table>
<tr><th>Слово</th><th>Пример</th></tr>
<tr><td>Who — кто</td><td>Who is your teacher?</td></tr>
<tr><td>What — что, какой</td><td>What do you want?</td></tr>
<tr><td>Where — где, куда</td><td>Where did you go?</td></tr>
<tr><td>When — когда</td><td>When is the lesson?</td></tr>
<tr><td>Why — почему</td><td>Why are you sad? — Because I'm tired.</td></tr>
<tr><td>How — как</td><td>How do you get to work?</td></tr>
<tr><td>Which — который (выбор)</td><td>Which colour do you like: red or blue?</td></tr>
<tr><td>Whose — чей</td><td>Whose bag is this?</td></tr>
<tr><td>How old / much / many / often / long</td><td>How long is the film?</td></tr>
</table></div>

<h3>Порядок слов в вопросе — главная формула A1</h3>
<span class="formula">Вопр. слово + вспом. глагол + подлежащее + основной глагол + ...?</span>
<div class="table-wrap"><table>
<tr><th>Время</th><th>Вспом. глагол</th><th>Пример</th></tr>
<tr><td>to be</td><td>am / is / are / was / were</td><td>Where <b>are</b> you from? Where <b>were</b> you?</td></tr>
<tr><td>Present Simple</td><td>do / does</td><td>What <b>does</b> she do?</td></tr>
<tr><td>Present Continuous</td><td>am / is / are</td><td>What <b>are</b> you doing?</td></tr>
<tr><td>Past Simple</td><td>did</td><td>When <b>did</b> you arrive?</td></tr>
<tr><td>can / will</td><td>can / will</td><td>What <b>can</b> I do? When <b>will</b> you come?</td></tr>
<tr><td>going to</td><td>am / is / are</td><td>What <b>are</b> you going to buy?</td></tr>
</table></div>
<div class="note">Если <b>who / what</b> — это подлежащее, do/does/did не нужен: <b>Who lives here?</b> (Кто здесь живёт?), <b>What happened?</b> (Что случилось?).</div>

<h3>Местоимения-дополнения</h3>
<p>После глагола и после предлогов вместо I, he, she ставим другую форму:</p>
<div class="table-wrap"><table>
<tr><td>I → <mark>me</mark></td><td>you → <mark>you</mark></td><td>he → <mark>him</mark></td><td>she → <mark>her</mark></td></tr>
<tr><td>it → <mark>it</mark></td><td>we → <mark>us</mark></td><td>they → <mark>them</mark></td><td></td></tr>
</table></div>
<div class="ex"><b>Call me later.</b> — Позвони мне позже.</div>
<div class="ex"><b>I love her.</b> — Я люблю её.</div>
<div class="ex"><b>Come with us!</b> — Пойдём с нами!</div>
<div class="ex"><b>I don't know them.</b> — Я их не знаю.</div>
<div class="note">Не «Help I», «with he» — а <b>Help me</b>, <b>with him</b>.</div>
<div class="tip">🎓 Это последний урок. Пройдите <b>Итоговый тест A1</b> в меню, чтобы проверить свой уровень!</div>`,
  dialog: [
    "A|Who is that woman? Do you know her?|Кто эта женщина? Ты её знаешь?",
    "B|Yes, I know her. She's our new neighbour. Why?|Да, знаю. Это наша новая соседка. А что?",
    "A|She helped me with my bags yesterday. Where does she live?|Она вчера помогла мне с сумками. Где она живёт?",
    "B|Next to us. Her children go to school with my son.|Рядом с нами. Её дети ходят в школу с моим сыном.",
    "A|When did they move here?|Когда они сюда переехали?",
    "B|Last month. Let's invite them for dinner!|В прошлом месяце. Давай пригласим их на ужин!"
  ],
  ex: [
    { t: "c", q: "___ is your birthday? — In May.", o: ["Where", "When", "Who"], a: 1 },
    { t: "c", q: "___ are you crying? — Because I'm sad.", o: ["Why", "How", "What"], a: 0 },
    { t: "c", q: "___ phone is this? — It's Anna's.", o: ["Who", "Whose", "Which"], a: 1 },
    { t: "c", q: "Where ___ you go yesterday?", o: ["do", "did", "were"], a: 1 },
    { t: "c", q: "Who ___ in this house?", o: ["does live", "lives", "do live"], a: 1 },
    { t: "c", q: "Can you help ___?", o: ["I", "me", "my"], a: 1 },
    { t: "c", q: "I like Tom and Kate. I often visit ___.", o: ["they", "their", "them"], a: 2 },
    { t: "i", q: "This is my brother. Do you know ___?", a: ["him"] },
    { t: "i", q: "Come to the cinema with ___! (нами)", a: ["us"] },
    { t: "i", q: "How ___ does it take? — Two hours. (долго)", a: ["long"] },
    { t: "o", a: "What are you going to do this weekend", ru: "Что ты собираешься делать на этих выходных?", end: "?" },
    { t: "o", a: "Why did she call you", ru: "Почему она тебе звонила?", end: "?" },
    { t: "tr", ru: "Где ты работаешь?", a: ["Where do you work"] },
    { t: "tr", ru: "Позвони мне завтра.", a: ["Call me tomorrow", "Phone me tomorrow"] },
    { t: "l", a: "What time did you get up" }
  ]
});
