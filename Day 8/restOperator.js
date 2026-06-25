function add(a,...b) {
    let sum = 0;
    for(let i=0; i<b.length; i++) {
        sum = sum + b[i];
    }
    console.log(sum);
}

add(1,2,3,4,5,6,7,8,9);