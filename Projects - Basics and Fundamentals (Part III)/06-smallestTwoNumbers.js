function smallestTwoNumbers (nums){
    return nums.sort((a, b) => a - b).slice(0, 2).join(" ");


}
console.log(smallestTwoNumbers([30, 15, 50, 5]));