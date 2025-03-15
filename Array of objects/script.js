// Array of objects

const student_database = [
    {
        name: "fubuki",
        age: 20,
    },
    {
        name: "Sri",
        age: 21,
    },
    {
        name: "Sukuna",
        age: 22,
    },
    {
        name: "makima",
        age: 23,
    }
];

console.log(student_database[0]);
console.log(student_database[1]);
console.log(student_database[2]);

console.log(student_database[0]["name"]);
// or 
console.log(student_database[0].name);


student_database.forEach((student) => {
    console.log(student.name);
    console.log(student.age);
});

const student_names = student_database.map(student =>student.name);
console.log(student_names);

const senior = student_database.filter((student) => {
    return student.age > 21;
});
console.log(senior);


const student_ = student_database.find((student) => {
    return student.age === 21;
});
console.log(student_);

const reduced = student_database.reduce((acc, student) => {
    return acc + student.age;
}, 0);
console.log(reduced);