function everyNElement (array, step){
    let newArray = [];

    for(let i = 0; i < array.length; i+=step){
        newArray.push(array[i]);
    }
    return newArray;
}
console.log(everyNElement (['5', '20', '31', '4', '20'], 2));
// everyNElement (['dsa', 'asd', 'test', 'tset'], 2);
// everyNElement (['1', '2', '3', '4', '5'], 6);