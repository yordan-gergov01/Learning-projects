function generatePincodes(input) {
    let firstDigitLimit = Number(input[0]);
    let secondDigitLimit = Number(input[1]);
    let thirdDigitLimit = Number(input[2]);

    for (let firstDigit = 2; firstDigit <= firstDigitLimit; firstDigit += 2) {
        for (let secondDigit = 2; secondDigit <= secondDigitLimit; secondDigit++) {
            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(secondDigit); i++) {
                if (secondDigit % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                for (let thirdDigit = 2; thirdDigit <= thirdDigitLimit; thirdDigit += 2) {
                    console.log(`${firstDigit} ${secondDigit} ${thirdDigit}`);
                }
            }
        }
    }
}

generatePincodes(["3", "5", "5"]);

