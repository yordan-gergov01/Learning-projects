function ticketSorter (tickets, sorting){
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;

        }
    }
    let result = [];

    tickets.map((el)=>{
        let [desination, price, status] = el.split('|');
        result.push(new Ticket(desination, price, status));
    });

    return result.sort((a,b)=>{
        if(typeof a[sorting] === 'number'){
            return a[sorting] - b[sorting];
        }else{
            return a[sorting].localeCompare(b[sorting]);
        }
    });


}
console.log(ticketSorter(['Philadelphia|94.20|available', 
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'desination');
);