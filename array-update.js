var fruits = ['apple', 'banana','orange']
var bananaIndex = fruits.indexOf('banana');
fruits[bananaIndex] = 'mango'
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('watermelon');
console.log(fruits);