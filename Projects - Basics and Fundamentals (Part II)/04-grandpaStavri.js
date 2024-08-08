function grandpaStavri(input) {
    let days = Number(input[0]);
    
    let totalLitres = 0;
    let totalDegrees = 0;
    let index = 1;
   

    for(let i = 1; i <= days; i++){
        let litres = Number(input[index]);
        let degrees = Number(input[index + 1]);

        totalLitres += litres;
        totalDegrees += litres * degrees / 100;
    
        index += 2;

    }

    let averageDegrees = (totalDegrees / totalLitres) * 100;

    console.log(`Liter: ${totalLitres.toFixed(2)}`);
    console.log(`Degrees: ${averageDegrees.toFixed(2)}`);

    if(averageDegrees < 38){
        console.log("Not good, you should baking!");
    }else if(averageDegrees >= 38 && averageDegrees <= 42){
        console.log("Super!");
    }else{
        console.log("Dilution with distilled water!");
    }




}
grandpaStavri(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"]);