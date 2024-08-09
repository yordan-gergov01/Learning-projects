function oscars (input){
    let actorName = input[0];
    let pointsFromAcademy = Number(input[1]);
    let judgesCount = Number(input[2]);


    for(let i = 3; i < input.length; i+=2){
        let judgeName = input[i];
        let judgePoints = Number(input[i + 1]);

        pointsFromAcademy += (judgeName.length * judgePoints) / 2;

        if(pointsFromAcademy > 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointsFromAcademy.toFixed(1)}!`);
            return;
        }


    }

    if(pointsFromAcademy <= 1250.5){
        let pointsNeeded = 1250.5 - pointsFromAcademy;
        console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
    }

}
oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);