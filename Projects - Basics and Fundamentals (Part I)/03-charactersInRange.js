function charactersInRange (char1, char2){
let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

let charactersInRangeArray = [];

for(let index = startChar + 1; index < endChar; index++){
    charactersInRangeArray.push(String.fromCharCode(index));
}
console.log(charactersInRangeArray.join(" "));

}
charactersInRange("a", "d");