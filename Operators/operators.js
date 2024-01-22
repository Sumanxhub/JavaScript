// Arithmatic Operators [ + - * / % **] 


let a = 4;
let b = 2;
console.log("a =", a);
console.log("b =", b);
console.log("Addition", a+b);
console.log("difference", a-b);
console.log("Multiplication", a*b);
console.log("Division", a/b);
console.log("Modulus", a%b);       //modulus (remainders)
console.log("Exponential", a**b);      // exponential (2^4)





//Unary Operator  [++  --]
//increment
let c = 5 ,d = 7;
console.log("c =",c);
console.log("d =",d);
console.log("++c =", ++c);   //preIncrement   -   (+1 in c then execute)   = 6   
console.log("d++ =", d++);   //postIncrement  -   (exucute then +1 in d)   = 7
// now c = 6  and  d = 8
console.log("--c =", --c);   //preDecrement   -   (-1 in c then execute)   = 5 
console.log("d-- =", d--);   //postDecrement  -   (exucute then -1 in d)   = 8





//Assignment Operator [ =  +=  -=   *=  %=  **= ]

let m = 6;
console.log("m = ", m);
console.log("m+=2", m+=2);    // m = m + 2      8
//now value of m = 8

console.log("m-=3", m-=3);    // m = m - 3      5
//now value of m = 5

console.log("m*=2", m*=2);    // m = m * 2      10
//now value of m = 10

console.log("m%=2", m%=2);    // m = m % 2      0
//now value of m = 0


let n = 4;
console.log("n = ",n);
console.log("n/=2", n/=2);    // n = n / 2      2
//now value of n = 2

console.log("n**=2", n**=2);   // n = n ** 2     4
//now value of n = 4




//comparison operators [ < >  <= >=  ==  ===  !=  !==  ]
// returns boolean by default
let o = 5 , p = 8;
let j = " 8 ";

console.log("o =", o , "p ="  , p  , "j =" ,j);
console.log("o<p", o<p);
console.log("o>p",o>p);
console.log("o<=p",o<=p);
console.log("o>=p",o>=p);
console.log("o!=p",o!=p);

console.log("p!=j",p!=j);     //doesn't check data type  
console.log("p==j",p==j);     //doesn't check data type  
console.log("p===j",p===j);    //check data type  
console.log("p!==j",p!==j);    //check data type  



//Logical Operator [ && ||  !]

let i = 4 , l = 2;

console.log("i =", i, "l =",l);
console.log("i>l && i==l", i>l && i==l);  //and    If both are true it will count
console.log("i>l || i==l", i>l || i==l);  //or     If one of them are true it will count
console.log("i>l && i!=l", i>l && i!=l);  //and    If both are true it will count
console.log("!(i>l)", !(i>l));  //NOT  reverse the result 
