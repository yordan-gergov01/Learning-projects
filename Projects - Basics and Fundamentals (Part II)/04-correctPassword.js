function correctPassword (input) {
    let correctPassword= Number (input[0]);
    if (correctPassword === "s3cr3t!P@ssw0rd") {
        console.log ("Welcome");
    } else {
        console.log ("Wrong password!");
    }

}
correctPassword (["qwerty"]);