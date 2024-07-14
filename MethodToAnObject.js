var person = {
 firstName: "Shahriar",
 lastName: " Reza",
 age: 25,
 dept: "Software Engineering",
 cgpa: 3.46
}

person.name = function(){
    return  this.firstName + " "+ this.lastName

    // This example uses the JavaScript toUpperCase() method to convert a text to uppercase
    //return  (this.firstName + " "+ this.lastName).toUpperCase();
}

console.log(person.name())