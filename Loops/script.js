// Loops are used to execute a piece of code again and again
// for loop

// for (let count = 0; count < 5 ; count++) {
//     console.log("loop worked");
// }




// printing numer

// for (let i = 0 ; i<=10 ; i++) {
//     console.log(i);
// }


//______________________________________________________________________



//while loop

//printing multiple of 5
// let i = 1;
// while (i<=10) {
//     console.log("5 *", i , "=" , 5*i);
//     i++;
// }


//______________________________________________________________________



//do while loop
//It run atleast one time even if condition dosn't match


// let i = 5;
// do {
//     console.log("Loop executed one time");
//     i++;
// } while (i<2);



//printing even number with do while loop

// let i = 0;
// do {
//    if(i%2===0) {
//     console.log(i);
//    }
//    i++;
// } while (i <= 20);


//______________________________________________________________________



//for-of loop (used for string and arrays);
// don't have to worry about initialization, updation, stopping condition

// let name = "JavaScript";
// for ( let i of name) {
//     console.log("i =",i);
// }




//calculating size of string

// let subject = "Mathematics";
// let size = 0;
//     for (let i of subject) {
//         size++;
//     } 
//     console.log("size of" , subject , "=" , size);


//______________________________________________________________________





// for-in loop (used of objects , arrays);


//creating object

// let student = {
//     name: "user21",
//     age: 21,
//     branch: "CSE",
//     cgpa:8.5,
// }
// for (let i in student) {
//     console.log("i =", i);
//     console.log("student[i] =",student[i]);
// }





// let Movie = {
//     title : "MovieTilte",
//     category: "horror",
//     rating: 8.2,
//     relesedYear: 2013,
// }
// for (let key in  Movie) {
//     console.log( "key =", key , "| Movie[key] =" , Movie[key]);
// }



//______________________________________________________________________