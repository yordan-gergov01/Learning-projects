// function arrayRotation (array, rotation){
//     for(let index = 0; index < rotation; index++){
//         let curNum = array.shift();
//         array.push(curNum);
//     }
//     console.log(array.join(" "));

// }
// arrayRotation ([51, 47, 32, 61, 21], 2);


function arrayRotation (array, rotation){
    for(let i = 0; i < rotation; i++){
        let curNum = array.shift();
        array.push(curNum);
    }
    console.log(array.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);