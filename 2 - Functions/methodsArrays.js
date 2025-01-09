const listGrades = [
  { name: "Daniel", grade: 5 },
  { name: "Pedro", grade: 15 },
  { name: "Lucas", grade: 12 },
  { name: "Fabricio", grade: 16 },
  { name: "Izabelle", grade: 16 },
  { name: "Nathalia", grade: 20 },
  { name: "Amanda", grade: 20 },
  { name: "Joao", grade: 20 },
  { name: "Marcus", grade: 12 },
  { name: "Sergio", grade: 13 },
  { name: "Diego", grade: 14 },
  { name: "Renan", grade: 11 },
  { name: "Rodrigo", grade: 9 },
  { name: "Messi", grade: 0 },
  { name: "CR7", grade: 0 },
];

// filter - rensponsible to generate a new array as a filter results established by the programmer
const approvedStudents = listGrades.filter(function (student) {
  return student.grade >= 12;
});
//console.log(approvedStudents);

// find - find the first 'true' value and return
const zeroGradeStudents = listGrades.find(function (student) {
  return student.grade === 0;
});
//console.log(zeroGradeStudents);

// map - return the property value from a list
const nameApprovedStudents = approvedStudents.map(function (student) {
  return student.name;
});
console.log(nameApprovedStudents);
