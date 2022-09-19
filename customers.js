console.log(document);

let addButton2 = document.getElementById('addButton2');
let contentCustomer = document.getElementById('containerCustomer');
let idInput = document.getElementById('idInput');
let nameInput = document.getElementById('nameInput');
let petnameInput = document.getElementById('petnameInput');
let addButtonCustomer = document.getElementById("addButtonCustomer");
addButtonCustomer.onclick = addCustomer;
addButton2.onclick = loadAllCustomers;

function loadSpan(response){
    contentCustomer.innerHTML = "";
    for(let i = 0; i < response.length; i++){
        let cCustomerID = document.createElement("p");
        cCustomerID.innerText= " CustomerID: " + response[i].id + ", " + " Name: " + response[i].name + ", " + " Petname: "  + response[i].petname;
         contentCustomer.appendChild(cCustomerID);
    }
}
async function loadAllCustomers(){
    let response = await fetch("http://localhost:9000/customers");
    response = await response.json();
    loadSpan(response);
}
async function load(){
    if(request.readyState == 4 && request.status == 200){
        let j = request.response.json();
        loadSpan(j);
        console.log(j);
        }
    }

function addCustomer(){
    let request  = new XMLHttpRequest();
    request.open("POST", "http://localhost:9000/customers");
    request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    //creating an object
    let customerObj = {id: idInput.value, name: nameInput.value, petname: petnameInput.value}
    request.send(JSON.stringify(customerObj));
}
