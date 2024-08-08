// function oddAndEvenSum (singleNum){
//     let evenSum = 0;
//     let oddSum = 0;
//     let numAsString = singleNum.toString();

//     for(let index = 0; index < numAsString.length; index++){
//         if(numAsString[index] % 2 === 0){
//             evenSum += Number(numAsString[index]);
//         }else if(numAsString[index] % 2 !== 0){
//             oddSum += Number(numAsString[index]);
//         }
//     }
//     console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

// }
// oddAndEvenSum(1000435);

function oddAndEvenSum (singleNum){
    let oddSum = 0;
    let evenSum = 0;
    let numAsString = singleNum.toString();

    for(let i = 0; i < numAsString.length; i++){
        if(numAsString[i] % 2 === 0){
            evenSum += Number(numAsString[i]);
        }else if(numAsString[i] % 2 !== 0){
            oddSum += Number(numAsString[i]);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);