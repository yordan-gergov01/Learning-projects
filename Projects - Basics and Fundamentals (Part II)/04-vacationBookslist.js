// function vacationBookList (input) {
//     let totalPages = Number (input[0]);
//     let pagesPerHour = Number (input[1]);
//     let days = Number (input[2]);
//     let hoursNeeded = totalPages / pagesPerHour;
//     let hoursPerDay = hoursNeeded / days;
//     console.log (hoursPerDay);

// }
// vacationBookList (["432", "15", "4"]);


function bookList (input){
    let totalPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let totalTime = totalPages / pagesPerHour;
    let hoursPerDay = totalTime / days;

    console.log(hoursPerDay);

}
bookList(["212", "20", "2"]);