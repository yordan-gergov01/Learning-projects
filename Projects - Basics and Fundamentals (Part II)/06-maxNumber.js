function maxNumber (input){
    let index = 0;
    let curRow = input[index];
    let maxNumber = -999999999999;

    while(curRow !== "Stop"){
        let rowAsNumber = Number(curRow);

        if(rowAsNumber > maxNumber){
            maxNumber = rowAsNumber;

        }
        index++;
        curRow = input[index];


    }
    console.log(maxNumber);


}
maxNumber(["100", "99", "80", "70", "Stop"]);