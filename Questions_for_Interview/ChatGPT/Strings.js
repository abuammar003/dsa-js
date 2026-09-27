
// Strings Questions For Interview.


// Q1- Reverse a String.
let str1 = "Hello";
let revStr1 = "";

for(let i = str1.length -1; i >= 0 ; i--) {
    revStr1 = revStr1 + str1[i];
}
console.log("Q1-", revStr1);

            // BY USING rev() method.
let revStr1ByMethod = str1.split("").reverse().join("");
console.log("Q1-", revStr1ByMethod);




// Q2- Check String is Pallindrom or NOT.
let str2 = "malayalam";
let revStr2 = "";

for(let i = str2.length -1; i >= 0; i--) {
    revStr2 += str2[i];
}

    if(str2 === revStr2) {
         console.log("Q2-", true)
    } else {
         console.log("Q2-", false)
    }
console.log("Q2-", revStr2);




// Q3- 