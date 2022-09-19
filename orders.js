// JS is loselly typed, that means that we don't need to strictly define types when we create variables.
// types still exist, but JS tried to convert types when we have some operation that doesn't have matching types.
console.log(document);

let button = document.getElementById('loadButton');
let content = document.getElementById('container');
let order_idInput = document.getElementById('order_idInput');
let proteinInput = document.getElementById('proteinInput');
let priceInput = document.getElementById('priceInput');
let yearorderInput = document.getElementById('yearorderInput');
let customerIDInput = document.getElementById('customerIDInput');
let addButton = document.getElementById('addButton');
let orderInput = document.getElementById('orderInput');
let addButton1= document.getElementById('addButton1');
addButton.onclick = addOrder;
button.onclick = loadAllOrders;
addButton1.onclick = removeOrder;

function loadSpan(response){
    content.innerHTML = "";
    for(let i = 0; i < response.length; i++){
        let orderOrder_id = document.createElement("p");
         orderOrder_id.innerText= " Order_Id: " + response[i].order_id + ", " + " Protein: " + response[i].protein + ", " + " Price: "  + response[i].price + ", " + " YearOrder: " + response[i].yearorder + ", " +  " CustomerID: " + response[i].customerID;
         //content.innerText = response;
         content.appendChild(orderOrder_id);
    }
}
async function loadAllOrders(){
    let response = await fetch("http://localhost:9000/orders");
    response = await response.json();
    loadSpan(response);
}
async function load(){
    if(request.readyState == 4 && request.status == 200){
        let x = request.response.json();
        loadSpan(x);
        console.log(x);
        }
    }

function addOrder(){
    let request  = new XMLHttpRequest();
    request.open("POST", "http://localhost:9000/orders");
    request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    //creating an object
    let orderObj = {order_id: order_idInput.value, protein: proteinInput.value, price: priceInput.value, yearorder: yearorderInput.value, customerID: customerIDInput.value}
    request.send(JSON.stringify(orderObj));
}
function removeOrder(){
    let request = new XMLHttpRequest();
    request.open("DELETE", "http://localhost:9000/orders");
    request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    let order = {order_id: orderInput.value}
    request.send(JSON.stringify(order));

}