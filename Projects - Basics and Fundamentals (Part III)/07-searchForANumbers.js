function searchNumbers (array, input){
    let numberToTakeFromArr = input[0];
    let deleteNumberFromArr = input[1];
    let searchedNumber = input[2];

    let myNewArr = array.splice(0, numberToTakeFromArr);
    myNewArr = myNewArr.splice(deleteNumberFromArr);
    let count = 0;
    for(let index = 0; index < myNewArr.length; index++){
        if(myNewArr[index] === searchedNumber){
            count++;
        }
    }
    console.log(`Number ${searchedNumber} occurs ${count} times.`);

}
searchNumbers ([5, 2, 3, 4, 1, 6], [5, 2, 3]);