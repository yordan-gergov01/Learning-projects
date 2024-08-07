// function distinctArray (array){
//     for(let index = 0; index < array.length; index++){
//         let currElement = array[index];
//         for(let j = index + 1; j < array.length; j++){
//             let nextElement = array[j]
//             if(currElement === nextElement){
//                 array.splice(j, 1);
//                 j = j - 1;
//             }
//        }
//     }
//     console.log(array.join(" "));

// }
// distinctArray ([7, 8, 9, 7, 2, 3, 4, 1, 2]);



function distinctArray(array){

    for(let i = 0; i < array.length; i++){
        let curElement = array[i];
        for(let k = i + 1; k < array.length; k++){
            let nextElement = array[k];
            if(curElement === nextElement){
                array.splice(k, 1);
            }
        }
    }
    console.log(array);
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
