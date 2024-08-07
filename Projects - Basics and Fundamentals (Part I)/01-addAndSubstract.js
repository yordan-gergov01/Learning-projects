// function addAndSubstract(array){

//     let myArraySum = 0;
//     let modifiedArraySum = 0;

//     for(let i = 0; i < array.length; i++){
//         myArraySum += array[i];
//         if(array[i] % 2 === 0){
//             array[i] += i;
//         }else{
//             array[i] -= i;
//         }
//         modifiedArraySum += array[i];

        
//     }
    
//     console.log(array);
//     console.log(myArraySum);
//     console.log(modifiedArraySum);


// }
// addAndSubstract ([5, 15, 23, 56, 35]);

function addAndSubstract (array){
    let modifiedArray = [];
    let modifiedArraySum = 0;
    let myArraySum = 0;

    for(let i = 0; i < array.length; i++){
        myArraySum += array[i];
        if(array[i] % 2 === 0){
            let curNum = array[i] += i;
            modifiedArraySum += curNum;
            modifiedArray.push(curNum);
        }else if(array[i] % 2 !== 0){
            let secNum = array[i] -= i;
            modifiedArraySum += secNum;
            modifiedArray.push(secNum);
        }
    }
    console.log(modifiedArray);
    console.log(myArraySum);
    console.log(modifiedArraySum);
}
addAndSubstract([5, 15, 23, 56, 35]);