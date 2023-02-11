//JSON


stuuden = {
    name: 'Alex',
    surname: 'Benjamin',
    age:20,
    Mom:'Mimi',
    Dad:'Ben',
    sister: 'Blum',
    brother:'Dan',
    frend: "Kris",
    love: 'Stella',
    favorite_food: 'Pizza',
    favorite_book: 'Twilight',
    favorite_cinema: 'boots and boot',
    pet: 'dog',
    pet_name: 'Dis',
    pet_age: 2,
    color: 'white'
}

let study = `{"name":"Alex","surname":"Benjamin","age":20,"Mom":"Mimi",
"Dad":"Ben","sister":"Blum","brother":"Dan","frend":"Kris","love":"Stella",
"favorite_food":"Pizza","favorite_book":"Twilight","favorite_cinema":"boots and boot",
"pet":"dog","pet_name":"Dis","pet_age":2,"color":"white"}

`

let studys = JSON.parse(study);

//console.log(stuuden);

console.log(JSON.stringify(stuuden));

console.log(studys)






