function float (a, b, c){
    let sum = a + b + c;
    let sumAsString = sum.toString;
    let type = "Integer";

    for(let i = 0; i < sumAsString.length; i++){
        if(sumAsString[i] === "."){
            type = "Float";
        }
    }

    console.log(`${sum} - ${type}`);


}
float(1, 2, 3);