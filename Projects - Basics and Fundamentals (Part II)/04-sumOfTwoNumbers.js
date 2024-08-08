function sumOfTwoNumbers(input) {
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNum = Number(input[2]);

    let combinationCount = 0;
    let isFound = false;

    for (let x = startInterval; x <= endInterval; x++) {

        for (let y = startInterval; y <= endInterval; y++) {
            combinationCount++;

            if (x + y === magicNum) {
                console.log(`Combination N:${combinationCount} (${x} + ${y} = ${magicNum})`);
                isFound = true;
                break;
            }


        }
        if (isFound) {
            break;
        }

    }

    if (isFound === false) {
        console.log(`${combinationCount} combinations - neither equals ${magicNum}`);
    }


}
sumOfTwoNumbers(["1", "10", "5"]);