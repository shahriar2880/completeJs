function foo() {
    console.log("foo"); // Print "foo"
    bar(); // Call the function bar()
  }
  
  function bar() {
    console.log("bar"); // Print "bar"
  }
  
  // Call the function foo()
  foo();
  

function make_avg(num1,num2,num3){
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
        return "Error: Please enter only numbers";
      }
    const sum = num1+num2+num3;
    const avg = sum/3;
    return avg;
}

const avg = make_avg(14,23,34);
console.log(avg.toFixed(2))