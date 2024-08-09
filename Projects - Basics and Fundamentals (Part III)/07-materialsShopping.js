function materialsShopping (input){
    let budget = Number (input[0]);
    let videoCardsCount = Number (input[1]);
    let processorCount = Number (input[2]);
    let ramMemoryCount = Number (input[3]);

    let videoCardsPrice = videoCardsCount * 250;
    
    let processorPrice = (0.35 * videoCardsPrice) * processorCount;

    let ramMemoryPrice = (0.1 * videoCardsPrice) * ramMemoryCount;

    let totalPrice = videoCardsPrice + processorPrice + ramMemoryPrice;

    if(videoCardsCount > processorCount){
        let discount = totalPrice * 0.15;
        totalPrice = totalPrice - discount;
    
    }  if(budget >= totalPrice){
        let budgetLeft = budget - totalPrice;
        console.log(`You have ${budgetLeft.toFixed(2)} leva left!`);

    } else{
        let moneyNeeded = totalPrice - budget;
        console.log (`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }

    

}
materialsShopping (["900", "2", "1", "3"]);