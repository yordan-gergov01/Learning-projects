function coins(input) {
    let returnedMoney = Number(input[0]);

    let returnedInCoins = Math.round(returnedMoney * 100);

    let coins = 0;

    while (returnedInCoins > 0) {
        if (returnedInCoins >= 200) {
            returnedInCoins -= 200;

        } else if (returnedInCoins >= 100) {
            returnedInCoins -= 100;

        } else if (returnedInCoins >= 50) {
            returnedInCoins -= 50;

        } else if (returnedInCoins >= 20) {
            returnedInCoins -= 20;

        } else if (returnedInCoins >= 10) {
            returnedInCoins -= 10;

        } else if (returnedInCoins >= 5) {
            returnedInCoins -= 5;

        } else if (returnedInCoins >= 2) {
            returnedInCoins -= 2;
        } else if(returnedInCoins >= 1){
            returnedInCoins -= 1;
        }

        coins++;

    }

    console.log(coins);

}
coins(["1.23"]);