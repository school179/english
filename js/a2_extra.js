// ===== Дополнения уровня A2 =====

// Разговорник A2
PHRASEBOOK.push(
  { cat: "По телефону", icon: "📞", level: "A2", items: [
    "Hello, this is Anna speaking.|Здравствуйте, это Анна.", "Could I speak to Mr Brown, please?|Можно поговорить с мистером Брауном?",
    "Who's calling, please?|Кто звонит?", "Hold on a moment, please.|Подождите минутку.", "I'm afraid he's not here at the moment.|Боюсь, его сейчас нет.",
    "Can I leave a message?|Можно оставить сообщение?", "Could you ask him to call me back?|Попросите его перезвонить мне.",
    "Sorry, the line is bad.|Простите, плохая связь.", "I'll call you later.|Я перезвоню позже."
  ]},
  { cat: "У врача и в аптеке", icon: "💊", level: "A2", items: [
    "I'd like to make an appointment.|Я бы хотел записаться на приём.", "I've had a headache for three days.|У меня болит голова уже три дня.",
    "I feel dizzy.|У меня кружится голова.", "I've got a pain in my chest.|У меня боль в груди.", "Do I need a prescription?|Нужен ли рецепт?",
    "How often should I take these pills?|Как часто принимать эти таблетки?", "Twice a day after meals.|Дважды в день после еды.",
    "Have you got anything for a sore throat?|У вас есть что-нибудь от боли в горле?", "Are there any side effects?|Есть побочные эффекты?"
  ]},
  { cat: "Работа и собеседование", icon: "💼", level: "A2", items: [
    "I'm applying for the position of manager.|Я претендую на должность менеджера.", "I have three years of experience in sales.|У меня три года опыта в продажах.",
    "I'm good at working in a team.|Я хорошо работаю в команде.", "What are the working hours?|Какой график работы?",
    "When can you start?|Когда вы можете приступить?", "I'm responsible for customer service.|Я отвечаю за обслуживание клиентов.",
    "Could we reschedule the meeting?|Можем перенести встречу?", "I'll send you the report by Friday.|Я пришлю вам отчёт к пятнице.", "Let me check and get back to you.|Я уточню и вернусь к вам."
  ]},
  { cat: "Проблемы в поездке", icon: "🧳", level: "A2", items: [
    "My luggage hasn't arrived.|Мой багаж не прибыл.", "I've missed my connecting flight.|Я опоздал на стыковочный рейс.",
    "My flight has been cancelled.|Мой рейс отменили.", "The room is too noisy. Could I change rooms?|В номере слишком шумно. Можно сменить номер?",
    "I've lost my passport. Where is the embassy?|Я потерял паспорт. Где посольство?", "Someone has stolen my bag.|У меня украли сумку.",
    "Is there a cheaper option?|Есть вариант подешевле?", "Could you write down the address?|Не могли бы вы записать адрес?", "I'd like a refund, please.|Я бы хотел вернуть деньги."
  ]},
  { cat: "Мнение и обсуждение", icon: "🗣️", level: "A2", items: [
    "In my opinion, ...|По-моему, ...", "I think so. / I don't think so.|Думаю, да. / Думаю, нет.", "I agree with you.|Я с тобой согласен.",
    "I'm not sure about that.|Я в этом не уверен.", "That's a good point.|Хорошая мысль.", "I see what you mean, but...|Я понимаю, о чём ты, но...",
    "What do you think about...?|Что ты думаешь о...?", "It depends.|Зависит от обстоятельств.", "Let's agree to disagree.|Останемся каждый при своём мнении."
  ]}
);

// Неправильные глаголы: 3 формы
window.IRREGULAR = [
  "be|was/were|been|быть", "become|became|become|становиться", "begin|began|begun|начинать", "break|broke|broken|ломать",
  "bring|brought|brought|приносить", "build|built|built|строить", "buy|bought|bought|покупать", "catch|caught|caught|ловить",
  "choose|chose|chosen|выбирать", "come|came|come|приходить", "cost|cost|cost|стоить", "do|did|done|делать",
  "drink|drank|drunk|пить", "drive|drove|driven|водить", "eat|ate|eaten|есть", "fall|fell|fallen|падать",
  "feel|felt|felt|чувствовать", "find|found|found|находить", "fly|flew|flown|летать", "forget|forgot|forgotten|забывать",
  "get|got|got|получать", "give|gave|given|давать", "go|went|gone|идти", "grow|grew|grown|расти",
  "have|had|had|иметь", "hear|heard|heard|слышать", "keep|kept|kept|хранить", "know|knew|known|знать",
  "leave|left|left|уходить, оставлять", "lend|lent|lent|одалживать", "lose|lost|lost|терять", "make|made|made|делать",
  "meet|met|met|встречать", "pay|paid|paid|платить", "put|put|put|класть", "read|read|read|читать",
  "ride|rode|ridden|ездить верхом", "run|ran|run|бегать", "say|said|said|сказать", "see|saw|seen|видеть",
  "sell|sold|sold|продавать", "send|sent|sent|отправлять", "sing|sang|sung|петь", "sit|sat|sat|сидеть",
  "sleep|slept|slept|спать", "speak|spoke|spoken|говорить", "spend|spent|spent|тратить", "stand|stood|stood|стоять",
  "steal|stole|stolen|красть", "swim|swam|swum|плавать", "take|took|taken|брать", "teach|taught|taught|учить",
  "tell|told|told|рассказывать", "think|thought|thought|думать", "understand|understood|understood|понимать",
  "wake|woke|woken|просыпаться", "wear|wore|worn|носить", "win|won|won|выигрывать", "write|wrote|written|писать"
];

// Итоговый тест A2
window.FINAL_TEST_A2 = [
  { cat: "grammar", t: "c", q: "A plane is ___ than a train.", o: ["fast", "more fast", "faster", "fastest"], a: 2 },
  { cat: "grammar", t: "c", q: "It's ___ film I've ever seen.", o: ["the worse", "the worst", "the most bad", "worst"], a: 1 },
  { cat: "grammar", t: "c", q: "Have you ever ___ to Japan?", o: ["gone", "went", "been", "be"], a: 2 },
  { cat: "grammar", t: "c", q: "I ___ my keys. I can't open the door.", o: ["lost", "have lost", "was losing", "lose"], a: 1 },
  { cat: "grammar", t: "c", q: "I haven't finished my report ___.", o: ["already", "just", "yet", "still"], a: 2 },
  { cat: "grammar", t: "c", q: "I ___ Tom last Saturday.", o: ["have seen", "saw", "was seen", "have saw"], a: 1 },
  { cat: "grammar", t: "c", q: "At 9 p.m. yesterday we ___ a film.", o: ["watched", "were watching", "have watched", "watch"], a: 1 },
  { cat: "grammar", t: "c", q: "I was cooking when the phone ___.", o: ["was ringing", "rang", "rings", "has rung"], a: 1 },
  { cat: "grammar", t: "c", q: "When I was a child, I ___ climb trees.", o: ["use to", "was used to", "used to", "am used"], a: 2 },
  { cat: "grammar", t: "c", q: "She speaks English very ___.", o: ["good", "well", "goodly", "nice"], a: 1 },
  { cat: "grammar", t: "c", q: "The lecture was long and ___.", o: ["bored", "boring", "bore", "boredom"], a: 1 },
  { cat: "grammar", t: "c", q: "If it ___ tomorrow, we'll stay at home.", o: ["will rain", "rains", "rained", "raining"], a: 1 },
  { cat: "grammar", t: "c", q: "Take an umbrella. It ___ rain later.", o: ["might", "must", "should to", "has to"], a: 0 },
  { cat: "grammar", t: "c", q: "It's a holiday tomorrow, so we ___ go to work.", o: ["mustn't", "don't have to", "haven't to", "can't"], a: 1 },
  { cat: "grammar", t: "c", q: "You look ill. You ___ see a doctor.", o: ["should", "would", "might not", "shouldn't"], a: 0 },
  { cat: "grammar", t: "c", q: "Would you mind ___ the window?", o: ["close", "to close", "closing", "closed"], a: 2 },
  { cat: "grammar", t: "c", q: "There isn't ___ milk for everyone.", o: ["too many", "enough", "a few", "many"], a: 1 },
  { cat: "grammar", t: "c", q: "I've looked for my glasses, but I can't find them ___.", o: ["somewhere", "nowhere", "anywhere", "everywhere"], a: 2 },
  { cat: "grammar", t: "c", q: "She decided ___ a new job.", o: ["looking for", "to look for", "look for", "for looking"], a: 1 },
  { cat: "grammar", t: "c", q: "That's the woman ___ helped me yesterday.", o: ["which", "where", "who", "whose"], a: 2 },
  { cat: "grammar", t: "c", q: "I've known him ___ 2015.", o: ["for", "since", "ago", "from"], a: 1 },
  { cat: "grammar", t: "c", q: "This church ___ in the 16th century.", o: ["built", "was built", "is building", "has built"], a: 1 },
  { cat: "grammar", t: "c", q: "The TV is too loud. Can you turn ___?", o: ["down it", "it down", "it off down", "down"], a: 1 },
  { cat: "vocab", t: "c", q: "Someone who never tells lies is...", o: ["honest", "selfish", "rude", "lazy"], a: 0 },
  { cat: "vocab", t: "c", q: "You get this at the airport before you get on the plane:", o: ["receipt", "boarding pass", "prescription", "key card"], a: 1 },
  { cat: "vocab", t: "c", q: "— I've got a terrible cold. — ...", o: ["Congratulations!", "Get well soon!", "Enjoy it!", "Good for you!"], a: 1 },
  { cat: "vocab", t: "c", q: "Как закончить официальное письмо?", o: ["Love, Anna", "Cheers!", "I look forward to hearing from you.", "See ya!"], a: 2 },
  { cat: "vocab", t: "c", q: "— Would you like to come to dinner on Friday? — ...", o: ["I'd love to, thanks!", "Yes, I like.", "Yes, I would like dinner.", "Of course I would like to come to."], a: 0 },
  { cat: "listening", t: "lc", say: "I'm afraid Mr Johnson isn't here at the moment. He'll be back at half past two. Can I take a message?", q: "Когда вернётся мистер Джонсон?", o: ["В 2:00", "В 2:30", "В 3:30", "В 12:30"], a: 1 },
  { cat: "listening", t: "lc", say: "The flight to Madrid has been delayed. It will now depart at eight fifteen from gate twenty-four.", q: "Что случилось с рейсом?", o: ["Отменён, выход 24", "Задержан, вылет в 8:15, выход 24", "Задержан, вылет в 8:50, выход 14", "Вылет по расписанию"], a: 1 },
  { cat: "listening", t: "lc", say: "I used to live in London, but I moved to Manchester three years ago because of my job.", q: "Почему человек переехал?", o: ["Из-за семьи", "Из-за учёбы", "Из-за работы", "Из-за погоды"], a: 2 },
  { cat: "listening", t: "lc", say: "You should drink a lot of water and stay in bed. If you don't feel better in two days, come back and see me.", q: "Когда нужно прийти снова?", o: ["Завтра", "Если через два дня не станет лучше", "Через неделю", "Не нужно приходить"], a: 1 },
  { cat: "listening", t: "lc", say: "I was walking to the station when it started to rain, so I took a taxi instead.", q: "Как человек добрался?", o: ["Пешком", "На поезде", "На такси", "На автобусе"], a: 2 },
  { cat: "listening", t: "lc", say: "The jacket costs eighty-five pounds, but it's twenty percent off this week.", q: "Сколько стоит куртка без скидки?", o: ["£58", "£85", "£20", "£65"], a: 1 },
  { cat: "reading", t: "c", text: "Hi Emma, Thanks for your email! Sorry I haven't written for so long. I've been really busy since I started my new job in March. I work for a travel company, and I'm responsible for booking hotels for our customers. It's more interesting than my old job, although I have to work late quite often. Last month I went to Barcelona for a conference. While I was walking along the beach, I met an old friend from university — what a surprise! We've decided to travel to Portugal together in September. We're flying on the 12th. Would you like to come with us? If you can't take a week off, maybe you could join us for the weekend. Let me know soon! Love, Kate", q: "When did Kate start her new job?", o: ["In September", "In March", "Last month", "A year ago"], a: 1 },
  { cat: "reading", t: "c", sameText: true, q: "What does Kate think about her new job?", o: ["It's boring", "It's more interesting than her old job", "It's easier than her old job", "She wants to leave"], a: 1 },
  { cat: "reading", t: "c", sameText: true, q: "Where did Kate meet her old friend?", o: ["At the conference", "At university", "On the beach in Barcelona", "In Portugal"], a: 2 },
  { cat: "reading", t: "c", sameText: true, q: "What are Kate and her friend going to do in September?", o: ["Go to a conference", "Travel to Portugal", "Visit Emma", "Start a new job"], a: 1 },
  { cat: "reading", t: "c", sameText: true, q: "What does Kate suggest if Emma can't take a week off?", o: ["To come another year", "To join them for the weekend", "To fly on the 12th", "To call her"], a: 1 },
  { cat: "grammar", t: "c", q: "Выберите правильный вопрос:", o: ["How long you have lived here?", "How long have you lived here?", "How long do you live here since?", "How long are you living here?"], a: 1 }
];
