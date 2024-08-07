function numberPyramid(input) {
    let num = Number(input[0]);

    let curNum = 1;
    let result = "";
    let isBigger = false;

    for (let rows = 1; rows <= num; rows++) {
        for (let cols = 1; cols <= rows; cols++) {

            if (curNum > num) {
                isBigger = true;
                break;
            }

            result += curNum + " ";
            curNum++;

        }

        console.log(result);
        result = "";

        if (isBigger === true) {
            break;
        }
    }
}
numberPyramid(["7"]);