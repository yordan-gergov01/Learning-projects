function reverseInPlace (arr){
    for(let i = 0; i < arr.length / 2; i++){
        let k = arr.length - 1 - i;
        let third = arr[i];
        arr[i] = arr[k];
        arr[k] = third;
    }

    console.log(arr.join(" "));

}
reverseInPlace (["a", "b", "c", "d", "e"]);