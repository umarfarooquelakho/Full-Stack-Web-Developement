let obj = {
    name : "Umar Farooque",
    rollno : "24SW057",
    accountBalance : 10000,

    get balance() {
        console.log(this.accountBalance);
    },

    set updateBalance(value){
        this.accountBalance = value;
    }
}

obj.balance;
obj.updateBalance=50000;
obj.balance