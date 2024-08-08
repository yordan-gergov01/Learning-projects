function godzillaVsKong (input) {
    let budget = Number (input[0]);
    let actorCount = Number (input[1]);
    let priceCostumePerActor = Number (input[2]);

    let decorPrice = 0.1 * budget;

    let totalCostumePrice = actorCount * priceCostumePerActor;

    if (actorCount > 150) {
        totalCostumePrice = totalCostumePrice * 0.9;
    }
    
    let totalExpenses = decorPrice + totalCostumePrice;

    if (budget >= totalExpenses) {
        let moneyLeft = budget - totalExpenses;
        console.log ("Action!");
        console.log (`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);

    } else {
        let moneyNeeded = totalExpenses - budget;
        console.log ("Not enough money!");
        console.log (`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }



}
godzillaVsKong (["20000", "120", "55.5"]);