// function basketballEquipment (input) {
//     let equipment = Number(input[0]);

//     let basketShoes = equipment * 0.6;
//     let basketEquip = basketShoes * 0.8;
//     let basketBall = basketEquip / 4;
//     let basketballAccessories = basketBall / 5;

//     let equipmentPrice = equipment + basketShoes + basketEquip + basketBall + basketballAccessories;

//     console.log (equipmentPrice);

// }
// basketballEquipment (["365"]);

function basketballEquipment(input){
    let equipment = Number(input[0]);

    let basketShoes = equipment * 0.6;
    let basketEquip = basketShoes * 0.8;
    let basketBall = basketEquip / 4;
    let basketballAccessories = basketBall / 5;

    let equipmentPrice = equipment + basketBall + basketShoes + basketEquip + basketballAccessories;

    console.log(equipmentPrice);

}basketballEquipment(["365"]);