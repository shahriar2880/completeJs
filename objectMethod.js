const person = {
    id: 1221,
    name : "shahriar",
    age:25,
    position: "Software Engineer",
};
var newProperty = Object.defineProperty(person, "salary" , {value: 30000})
console.log(person.salary)

const value = Object.values(person);
console.log(value);

var name1 = person.name;
//console.log(name1);
var name2 = person["name"]
//console.log(name2);


const person1 ={
    id:13321,
    name: "reza"
};
//console.log(person)
//console.log(person1)

// assaign 
Object.assign(person, person1);

//entries
text= Object.entries(person)
//console.log(text)

//values
let text1 = Object.values(person)
//console.log(text1)
//console.log(person)

//group by
// const goods =[
//     {name:"apples", quantity:300},
//     {name:"bananas", quantity:500},
//     {name:"oranges", quantity:200},
//     {name:"kiwi", quantity:150}
// ];
// function myCallBack ({quantity}){
//     return quantity > 200 ? "ok" : "low";
// }

// const result = Object.groupby(goods, myCallBack)
// console.log(result.ok.entries())
const keys = Object.keys(person);
//console.log(keys);

for(var i = 0; i< keys.length; i++){
var propertyName = keys[i];
var propertyValue = person[propertyName]
console.log(propertyName, ":", propertyValue)

}
//for...in loop to see properties and values
for(var propertyName in person){
    const values = person[propertyName];
    console.log(propertyName, ":", values)
}

const color = "red";

switch(color){
    case 'green' :
        console.log('You are Greeen');
        break;
    case 'yellow':
        console.log('You are Yellow')
        break;
    case 'red':
        console.log('You are Red')
        break;

}