function password (input){
    let username = input[0];
    let password = input[1];
    let index = 2;

    let curPassword = input[index];

   
    while(curPassword !== password){
        index++;
        curPassword = input[index];
       
    }
    console.log(`Welcome ${username}!`);


}
password(["Nakov", "1234", "Pass", "1324", "1234"]);