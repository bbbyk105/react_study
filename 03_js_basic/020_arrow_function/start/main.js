// function fn(number) {
//   return number * 2;
// }

const fn = function(number) {
  return number * 2;
}

console.log(fn(2));
console.log(fn(4));

const fnArrow = number => {
  console.log(number);
  return number * 2;
}

const fnArrowObj = number =>({result: number * 2})

console.log(fnArrow(2));