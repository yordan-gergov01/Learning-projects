// function addAndSubtract (num1, num2, num3){
//     function add(num1, num2){
//         return num1 + num2;
//     }
//     let subtract = (addResult, num3) => addResult - num3;
//     let result = add(num1, num2);
//     let finalResult = subtract(result, num3);
//     console.log(finalResult);
// }
// addAndSubtract(23, 6, 10);

function addAndSubtract (num1, num2, num3){
    function add(num1, num2){
        return num1 + num2;
    }
    let subtract = (addResult, num3) => addResult - num3;
    let result = add(num1, num2);
    let finalResult = subtract(result, num3);
    console.log(finalResult);
}
addAndSubtract(23, 6, 10);