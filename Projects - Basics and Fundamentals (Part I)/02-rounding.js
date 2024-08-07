function rounding (num, presicion){

    num = Number(num);
    presicion = Number(presicion);

    if(presicion > 15){
        presicion = 15;
    }
    num = num.toFixed(presicion);
    console.log(parseFloat(num));
}
rounding(3.1415926535897932384626433832795, 2);