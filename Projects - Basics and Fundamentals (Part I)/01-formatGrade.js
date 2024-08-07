// function formatGrade (grade){
//     let formatted = grade.toFixed(2);
//     let desc;

//     if(grade < 3){
//        formatted = "2";
//        desc = "Fail";
//     }else if(grade < 3.50){
//         desc = "Poor";
//     }else if(grade < 4.50){
//         desc = "Good";
//     }else if(grade < 5.50){
//         desc = "Very good";
//     }else{
//         desc = "Excellent";
//     }

//     console.log(`${desc} (${formatted})`);
// }
// formatGrade (3.33);


function formatGrade (grade){
    let judge;
    let formatted = grade.toFixed(2);

    if(grade < 3){
        judge = 'Fail';
    }else if(grade < 3.5){
        judge = 'Poor';
    }else if(grade < 4.5){
        judge = 'Good';
    }else if(grade < 5.5){
        judge = 'Very good';
    }else if(grade >= 5.5){
        judge = 'Excellent';
    }

    console.log(`${judge} (${formatted})`);
}
formatGrade(5.49);