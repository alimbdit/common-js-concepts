function kitchen(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

const rost1 = kitchen();
console.log(rost1());