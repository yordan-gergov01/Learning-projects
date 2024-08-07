function examPreparation(input) {
    let poorGradesCount = Number(input[0]);

    let index = 1;
    let curTask = input[index];
    index++;

    let grade = Number(input[index]);
    index++;


    let curPoorGradeCount = 0;
    let gradeSum = 0;
    let gradeCount = 0;
    let lastTask = "";

    while (curTask !== "Enough") {
        lastTask = curTask;

        if (grade <= 4) {
            curPoorGradeCount++;

        }

        if (curPoorGradeCount === poorGradesCount) {
            console.log(`You need a break, ${curPoorGradeCount} poor grades.`);
            break;
        }

        gradeCount++;
        gradeSum += grade;

        curTask = input[index];
        index++;

        grade = Number(input[index]);
        index++;

    }

    if (curTask === "Enough") {
        let averageGrade = gradeSum / gradeCount;
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradeCount}`);
        console.log(`Last problem: ${lastTask}`);
    }


}
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);