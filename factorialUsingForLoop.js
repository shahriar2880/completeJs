function sumOfNumbers(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }
  return fact;
}
const number = 7
const result = sumOfNumbers(number);
console.log("The factorial of",number,"is :",result);
