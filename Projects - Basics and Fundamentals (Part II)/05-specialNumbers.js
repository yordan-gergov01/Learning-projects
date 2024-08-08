function specialNumbers (input){
    let num = Number(input[0]);

    let result = "";

    for(let curNum = 1111; curNum <= 9999; curNum++){
        let curNumString = curNum.toString();
        isSpecial = true;

        for(let i = 0; i < curNumString.length; i++){
            let digit = Number(curNumString[i]);


            if(num % digit !== 0){
                isSpecial = false;
                break;
            }
        }

        if(isSpecial === true){
            result += curNum + " ";
        }
    }

    console.log(result);

}
specialNumbers(["3"]);