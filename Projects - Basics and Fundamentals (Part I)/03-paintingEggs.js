function paintingEggs (input){
    let eggsSize = input[0];
    let eggsColor = input[1];
    let batchesCount = Number(input[2]);

    let pricePerBatch = 0;

   if(eggsSize === "Large"){
        switch (eggsColor){
            case "Red":
                pricePerBatch = 16;
                break;
            case "Green":
                pricePerBatch = 12;
                break;
            case "Yellow":
                pricePerBatch = 9;
                break;
        }
    
    }else if(eggsSize === "Medium"){
        switch(eggsColor){
            case "Red":
                pricePerBatch = 13;
                break;
            case "Green":
                pricePerBatch = 9;
                break;
            case "Yellow":
                pricePerBatch = 7;
                break;
        

        }

    }else if(eggsSize === "Small"){
        switch(eggsColor){
            case "Red":
                pricePerBatch = 9;
                break;
            case "Green":
                pricePerBatch = 8;
                break;
            case "Yellow":
                pricePerBatch = 5;
                break;

        }
    }

    let totalPrice = (batchesCount * pricePerBatch) * 0.65;

    console.log(`${totalPrice.toFixed(2)} leva.`);


}
paintingEggs(["Large", "Red", "7"]);