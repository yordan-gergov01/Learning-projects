function sequence2KPlus1 (input){
    let useNum = Number(input[0]);

    let counter = 1;

    while(counter <= useNum){
        console.log(counter);
        counter = counter * 2 + 1;
    }


}
sequence2KPlus1(["3"]);