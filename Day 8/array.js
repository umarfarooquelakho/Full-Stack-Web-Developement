// Create
let arr = ["Umar" , "Farooque" , 1000 , "Lakho"];
console.log(arr[3])

// Update
arr[2] = "Lakho";
arr[3] = "Engineer";

console.log(arr);

// Delete
delete arr[3];
console.log(arr);

// Joining B/w
let str = arr.join("*");
console.log(arr);
console.log(str);

// Read By Loop
for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

// Adding at the end
arr.push(90);
console.log(arr);

// Delete from end
arr.pop();
console.log(arr);

// unshift : adds at the starting point
arr.unshift("Engr.");
console.log(arr);

// shift : Delete from starting point
arr.shift();
arr.pop();
console.log(arr);

