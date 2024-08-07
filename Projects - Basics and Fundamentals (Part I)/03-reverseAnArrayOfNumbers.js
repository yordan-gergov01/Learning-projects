// function reverseAnArrayOfNumbers (n, arr){
//     let slice = [];

//     for(let i = 0; i < n; i++){
//         slice.push(arr[i]);
//     }

//     let result = "";
//     for(let i = slice.length - 1; i >= 0; i--){
//         result += slice[i];
//         result += " ";
//     }

//     console.log(result);


// }
// reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);


function reverseAnArrayOfNumbers (n, array){
    let result = [];

    for(let i = 0; i < n; i++){
        result.push(array[i]);
    }

    console.log(result.reverse().join(' '));

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);