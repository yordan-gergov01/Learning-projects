function skiTrip (input){
    let days = Number(input[0]);
    let spaceType = input[1];
    let rate = input[2];

    let nights = days - 1;
    let price = 0;

    switch(spaceType){
        case "room for one person":
            price = nights * 18.00;
            break;

        case "apartment":
            price = nights * 25.00;

            if(nights < 10){
                price *= 0.7;
            }else if(nights <= 15){
                price *= 0.65;
            }else{
                price *= 0.5;
            }
            break;

        case "president apartment":
            price = nights * 35.00;

            if(nights < 10){
                price *= 0.9;
            }else if(nights <= 15){
                price *= 0.85;
            }else{
                price *= 0.8;
            }
            break;
    }

    switch(rate){
        case "positive":
            price *= 1.25;
            break;

        default:
            price *= 0.9;
            break;
    }
    console.log(price.toFixed(2));

}
skiTrip(["14", "apartment", "positive"]);