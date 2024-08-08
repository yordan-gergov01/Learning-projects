function building(input) {

    let floor = Number(input[0]);
    let rooms = Number(input[1]);

    for (let a = floor; a > 0; a--) {

        let curRow = "";

        for (let b = 0; b < rooms; b++) {

            if (a === floor) {
                curRow += `L${a}${b} `;
            } else if (a % 2 === 0) {
                curRow += `O${a}${b} `;
            } else {
                curRow += `A${a}${b} `;
            }

        }
        console.log(curRow);
    }

}
building(["6", "4"]);