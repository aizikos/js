

//по клику получить название товара с помощью js,
//по клику получить цену товара с помощью js:

var addBtns = document.getElementsByClassName("add-to-card");

var myfuntions = function(){
    var title = this.parentNode.parentNode.getElementsByClassName("item-title")
    console.log("Имя:"+ title[0].innerText);
    
    
    var scanes = this.parentNode.parentNode.getElementsByClassName("scane")
    console.log("Ценна:"+ scanes[0].innerText);

    var pictures = this.parentNode.parentNode.getElementsByClassName("picture")
    console.log(pictures[0]);
}


//с помощью цикла сделайте перебор:


for( var i = 0; i< addBtns.length; i++){
    addBtns[i].addEventListener('click',myfuntions,false);
}

//с помощью js поменять название товара и цену товара:

var name_1 = document.getElementById("title").textContent="Cakes by me";

var num = document.getElementById("num").textContent="1000 сом/кг";



