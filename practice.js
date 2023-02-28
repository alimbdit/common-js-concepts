// console.log(true === 'true');

// if([] == true){
//     console.log('this is true');
// }else{
//     console.log('this is false');
// }


// if(true == 'true'){
//     console.log('this is true');
// }else{
//     console.log('this is false');
// }

// const isNumber = (number) => {
//     if(!isNaN(number)){
//         console.log(number + ' is a number');
//     }else{
//         console.log(number + ' is not a number');
//     }
// }

// isNumber('a');

// let storeFalsyValue = true;
// if(!storeFalsyValue) {
//  console.log(`Nothing to show!`);
// } 
// else {
//  console.log(`You are amazing!`);
// }


const calculator = (num1, num2, calculation) => {
    switch (calculation){
        case 'add':
            console.log('addition ' + num1 + ' + ' + num2  + ' = ' + (num1 + num2)  ); ; 
            break;
        case 'subtract':
            console.log('subtract ' + num1 + ' - ' + num2  + ' = ' + (num1 - num2)  ); ; 
            break;
        case 'multiply':
            console.log('multiply ' + num1 + ' x ' + num2  + ' = ' + (num1 * num2)  ); ; 
            break;
        case 'divide':
            console.log('divide ' + num1 + ' / ' + num2  + ' = ' + (num1  / num2)  ); ; 
            break;
        case 'modulus':
            console.log('modulus ' + num1 + ' % ' + num2  + ' = ' + (num1 % num2)  ); ; 
            break;
        default:
            console.log('Invalid operation');
    }
}

calculator ( 10, 5, 'add');
calculator ( 10, 5, 'subtract');
calculator ( 10, 5, 'multiply');
calculator ( 10, 5, 'divide');
calculator ( 10, 5, 'modulus');
calculator ( 10, 5, 'anything');