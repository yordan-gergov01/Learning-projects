function train(train){
    let newTrainWithPassengers = train.shift().split(" ").map(Number);
    let maxCapacity = Number(train.shift());
    for(let command of train){
        let curCommand = command.split(" ");
        if (curCommand[0] === "Add"){
            newTrainWithPassengers.push(Number(curCommand[1]));
        }else{
            for(let index = 0; index < newTrainWithPassengers.length; index++){
                if(newTrainWithPassengers[index] + Number(curCommand[0]) <= maxCapacity){
                    newTrainWithPassengers[index] += Number(curCommand[0]);
                    break;
                }
            }
        }
    }
    console.log(newTrainWithPassengers.join(" "));


}
train (["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);

