//Сделайте функцию которая возводить в степень числа вводимые пользователем:
let x = +prompt("x?", '');
let n = +prompt("n?", '');

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

alert( pow(x, n) );


//Сделайте функцию которая находит площадь круга, радиус вводить пользователь. :

function circleLength (){
  const r = +prompt('Напишите радиус:');
  var length= Math.PI * Math.pow(r, 2);
  alert("Резултать:" + Math.round(length));
}

circleLength();

//Сделайте функцию которая находит площадь прямоугольника, длину и ширину вводить пользователь.:

function rectangle(){
  let a = +prompt("Напишите длину:");
  let b = +prompt("Напишите ширину:");
  var s = a * b ;

  alert ('Результат:'+ s);
}

rectangle();

