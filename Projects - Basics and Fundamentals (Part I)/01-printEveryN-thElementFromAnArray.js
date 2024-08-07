function printEveryNthElementFromAnArray (array, step){
    let resultArr = [];
    for(let index = 0; index < array.length; index += step){
        resultArr.push(array[index]);
    }
    return resultArr;
}
printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2);