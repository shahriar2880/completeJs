function iseven(number) {
  const remainder = number % 2;
  if (remainder === 0) {
    console.log(number, "is a even number");
  } else {
    console.log(number, "is a odd number");
  }
}

const number = iseven(23);
