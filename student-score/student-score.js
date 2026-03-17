const prompt = require("prompt-sync")();
console.log("Student Data");
const student = [{
  name : "John Doe",
  score : 91,
  grade : ""
},{
    name : "Jane Doe",
    score : 85,
    grade : ""
},{
    name : "Alice Smith",
    score : 78,
    grade : ""
},{
    name : "Bob Johnson",
    score : 92,
    grade : ""
},{
    name : "Charlie Brown",
    score : 62,
    grade : ""
},{
    name : "Emily Davis",
    score : 55,
    grade : ""
},{
    name : "David Wilson",
    score : 48,
    grade : ""
}]
student.forEach(s => {
    if (s.score >= 90) s.grade = "A";
    else if (s.score >= 80) s.grade = "B";
    else if (s.score >= 70) s.grade = "C";
    else if (s.score >= 60) s.grade = "D";
    else s.grade = "F";
  });
console.log("All Students with Grades");
console.log(student);
const topScores = student.filter(s => s.score >= 80);
console.log(topScores);
const searchName = prompt("Enter the name to search: ");
const searchResult = student.find(s => s.name.toLowerCase() === searchName.toLowerCase());
if(searchResult){
    console.log(`Name: ${searchResult.name}, Score: ${searchResult.score}, Grade: ${searchResult.grade}`);
} else{
    console.log("Student not found");
}
const anyFailed = student.some(s => s.grade === "F");
console.log(`Is there any student who failed? ${anyFailed}`);
const failedCount = student.filter(s => s.grade === "F").length;
console.log(`Number of failed students: ${failedCount}`);
