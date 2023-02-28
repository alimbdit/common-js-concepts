let num1 = 5;
let num2 = 7;

function multiply ( a, b){
    a = 20;
    const result = a*b;
    return result;
}

const product = multiply(num1, num2);
// console.log(product);
// console.log(num1);


let student1 = {name: 'ananto', partner: 'barsha'};
let student2 = {name: 'raj', partner: 'moni'};

function couple(person1, person2){
    person1.name = 'jalil';
    person2.partner = 'pori';
    
}

console.log(student1, student2);
couple(student1, student2);
console.log(student1, student2);