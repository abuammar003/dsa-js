//Video-1: Master The Basics Logics of JS-> Variables, Operators & Operations on Operators.


//1- Sum of Two (2) Numbers =>
let a = 10;
let b = 20;

console.log(a + b);       //It is Called Addition. 



//2- Relation Between Integer & String => (Both are Data Types)
    //Integer => It is a Number.
    //String => It is a Text Written in ''or"".

let c = 10;
let d = "20";

console.log(c + d);      //It will Returns(1020), It is Called Concatenation. 
    //But if We Do (-, *, /) then it Performs the Same Operations as Integers Not Like +, It's Called Type Coercion. 
console.log(c - d);     //It will Returns(-10), Means Substraction.

//{it's Type will String}. If we Concat Integer & String then Results Type will be String.
    


//3- Sum & Message =>
let e = 20;
let f = 10;
console.log(`The Value After Addition: ${e + f}`);       
//(``)-Backticks are Called Template Literals, In this we can write/print Both String & Values (Variables, Array etc).



//4- Accept & Print the Answer =>
// let age = prompt("Enter Your Age.");
// console.log(age);



//5- Swap Two(2) Variables.
let g = 10;
let h = 20;

// let i = g ;     //here, i = 10, g = 10.
// g = h ;         //g = 2, h = 20
// h = i ;         //h = 10

// console.log(g, h);      //Now, g = 20, h = 10.  (This is Called Swapping);

                //  OR   //   (By Destructuring.)
[g, h] = [h, g];
console.log(g, h)         //Here also, g= 20, h = 10.




//6- Operators (/, %(Mode)).    { Printing & Removing Last Number }.
let j = 4567;

console.log( j / 10);           //It will Divide it & answer is (456.7);
    //Now we Want to remove last Number-(456).
console.log(Math.floor( j / 10));     //Now it will give answer (456) Not in Points.    

    //Now We want to print Only Last Number-(7). 
console.log(j % 10);   //Now it will return Only Last Number. (7)




// Problems =>
// 1-
    let k = 11;
    let l = 22;
    let m = k + l + k++ + l++ + ++k + ++l;
    console.log(m);    //Answer => 103. 

 







// 7- Math Functions =>

    console.log(Math.round(10.6));    //answer => 11 -It wil give Answer in Round Figure.
    
    console.log(Math.ceil(10.1));     //answer => 11 -It will Return the Next number of Given Value.
                                                     //(if given value is like this (10.1, 10.2, 10.9 etc) ).
    
    console.log(Math.floor(10.8));    //answer => 10 -It Will Return The Value Befor Point.                                                 

    console.log(Math.trunc(10.9));    //answer => 10 -It Works Similar to Math.floor(), Removes Decimals.

    console.log(Math.pow(2 , 5));     //answer => 32 -It Works As Multiply 1st Number By 2nd Number of Times.
                                            // Like 2 power/rase to 5 (2^5), in Mathamatics.

    console.log(Math.sqrt(49));       //answer => 7 -It will Return the Square Root of the Value.
                                            // Like Finding Square Root of 10. 
                                   
    console.log(Math.cbrt(125));      //answer => 5 -It will Return the Cube Root of the Value.

    console.log(Math.abs(-15));       //answer => 15 -It will Cinvert Negative Value into Positive.
    
    console.log(Math.max(5, 20, 25, 10));    //answer => 25 -It will Return Maximum Value.

    console.log(Math.min(25, 3, 10, 6));     //answer => 3 -It will Return Minimum Value.

    console.log(Math.floor(Math.random() * 9999) + 1000 );     //answer => Anything Between 1000 - 9999. 
                                                                // ( Means => Value is 4 Digit Code ).

    let n = 86.25689;
    console.log(a.toFixed(2));      //answer => 86.25 -It will Return Only 2 Values after the Point (Decimal).
    
    


// Math Problems => 
    
    // 1- Calculate the Area and parameter o the Rectangle.
            // Fromula => Area of rectangle = Length * Bredth.
                // Parameter of Rectangle =  2 * Length + Bredth.
                
                let length = 5;
                let bredth = 7;

                let area = (length * bredth);
                
                let parameter = 2 * (length + bredth);
                
                console.log(`Area of Rectangle = ${area} & Parameter = ${parameter} `);
                                                        