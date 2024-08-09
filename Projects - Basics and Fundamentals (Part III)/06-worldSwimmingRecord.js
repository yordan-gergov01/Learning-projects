function worldSwimmingRecord (input) {

    let recordInSeconds = Number (input[0]);
    let distanceInMetres = Number (input[1]);
    let timeInSecondsPerMeter = Number (input[2]);

    let resistanceRounds = Math.floor(distanceInMetres / 15) * 12.5;

    let totalTime = (distanceInMetres * timeInSecondsPerMeter) + resistanceRounds;


    if(totalTime < recordInSeconds){
        console.log (`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);

    }else {
        let secondsSlower = totalTime - recordInSeconds;
        console.log (`No, he failed! He was ${secondsSlower.toFixed(2)} seconds slower.`);

    }

}
worldSwimmingRecord (["10464", "1500", "20"]);