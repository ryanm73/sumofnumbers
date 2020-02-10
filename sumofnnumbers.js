const numList = [1, 2, 3, 4, 5];

function sumFor(x) {
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    count += x[i];
  }
  return count;
}
function sumWhile(x) {
  let count = 0;
  let i = 0;
  while (i < x.length) {
    count += x[i];
    i++;
  }
  return count;
}
function sumRecursion(x, i) {
  if (i === undefined) {
    i = 0;
  }
  if (i === x.length) {
    return 0;
  } return x[i] + sumRecursion(x, i + 1);
}
function sumTheSimpleWay(x) {
  return _.reduce(x, (memo, y) => memo + y);
}

console.log(sumFor(numList));
console.log(sumWhile(numList));
console.log(sumRecursion(numList));
console.log(sumTheSimpleWay(numList));