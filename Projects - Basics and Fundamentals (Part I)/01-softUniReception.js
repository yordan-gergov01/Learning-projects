// function softUniReception (input){
//     let employee1 = Number (input[0]);
//     let employee2 = Number (input[1]);
//     let employee3 = Number (input[2]);
//     let studentsCount = Number (input[3]);
//     let efficiency = employee1 + employee2 + employee3;
//     let time = 0;
    
//     while(studentsCount > 0){
//         time++;
//         if(time % 4 !== 0){
//             studentsCount -= efficiency;
//         }
//     }
//     console.log(`Time needed: ${time}h.`);


// }
// softUniReception (['5','6','4','20']);


function softUniReception (input){
    let employee1 = Number(input[0]);
    let employee2 = Number(input[1]);
    let employee3 = Number(input[2]);
    let studentsCount = Number(input[3]);
    let efficiency = employee1 + employee2 + employee3;

    let hour = 0;

    while(studentsCount > 0){
        hour++;
        if(hour % 4 !== 0){
            studentsCount -= efficiency;
        }
    }

    console.log(`Time needed: ${hour}h.`);
}
softUniReception(['5','6','4','20']);