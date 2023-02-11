//Сделать функцию которая вычисляет длину окружности, радиус задает пользователь:
function circleLength (){
    const r = +prompt('Напишите радиус');
    var length= 2 * Math.PI * r;
    alert(Math.round(length));
}

circleLength();


//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b:
function checkMin(a,b){
  a = +prompt("Ваше число?");
  b = +prompt("Ваше число?");
  if (a<b){
      return a;
  }
  else{
      return b;
  }
}
alert(checkMin())