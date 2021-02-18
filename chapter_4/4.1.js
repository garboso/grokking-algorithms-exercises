// Write out the code for the sum function.

console.log(`[] === 0? ${reduce([]) === 0}`);
console.log(`[2, 4, 6] === 12? ${reduce([2, 4, 6]) === 12}`);
console.log(`[0, 0, 0, 0, 0] === 0? ${reduce([0, 0, 0, 0, 0]) === 0}`);

function reduce(arr) {
  return arr.length === 0 ? 0 : arr[0] + reduce(arr.slice(1));
}