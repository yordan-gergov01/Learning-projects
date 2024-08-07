function stringLength (str1, str2, str3){
    let sumOfLength = (str1.length) + (str2.length) + (str3.length);
    let average = sumOfLength / 3;
    console.log(sumOfLength);
    console.log(Math.floor(average));
    
}
stringLength('chocolate', 'ice cream', 'cake');