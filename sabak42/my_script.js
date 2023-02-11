//events
var clear1 = document.getElementById("clear1");
var clear2 = document.getElementById("clear2");
var clear3 = document.getElementById("clear3");
var clear4 = document.getElementById("clear4");
var clear5 = document.getElementById("clear5");

let clear_menu =(evt)=>{
    evt.target.remove();
}

clear1.addEventListener('click',clear_menu);
clear2.addEventListener('click',clear_menu);
clear3.addEventListener('click',clear_menu);
clear4.addEventListener('click',clear_menu);
clear5.addEventListener('click',clear_menu);