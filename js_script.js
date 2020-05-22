//Calculate Tip function
function calculateTip() {
  var amount = document.getElementById("amount").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;

  //validate user input
  // check if nothing has been entered
  if (amount === "") {
    alert("Please enter values");
    return;
  }
  //check if amount is negative
  if (amount < 0) {
    alert("Amount cannot be less than 0");
    return;
  }
  //Check number of people is not none and check if number people less than 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  var total = (amount * serviceQual) / numOfPeople;
  
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  
  //set percision to two decimal places
  total = total.toFixed(2);
  
  //show tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

//Hide tip output on load initial load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//on-click execute function calculate tip
document.getElementById("calculate").onclick = function() {
  calculateTip();

};