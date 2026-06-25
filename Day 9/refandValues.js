let fridge = {
    coldDrink : "1L",
    Snacks : "Chips"
}

// reference type : obj , arrays
//shallow copy
let refridgerator = fridge;
refridgerator.coldDrink = "0.5L"

console.log(fridge);

//value type
let rajuMoney = 1000;
let copyMoney = rajuMoney;

copyMoney = 500;
console.log(rajuMoney);
console.log(copyMoney);