function checkNumber() {
    var num = document.getElementById("num1").value;

    // check for positive number
    if (num > 0) {
        console.log("Positve number");

    // check for negative number
    } else if (num < 0) {
        console.log("Negative number");

    // check if 0
    } else {
        console.log("Zero");
    }

}

