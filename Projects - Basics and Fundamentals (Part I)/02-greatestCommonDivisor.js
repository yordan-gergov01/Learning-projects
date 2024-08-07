function greatestCommomDivisor (firstNum, secondNum){
    while(firstNum !== secondNum){
        if(firstNum > secondNum){
            firstNum -= secondNum;
        }else{
            secondNum -= firstNum;
        }
    }
    console.log(firstNum);
}
greatestCommomDivisor(15, 5);