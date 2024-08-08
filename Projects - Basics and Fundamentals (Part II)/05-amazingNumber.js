function amazingNumber (num){

    let sum = 0;
    let numAsString = num.toString();

    for(let i = 0; i < numAsString.length; i++){
        sum += Number(numAsString[i]);

    }

    let sumAsString = sum.toString();
    let special = false;

    for(let i = 0; i < sumAsString.length; i++){
        if(sumAsString[i] === "9"){
            special = true;
        }

    }

    console.log(`${num} Amazing? ${special ? "True" : "False"}`);

}
amazingNumber (1233);