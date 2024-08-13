function calorieObject (array){
    let object = {};

    for(let i = 0; i < array.length; i+=2){
        let food = array[i];
        let calories = array[i + 1];

        object[food] = Number(calories);
    }
    console.log(object);

}
calorieObject(['Yoghurt', '48', 'Rice', '138', 'Apple', '52']);