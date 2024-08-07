// function negativeOrPositive (input){
//     let result = [];

//     for(let element of input){
//         element = Number(element);
//         if(element < 0){
//             result.unshift(element);
//         }else{
//             result.push(element);
//         }
//     }

//     for(let element of result){
//         console.log(element);
//     }


// }
// negativeOrPositive (["7", "-2", "8", "9"]);


function negativeOrPositive(array){
    let result = [];

    for(let i = 0; i < array.length; i++){
        let curElement = Number(array[i]);
        if(curElement < 0){
            result.unshift(curElement);
        }else if(curElement >= 0){
            result.push(curElement);
        }

    }

    for(let element of result){
        console.log(element);
    }

}
negativeOrPositive(["7", "-2", "8", "9"]);