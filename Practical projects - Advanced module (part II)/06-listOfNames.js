function listOfNames (array){
    let sorted = array.sort((a, b) => a.localeCompare(b));
    let number = 0;
    
    for(let name of sorted){
        console.log(`${number+=1}.${name}`);
    }
}
listOfNames(['John', 'Bob', 'Christina', 'Ema']);