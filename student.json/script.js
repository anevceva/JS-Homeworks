const url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";
let studentObj = [];

function getAllStudents() {
    fetch(url)
        .then(students => {
            students.json()
                .then(parsedStudents => {
                let students = parsedStudents;

                    let averageGrade3 = students
                        .filter(
                            (s) => s.averageGrade > 4
                        );
                    console.log(averageGrade3);

                    let allFemalesWithAvg5 = students
                        .filter((s) => s.gender === 'Female' && s.averageGrade === 5);
                    console.log(allFemalesWithAvg5);

                    let malesStudentsInSkopje18Years = students
                        .filter((s) => s.gender === 'Male' && s.age > 18 && s.city === 'Skopje');
                    console.log(malesStudentsInSkopje18Years);


                    let sumOfAllGrades = students
                        .map((s) => s.gender === 'Female' && s.age > 24)
                        .reduce((avg, grade) => (avg += grade), 0);
                    console.log(sumOfAllGrades);


                    let studentsWithB = students
                        .filter((s) => s.firstName.startsWith('B')  && s.averageGrade > 2);  
                     console.log(studentsWithB);

                })
                .catch(e => {
                    console.error(e);
                })
        })
}

getAllStudents();


