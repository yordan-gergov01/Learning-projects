function accountBalance (input){

    let totalSum = 0;
    let index = 0;
    let curRow = input[index];

    while(curRow !== "NoMoreMoney"){
        let rowAsNumber = Number(curRow);

        if(curRow < 0){
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${rowAsNumber.toFixed(2)}`);
        totalSum += rowAsNumber;
        index++;
        curRow = input[index];

    }
    console.log(`Total: ${totalSum.toFixed(2)}`);




}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);