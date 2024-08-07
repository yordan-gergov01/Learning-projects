function sumNumbers (input){
    let number = Number(input[0]);
    let sum = 0;
    let index = 1;
    let curNum = Number(input[index]);

    while(sum !== number){
        sum += curNum;
        index++;
        curNum = Number(input[index]);
        
    }
    console.log(sum);
}
sumNumbers(["100", "10", "20", "30", "40"]);