// function thisNumber (input) {
//     let thisNumber = Number (input[0]);
//     if (thisNumber < 100) {

//     console.log ("Less than 100");
//     }else if (thisNumber >= 100 && thisNumber <= 200){
//         console.log ("Between 100 and 200");
//     }else {
//         console.log ("Greater than 200");
//     }

// }
// thisNumber (["95"]);

function thisNumber (input){
    let thisNumber = Number(input[0]);

    if(thisNumber < 100){
        console.log('Less than 100');
    }else if(thisNumber >= 100 && thisNumber <= 200){
        console.log('Between 100 and 200');
    }else if(thisNumber > 200){
        console.log('Greater tha 200');
    }

}
thisNumber(["95"]);