function easterGuests (input) {
    let guestsCount = Number(input[0]);
    let budget = Number(input[1]);

    let carobCountNeeded = Math.ceil(guestsCount / 3);
    let eggsCountNeeded = guestsCount * 2;

    let carobsPrice = carobCountNeeded * 4;
    let eggsPrice = eggsCountNeeded * 0.45;

    let totalPrice = carobsPrice + eggsPrice;

    if(budget > totalPrice){
        let moneyLeft = budget - totalPrice;
        console.log(`Lyubo bought ${carobCountNeeded} Easter bread and ${eggsCountNeeded} eggs.`);
        console.log(`He has ${moneyLeft.toFixed(2)} lv. left.`);
    }else if(totalPrice > budget){
        let moneyNeeded = totalPrice - budget;
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${moneyNeeded.toFixed(2)} lv. more.`);
    }


}
easterGuests (["10", "35"]);