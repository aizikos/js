//AJAX

const som = document.querySelector('#som');
const usd =document.querySelector('#usd');

const usd1 = document.querySelector('#usd1');
const som1 = document.querySelector('#som1');

const rubS = document.querySelector('#rubS');
const somR = document.querySelector('#somR');

const SOM = document.querySelector('#SOM');
const RUB = document.querySelector('#RUB');

som.addEventListener('input', function(){
    const reguest = new XMLHttpRequest();

    reguest.open("GET","./current.json");
    reguest.setRequestHeader("content-type","application/json",'charset = UTF-8')

    reguest.send();
    reguest.addEventListener('readystatechange', function(){
        if(reguest.readyState == 4){
            let json = JSON.parse(reguest.response).current.usd;
            let result = som.value / json
            usd.value = result.toFixed(2)
        }else{
           // alert('ERror')
        }
    })
})


usd1.addEventListener('input', function(){
    const reguest1 = new XMLHttpRequest();

    reguest1.open("GET","./current.json");
    reguest1.setRequestHeader("content-type","application/json",'charset = UTF-8')

    reguest1.send();
    reguest1.addEventListener('readystatechange', function(){
        if(reguest1.readyState == 4){
            let json1 = JSON.parse(reguest1.response).current.usd;
            let resultSom = usd1.value * json1;
            som1.value = resultSom.toFixed(2);
        }
    })
})

rubS.addEventListener('input', function(){
    const reguest2 = new XMLHttpRequest();

    reguest2.open("GET","./current.json");
    reguest2.setRequestHeader("content-type","application/json",'charset = UTF-8')
    reguest2.send();
    reguest2.addEventListener('readystatechange', function(){
        if(reguest2.readyState == 4){
            let json2 = JSON.parse(reguest2.response).current.som;
            let resultRub = rubS.value / json2;
            somR.value = resultRub.toFixed(2);
        }
    })
})

SOM.addEventListener('input', function(){
    const reguest3 = new XMLHttpRequest();

    reguest3.open("GET","./current.json");
    reguest3.setRequestHeader("content-type","application/json",'charset = UTF-8')
    reguest3.send();
    reguest3.addEventListener('readystatechange', function(){
        if(reguest3.readyState == 4){
            let json3 = JSON.parse(reguest3.response).current.som;
            let resultS = SOM.value * json3;
            RUB.value = resultS.toFixed(2);
        }
    })
})

