// function schoolMaterials (input) {
//     let packageOfPens = Number (input[0]);
//         let packageOfMarkers = Number (input[1]);
//         let cleanerPreparation = Number (input[2]);
//         let Discount = Number (input[3]);

//         let materialsPriceSum = packageOfPens * 5.80 + packageOfMarkers * 7.20 + cleanerPreparation * 1.20;
//         let totalPrice = materialsPriceSum - (materialsPriceSum * 0.13);
//         console.log (totalPrice);

// }
// schoolMaterials (["4", "2", "5", "13"]);


function schoolMaterials (input){
    let packageOfPens = Number(input[0]);
    let packageOfMarkers = Number(input[1]);
    let cleanerPreparation = Number(input[2]);
    let Discount = Number(input[3]);

    let materialsPriceSum = (packageOfPens * 5.80) + (packageOfMarkers * 7.20) + (cleanerPreparation * 1.20);

    let totalPrice = materialsPriceSum - (materialsPriceSum * 0.25);

    console.log(totalPrice);

}
schoolMaterials(["2", "3", "4", "25"]);