var student = {
    id: '192-35-2880',
    name: 'shahriar',
    cgpa: 3.47,
    dept: 'Software Engineering'
}
// console.log(student);
// console.log(student.id);
// console.log(student.name);
// console.log(student.cgpa);
// console.log(student.dept);

student.id = '192-35-0001'
// console.log(student.id)

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
console.log(student);