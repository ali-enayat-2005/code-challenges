// Log all pairs of array
// Expected output => [a,a], [a,b], [a,c], [a,d], [a,e], and ...
// 1)
const items = ["a", "b", "c", "d", "e"];

function logAllArrPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
// Big O (n^2)
// logAllArrPairs(items);
