function addAndRemoveElements (array){
    let result = [];

    for(let i = 0; i < array.length; i++){
        let command = array[i];
        if(command === 'add'){
            result.push(i + 1);
        }else if(command === 'remove'){
            result.pop();
        }
    }

    if(result.length === 0){
        console.log('Empty');
    }

    console.log(result.join('\n'));
}
addAndRemoveElements(['add', 'add', 'add', 'add']);
// addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
// addAndRemoveElements(['remove', 'remove', 'remove']);