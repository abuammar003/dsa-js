//Video-7: Strings.   
console.log("Video 7=> Strings in JS.");
 //Strings => Set/Collection/Sequence of Carecters Written in ''/"" Quotes.    e.g- let name = "Ammar";


let str1 = "Ammar";
let revStr1 = str1.split("").reverse().join();
console.log(revStr1);


// ---------------- Operations/Methods on String -----------------------.
// They do not change Original String, They just make copy/Use these String to perform Operation.


// 1- Length =>  Reaturn the Length of the Charecters in String.
    let string1 = "Hellow World!";
    console.log(string1.length);




// 2- toUpperCase() => Converting String into UpperCase/Capital Letters.
    let string2 = "Uppercase String";
    console.log(string2.toUpperCase());



// 3- toLowerCase() => Converting String into LowerCase/Small Letters.
    let string3 = "Lowercase String";
    console.log(string3.toLowerCase());



// 4- Concatination() =>  Joining multiple Strings togehter into single String.
    let string4 = "Hello";
    let String5 = "World!";
    console.log(string4+ " " + String5);     // (" ") this will Creates the Space between Both Strings.




// 5- trim() => Removes Extra spaces from both sides.   (Not Centers)
    let string6 = " This is Trim String.     ";
    console.log(string6.trim());




// 6- Return Charecter of String by its Index.
    let string7 = "Hello World!";
    // console.log(string7[2]);
    console.log(string7[4], string7[8]);




// 7- CharAt(index) => Return Character at Index. 
    let string8 = "Hello World!";
    console.log(string8.charAt(2));



// 8- CharCodeAt() => Returns the Asky Code of the Character.
    let string9 = "Ammar";
    console.log(string9.charCodeAt(0), string9.charCodeAt(2));

        // Asky Code => Every Character has its special Code called Asky Code.  
        // e.g-  A=65, B=66, a=97, b=67, etc.




// 9- replace(old, new) => Replaces First occurance of the String.
// 10- replacesAll(old, new) => Replaces All Occurances of the String.
    let string10 = "Ammar";
    console.log(string10.replace("A", "H"));
    console.log(string10.replaceAll("m", "n"));




//Remaining------- 
// 11- indexOf(substring) => Return first index of Substring.
// 12- lastIndexOf(substring) => Return Last index of Substring.
// 13- includes(substring) => Checks Substring Exist.
// 14- startsWith(substring) => Checks if String starts with Substring.
// 15- endsWith(substring) => Chacks if String Ends with Substring.





// -------------------------- Problems / Coding Questions. ---------------------------------
console.log("Coding Questions Starts Here =>")

// Q1- Print Each Character in New Line.
    let string11 = "String in JavaScript";
    console.log("Q-1=>", string11)

    for (let i = 0; i < string11.length; i++) {
        console.log(string11[i]);
    }




// Q2- Reverse a String & Each character in New Line.
    let string12 = "String in JavaScript";
    console.log("Q-2=>", string12);

    for(let i = string12.length -1; i >= 0; i--) {
        console.log(string12[i]);
    }




// Q-3- Reverse a String in a Same Line.
    let string13 = "Hello World!";
    let revString13 = string13.split("").reverse().join();
    console.log(revString13);

                    // OR

    let string14 = "Hello World!";
    let revString14 = "";

    for(let i = string14.length -1; i >= 0; i--) {
        revString14 = revString14 + string14[i];      //Just Concating revString14 with each Char of string14.
    }
    console.log(revString14);




// Q-4 Check if String is Pallindrom or Not.