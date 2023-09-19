import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function() {
  // console.log("Finished loading");
  update();
});

document.querySelector("form").addEventListener("submit", async function(event) {
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const withdrawAmount = parseFloat(document.getElementById("withdrawal-amount").value);


  button.setAttribute("disabled", true);

  if (!isNaN(inputAmount) && inputAmount > 0) {
    await dbank.topUp(inputAmount);
  }

  if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
    await dbank.withdrawal(withdrawAmount);
  }

  dbank.compound();

  update();

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
  button.removeAttribute("disabled");

});

async function update() {
  const currentAmount = await dbank.checkBalance();
  document.getElementById("value").innerText = currentAmount.toFixed(2); // Format to 2 decimal places;
}
