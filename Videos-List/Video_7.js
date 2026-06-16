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




// Q3- Reverse a String in a Same Line.
    console.log("Q-3=> Reverse a String in Same Line.")

    let string13 = "Hello World!";
    let revString13 = string13.split('').reverse().join('');
    console.log("Reverse a String by Reverse Method=>", revString13);

                    // OR

    let string14 = "Hello World!";
    let revString14 = "";

    for(let i = string14.length -1; i >= 0; i--) {
        revString14 = revString14 + string14[i];      //Just Concating revString14 with each Char of string14.
    }
    console.log("Reverse a String by using Loop=>", revString14);




// Q4- Check if String is Pallindrom or Not.
    //Pallindrom => Pallindrom means String is same in characters or reading from both sides Start and End.
        // e.g=>  madam, malayalam => They are same. (if we read them from Start as well as from End they are same).

    console.log("Q-4 => Check if String is Pallindrom or Not.");

    let string15 = "malayalam";             // Malayalam = malayalam => It is a Pallindrom.   in (=) single Equals to.
    // let string15 = "Malayalam";         // Malayalam = malayalam => It is Not a Pallindrom.  in (==)/(===) Equals to. 
                                                
    let revString15 = "";

    for(let i = string15.length -1; i >= 0; i--) {
        revString15 = revString15 + string15[i];
    }
    console.log("Reverse of String15 =>", string15);

    // if(string15 = revString15) {
    if(string15 === revString15) {
        console.log("String15 is a Pallindrom.");
        console.log(`Original Str= ${string15} & Reverse Str= ${revString15}`);
    } else {
        console.log("String15 is Not a Pallindrom");
    }


                // OR      (String's Value Taking From User by using Prompt).
    // console.log("Checking String Pallindrom from Propmt's Value.") 
                
    // let string16 = prompt("Enter a String's Value.") 
                                                
    // let revString16 = "";

    // for(let i = string16.length -1; i >= 0; i--) {
    //     revString16 = revString16 + string16[i];
    // }
    // console.log("Reverse of String16 =>", string16);

    // // if(string15 = revString15) {
    // if(string16 === revString16) {
    //     console.log("String16 is a Pallindrom.");
    //     console.log(`Original Str= ${string16} & Reverse Str= ${revString16}`);
    // } else {
    //     console.log("String16 is Not a Pallindrom");
    //     console.log(`Original Str= ${string16} & Reverse Str= ${revString16}`);

    // }






// Q5- Toggle Each Character.
    // Agar String me Koi Element Capital me hai to use Small me Kardo aur Jo Small me hai use Capital kardo.
        // e.g-     "AbCDeFgh" => "aBcdEfGH";

    // It is Done by using Character Code/Asky Value of the Character.

    console.log("Q5 => Toggle Each Character.");


    let string17 = "HeLLo woRLd";
    // let string17 = this.prompt("Enter a String's Value");           // Taking Value By Prompt.
    console.log(string17);

    let toggle ="";

    for(let i = 0; i < string17.length; i++) {

        let character = string17.charCodeAt(i);

            // Charcter/Asky Code of Capital Letter from A=65 to Z=90; 
        if(character>=65 && character<=90) {       
            toggle = toggle + String.fromCharCode(character + 32);     //Add 32 in curr Asky Code.
        } 
            // Character/Asky Code of Small Letters from a=97 to z=122;
        else if (character>=97 && character<=122) {
            toggle = toggle + String.fromCharCode(character - 32);    //Sub 32 in curr Asky Code.
        }
    
    }
    console.log(toggle);







// Q6- Frequency of each Character.
        // Counting the Appearance of the Character in String.    //e.g-  hello => h=1, e=1. l=2, o=1.

    let String18 = "Hello World";
    