function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  Person.prototype.nationality= "Bangladeshi"

  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };

  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");

  console.log("My father name is",myFather.name());
  console.log(myMother);