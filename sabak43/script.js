//Меняем цветы
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color3 = document.getElementById("color3");
var color4 = document.getElementById("color4");
var color5 = document.getElementById("color5");
var text = document.getElementById("text");
var Remove = document.getElementById("color_r");

let color_r = function () {
    document.body.style.backgroundColor = 'red';
    text.style.color = "yellow" ;
}
let color_b = function () {
    document.body.style.backgroundColor = 'blue';
    text.style.color = "purple " ;

}
let color_g = function () {
    document.body.style.backgroundColor = 'green';
    text.style.color = "silver " ;
}

let color_o = function () {
    document.body.style.backgroundColor = 'orange';
    text.style.color = "grey " ;
}

let Rainbow = function () {
    document.body.style.background = 'linear-gradient(45deg, #3b41f1, #ed0707de,#cf1ce5)';
    text.style.color = "gold " ;

}

let color_remove = function () {
    document.body.style.background = '';
    text.style.color = '' ;

}

color1.addEventListener('click',color_r);
color2.addEventListener('click',color_b);
color3.addEventListener('click',color_g);
color4.addEventListener('click',color_o);
color5.addEventListener('click',Rainbow);
Remove.addEventListener('click',color_remove);

