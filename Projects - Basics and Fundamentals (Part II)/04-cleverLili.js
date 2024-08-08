function cleverLily (input){
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let PricePerToy = Number(input[2]);

    let moneySaved = 0;
    let moneyGiven = 10;

    for(let curBirthday = 1; curBirthday <= age; curBirthday++){

        if(curBirthday % 2 !== 0){
            moneySaved += PricePerToy;
        }else{
            moneySaved += moneyGiven - 1;
            moneyGiven += 10;
        }

    }

    if(moneySaved >= washingMachinePrice){
        let moneyLeft = moneySaved - washingMachinePrice;
        console.log (`Yes! ${moneyLeft.toFixed(2)}`);
    } else{
        let moneyNeeded = washingMachinePrice - moneySaved;
        console.log (`No! ${moneyNeeded.toFixed(2)}`);
    }



}
cleverLily (["10", "170.00", "6"]);