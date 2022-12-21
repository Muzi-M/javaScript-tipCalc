const billAmount = document.getElementById("billAmount").innerHTML;
const tipAmount = document.getElementById("tipAmount").innerHTML;
const totalBill = document.getElementById("totalBill").innerHTML;
const percentage = document.getElementById("myRange").innerHTML;

tipAmount = billAmount * percentage;
totalBill = billAmount + tipAmount;
