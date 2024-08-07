function calorieObject(input){
    let finalResult = {};

    for(let index = 0; index < input.length; index += 2){
        let foodName = input[index];
        let calories = Number(input[index + 1]);

        finalResult[foodName] = calories;
    }
    console.log(finalResult);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);