// Function Declaration
function Sum(a,b) {
    console.log(a+b);
}
console.log("Ordinary Function : ")
Sum("Umar"," Farooque");

function multiply(a,b) {
    return a*b;       /*this function not return sfter calling ut it can
                        gave output after saving in other variable*/
}

let mul = multiply(5,8);
console.log("Return Keyword usage : ",mul);


// Function Expression

const Sub = function(a,b) {
    return a-b;
}

let Subtract = Sub(10,5);
console.log("Function Expression : ",Subtract);


// Arrow Function
let Div = (a,b) => a/b;

let Division = Div(8,2);
console.log("Arrow Function : ",Division);


let fullName = function(fName , lName = "Farooque") {  //after variable = --> By Default parameter  you can add
    console.log(fName+lName);
}

fullName("Umar ");

// Template litteral ${}

let intro = (name , course , age) => {
    console.log(`Hello...! My Name is ${name} and currently I'm Doing ${course}, I'm ${age} years old`);
}
intro("Umar-Farooque","Web-Development",22);