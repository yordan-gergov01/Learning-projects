function multiplicationTable (input){
    let multiplicator = Number (input[0]);

    for(let num1 = 1; num1 <= 10; num1++){
        console.log (`${num1} * ${multiplicator} = ${num1 * multiplicator}`);

    }

}
multiplicationTable (["5"]);