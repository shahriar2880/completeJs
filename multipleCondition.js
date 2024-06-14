// ✅ Using logical OR (||) - at least 1 condition has to be met

var num = 5;

if (num > 10 || num > 5 || num > 0) {
  // 👇️ if block runs
  console.log(' at least one condition is met');
} else {
  console.log(' neither condition is met');
}

// ✅ Using logical AND (&&) - all conditions have to be met

var num2 = 5;

if (10 > num2 && 6 > num2) {
  // 👇️ if block runs
  console.log(' all conditions are met');
} else {
  console.log(' not all conditions are met');
}
