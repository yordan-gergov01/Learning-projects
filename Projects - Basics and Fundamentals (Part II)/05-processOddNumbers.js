// function processOddNumbers (array){
//     let filtered = array.filter((x, index) => index % 2 !== 0);
//     let doubled = filtered.map(x => x * 2);
//     let result = doubled.reverse();

//     console.log(result.join(" "));

// }
// processOddNumbers ([10, 15, 20, 25]);

function processOddNumbers (array){
    let filtered = [];

    for(let i = 0; i < array.length; i++){
        if(i % 2 !== 0){
            array[i] *= 2;
            filtered.push(array[i]);
        }
    }
    console.log(filtered.reverse().join(" "));

}
processOddNumbers([10, 15, 20, 25]);