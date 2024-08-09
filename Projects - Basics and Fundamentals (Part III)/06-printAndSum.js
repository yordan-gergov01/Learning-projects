function printAndSum (num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);

    let startInterval = num1;
    let endInterval = num2;
    let sum = 0;
    let curNum = "";

    for (let i = startInterval; i <= endInterval; i++){
        sum += i;
        curNum += i + " ";


    }
    console.log(curNum);
    console.log(`Sum: ${sum}`);

}
printAndSum(5, 10);