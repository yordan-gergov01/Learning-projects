function sumFirstLast (input){
    let firstElement = input.shift();
    let lastElement = input.pop();

    let firstNumber = Number(firstElement);
    let lastNumber = Number(lastElement);

    let result = firstNumber + lastNumber;

    return result;
}
console.log(sumFirstLast (['20', '30', '40']));