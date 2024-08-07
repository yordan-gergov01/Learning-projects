function sameNumbers (number){
    let inputNumber = number.toString();
    let sum = 0;
    let digitToCompare = Number(inputNumber[0]);
    let isSame = true;
    
    for(let i = 0; i < inputNumber.length; i++){
        let currentDigit = +inputNumber[i];
        sum += Number(inputNumber[i]);

        if(currentDigit !== digitToCompare){
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);

       
}
sameNumbers(2222222);