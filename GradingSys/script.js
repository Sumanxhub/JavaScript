let grade;
function result(score) {
    if (score>=90 && score<=100) {
        grade = ("A");
    } else if (score>=70 && score<=89) {
        grade = ("B");
    } else if (score>=50 && score<=69) {
        grade = ("C");
    } else if (score>=30 && score<=49) {
        grade = ("D");
    } else if (score>=0 && score<=29)  {
        grade = ("F");
    }
};

let english = result(68);
    english = console.log("English :", grade);
let hindi = result(78);
    hindi =  console.log("Hindi :", grade);
let science = result(92);
    science = console.log("Science :", grade);
let math = result(30);
    math = console.log("Math :", grade);
let drawing = result(42);
    drawing = console.log("Drawing :", grade);
