
/* Задача № 1*/
function getArrayParams(...arr) {
  
  if (arr.length === 0) {
    return {min: undefined, max: undefined, avg: undefined
    };
  }

  let min = Infinity;
	let max = -Infinity;
	let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i]
    }

    const avg = +((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

/* Задача № 2 */

function summElementsWorker(...arr) {
  let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {

}

/* Задача № 3 */

function makeWork (arrOfArr, func) {

}
