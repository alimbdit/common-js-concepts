function greeting( callbackFunction , name){
    callbackFunction(name);
}

function morningGreeting(name){
    console.log('good morning', name);
}

function nightGreeting(name){
    console.log('good night', name);
}

greeting(morningGreeting, 'sufiyan');
greeting(nightGreeting, 'Afia');