const billAmount = document.getElementById("billAmount");
const tipAmount = document.getElementById("tipAmount");
const totalBill = document.getElementById("totalBill");
const percentage = document.getElementById("myRange");
const tipPercentageDisplay = document.getElementById("tipPercentageDisplay");

document.querySelector("#bill").onchange = function () {
  tipPercentageDisplay.innerHTML = Number(percentage.value);
  tipAmount.value = Number(billAmount.value) * (Number(percentage.value) / 100);
  totalBill.value = Number(billAmount.value) + Number(tipAmount.value);
};
