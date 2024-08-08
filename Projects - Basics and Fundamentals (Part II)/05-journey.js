function journey (input){
    let budget = Number (input[0]);
    let season = input[1];

    let price = 0;
    let destination = '';
    let vacationType = '';
    
    if(budget <= 100){
        destination = "Bulgaria";
        switch(season){
            case "summer":
                price = budget * 0.3;
                vacationType = "Camp";
                break;
            case "winter":
                price = budget * 0.7;
                vacationType = "Hotel";
                break;
        }
    }else if (budget <= 1000){
        destination = "Balkans";
        switch(season){
            case "summer":
                price = budget * 0.4;
                vacationType = "Camp";
                break;
            case "winter":
                price = budget * 0.8;
                vacationType = "Hotel";
                break;
        }
    }else if(budget > 1000){
        destination = "Europe";
        price = budget * 0.9;
        vacationType = "Hotel";
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${vacationType} - ${price.toFixed(2)}`);

}
journey (["50", "summer"]);