function cookingByNumbers (number, operation1, operation2, operation3, operation4, operation5){
    let inputNumber = Number(number);
    let arrOfCommands = [operation1, operation2, operation3, operation4, operation5];

    for(let i = 0; i < arrOfCommands.length; i++){
        currentOperation = arrOfCommands[i];

        if(currentOperation === 'chop'){
            inputNumber /= 2;
        }else if(currentOperation === 'dice'){
            inputNumber = Math.sqrt(inputNumber);
        }else if(currentOperation === 'spice'){
            inputNumber += 1;
        }else if(currentOperation === 'bake'){
            inputNumber *= 3;
        }else if(currentOperation === 'fillet'){
            inputNumber *= 0.8;
        }
        console.log(inputNumber);
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');