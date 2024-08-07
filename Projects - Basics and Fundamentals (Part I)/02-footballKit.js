function footbalKit (input){
    let tshirtPrice = Number(input[0]);
    let sumForBall = Number(input[1]);

    let shortsPrice = tshirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.2;
    let boots = (tshirtPrice + shortsPrice) * 2;

    let totalPrice = (tshirtPrice + shortsPrice + socksPrice + boots) * 0.85;

    if(totalPrice >= sumForBall){
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${totalPrice.toFixed(2)} lv.`);
    }else if(totalPrice < sumForBall){
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(sumForBall - totalPrice).toFixed(2)} lv. more.`);
        
    }
    

}
footbalKit(["25", "100"]);