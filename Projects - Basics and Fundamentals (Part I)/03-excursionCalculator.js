function excursionCalculator(input) {
    let peopleCount = Number(input[0]);
    let season = input[1];

    let price = 0;

    switch (season) {
        case "spring":
            if (peopleCount <= 5) {
                price = 50;
            } else if (peopleCount > 5) {
                price = 48;
            }
            break;
        case "summer":
            if (peopleCount <= 5) {
                price = 48.5 * 0.85;
            } else if (peopleCount > 5) {
                price = 45 * 0.85;
            }
            break;
        case "autumn":
            if (peopleCount <= 5) {
                price = 60;
            } else if (peopleCount > 5) {
                price = 49.5;
            }
            break;
        case "winter":
            if (peopleCount <= 5) {
                price = 86 * 1.08;
            } else if (peopleCount > 5) {
                price = 85 * 1.08;
            }
            break;
    }
    let totalPrice = peopleCount * price;
    console.log(`${totalPrice.toFixed(2)} leva.`);

}
excursionCalculator(["20",
"winter"]);