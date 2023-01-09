//Сделать callback функцию которая просит ввести логин и пароль, и проверяет правильно ли введены данные пользователя 

function admin(){
  var names = prompt('Ваш логин?');
  if (names==="admin"){
    alert("Поздравляем!");
  } else{
    alert('Неверный логин!!!');
  }
}

function passport(){
  var pass= prompt("Ваш пароль?");

  if(pass === "lopi02"){
    alert('Вы вошли в аккаунт');
  } else{
    alert("Вы не вошли в аккаунт!");
  }
}

admin();
passport();

//Сделать callback функцию которая создаёт html элемент, то есть функция просит какой тег создать, просит какой текст ввести и цвет текста. 

function createElement(tag,text,color){
  var element= document.createElement(tag);
  element.innerHTML=text;
  element.style.color=color;
  return element;
}

var p =createElement('h1','Hello, Word','purple');

document.body.appendChild(p);