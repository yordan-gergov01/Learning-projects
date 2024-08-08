function listOfNames(input){
    for(let index = 0; index < input.length; index++){
        input.sort();
        console.log(`${index+1}.${input[index]}`);
    }
}
listOfNames(['John', 'Bob', 'Christina', 'Ema']);