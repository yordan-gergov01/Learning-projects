function cake (input){
    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);

    let index = 2;
    let cakeSize = cakeWidth * cakeLength;
    let command = (input[index]);
    let piecesTaken = 0;

    while(command !== "STOP"){
        let pieces = Number(command);
        piecesTaken += pieces;

        if(piecesTaken >= cakeSize){
            console.log(`No more cake left! You need ${piecesTaken - cakeSize} pieces more.`);
            return;

        }

        index++;
        command = input[index];


    }

    console.log(`${cakeSize - piecesTaken} pieces are left.`);



}
cake(["10", "10", "20", "20", "20", "20", "21"]);