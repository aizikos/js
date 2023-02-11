function personInfo(names,surname ,age,cat){
  names=prompt("ВВедитте имя:");
  surname=prompt("Фамилия:");
  age=+prompt("Возраст:");
  cat= prompt('Есть кошка?');

  let Info = [names,surname,age,cat];

  console.log(Info.slice())
}

personInfo()
