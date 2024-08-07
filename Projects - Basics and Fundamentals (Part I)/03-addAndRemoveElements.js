function addAndRemoveElements (input){
    let outputArr = [];

    for(let index = 0; index < input.length; index++){
        let currentCommand = input[index];

        if(currentCommand === 'add'){
            outputArr.push(index + 1);
        }else if(currentCommand === 'remove'){
            outputArr.pop();
        }
    }

    if(outputArr.length === 0){
        console.log('Empty');
    }else{
        console.log(outputArr.join('\n'));
    }
}
addAndRemoveElements(['add', 'add', 'add', 'add']);