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