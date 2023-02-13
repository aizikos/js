document.querySelector('#login-sumbit').onclick = function(event)  {
    event.preventDefault();
    let pass = document.querySelector('#parol').value;

    let email = document.querySelector("#login-email").value;

    let data ={
        "pass": pass,
        "email" : email
    }

    ajax('POST', login,data);

    function login(result){
        console.log(result);
        if(result=2){
            alert('Welcome')
        }
        else if (result===0){
            alert('!!!!!!!!!')
        }
        else{
            alert('ERROR')
        }

    }
}

//HTTP METHOD

/*const url ='https://jsonplaceholder.typicode.com/usersle';

const reguest = new XMLHttpRequest();

reguest.open('GET',url);

reguest.send();

reguest.onload =function(){
   const data =JSON.parse(reguest.response);
    if(reguest.status = !200){
        alert('ERROR',reguest.statusText)
    }else {
        console.log(reguest.response)
    }
}*/