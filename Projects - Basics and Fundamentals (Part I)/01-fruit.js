function fruit (fruitType, weightInGrams, pricePerKilogram){
    let gramsToKilos = weightInGrams / 1000;
    let totalPrice = gramsToKilos * pricePerKilogram;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${gramsToKilos.toFixed(2)} kilograms ${fruitType}.`);
}
fruit('orange', 2500, 1.80);