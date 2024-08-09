function litresWater (input) {
    let lengthCentimetres = Number (input[0]);
    let widthCentimetres = Number (input[1]);
    let heightCentimetres = Number (input[2]);
    let percent = Number (input[3]);

    let aquariumVolume = lengthCentimetres * widthCentimetres * heightCentimetres;
    let volumeLitres = aquariumVolume / 1000;
    let litresNeeded = volumeLitres * (1 - 0.17);

    console.log (litresNeeded);

}
litresWater (["85", "75", "47", "17"]);