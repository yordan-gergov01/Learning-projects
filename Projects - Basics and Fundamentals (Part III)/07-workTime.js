function workTime (input){
    let hour = Number (input[0]);
    let weekDay = input[1];

    if (hour >= 10 && hour < 18){
        switch (weekDay){
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open");
            break;
            default:
            console.log ("closed");
        }
    } else if (weekDay === "Sunday" || hour < 10 || hour > 18){
        console.log ("closed");
    }

}
workTime (["19", "Friday"]);