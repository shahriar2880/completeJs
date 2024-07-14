var student = {
    id: '192-35-2880',
    firstName: 'shahriar',
    lastName: 'Reza',
    cgpa: 3.47,
    dept: 'Software Engineering',
    fullName: function(){
        // this.firstName means the firstName property of student.
        return this.firstName + " " + this.lastName;
    },
    myCars: {
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
      }
}
// console.log(student);
// console.log(student.id);
// console.log(student.name);
// console.log(student.cgpa);
// console.log(student.dept);
// delete student.name
//console.log(student)
console.log(student.fullName)
console.log(student.myCars.car1)

//student.id = '192-35-0001'
//console.log(student.id)

var student_id = student.id;
// console.log(student_id);

var student_new_id = student['id']
// console.log(student_new_id)

var property_name = 'cgpa'
var property_value = student[property_name];

//console.log(property_name, property_value)

var properties = Object.keys(student)
// console.log(properties);

var properties_value = Object.values(student)
// console.log(properties_value);

student.cgpa = 3.5
// console.log(student)

student['cgpa'] = 3.67;
// console.log(student)

student[property_name] = 3.9;
//console.log(student);