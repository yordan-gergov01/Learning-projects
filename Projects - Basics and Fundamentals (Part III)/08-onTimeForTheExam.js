function onTimeForTheExam (input){
    let examHour = Number (input[0]);
    let examMinute = Number (input[1]);
    let arriveHour = Number (input[2]);
    let arriveMinute = Number (input[3]);

    let examTime = examHour * 60 + examMinute;
    let arriveTime = arriveHour * 60 + arriveMinute;
    let differenceTime = Math.abs(examTime - arriveTime);

    let differenceHour = Math.floor (differenceTime / 60);
    let differenceMin = differenceTime % 60;

    if(examTime === arriveTime){
        console.log("On time");
    }else if(examTime < arriveTime){
        console.log("Late");

        if(differenceTime < 60){
            console.log(`${differenceTime} minutes after the start`);
        }else{
            if(differenceMin < 10){
                console.log(`${differenceHour}:0${differenceMin} hours after the start`);
            }else{
                console.log(`${differenceHour}:${differenceMin} hours after the start`);
            }
        }
    }else{
        if(differenceTime <= 30){
            console.log("On time");
            console.log(`${differenceTime} minutes before the start`);
        }else{
            console.log("Early");

            if(differenceTime < 60){
                console.log(`${differenceTime} minutes be the start`);
            }else{
                if(differenceMin < 10){
                    console.log(`${differenceHour}:0${differenceMin} hours before the start`);
                }else{
                    console.log(`${differenceHour}:${differenceMin} hours before the start`);
                }
            }
        }
    }



}
onTimeForTheExam (["9", "30", "9", "50"]);