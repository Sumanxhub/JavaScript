function checkage() {
    let agein = document.getElementById("age").value;
    if (agein>=18) {
        alert("You are Eligible to vote");
    } else {
        alert("Sorry, You are not Eligible to vote yet");
    }
}