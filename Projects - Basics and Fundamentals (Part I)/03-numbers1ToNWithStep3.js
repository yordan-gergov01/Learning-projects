function numbersFrom1ToNWith3 (input){
    let num = Number (input[0]);

    for(i = 1; i <= num; i+=3){
        console.log(i);
    }
}
numbersFrom1ToNWith3 (["10"]);