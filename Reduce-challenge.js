let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

// ANSWER 
// const biggest = students.reduce((highest, stud) => {
//     highest = highest.max > stud.results.english ? highest: {name:stud.name, max:stud.results.english};
//     return highest;
//     }, {name: '', max: 0});
// console.log(biggest)

const biggest = students.reduce((highest, stud) => {
    // Defining what property we look at in Object
    if (highest.max > stud.results.english) {
        // Attributes of the array we want to save
        highest = {name: stud.name, max: stud.results.english};
    }
    return highest;
}, {name: '', max: 0});


const biggest2 = students.reduce((max, student) => {
    if (student.results.english > max) {
        max = student.results.english;
    } return max;
}, 0)

bestStudent = students.filter(student => student.results.english === biggest2).map(student => ({name: student.name, max: student.results,english}));
console.log(bestStudent);

console.log(biggest);