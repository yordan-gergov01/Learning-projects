function trekkingMania(input) {
    let climbersGroupsCount = Number(input[0]);

    let totalCount = 0;

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;

    for (let i = 1; i < input.length; i++) {
        let curGroup = Number(input[i]);
        totalCount += Number(input[i]);

        if (curGroup <= 5) {
            group1 += curGroup;
        } else if (curGroup <= 12) {
            group2 += curGroup;
        } else if (curGroup <= 25) {
            group3 += curGroup;
        } else if (curGroup <= 40) {
            group4 += curGroup;
        } else {
            group5 += curGroup;
        }
    }


    let percent1 = (group1 / totalCount) * 100;
    let percent2 = (group2 / totalCount) * 100;
    let percent3 = (group3 / totalCount) * 100;
    let percent4 = (group4 / totalCount) * 100;
    let percent5 = (group5 / totalCount) * 100;

    console.log(`${percent1.toFixed(2)}%`);
    console.log(`${percent2.toFixed(2)}%`);
    console.log(`${percent3.toFixed(2)}%`);
    console.log(`${percent4.toFixed(2)}%`);
    console.log(`${percent5.toFixed(2)}%`);

}
trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);