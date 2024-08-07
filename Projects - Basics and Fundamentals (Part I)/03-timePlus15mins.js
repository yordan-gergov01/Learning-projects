function timePlus15Mins (input) {
    let hour = Number (input[0]);
    let min = Number (input[1]);

    let totalTime = hour * 60 + min + 15;

    let newHour = Math.trunc (totalTime / 60);
    let newMin = totalTime % 60;

    if (newMin < 10){
        console.log (`${newHour}:0${newMin}`);
    } else {
        console.log (`${newHour}:${newMin}`);
    }
}
timePlus15Mins (["1", "46"]);