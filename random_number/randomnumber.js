

const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const max = 6;
const min = 1;
let random_number1;
let random_number2;
let random_number3;

myButton.onclick =function() {
    random_number1 = Math.floor(Math.random() * max)+min;
    random_number2 = Math.floor(Math.random() * max)+min;
    random_number3 = Math.floor(Math.random() * max)+min;
    myLabel1.textContent = random_number1;
    myLabel2.textContent = random_number2;
    myLabel3.textContent = random_number3;
}