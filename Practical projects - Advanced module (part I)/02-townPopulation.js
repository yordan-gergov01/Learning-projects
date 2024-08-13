function townPopulation (array){
    let object = {};

    for(let info of array){
        let tokens = info.split('<->');
        let town = tokens[0];
        let population = Number(tokens[1]);
        

        if(!object[town]){
            object[town] = 0;
        }
        object[town] += population
    }
    for(let kvp in object){
        console.log(`${kvp}: ${object[kvp]}`);
    }
}
townPopulation(['Sofia <-> 1200000', 'Montana <-> 20000', 'New Yord <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);