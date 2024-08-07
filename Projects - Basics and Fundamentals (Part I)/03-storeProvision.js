function storeProvision(availableStock, deliveredStock) {
    let storedProducts = {};
    
    for(let i = 0; i < availableStock.length; i+=2){
        let product = availableStock[i];
        let quantity = Number(availableStock[i + 1]);
        storedProducts[product] = quantity;        
    }

    for(let j = 0; j < deliveredStock.length; j+=2){
        let product = deliveredStock[j];
        let newQuantity = Number(deliveredStock[j+1]); 
        if(!storedProducts.hasOwnProperty(product)){
            storedProducts[product] = 0;
        }
        storedProducts[product] += newQuantity;
    
    }
    for(let key of Object.keys(storedProducts)){
        console.log(`${key} -> ${storedProducts[key]}`);
    }
}

  storeProvision(['Chips', '5', 'Coca-cola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);


// function storeProvision(availableStock, deliveredStock) {
//     let storedProducts = {};
    
//     // Първи цикъл: за наличния склад
//     for (let i = 0; i < availableStock.length; i += 2) {
//         let product = availableStock[i];
//         let quantity = Number(availableStock[i + 1]);
//         storedProducts[product] = quantity;
//     }

//     // Втори цикъл: за доставените продукти
//     for (let j = 0; j < deliveredStock.length; j += 2) {
//         let product = deliveredStock[j];
//         let newQuantity = Number(deliveredStock[j + 1]);
//         if (!storedProducts.hasOwnProperty(product)) {
//             storedProducts[product] = 0;
//         }
//         storedProducts[product] += newQuantity;
//     }

//     // Конзолен изход
//     for (let key of Object.keys(storedProducts)) {
//         console.log(`${key} -> ${storedProducts[key]}`);
//     }
// }

// // Пример за извикване на функцията
// storeProvision(
//     ['Chips', '5', 'Coca-cola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//     ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
// );