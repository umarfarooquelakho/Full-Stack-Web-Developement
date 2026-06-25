let sentence = "I'm Umar Farooque";

console.log(sentence.toUpperCase()); // --> Upper Case
console.log(sentence.charAt(7));   // --> It tells the char at particular index
 
let subsentence = sentence.slice(0,8);   //--> It gives range to print string (Positive & Negative both possible)
console.log(subsentence);

let str = sentence.substring(0,3);   // --> No Negative number allowed 
console.log(str);

console.log(sentence.endsWith("ue"));  // --> It tells a string end with this letter or not 
console.log(sentence.includes("F"));  // --> It tells either the enetered character is present or not
console.log(sentence.indexOf("U"));  // --> It tells the index of particular character
