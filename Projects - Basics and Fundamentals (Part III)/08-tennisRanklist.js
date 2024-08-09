function tennisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let initialPoints = Number(input[1]);

    let seasonPoints = 0;
    let winCount = 0;

    for (let i = 2; i < tournamentsCount + 2; i++) {
        let result = input[i];

        switch (result) {
            case "W":
                seasonPoints += 2000;
                winCount++;
                break;
            case "F":
                seasonPoints += 1200;
                break;
            case "SF":
                seasonPoints += 720;
                break;

        }
    }
    console.log(`Final points: ${initialPoints + seasonPoints}`);

    let avgPoints = seasonPoints / tournamentsCount;
    console.log(`Average points: ${Math.floor(avgPoints)}`);

    let winPercent = (winCount / tournamentsCount) * 100;
    console.log(`${winPercent.toFixed(2)}%`);

}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);