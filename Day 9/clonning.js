/*
let obj = {
    name : "Umar",
    age : 21,
    salary : "1.5L"
}
console.log(obj);


// SHallow Clonning
let copyObj = obj;
copyObj.salary = "1L";

console.log(obj);
console.log(copyObj);
*/

let obj1 = {
    name  : "I Phone",
    price : 1000,
    intro : function() {
        console.log(`${this.name} = ${this.price}`);
    },
    detail : {
        model : 14,
        store : "Hyderabad"
    }
}
/*
// Spread OPerator   or   Destructuring Not works on nested
let copyObj1 = {...obj1};
copyObj1.name = "Samsung";

console.log(obj1);
console.log(copyObj1);
copyObj1.intro();

copyObj1.detail.model = 15;
console.log(obj1); */

/*
//  Object assign  make copy but do not make deep copy (Shallow Copy)
let copyObj2 = Object.assign(obj1);
copyObj2.name= "Infinix";
console.log(obj1); 
*/

/*
// Stringyfy : Functions will be ignored
let copyObj3 = JSON.parse(JSON.stringify(obj1));
console.log(obj1);

copyObj3.name = "Vivo";
console.log(obj1);
console.log(copyObj3); 
*/


//  Perfect DeepClone 
let copyObj = lodash.cloneDeep(obj1);
copyObj.name = "Motorolla";

console.log(copyObj);
console.log(obj1);
