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
  
}