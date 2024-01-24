function checkage() {
    let age = document.getElementById("age").value;
    if (age > 17) {
       alert("You are eligible to  vote.");
    } else {
        alert("Sorry , You are not eligible to vote yet.");
    }
}