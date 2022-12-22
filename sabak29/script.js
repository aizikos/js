///var title = document.getElementsByClassName("item-title");

//console.log(title);

var addBtns = document.getElementsByClassName("add-to-card");

var myfuntions = function(){
    var title = this.parentNode.parentNode.getElementsByClassName("item-title")
    console.log("Имя:"+ title[0].innerText);
    
    
    var scanes = this.parentNode.parentNode.getElementsByClassName("scane")
    console.log("Ценна:"+ scanes[0].innerText);

    var pictures = this.parentNode.parentNode.getElementsByClassName("picture")
    console.log(pictures[0]);
}



for( var i = 0; i< addBtns.length; i++){
    //addBtns[i]\
    addBtns[i].addEventListener('click',myfuntions,false);
}



