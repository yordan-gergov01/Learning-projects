// function cityInfo (city){
//     let props = Object.keys(city);

//     for(let prop of props){
//         console.log(`${prop} -> ${city[prop]}`);
//     }
// }
// cityInfo ({name: "Sofia", area: 492, population: 1238438, country: "Bulgaria", postCode: "1000"});

function cityInfo (city){
    let keys = Object.keys(city);

    for(let key of keys){
        console.log(`${key} -> ${city[key]}`);
    }
}
cityInfo({name: "Sofia", area: 492, population: 1238438, country: "Bulgaria", postCode: "1000"});
