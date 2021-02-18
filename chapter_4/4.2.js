// Write a recursive function to count the number of items in a list.

console.log(`[] === 0? ${count([]) === 0}`);
console.log(`[2, 4, 6] === 3? ${count([2, 4, 6]) === 3}`);
console.log(`[0, 0, 0, 0, 0] === 5? ${count([0, 0, 0, 0, 0]) === 5}`);

function count(arr) {
  return arr.length === 0 ? 0 : 1 + count(arr.slice(1));
}