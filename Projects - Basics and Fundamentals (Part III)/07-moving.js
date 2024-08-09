function moving(input) {
    let freeSpaceWidth = Number(input[0]);
    let freeSpaceLength = Number(input[1]);
    let freeSpaceHeight = Number(input[2]);

    let index = 3;
    let spaceSize = freeSpaceWidth * freeSpaceLength * freeSpaceHeight;
    let command = input[index];

    while (command !== "Done") {
        let boxes = Number(command);
        spaceSize -= boxes;

        if (spaceSize <= 0) {
            console.log(`No more free space! You need ${Math.abs(spaceSize)} Cubic meters more.`);
            return;
        }

        index++;
        command = input[index];

    }

    if(command === "Done"){
    console.log(`${spaceSize} Cubic meters left.`);
    }


}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);