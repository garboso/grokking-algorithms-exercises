// Write a binary search algorithm recursively.

console.log(`23 is in [2, 3, 6, 9, 12, 23]? \n expect true, return ${search([2, 3, 6, 9, 12, 23], 23)}`);
console.log(`2 is in [2, 3, 6, 8, 9, 12, 23, 41]? \n expect true, return ${search([2, 3, 6, 9, 12, 23], 2)}`);
console.log(`7 is in [2, 3, 6, 8, 9, 12, 23, 41]? \n expect false, return ${search([2, 3, 6, 9, 12, 23], 7)}`);

function search(arr, n) {
  let coef = Math.round(arr.length/2) - 1;
  let middle = arr[coef];

  if (middle === n) return true;
  if (n > middle) return search(arr.slice(coef + 1), n);
  if (n < middle) return search(arr.slice(0, coef), n);

  return false;
}