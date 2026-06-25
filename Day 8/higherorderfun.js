// These Functions works on Array
//  map : iterate all the values
let nums = [1,2,3,4,5,6,7,8,9];

// nums.map((val , index , arr)=> {
//     return arr[index] = val + 10;
// });

// console.log(nums);


//   Filter : it gives a new array
let res = nums.filter((val , index , arr)=>val%2==0);
console.log(res);

// Reduce : It gives all array to a single Value
let Sum = nums.reduce((acc , val) => acc+val);  // it can be "acc + val , 10" then he start from 10 
console.log(Sum);