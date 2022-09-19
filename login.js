console.log(document);
let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
let submits = document.getElementById("submits");
submits.onclick = validates;


async function validates(){
    console.log("high");
    let response = await fetch("http://localhost:9000/user");
    response = await response.json();
    console.log(response);
    doLogin(response);
}
function doLogin(response){
    for(let i = 0; i < response.length; i++){
        if (usernameInput.value == response[i].username && passwordInput.value == response[i].password){
            window.open("customers.html");
        }
        else{
            alert("login failed");
        }
}
}

    






/*
function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username == "admin" && password == "user"){

        window.open("customers.html");
    }
    else{
        alert("login failed");
    }
}
*/
