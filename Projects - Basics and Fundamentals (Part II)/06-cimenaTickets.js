function cinemaTickets (input){
    let student = 0;
    let standard = 0;
    let kid = 0;

    let index = 0;
    let command = input[index];
    index++;

    while(command !== "Finish"){
        let movieName = command;
        let totalSeats = Number(input[index]);
        index++;

        let command1 = input[index];
        index++;

        let seatsTaken = 0;

        while(command1 !== "End"){
            let ticketType = command1;

            if(ticketType === "student"){
                student++;
            }else if(ticketType === "standard"){
               standard++;
            }else if(ticketType === "kid"){
                kid++;
            }

            seatsTaken++;

            if(seatsTaken === totalSeats){
                break;
            }


            command1 = input[index];
            index++;
        }

        let percentFull = (seatsTaken / totalSeats) * 100;
        console.log(`${movieName} - ${percentFull.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }

    let totalTickets = student + standard + kid;
    console.log(`Total tickets: ${totalTickets}`);

    let studentPercent = (student / totalTickets) * 100;
    let standardPercent = (standard / totalTickets) * 100;
    let kidPercent = (kid / totalTickets) * 100;

    console.log(`${studentPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidPercent.toFixed(2)}% kids tickets.`)


}
cinemaTickets(["Taxi","10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);