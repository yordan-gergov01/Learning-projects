// function employees (input){
//     let listOfEmployees = {};
//     for(let employee of input){
//         listOfEmployees.name = employee;
//         listOfEmployees.personalNumber = employee.length;
//         console.log(`Name: ${listOfEmployees.name} -- Personal Number: ${listOfEmployees.personalNumber}`);
//     }
// }
// employees(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);


function employees (input){
    let listOfEmployees = {};
    for(let employee of input){
        listOfEmployees.name = employee;
        listOfEmployees.personalNum = employee.length;
        console.log(`Name: ${listOfEmployees.name} -- Personal Number: ${listOfEmployees.personalNum}`);
    }
}
employees(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);