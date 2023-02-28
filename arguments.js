function sum (a, b, c){
    // array like object
    console.log(arguments);

    const args = [...arguments]
    console.log(args);
    const total = a + b + c;
    return total;
}

const numbers = [ 5, 36, 12, 35, 62];

const ttl = sum(4, 5, 6, 7, 9, 15);
// console.log(ttl);