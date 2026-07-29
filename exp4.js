//Destructuring
const student={
    name:"Dhairya Patel",
    age:21,
    branch: "CSE",
}
//  const name=student.name;
//  const age=student.age;
//  const branch=student.branch;
 const {name,age,branch}=student; //short hand representation of above two lines
 console.log("name=",name,"age=",age,"branch=",branch);