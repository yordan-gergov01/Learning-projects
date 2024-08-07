function equalSumsEvenOddPosition (input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let result = "";

    for(let curNum = startNum; curNum <= endNum; curNum++){
        let curNumString = curNum.toString();

        let evenPosition = 0;
        let oddPosition = 0;

        for(let i = 0; i < curNumString.length; i++){
            let digit = Number(curNumString[i]);

            if(i % 2 === 0){
                evenPosition += digit;
            
            }else{
                oddPosition += digit;
            }

        }

        if(evenPosition === oddPosition){
            result += curNum + " ";

        }
    }
    console.log(result);


}
equalSumsEvenOddPosition(["100000", "100050"]);