function excursion (input){
    let peopleCount = Number(input[0]);
    let nightCount = Number(input[1]);
    let transportCardsCount = Number(input[2]);
    let museumTicketsCount = Number(input[3]);

    let totalSum = (nightCount * 20) + (transportCardsCount * 1.6) + (museumTicketsCount * 6);
    let totalGroupSum = (totalSum * peopleCount) * 1.25;
    

    console.log(totalGroupSum.toFixed(2));

}
excursion(["20", "14", "30", "6"]);