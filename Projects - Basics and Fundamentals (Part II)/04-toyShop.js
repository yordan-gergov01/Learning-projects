function toyShop (input) {
    let tripPrice = Number (input[0]);
    let puzzles = Number (input[1]);
    let dolls = Number (input[2]);
    let bears = Number (input[3]);
    let minions = Number (input[4]);
    let trucks = Number (input[5]);

    let moneyEarned = (puzzles * 2.60) + (dolls * 3) + (bears * 4.10) + (minions * 8.20) + (trucks * 2);
    let totalToyCount = puzzles + dolls + bears + minions + trucks;

    if (totalToyCount >= 50) {
        let discount = 0.25 * moneyEarned;
        moneyEarned = moneyEarned - discount;
    }

    let rentMoney = 0.1 * moneyEarned;
    moneyEarned = moneyEarned - rentMoney;

    if (moneyEarned >= tripPrice) {
        let moneyLeft = moneyEarned - tripPrice;
        console.log (`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    }else {
        let moneyNeeded = tripPrice - moneyEarned;
        console.log (`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);

}
}
toyShop (["40.8","20","25","30","50","10"]);