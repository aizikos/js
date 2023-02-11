//Создаем обьект которая запршиваеть 
//имя пользователя, год рождения, место рождения, с этим объектом должны создаваться все пользователи;

const obj = {
    names : prompt("Name"),
    year_of_brith : prompt ('Year'),
    country : prompt ('coutry')
}


function user () {
    console.log (this.names+"," +this.year_of_brith+ ","+this.country);
}

user.call(obj);




