const students = [
    {id:10, Name:'shima'},
    {id:11, Name:'shimu'},
    {id:13, Name:'shila'},
    {id:15, Name:'shiuly'}
];
const student = students.map(s=>s.Name);
console.log(student);
const ids = students.map(s=>s.id);
console.log(ids);
// filter
const bigger = students.filter(s=>s.id>11);
console.log(bigger);
// find
const find = students.find(s => s.id>11);
console.log(find);