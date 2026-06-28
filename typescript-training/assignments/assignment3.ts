// arrays concept

let name : string[] = ["Suresh", "Mahesh", "Naresh"];
let Marks : number[] = [75,80,82];

//add 10marks to each student
 console.log("Updated Marks:");
let newMarks : number[] = [];
for (let i:number = 0; i<Marks.length; i++){
    newMarks[i] = Marks[i] + 10;
    console.log(`${name[i]}: ${newMarks[i]}`);
}
    //average of all marks of all students
    let totalMarks : number = 0;
    for (let j:number = 0; j<newMarks.length; j++){
        totalMarks = totalMarks + newMarks[j];
    }
    let averageMarks : number = totalMarks / newMarks.length;
    console.log(`Average marks: ${averageMarks}`);