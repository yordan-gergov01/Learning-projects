function sortingNumbers (array){
    array = array.sort((a, b) => a - b)
    let newArray = [];

    while(array.length > 0){
        let smallestNum = array.shift();
        newArray.push(smallestNum);
        let biggerNum = array.pop();
        newArray.push(biggerNum);
    }
    return newArray;

}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));