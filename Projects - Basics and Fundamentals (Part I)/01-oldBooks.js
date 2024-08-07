function oldBooks(input) {
    let wantedBook = input[0];

    let index = 1;
    let curBook = input[index];
    let booksCount = 0;
    index++;

    while (curBook !== "No More Books") {

        if (curBook === wantedBook) {
            console.log(`You checked ${booksCount} books and found it.`);
            break;
        }

        booksCount++;
        curBook = input[index];
        index++;

        if (curBook === "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${booksCount} books.`);



        }
    }






}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);