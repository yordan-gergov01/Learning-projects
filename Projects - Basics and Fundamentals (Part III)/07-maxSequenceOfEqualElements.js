function maxSequenceOfEqualElement (array){
    let newArray = [];
    let secondArray = [];

    for(let index = 0; index < array.length; index++){
        secondArray = [];

        for(let j = index; j < array.length; j++){
            if(array[index] === array[j]){
                secondArray.push(array[j]);
            }else{
            break;
            }
            if(secondArray.length > newArray.length){
                newArray = secondArray;
            }
        }
     
    }
    console.log(newArray.join(" "));


}
maxSequenceOfEqualElement ([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);