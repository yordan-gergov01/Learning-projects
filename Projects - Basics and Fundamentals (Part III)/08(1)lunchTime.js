function lunchTime (input) {
    let movieName = (input[0]);
    let episodeDuration = Number (input[1]);
    let restDuration = Number (input[2]);

    let lunchDuration = restDuration / 8;

    let relaxationTime = restDuration / 4;

    let timeLeft = restDuration - lunchDuration - relaxationTime;

    if(timeLeft >= episodeDuration){
        let luchTimeLeft = timeLeft - episodeDuration;
        console.log (`You have enough time to watch ${movieName} and left with ${Math.ceil(luchTimeLeft)} minutes free time.`);
    } else{
        let lunchTimeNeeded = episodeDuration - timeLeft;
        console.log (`You don't have enough time to watch ${movieName}, you need ${Math.ceil(lunchTimeNeeded)} more minutes.`);
    }

}
lunchTime (["Game of Thrones", "60", "96"]);