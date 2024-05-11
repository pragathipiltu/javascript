//checked property determines the checked state of an HTML checkbox or radio button element


const myCheckbox = document.getElementById("myCheckbox");
const myvisabtn = document.getElementById("myvisabtn");
const mymastercardbtn = document.getElementById("mymastercardbtn");
const mypaypalbtn = document.getElementById("mypaypalbtn");

const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if(myCheckbox.checked) {
        subResult.textContent = `you are subscribed`;
    }
    else {
        subResult.textContent = `you are not subscribed`;
    }

    if(myvisabtn.checked){
        paymentResult.textContent = `you are paying with VISA`;
    } 
    else if (mymastercardbtn.checked) {
        paymentResult.textContent = `you are paying with MASTERCARD`;
    }
    else if (mypaypalbtn.checked) {
        paymentResult.textContent = `you are paying with PAYPAL`;
    }
    else {
        paymentResult.textContent = `You must select a payment type`;
    }
}