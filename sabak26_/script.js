document.getElementById('btn').onclick = function(){
    let login = document.getElementById('login').value;
    let pass = document.getElementById('parol').value;

    if( login === "aizi" && pass === "aiko21")
        alert('Welcome');
    else if( login === "" && pass === "")
    alert('Попробуйте еще раз!');
    else alert('Неверный пароль или логин');
}