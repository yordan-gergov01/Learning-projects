function graduation(input) {
    let name = input[0];
    let grade = 1;
    let curGrade = Number(input[grade]);
    let gradesSum = 0;
    let excluded = 0;

    while (grade <= 12) {
        curGrade = Number(input[grade]);

        if (curGrade < 4) {
            excluded++;
            
        
        if (excluded >= 1) {
            console.log(`${name} has been excluded at ${grade} grade`);
            return;
        }
    }

        gradesSum += curGrade;
        grade++;

    }

    let averageGrade = gradesSum / 12;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);


}
graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"]);