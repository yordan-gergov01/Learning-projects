// function foreignLanguages (country){

//     if(country === "England"){
//         console.log("English");
//     }else if(country === "USA"){
//         console.log("English");
//     }else if(country === "Spain"){
//         console.log("Spanish");
//     }else if(country === "Argentina"){
//         console.log("Spanish");
//     }else if(country === "Mexico"){
//         console.log("Spanish");
//     }else{
//         console.log("unknown");
//     }

// }
// foreignLanguages("USA");
// foreignLanguages("Germany");


function foreignLanguages (country){
    if(country === 'England' || country === "USA"){
        console.log('English');
    }else if(country === 'Spain' || country === 'Argentina' || country === 'Mexico'){
        console.log('Spanish');
    }else{
        console.log('unknown');
    }

}
foreignLanguages('USA');