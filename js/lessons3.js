LESSONS.push({
  id: 15, module: 4, icon: "🍎", title: "Еда и напитки: some / any", en: "Some bread, any milk?",
  goal: "Называть продукты, заказывать еду, различать исчисляемые и неисчисляемые.",
  vocab: [
    "food|fuːd|еда", "bread|bred|хлеб", "milk|mɪlk|молоко", "water|ˈwɔːtə|вода", "coffee|ˈkɒfi|кофе", "tea|tiː|чай",
    "juice|dʒuːs|сок", "meat|miːt|мясо", "chicken|ˈtʃɪkɪn|курица", "fish|fɪʃ|рыба", "rice|raɪs|рис", "cheese|tʃiːz|сыр",
    "egg|eɡ|яйцо", "banana|bəˈnɑːnə|банан", "vegetables|ˈvedʒtəblz|овощи", "fruit|fruːt|фрукты", "potato|pəˈteɪtəʊ|картофель",
    "sugar|ˈʃʊɡə|сахар", "salt|sɔːlt|соль", "soup|suːp|суп", "some|sʌm|немного, несколько", "any|ˈeni|сколько-нибудь, какой-нибудь",
    "I'd like|aɪd laɪk|я бы хотел(а)", "menu|ˈmenjuː|меню"
  ],
  theory: `
<h3>Исчисляемые и неисчисляемые</h3>
<div class="table-wrap"><table>
<tr><th>Исчисляемые (можно посчитать)</th><th>Неисчисляемые (нельзя посчитать)</th></tr>
<tr><td>an apple, two eggs, three bananas</td><td>water, milk, bread, rice, sugar, money, cheese</td></tr>
<tr><td>есть мн. число, есть a/an</td><td>нет мн. числа, нет a/an</td></tr>
</table></div>
<div class="note">Нельзя сказать «a bread» или «two waters». Говорят: <b>a loaf of bread</b> (буханка), <b>a bottle of water</b> (бутылка), <b>a cup of tea</b> (чашка), <b>a piece of cheese</b> (кусок).</div>

<h3>some и any</h3>
<div class="table-wrap"><table>
<tr><th></th><th>Слово</th><th>Пример</th></tr>
<tr><td>+ утверждение</td><td><mark>some</mark></td><td>I've got some apples. There is some milk.</td></tr>
<tr><td>− отрицание</td><td><mark>any</mark></td><td>We haven't got any bread.</td></tr>
<tr><td>? вопрос</td><td><mark>any</mark></td><td>Have you got any eggs?</td></tr>
</table></div>
<div class="tip">В просьбах и предложениях — <b>some</b> даже в вопросе: <i>Would you like some tea?</i> <i>Can I have some water?</i></div>

<h3>В кафе: вежливые фразы</h3>
<div class="ex"><b>I'd like a coffee, please.</b> — Я бы хотел кофе, пожалуйста.</div>
<div class="ex"><b>Can I have the menu, please?</b> — Можно меню, пожалуйста?</div>
<div class="ex"><b>Would you like some cake?</b> — Хотите торта?</div>
<div class="ex"><b>Yes, please. / No, thank you.</b> — Да, пожалуйста. / Нет, спасибо.</div>
<div class="ex"><b>Can I have the bill, please?</b> — Можно счёт, пожалуйста?</div>
<div class="note"><b>I'd like</b> (= I would like) — вежливое «я бы хотел». <b>I like</b> — «мне нравится». Не путайте!</div>`,
  dialog: [
    "A|Good afternoon. Are you ready to order?|Добрый день. Готовы сделать заказ?",
    "B|Yes. I'd like the chicken soup, please.|Да. Я бы хотел куриный суп, пожалуйста.",
    "A|Would you like some bread with it?|Хотите к нему хлеба?",
    "B|Yes, please. And a glass of orange juice.|Да, пожалуйста. И стакан апельсинового сока.",
    "A|Sorry, we haven't got any orange juice. We've got apple juice.|Простите, апельсинового сока нет. Есть яблочный.",
    "B|OK, apple juice then. Thank you.|Хорошо, тогда яблочный. Спасибо."
  ],
  ex: [
    { t: "c", q: "Какое слово неисчисляемое?", o: ["apple", "egg", "milk"], a: 2 },
    { t: "c", q: "I've got ___ cheese.", o: ["a", "some", "any"], a: 1 },
    { t: "c", q: "We haven't got ___ sugar.", o: ["some", "any", "a"], a: 1 },
    { t: "c", q: "Have you got ___ eggs?", o: ["any", "a", "an"], a: 0 },
    { t: "c", q: "Would you like ___ tea?", o: ["any", "some", "a"], a: 1 },
    { t: "c", q: "Как правильно?", o: ["a bread", "some bread", "breads"], a: 1 },
    { t: "c", q: "В кафе вежливо:", o: ["I like a coffee.", "I'd like a coffee, please.", "Give coffee."], a: 1 },
    { t: "i", q: "a ___ of water (бутылка)", a: ["bottle"] },
    { t: "i", q: "Can I have the ___, please? (счёт)", a: ["bill", "check"] },
    { t: "o", a: "Can I have some water please", ru: "Можно мне воды, пожалуйста?", end: "?" },
    { t: "tr", ru: "У нас нет молока.", a: ["We haven't got any milk", "We have not got any milk", "We don't have any milk", "We do not have any milk", "We have no milk"] },
    { t: "l", a: "I'd like a cup of tea", alt: ["I would like a cup of tea"] }
  ]
});

LESSONS.push({
  id: 16, module: 4, icon: "🏠", title: "Мой дом: there is / there are", en: "There is a sofa",
  goal: "Описывать квартиру и говорить, что где есть.",
  vocab: [
    "room|ruːm|комната", "kitchen|ˈkɪtʃɪn|кухня", "bedroom|ˈbedruːm|спальня", "bathroom|ˈbɑːθruːm|ванная", "living room|ˈlɪvɪŋ ruːm|гостиная",
    "toilet|ˈtɔɪlɪt|туалет", "sofa|ˈsəʊfə|диван", "bed|bed|кровать", "armchair|ˈɑːmtʃeə|кресло", "fridge|frɪdʒ|холодильник",
    "cooker|ˈkʊkə|плита", "lamp|læmp|лампа", "shelf|ʃelf|полка", "wardrobe|ˈwɔːdrəʊb|шкаф для одежды", "carpet|ˈkɑːpɪt|ковёр",
    "wall|wɔːl|стена", "floor|flɔː|пол; этаж", "garden|ˈɡɑːdn|сад", "balcony|ˈbælkəni|балкон", "TV|ˌtiːˈviː|телевизор"
  ],
  theory: `
<h3>There is / There are — «есть, находится»</h3>
<p>Используем, когда сообщаем, что <b>что-то где-то есть</b>. По-русски такие фразы часто начинаются с места: «В комнате есть диван». По-английски — с <b>there is</b>:</p>
<div class="table-wrap"><table>
<tr><th></th><th>Один / неисчисляемое</th><th>Много</th></tr>
<tr><td>+</td><td><mark>There is</mark> (There's) a sofa.</td><td><mark>There are</mark> two chairs.</td></tr>
<tr><td>−</td><td>There isn't a TV.</td><td>There aren't any pictures.</td></tr>
<tr><td>?</td><td>Is there a balcony?</td><td>Are there any shelves?</td></tr>
<tr><td>ответ</td><td>Yes, there is. / No, there isn't.</td><td>Yes, there are. / No, there aren't.</td></tr>
</table></div>
<div class="ex"><b>There is a big bed in my bedroom.</b> — В моей спальне большая кровать.</div>
<div class="ex"><b>There are three rooms in our flat.</b> — В нашей квартире три комнаты.</div>
<div class="ex"><b>There isn't any milk in the fridge.</b> — В холодильнике нет молока.</div>
<div class="ex"><b>Is there a garden? — No, there isn't.</b> — Есть сад? — Нет.</div>
<div class="note">Не говорите «In my room is a bed» или «My room has...» вместо there is — звучит неестественно для описания.</div>

<h3>Сколько?</h3>
<div class="ex"><b>How many rooms are there?</b> — Сколько там комнат?</div>

<h3>There is или It is?</h3>
<p><b>There is</b> — сообщаем о наличии: <i>There is a lamp on the table.</i><br><b>It is</b> — описываем уже известный предмет: <i>It is a red lamp.</i></p>`,
  dialog: [
    "A|Tell me about your new flat.|Расскажи о своей новой квартире.",
    "B|It's small but nice. There are two rooms, a kitchen and a bathroom.|Небольшая, но милая. Там две комнаты, кухня и ванная.",
    "A|Is there a balcony?|Есть балкон?",
    "B|Yes, there is. And there's a big window in the living room.|Да. И в гостиной большое окно.",
    "A|Are there any shops near the flat?|Рядом есть магазины?",
    "B|Yes, there are. There's a supermarket next to my building.|Да. Рядом с моим домом есть супермаркет."
  ],
  ex: [
    { t: "c", q: "___ a sofa in the living room.", o: ["There is", "There are", "It is"], a: 0 },
    { t: "c", q: "___ four chairs in the kitchen.", o: ["There is", "There are", "They are"], a: 1 },
    { t: "c", q: "___ any milk in the fridge?", o: ["Are there", "Is there", "Is it"], a: 1 },
    { t: "c", q: "Are there any pictures? — No, ___", o: ["there isn't.", "there aren't.", "they isn't."], a: 1 },
    { t: "c", q: "We cook in the...", o: ["bedroom", "kitchen", "bathroom"], a: 1 },
    { t: "c", q: "We keep food cold in the...", o: ["wardrobe", "cooker", "fridge"], a: 2 },
    { t: "i", q: "How ___ bedrooms are there?", a: ["many"] },
    { t: "i", q: "There ___ a TV in my room. (нет)", a: ["isn't", "is not"] },
    { t: "o", a: "There are some books on the shelf", ru: "На полке есть несколько книг.", end: "." },
    { t: "tr", ru: "В моей квартире три комнаты.", a: ["There are three rooms in my flat", "There are three rooms in my apartment", "My flat has three rooms", "My flat has got three rooms"] },
    { t: "tr", ru: "Здесь есть туалет?", a: ["Is there a toilet here", "Is there a toilet"] },
    { t: "l", a: "There is a lamp on the table" }
  ]
});

LESSONS.push({
  id: 17, module: 4, icon: "📍", title: "Где это? Предлоги места", en: "In, on, under",
  goal: "Объяснять, где находятся предметы и люди.",
  vocab: [
    "in|ɪn|в, внутри", "on|ɒn|на (поверхности)", "under|ˈʌndə|под", "next to|nekst tə|рядом с", "near|nɪə|около, недалеко",
    "behind|bɪˈhaɪnd|за, позади", "in front of|ɪn frʌnt əv|перед", "between|bɪˈtwiːn|между", "opposite|ˈɒpəzɪt|напротив",
    "above|əˈbʌv|над", "at|æt|у, в (в точке)", "on the left|ɒn ðə left|слева", "on the right|ɒn ðə raɪt|справа",
    "where|weə|где", "corner|ˈkɔːnə|угол", "desk|desk|письменный стол", "drawer|drɔː|ящик (стола)", "floor|flɔː|пол", "building|ˈbɪldɪŋ|здание", "keys|kiːz|ключи"
  ],
  theory: `
<h3>Основные предлоги места</h3>
<div class="table-wrap"><table>
<tr><th>Предлог</th><th>Значение</th><th>Пример</th></tr>
<tr><td>in</td><td>в, внутри</td><td>in the box, in the kitchen, in Moscow</td></tr>
<tr><td>on</td><td>на поверхности</td><td>on the table, on the wall, on the floor</td></tr>
<tr><td>under</td><td>под</td><td>under the bed</td></tr>
<tr><td>next to</td><td>рядом, вплотную</td><td>next to the window</td></tr>
<tr><td>near</td><td>неподалёку</td><td>near the station</td></tr>
<tr><td>behind</td><td>позади</td><td>behind the door</td></tr>
<tr><td>in front of</td><td>перед</td><td>in front of the house</td></tr>
<tr><td>between</td><td>между</td><td>between the bank and the shop</td></tr>
<tr><td>opposite</td><td>напротив</td><td>opposite the park</td></tr>
<tr><td>above</td><td>над</td><td>above the sofa</td></tr>
</table></div>
<div class="ex"><b>Where are my keys? — They're on the desk.</b> — Где мои ключи? — На столе.</div>
<div class="ex"><b>The cat is under the bed.</b> — Кот под кроватью.</div>
<div class="ex"><b>There is a picture above the sofa.</b> — Над диваном висит картина.</div>
<div class="note"><b>on the wall</b> — картина «на стене» (поверхность), а не «in the wall». <b>in the picture</b> — «на картинке/фото».</div>

<h3>at — «в точке, у места»</h3>
<p><b>at home</b> (дома), <b>at work</b> (на работе), <b>at school</b> (в школе), <b>at the bus stop</b> (на остановке), <b>at the door</b> (у двери).</p>
<div class="tip"><b>in front of</b> — «перед», а не «напротив». «Напротив» (через дорогу) — <b>opposite</b>.</div>`,
  dialog: [
    "A|Mum, where is my phone?|Мам, где мой телефон?",
    "B|Is it in your bag?|Он в твоей сумке?",
    "A|No, it isn't. And it isn't on the desk.|Нет. И не на столе.",
    "B|Look under the sofa!|Посмотри под диваном!",
    "A|No... Oh, here it is! It's behind the TV, next to the lamp.|Нет... О, вот он! За телевизором, рядом с лампой."
  ],
  ex: [
    { t: "c", q: "The book is ___ the table. (на)", o: ["in", "on", "under"], a: 1 },
    { t: "c", q: "The cat is ___ the bed. (под)", o: ["under", "above", "on"], a: 0 },
    { t: "c", q: "The bank is ___ the café and the shop. (между)", o: ["next to", "between", "opposite"], a: 1 },
    { t: "c", q: "There's a car ___ the house. (перед)", o: ["in front of", "behind", "opposite"], a: 0 },
    { t: "c", q: "My sister is ___ home.", o: ["in", "on", "at"], a: 2 },
    { t: "c", q: "The picture is ___ the wall.", o: ["in", "on", "at"], a: 1 },
    { t: "i", q: "The lamp is ___ the table. (над)", a: ["above", "over"] },
    { t: "i", q: "The garden is ___ the house. (позади)", a: ["behind"] },
    { t: "o", a: "The pharmacy is opposite the bank", ru: "Аптека напротив банка.", end: "." },
    { t: "tr", ru: "Мои ключи в сумке.", a: ["My keys are in the bag", "My keys are in my bag"] },
    { t: "tr", ru: "Где кошка?", a: ["Where is the cat", "Where's the cat", "Where is my cat", "Where's my cat"] },
    { t: "l", a: "It's next to the window", alt: ["It is next to the window"] }
  ]
});

LESSONS.push({
  id: 18, module: 4, icon: "🗺️", title: "Город и дорога. Повелительное наклонение", en: "Turn left!",
  goal: "Спрашивать и объяснять дорогу, давать инструкции.",
  vocab: [
    "street|striːt|улица", "square|skweə|площадь", "bank|bæŋk|банк", "post office|pəʊst ˈɒfɪs|почта", "supermarket|ˈsuːpəmɑːkɪt|супермаркет",
    "pharmacy|ˈfɑːməsi|аптека", "station|ˈsteɪʃn|вокзал, станция", "bus stop|bʌs stɒp|автобусная остановка", "park|pɑːk|парк",
    "museum|mjuˈziːəm|музей", "hotel|həʊˈtel|гостиница", "restaurant|ˈrestrɒnt|ресторан", "bridge|brɪdʒ|мост",
    "turn left|tɜːn left|повернуть налево", "turn right|tɜːn raɪt|повернуть направо", "go straight on|ɡəʊ streɪt ɒn|идти прямо",
    "cross|krɒs|переходить", "far|fɑː|далеко", "walk|wɔːk|идти пешком", "get to|ɡet tə|добраться до", "traffic lights|ˈtræfɪk laɪts|светофор", "map|mæp|карта"
  ],
  theory: `
<h3>Повелительное наклонение (Imperative)</h3>
<p>Просто глагол без подлежащего:</p>
<div class="ex"><b>Turn left.</b> — Поверните налево.</div>
<div class="ex"><b>Go straight on.</b> — Идите прямо.</div>
<div class="ex"><b>Open the window, please.</b> — Открой окно, пожалуйста.</div>
<p>Отрицание — <b>Don't</b> + глагол:</p>
<div class="ex"><b>Don't cross the road here.</b> — Не переходите дорогу здесь.</div>
<div class="ex"><b>Don't worry!</b> — Не волнуйся!</div>
<p>Предложение сделать что-то вместе — <b>Let's</b> + глагол:</p>
<div class="ex"><b>Let's go to the park.</b> — Давай пойдём в парк.</div>

<h3>Как спросить дорогу</h3>
<div class="ex"><b>Excuse me, where is the station?</b> — Извините, где вокзал?</div>
<div class="ex"><b>Is there a pharmacy near here?</b> — Здесь рядом есть аптека?</div>
<div class="ex"><b>How can I get to the museum?</b> — Как добраться до музея?</div>
<div class="ex"><b>Is it far?</b> — Это далеко?</div>

<h3>Как объяснить</h3>
<div class="ex"><b>Go straight on and take the second street on the left.</b> — Идите прямо и сверните на вторую улицу налево.</div>
<div class="ex"><b>Turn right at the traffic lights.</b> — На светофоре поверните направо.</div>
<div class="ex"><b>It's on the corner, opposite the bank.</b> — Это на углу, напротив банка.</div>
<div class="ex"><b>It's a five-minute walk.</b> — Это пять минут пешком.</div>
<div class="tip">Если не поняли: <b>Sorry, can you say that again, please?</b> или <b>Can you show me on the map?</b></div>`,
  dialog: [
    "A|Excuse me, how can I get to the museum?|Извините, как пройти к музею?",
    "B|Go straight on to the traffic lights and turn left.|Идите прямо до светофора и поверните налево.",
    "A|Is it far?|Это далеко?",
    "B|No, it isn't. It's a ten-minute walk. Cross the bridge, and the museum is on the right, opposite the park.|Нет. Минут десять пешком. Перейдите мост, и музей будет справа, напротив парка.",
    "A|Thank you very much!|Большое спасибо!",
    "B|You're welcome.|Пожалуйста."
  ],
  ex: [
    { t: "c", q: "You buy medicine at the...", o: ["post office", "pharmacy", "bank"], a: 1 },
    { t: "c", q: "You wait for a bus at the...", o: ["bus stop", "station", "square"], a: 0 },
    { t: "c", q: "«Не открывай дверь!» =", o: ["No open the door!", "Don't open the door!", "Not open the door!"], a: 1 },
    { t: "c", q: "«Давай пойдём домой» =", o: ["Let's go home.", "Let's to go home.", "Let go home."], a: 0 },
    { t: "c", q: "Как вежливо спросить дорогу?", o: ["Where station?", "Excuse me, where is the station?", "Say me station!"], a: 1 },
    { t: "i", q: "Turn ___ at the corner. (направо)", a: ["right"] },
    { t: "i", q: "How can I ___ to the hotel?", a: ["get"] },
    { t: "i", q: "Go ___ on. (прямо)", a: ["straight"] },
    { t: "o", a: "Is there a bank near here", ru: "Здесь рядом есть банк?", end: "?" },
    { t: "tr", ru: "Поверните налево.", a: ["Turn left"] },
    { t: "tr", ru: "Это далеко?", a: ["Is it far"] },
    { t: "l", a: "Cross the street and turn right" }
  ]
});

LESSONS.push({
  id: 19, module: 4, icon: "🛒", title: "Покупки: how much / how many", en: "How much is it?",
  goal: "Спрашивать цену, называть деньги, делать покупки.",
  vocab: [
    "buy|baɪ|покупать", "sell|sel|продавать", "pay|peɪ|платить", "cost|kɒst|стоить", "price|praɪs|цена",
    "cash|kæʃ|наличные", "card|kɑːd|карта", "change|tʃeɪndʒ|сдача; менять", "receipt|rɪˈsiːt|чек", "size|saɪz|размер",
    "try on|traɪ ɒn|примерять", "market|ˈmɑːkɪt|рынок", "open|ˈəʊpən|открытый; открывать", "closed|kləʊzd|закрытый",
    "dollar|ˈdɒlə|доллар", "pound|paʊnd|фунт", "euro|ˈjʊərəʊ|евро", "cent|sent|цент", "how much|haʊ mʌtʃ|сколько (неисч.); сколько стоит",
    "how many|haʊ ˈmeni|сколько (исч.)", "customer|ˈkʌstəmə|покупатель", "sale|seɪl|распродажа"
  ],
  theory: `
<h3>How much или How many?</h3>
<div class="table-wrap"><table>
<tr><th>How many + исчисляемое мн. ч.</th><th>How much + неисчисляемое</th></tr>
<tr><td>How many apples? How many people?</td><td>How much water? How much money?</td></tr>
</table></div>
<div class="ex"><b>How many eggs do you need?</b> — Сколько яиц тебе нужно?</div>
<div class="ex"><b>How much milk is there?</b> — Сколько там молока?</div>

<h3>Сколько стоит?</h3>
<div class="ex"><b>How much is this T-shirt?</b> — Сколько стоит эта футболка?</div>
<div class="ex"><b>How much are these shoes?</b> — Сколько стоят эти туфли?</div>
<div class="ex"><b>It's fifteen dollars.</b> — Пятнадцать долларов.</div>
<p>Цены читают так: <b>$4.50</b> — four dollars fifty / four fifty; <b>£12.99</b> — twelve pounds ninety-nine; <b>€1</b> — one euro.</p>
<div class="note">Не «How much costs it?», а <b>How much is it?</b> или <b>How much does it cost?</b></div>

<h3>В магазине</h3>
<div class="ex"><b>Can I help you?</b> — Вам помочь?</div>
<div class="ex"><b>I'm just looking, thanks.</b> — Я просто смотрю, спасибо.</div>
<div class="ex"><b>I'm looking for a jacket.</b> — Я ищу куртку.</div>
<div class="ex"><b>Can I try it on?</b> — Можно примерить?</div>
<div class="ex"><b>Have you got it in a bigger size?</b> — Есть на размер больше?</div>
<div class="ex"><b>I'll take it.</b> — Я возьму это.</div>
<div class="ex"><b>Can I pay by card?</b> — Можно оплатить картой?</div>
<div class="tip">Оплата: <b>pay by card</b> (картой), <b>pay in cash</b> (наличными).</div>`,
  dialog: [
    "A|Hello, can I help you?|Здравствуйте, вам помочь?",
    "B|Yes, please. How much is this bag?|Да, пожалуйста. Сколько стоит эта сумка?",
    "A|It's thirty-five pounds. It's on sale.|Тридцать пять фунтов. Она со скидкой.",
    "B|Great, I'll take it. Can I pay by card?|Отлично, беру. Можно картой?",
    "A|Of course. Do you need a receipt?|Конечно. Чек нужен?",
    "B|Yes, please. Thank you!|Да, пожалуйста. Спасибо!"
  ],
  ex: [
    { t: "c", q: "How ___ apples do you want?", o: ["much", "many", "any"], a: 1 },
    { t: "c", q: "How ___ money have you got?", o: ["much", "many", "some"], a: 0 },
    { t: "c", q: "How much ___ these jeans?", o: ["is", "are", "cost"], a: 1 },
    { t: "c", q: "Как правильно?", o: ["How much costs it?", "How much is it?", "How many is it?"], a: 1 },
    { t: "c", q: "«Можно примерить?» =", o: ["Can I try it on?", "Can I put it?", "Can I wear?"], a: 0 },
    { t: "c", q: "Money that the shop gives back to you is...", o: ["price", "change", "cash"], a: 1 },
    { t: "i", q: "Can I pay ___ card?", a: ["by"] },
    { t: "i", q: "Excuse me, how much ___ this watch?", a: ["is"] },
    { t: "o", a: "I am looking for a new phone", ru: "Я ищу новый телефон.", end: "." },
    { t: "tr", ru: "Сколько это стоит?", a: ["How much is it", "How much is this", "How much does it cost", "How much does this cost"] },
    { t: "tr", ru: "Я возьму это.", a: ["I'll take it", "I will take it"] },
    { t: "l", a: "It's twelve pounds fifty", alt: ["it is twelve pounds fifty"] }
  ]
});
