// function repainting (input) {
//     let nylonQty = Number (input[0]);
//     let paintQty = Number (input[1]);
//     let thinnerQty = Number (input[2]);
//     let workHours = Number (input[3]);

//     let extraPaintQty = 0.1 * paintQty;
//     let totalPaintQty = paintQty + extraPaintQty;

//     let totalNylonQty = nylonQty + 2;

//     let materialsPrice = totalPaintQty * 14.50 + totalNylonQty * 1.50 + thinnerQty * 5.00 + 0.40;
//     let workersPayPerHour = 0.3 * materialsPrice;
//     let totalWorkersPay = workHours * workersPayPerHour;
//     console.log (materialsPrice + totalWorkersPay);

// }
// repainting (["5", "10", "10", "1"]);

function repainting (input){
    let nylonQty = Number(input[0]);
    let paintQty = Number(input[1]);
    let thinnerQty = Number(input[2]);
    let workHours = Number(input[3]);

    let extraPaintQty = 0.1 * paintQty;
    let totalPaintQty = paintQty + extraPaintQty;

    let totalNylonQty = (nylonQty + 2);
    let thinnerSum = thinnerQty * 5;

    let materialsPrice = totalNylonQty * 1.50 + totalPaintQty * 14.5 + thinnerSum + 0.40;

    let workersPayPerHour = materialsPrice * 0.3;
    let totalWorkersPay = workersPayPerHour * workHours;

    console.log(materialsPrice + totalWorkersPay);

}
repainting(["10", "11", "4", "8"]);
