// Алфавит: буква, IPA названия, русское приближение, пример "word|перевод"
window.ALPHABET = [
  ["A", "eɪ", "эй", "apple|яблоко"], ["B", "biː", "би", "ball|мяч"], ["C", "siː", "си", "cat|кошка"],
  ["D", "diː", "ди", "dog|собака"], ["E", "iː", "и", "egg|яйцо"], ["F", "ef", "эф", "fish|рыба"],
  ["G", "dʒiː", "джи", "girl|девочка"], ["H", "eɪtʃ", "эйч", "house|дом"], ["I", "aɪ", "ай", "ice cream|мороженое"],
  ["J", "dʒeɪ", "джей", "juice|сок"], ["K", "keɪ", "кей", "key|ключ"], ["L", "el", "эл", "lemon|лимон"],
  ["M", "em", "эм", "milk|молоко"], ["N", "en", "эн", "nose|нос"], ["O", "əʊ", "оу", "orange|апельсин"],
  ["P", "piː", "пи", "pen|ручка"], ["Q", "kjuː", "кью", "queen|королева"], ["R", "ɑː", "а (брит.)", "red|красный"],
  ["S", "es", "эс", "sun|солнце"], ["T", "tiː", "ти", "table|стол"], ["U", "juː", "ю", "umbrella|зонт"],
  ["V", "viː", "ви", "van|фургон"], ["W", "ˈdʌbljuː", "дабл-ю", "water|вода"], ["X", "eks", "экс", "box|коробка"],
  ["Y", "waɪ", "уай", "yellow|жёлтый"], ["Z", "zed", "зед (брит.), зи (амер.)", "zoo|зоопарк"]
];

// Трудные звуки: символ, описание, примеры
window.SOUNDS = [
  { s: "θ", title: "Глухое th", how: "Кончик языка между зубами, выдыхаем воздух — как «с», но язык между зубами. Не «с» и не «ф»!", words: ["think", "three", "thank you", "bath", "mouth"] },
  { s: "ð", title: "Звонкое th", how: "То же положение языка, но с голосом — как «з» с языком между зубами. Не «з» и не «д»!", words: ["this", "the", "mother", "they", "weather"] },
  { s: "w", title: "W", how: "Губы вытянуть трубочкой, как для «у», и быстро раскрыть. Не «в»: зубы губ не касаются.", words: ["we", "water", "window", "what", "one"] },
  { s: "h", title: "H", how: "Лёгкий выдох, как будто греете руки. Не хриплое русское «х».", words: ["hello", "house", "happy", "who", "have"] },
  { s: "ŋ", title: "NG", how: "Задняя часть языка прижата к нёбу, воздух идёт через нос. «Г» в конце не произносится.", words: ["sing", "morning", "long", "thing", "English"] },
  { s: "æ", title: "Открытое «э»", how: "Широко откройте рот, как для «а», и скажите «э». Звук между «а» и «э».", words: ["cat", "bag", "man", "black", "apple"] },
  { s: "ʌ", title: "Короткое «а»", how: "Короткий, ненапряжённый звук, как безударное «а» в слове «кАрова».", words: ["cup", "bus", "sun", "mother", "love"] },
  { s: "ɪ / iː", title: "Короткое и долгое «и»", how: "Длина меняет смысл! [ɪ] — короткий, открытый, почти «ы»; [iː] — долгий и напряжённый.", words: ["ship", "sheep", "sit", "seat", "live", "leave"] },
  { s: "ɜː", title: "Звук «ё» без «й»", how: "Губы растянуты, язык в середине рта. Похоже на «ё» в слове «мёд», но без «й» в начале.", words: ["bird", "work", "girl", "learn", "Thursday"] },
  { s: "r", title: "R", how: "Язык не вибрирует и не касается нёба, кончик слегка загнут назад. В британском после гласного часто не произносится (car [kɑː]).", words: ["red", "right", "very", "sorry", "three"] },
  { s: "b/p, d/t", title: "Звонкие на конце", how: "В отличие от русского, звонкие на конце не оглушаются. Иначе меняется слово!", words: ["bed", "bet", "bad", "bat", "dog", "dock"] }
];

// Правила чтения
window.READING = {
  vowels: [
    ["a", "name [eɪ]", "cat [æ]", "car [ɑː]"],
    ["e", "Pete [iː]", "pen [e]", "her [ɜː]"],
    ["i / y", "bike, my [aɪ]", "sit, gym [ɪ]", "girl [ɜː]"],
    ["o", "home [əʊ]", "hot [ɒ]", "fork [ɔː]"],
    ["u", "cute [juː]", "cup [ʌ]", "turn [ɜː]"]
  ],
  combos: [
    ["ee", "iː", "see, tree, meet"], ["ea", "iː", "tea, read, eat"], ["oo", "uː / ʊ", "moon, food / book, good"],
    ["ai / ay", "eɪ", "rain, day, play"], ["ow / ou", "aʊ", "now, town, house"], ["oa", "əʊ", "boat, coat, road"],
    ["igh", "aɪ", "night, light, right"], ["sh", "ʃ", "she, shop, fish"], ["ch / tch", "tʃ", "chair, much, watch"],
    ["th", "θ / ð", "think / this"], ["ph", "f", "phone, photo"], ["ck", "k", "black, clock"],
    ["ng", "ŋ", "sing, long"], ["wh", "w", "what, where, white"], ["wr", "r", "write, wrong"],
    ["kn", "n", "know, knife"], ["qu", "kw", "queen, quick"], ["c + e/i/y", "s", "city, nice, cycle"],
    ["g + e/i/y", "dʒ (часто)", "age, gym, orange"], ["ar", "ɑː", "car, park, star"], ["or", "ɔː", "fork, sport"],
    ["er / ir / ur", "ɜː", "her, bird, turn"]
  ]
};

// Разговорник
window.PHRASEBOOK = [
  { cat: "На уроке и в общении", icon: "🎓", items: [
    "I don't understand.|Я не понимаю.", "Can you repeat that, please?|Повторите, пожалуйста.",
    "Can you speak more slowly, please?|Говорите медленнее, пожалуйста.", "How do you say ... in English?|Как сказать ... по-английски?",
    "What does ... mean?|Что значит ...?", "How do you spell it?|Как это пишется?", "I speak a little English.|Я немного говорю по-английски.",
    "Sorry, I don't know.|Извините, я не знаю.", "Can you write it down, please?|Запишите, пожалуйста."
  ]},
  { cat: "Вежливость", icon: "🙏", items: [
    "Thank you very much.|Большое спасибо.", "You're welcome.|Пожалуйста (в ответ на спасибо).", "No problem.|Без проблем.",
    "Excuse me.|Извините (обратиться).", "I'm sorry.|Мне жаль / Простите.", "That's OK.|Ничего страшного.",
    "Have a nice day!|Хорошего дня!", "See you later!|Увидимся!", "Good luck!|Удачи!", "Congratulations!|Поздравляю!", "Happy birthday!|С днём рождения!"
  ]},
  { cat: "Знакомство", icon: "🤝", items: [
    "What's your name?|Как тебя зовут?", "My name is ...|Меня зовут ...", "Nice to meet you.|Приятно познакомиться.",
    "Where are you from?|Откуда ты?", "I'm from Russia.|Я из России.", "How old are you?|Сколько тебе лет?",
    "What do you do?|Чем занимаешься?", "Do you have Instagram?|У тебя есть Instagram?", "Let's keep in touch.|Давай оставаться на связи."
  ]},
  { cat: "В кафе и ресторане", icon: "☕", items: [
    "A table for two, please.|Столик на двоих, пожалуйста.", "Can I see the menu, please?|Можно меню?",
    "I'd like a coffee, please.|Я бы хотел кофе, пожалуйста.", "What do you recommend?|Что посоветуете?",
    "I'm vegetarian.|Я вегетарианец.", "Without sugar, please.|Без сахара, пожалуйста.", "To take away, please.|С собой, пожалуйста.",
    "Can I have the bill, please?|Можно счёт?", "It was delicious!|Было очень вкусно!"
  ]},
  { cat: "В магазине", icon: "🛍️", items: [
    "How much is it?|Сколько это стоит?", "I'm just looking.|Я просто смотрю.", "Can I try it on?|Можно примерить?",
    "Do you have a smaller size?|Есть размер поменьше?", "I'll take it.|Я возьму.", "Can I pay by card?|Можно картой?",
    "Do you need a bag?|Вам нужен пакет?", "Where is the fitting room?|Где примерочная?", "It's too expensive.|Это слишком дорого."
  ]},
  { cat: "В городе", icon: "🏙️", items: [
    "Excuse me, where is the metro?|Извините, где метро?", "How can I get to the centre?|Как добраться до центра?",
    "Is it far from here?|Это далеко отсюда?", "Can you show me on the map?|Покажете на карте?", "I'm lost.|Я заблудился.",
    "Which bus goes to the airport?|Какой автобус идёт в аэропорт?", "One ticket, please.|Один билет, пожалуйста.", "Where is the nearest toilet?|Где ближайший туалет?"
  ]},
  { cat: "Путешествие и отель", icon: "✈️", items: [
    "I have a reservation.|У меня забронировано.", "Here is my passport.|Вот мой паспорт.", "What time is check-out?|Во сколько выезд?",
    "Is breakfast included?|Завтрак включён?", "What's the Wi-Fi password?|Какой пароль от Wi-Fi?", "The air conditioner doesn't work.|Не работает кондиционер.",
    "Where is gate 12?|Где выход 12?", "My flight is delayed.|Мой рейс задерживается.", "Can you call a taxi, please?|Вызовите такси, пожалуйста."
  ]},
  { cat: "Экстренные ситуации", icon: "🚑", items: [
    "Help!|Помогите!", "Call an ambulance!|Вызовите скорую!", "Call the police!|Вызовите полицию!", "I need a doctor.|Мне нужен врач.",
    "I feel sick.|Мне плохо.", "It hurts here.|Здесь болит.", "I lost my phone.|Я потерял телефон.", "Where is the hospital?|Где больница?", "I'm allergic to ...|У меня аллергия на ..."
  ]}
];

// Итоговый тест A1. cat: grammar | vocab | listening | reading
window.FINAL_TEST = [
  { cat: "grammar", t: "c", q: "My brother ___ a doctor.", o: ["am", "is", "are", "be"], a: 1 },
  { cat: "grammar", t: "c", q: "___ you from Spain?", o: ["Is", "Do", "Are", "Does"], a: 2 },
  { cat: "grammar", t: "c", q: "I've got ___ umbrella.", o: ["a", "an", "the", "—"], a: 1 },
  { cat: "grammar", t: "c", q: "There are three ___ in the room.", o: ["child", "childs", "children", "childrens"], a: 2 },
  { cat: "grammar", t: "c", q: "This is Kate. ___ husband is a pilot.", o: ["His", "Her", "She", "Their"], a: 1 },
  { cat: "grammar", t: "c", q: "She ___ in a bank.", o: ["work", "works", "working", "is work"], a: 1 },
  { cat: "grammar", t: "c", q: "___ your father speak English?", o: ["Do", "Is", "Does", "Are"], a: 2 },
  { cat: "grammar", t: "c", q: "We ___ like horror films.", o: ["doesn't", "don't", "aren't", "not"], a: 1 },
  { cat: "grammar", t: "c", q: "The lesson starts ___ 10 o'clock ___ Monday.", o: ["in / at", "at / on", "on / in", "at / in"], a: 1 },
  { cat: "grammar", t: "c", q: "He is ___ late for work.", o: ["never", "don't", "not never", "no"], a: 0 },
  { cat: "grammar", t: "c", q: "Is there ___ milk in the fridge?", o: ["a", "some", "any", "many"], a: 2 },
  { cat: "grammar", t: "c", q: "How ___ does this jacket cost?", o: ["many", "much", "long", "price"], a: 1 },
  { cat: "grammar", t: "c", q: "My grandmother ___ use a computer.", o: ["can't", "doesn't can", "not can", "cans't"], a: 0 },
  { cat: "grammar", t: "c", q: "Be quiet! The baby ___.", o: ["sleeps", "sleep", "is sleeping", "sleeping"], a: 2 },
  { cat: "grammar", t: "c", q: "I love ___ in the sea.", o: ["swim", "swimming", "swims", "to swimming"], a: 1 },
  { cat: "grammar", t: "c", q: "Where ___ you yesterday?", o: ["was", "did", "were", "are"], a: 2 },
  { cat: "grammar", t: "c", q: "We ___ to Paris last summer.", o: ["go", "goed", "went", "did go"], a: 2 },
  { cat: "grammar", t: "c", q: "___ you see the match last night?", o: ["Do", "Were", "Did", "Was"], a: 2 },
  { cat: "grammar", t: "c", q: "I'm tired. I ___ go to bed early tonight.", o: ["going to", "am going to", "will to", "go to"], a: 1 },
  { cat: "grammar", t: "c", q: "These are my friends. Do you know ___?", o: ["they", "their", "them", "theirs"], a: 2 },
  { cat: "vocab", t: "c", q: "The opposite of «cheap» is...", o: ["small", "expensive", "old", "short"], a: 1 },
  { cat: "vocab", t: "c", q: "Your mother's sister is your...", o: ["aunt", "cousin", "niece", "grandmother"], a: 0 },
  { cat: "vocab", t: "c", q: "The day after Wednesday is...", o: ["Tuesday", "Friday", "Thursday", "Monday"], a: 2 },
  { cat: "vocab", t: "c", q: "You can buy medicine at the...", o: ["bakery", "pharmacy", "post office", "bank"], a: 1 },
  { cat: "vocab", t: "c", q: "It's very cold. Put on your...", o: ["T-shirt", "shorts", "coat", "sandals"], a: 2 },
  { cat: "vocab", t: "c", q: "10:30 is...", o: ["half past ten", "half past eleven", "half to ten", "ten and half"], a: 0 },
  { cat: "vocab", t: "c", q: "Как вежливо заказать в кафе?", o: ["I want tea.", "Give me tea.", "I'd like a tea, please.", "Tea!"], a: 2 },
  { cat: "vocab", t: "c", q: "— Thank you very much! — ...", o: ["You're welcome.", "Yes, please.", "Me too.", "Not at all bad."], a: 0 },
  { cat: "listening", t: "lc", say: "My phone number is oh seven one, double three, eight nine.", q: "Какой номер телефона?", o: ["071 33 89", "071 38 89", "017 33 98", "071 33 99"], a: 0 },
  { cat: "listening", t: "lc", say: "The train leaves at a quarter to nine.", q: "Во сколько уходит поезд?", o: ["9:15", "8:45", "9:45", "8:15"], a: 1 },
  { cat: "listening", t: "lc", say: "It costs thirteen pounds.", q: "Сколько стоит?", o: ["£30", "£13", "£3", "£33"], a: 1 },
  { cat: "listening", t: "lc", say: "Tom is tall and he has got short dark hair and glasses.", q: "Как выглядит Том?", o: ["Невысокий, светлые волосы", "Высокий, длинные тёмные волосы", "Высокий, короткие тёмные волосы, очки", "Невысокий, в очках"], a: 2 },
  { cat: "listening", t: "lc", say: "Go straight on and turn left at the bank. The museum is opposite the park.", q: "Где музей?", o: ["Рядом с банком", "Напротив парка", "За парком", "Направо от банка"], a: 1 },
  { cat: "listening", t: "lc", say: "I usually get up at seven, but on Sundays I get up at ten.", q: "Во сколько человек встаёт по воскресеньям?", o: ["В 7", "В 11", "В 10", "В 2"], a: 2 },
  { cat: "reading", t: "c", text: "Hi! My name is Laura. I'm 28 and I'm from Italy, but I live in London. I'm a nurse and I work in a big hospital. I work at night, so I sleep in the day. I've got a cat called Pasta. In my free time I love cooking and going to the cinema. Last weekend I went to Oxford with my sister. We visited museums and had lunch in a nice café. Next summer I'm going to visit my parents in Rome.", q: "Where does Laura live?", o: ["In Rome", "In London", "In Oxford", "In Milan"], a: 1 },
  { cat: "reading", t: "c", text: "(тот же текст)", q: "What is Laura's job?", o: ["Doctor", "Cook", "Nurse", "Teacher"], a: 2, sameText: true },
  { cat: "reading", t: "c", text: "(тот же текст)", q: "When does Laura sleep?", o: ["At night", "In the day", "In the evening", "She doesn't sleep"], a: 1, sameText: true },
  { cat: "reading", t: "c", text: "(тот же текст)", q: "Who did Laura go to Oxford with?", o: ["Her parents", "Her cat", "Her sister", "Her friend"], a: 2, sameText: true },
  { cat: "reading", t: "c", text: "(тот же текст)", q: "What is Laura going to do next summer?", o: ["Go to Oxford", "Visit her parents", "Buy a cat", "Work in Rome"], a: 1, sameText: true },
  { cat: "grammar", t: "c", q: "Выберите правильный вопрос:", o: ["Where you live?", "Where do you live?", "Where does you live?", "Where you do live?"], a: 1 }
];
window.TEST_CATS = { grammar: "Грамматика", vocab: "Лексика и ситуации", listening: "Аудирование", reading: "Чтение" };
