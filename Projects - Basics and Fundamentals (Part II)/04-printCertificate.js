function printCertificate (grade, names){
    if (pass(grade)){
        printHeader ();
        printName(names);
        formatGrade(grade);
    }else {
        console.log("Student does not qualify");
    }
}

function printHeader(){
    console.log("~~~-  {@}  -~~~");
    console.log("~- Certificate -~");
    console.log("~~~- ~---~ -~~~");
}

function printName(nameArr){
    console.log(nameArr[0] + " " + nameArr[1]);
}

function formatGrade(grade){
    let formatted = grade.toFixed(2);
    let desc;

    if(grade < 3){
        formatGrade = "2";
        desc = "Fail";
    }else if(grade < 3.5){
        desc = "Poor";
    }else if(grade < 4.5){
        desc = "Good";
    }else if(grade < 5.5){
        desc = "Very good";
    }else{
        desc = "Excellent";
    }

    console.log(`${desc} (${formatted})`);
}

function pass(grade){
    return grade >= 3;
}

printCertificate(5.25, ["John", "Smith"]);