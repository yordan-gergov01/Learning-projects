function everest(input) {
    let totalMetersClimbed = 5364;
    let days = 1;
    let index = 0;
    let command = input[index];
    let goalReached = false;

    while (command !== "END" && days <= 5 && !goalReached) {
        let rest = command === "Yes";

        if (rest && days < 5) {
            days++;
        }

        let curMeters = Number(input[index + 1]);
        totalMetersClimbed += curMeters;

        if (totalMetersClimbed >= 8848) {
            goalReached = true;
        }

        index += 2;
        command = input[index];
    }

    if (goalReached) {
        console.log(`Goal reached for ${days} days!`);
    } else {
        console.log("Failed!");
        console.log(`${totalMetersClimbed}`);
    }




}
everest(["Yes",
    "1254",
    "Yes",
    "1402",
    "No",
    "250",
    "Yes",
    "635"])
