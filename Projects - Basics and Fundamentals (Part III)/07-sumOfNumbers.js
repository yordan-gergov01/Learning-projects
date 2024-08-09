function sumOfNumbers (input){
    let numAsString = input[0];
    let sum = 0;

        for(let i = 0; i < numAsString.length; i++){

            let singleNum = Number (numAsString[i]);
            sum += singleNum;
        }
        console.log(`The sum of the digits is:${sum}`);


}
sumOfNumbers (["1234"]);