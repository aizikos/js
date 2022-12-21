var person={
    name:"ali",
    surname:"Jumabaev",
    year_of_birth:1997,
    age:25,
    Place_of_Birth:"Kyrgystan,Osh",
    education:"National University of Kyrgyzstan",
    marital_status:"not married",
};

for (let key in person) {
    console.log(key + ' - ' + person[key]);
};


var books=[
    'my love',
    'Моя жизнь',
    "МОРЯ НЕВИДИМОСТИ",
    "ТРИ ОРЕЖКА ДЛЯ ЗОЛУШКИ",
    "ТЫ МОЯ",
    "МАМА ДЛЯ ДОЧЕРИ БОССА",
    "МУЗЫКА СЧАСТЬЯ",
    "ТРИ НЕВЕСТЫ",
    "БРАК ПО ДОГОВОРУ",
    "С ТОБОЙ НАВЕКИ",
    "МОЙ КОШМАР",
];

var index;
for (index = 0; index < books.length; ++index) {
    console.log(books[index]) };