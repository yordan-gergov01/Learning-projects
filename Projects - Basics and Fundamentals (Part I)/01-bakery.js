function bakery (input){

    let flourPrice = Number(input[0]);
    let flourKilogram = Number(input[1]);
    let sugarKilogram = Number(input[2]);
    let eggsCartons = Number(input[3]);
    let yeastPacks = Number (input[4]);

    let sugarPrice = flourPrice * 0.75;
    let eggCartonPrice = flourPrice * 1.1;
    let yeastPackPrice = sugarPrice * 0.2;

    let moneyNeeded = (flourPrice * flourKilogram) + (sugarKilogram * sugarPrice) + (eggsCartons * eggCartonPrice) + (yeastPacks * yeastPackPrice);

    console.log(moneyNeeded.toFixed(2));


}
bakery (["50", "10", "3.5", "6", "1"]);