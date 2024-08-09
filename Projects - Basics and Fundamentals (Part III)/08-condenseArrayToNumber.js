function condenseArrayToNumer (array){
    let firstNew = [];

    for(let i = 0; i < array.length -1; i++){
        firstNew.push(array[i] + array[i + 1]);
    }
    console.log(firstNew);

}
condenseArrayToNumer([2, 10, 3]);