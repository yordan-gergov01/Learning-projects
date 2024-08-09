function minNumber (input){
    let index = 0;
    let curRow = input[index];
    let minNumber = 999999999999;

    while(curRow !== "Stop"){
        let rowAsNumber = Number(curRow);

        if(rowAsNumber < minNumber){
            minNumber = rowAsNumber;

        }
        index++;
        curRow = input[index];


    }
    console.log(minNumber);


}
minNumber(["100", "99", "80", "70", "Stop"]);