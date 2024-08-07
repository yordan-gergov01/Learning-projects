function vacation(input) {
    let tripMoneyNeeded = Number(input[0]);
    let availableMoney = Number(input[1]);

    let index = 2;
    let typeOfAction = input[index];
    index++;

    let amountType = Number(input[index]);
    index++;

    let days = 0;

    while (tripMoneyNeeded > availableMoney) {

        if (typeOfAction === "spend") {
            availableMoney -= amountType;

            if (availableMoney < 0) {
                availableMoney = 0;
            }
            days++;

        } else if (typeOfAction === "save") {
            availableMoney += amountType;
            days++;
        } else if (days >= 5) {
            console.log("You can't save the money.");
            console.log(`${days}`);
        }

        typeOfAction = input[index];
        index++;

        amountType = Number(input[index]);
        index++;

    }

    if (availableMoney >= tripMoneyNeeded) {
        console.log(`You saved the money for ${days} days.`);
    }


}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);