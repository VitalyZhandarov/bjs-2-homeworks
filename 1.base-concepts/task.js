"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant === 0) {
    let root = -b / ( 2 * a );
    arr = [];
    arr.push(+root.toFixed(2));
  } else if (discriminant > 0) {
    let root1 = ( -b + Math.sqrt(discriminant) ) / ( 2 * a );
    let root2 = ( -b - Math.sqrt(discriminant) ) / ( 2 * a );
    arr = [];
    arr.push(+root1.toFixed(2), +root2.toFixed(2));
  } else {
    arr = [];
  }  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let totalAmount;
  let loanBody = amount - contribution;
  let timeNow = new Date();
  let loanTerm = countMonths - timeNow;
  loanTerm = loanTerm / 1000 / 60 / 60 / 24 / 30;
  let monthlyPartPercent = (percent / 100) / 12;
  let monthFee = loanBody * (monthlyPartPercent + (monthlyPartPercent / (((1 + monthlyPartPercent) ** loanTerm) - 1)));
  totalAmount = +(monthFee * loanTerm).toFixed(2);
  console.log(totalAmount);
  return totalAmount;
}