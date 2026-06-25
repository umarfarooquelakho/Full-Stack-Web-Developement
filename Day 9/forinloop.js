let student = {
    name : "Umar Farooque",
    course : "FSD",
    status : "Pass",
    Fees : "300000",
}

// for-in loop is used to iterate over object

for(let value in student) {
    // console.log(value);                      // --> it gives only left side keys of the object
    console.log(value + ":" + student[value]); // --> It Gives the right side actual value of the objects.
}


console.log(Object.keys(student));   // --> It gives all left side keys present in an Object.
console.log(Object.values(student)); // --> It gives all right side values present in an object.
console.log(Object.entries(student)); // --> It Print both left and right values of an object.