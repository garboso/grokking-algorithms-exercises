// Find the maximum number in a list.

console.log(`maximum number in`);
console.log(`\t\t * [] is 0? ${max([], 0) === 0}`);
console.log(`\t\t * [2, 4, 6] is 6? ${max([2, 4, 6], 3) === 6}`);
console.log(`\t\t * [0, 2, 0, 8, 0] is 8? ${max([0, 2, 0, 8, 0], 5) === 8}`);

function max(arr, n) {
  if (arr.length === 0) return 0;
  return n === 1 ? arr[0] : Math.max(arr[n-1], max(arr, n-1));
}