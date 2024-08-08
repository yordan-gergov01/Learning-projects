function vacation(people, typeOfGroup, day){

        people = Number(people);
        price = 0;

        if(day === "Friday"){

            switch(typeOfGroup){
                case "Students":
                    price = 8.45;
                    if(people >= 30){
                        price *= 0.85;
                    }
                    break;
                case "Business":
                    price = 10.90;
                    if(people >= 100){
                        price *= 0.9;
                    }
                    break;
                case "Regular":
                    price = 15;
                    if(people >= 10 && people <= 20){
                        price *= 0.95;
                    }
                    break;
            }
        }else if(day === "Saturday"){

            switch(typeOfGroup){
                case "Students":
                    price = 9.80;
                    if(people >= 30){
                        price *= 0.85;
                    }
                    break;
                case "Business":
                    price = 15.60;
                    if(people >= 100){
                        price *= 0.9;
                    }
                    break;
                case "Regular":
                    price = 20;
                    if(people >= 10 && people <= 20){
                        price *= 0.95;
                    }
                    break;
            }
        }else if(day === "Sunday"){
            switch(typeOfGroup){
                case "Students":
                    price = 10.46;
                    if(people >= 30){
                        price *= 0.85;
                    }
                    break;
                case "Business":
                    price = 16;
                    if(people >= 100){
                        price *= 0.9;
                    }
                    break;
                case "Regular":
                    price = 22.50;
                    if(people >= 10 && people <= 20){
                        price *= 0.95;
                    }
                    break;
            }
        }

        let totalPrice = people * price;
        console.log(`Total price: ${totalPrice.toFixed(2)}`);
            
            

}
vacation(30, "Students", "Sunday");