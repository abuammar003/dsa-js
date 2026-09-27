
// All Types of JS Questions (String, Array, etc.)

// Q1- Reverse an String.
let str1 = "Hello";
let revStr1ByMethod = str1.split("").reverse().join("");
console.log("Q1-", revStr1ByMethod);

    // BY LOOP
let revStr1ByLoop = "";
for(let i = str1.length -1; i >= 0; i--) {
    revStr1ByLoop += str1[i]
}
console.log("Q1-", revStr1ByLoop);




// Q2- Check String is Palindrom or NOT.
let str2 = "madam";
let revStr2 = "";

for(let i = str2.length -1; i >= 0; i--) {
    revStr2 += str2[i];
}

if(str2 === revStr2) {
    console.log("Q2-", true);
} else {
    console.log("Q2-", false);
};




// Q3- Find the Largest Number in Array.
let Arr1 = [10, 50, 3, 64, 78, 13];
let largestNumArr1 = Arr1[0];

for(let i = 0; i < Arr1.length; i++) {
    if(largestNumArr1 < Arr1[i]) {
        largestNumArr1 = Arr1[i]
    } 
}
console.log("Q3-", largestNumArr1);


// Q4- Find the Smllest Number from the Arry.
let smallestNumArr1 = Arr1[0];

for(let i = 0; i < Arr1.length; i++) {
    if(smallestNumArr1 > Arr1[i]) {
        smallestNumArr1 = Arr1[i]
    }
}
console.log("Q4-", smallestNumArr1);



// Q5- Find the SUM of the Array.
let sumOfArr1 = 0;

for(let i = 0; i < Arr1.length; i++) {
    sumOfArr1 += Arr1[i];
}
console.log("Q5-", sumOfArr1);




// Q6- Count Even and Odd numbers.
let Arr2 = [1, 2, 3, 5, 6, 7, 9, 10];
let evensOfArr2 = 0;
let oddsOfArr2 = 0;

for(let i = 0; i < Arr2.length; i++) {
    if(Arr2[i] % 2 === 0) {
        evensOfArr2 += 1
    } else {
        oddsOfArr2 += 1
    }
}
console.log("Q6- Evens:", evensOfArr2);
console.log("Q6- Odds:", oddsOfArr2);




// Q7- Find Duplicates from the Arry.
let Arr3 = [1, 2, 2, 1, 3, 5, 4, 4];
let frequencyOfArr3 = {}
let DuplicatesOfArr3 = [];

for(let num of Arr3) {
    frequencyOfArr3[num] = (frequencyOfArr3[num] || 0) +1;
}

for (let num of Arr3) {
    if(frequencyOfArr3[num] > 1 && !DuplicatesOfArr3.includes(num)) {
        DuplicatesOfArr3.push(num);
    }
}
console.log("Q7-", DuplicatesOfArr3);




// Q8- Find and Remove Duplicates from the Array.
let Arr4 = [1, 2, 2, 1, 3, 5, 4, 4];
let uniqueOfArr4 = [];

for(let i = 0; i < Arr4.length; i++) {
    if(!uniqueOfArr4.includes(Arr4[i])) {
        uniqueOfArr4.push(Arr4[i]);
    }
}
console.log("Q8-", uniqueOfArr4);




// Q9- Reverse Array without Using reverse().
let Arr5 = [1, 2, 3, 4, 5];
let revOfArr5 = [];

for(let i = Arr5.length -1; i >= 0; i--) {
    revOfArr5.push(Arr5[i]);
}
console.log("Q9-", revOfArr5);




// Q10- Sort n Arry in Ascending Order without uing sort().
let Arr6 = [5, 2, 8, 1, 3];

    //By Sort(). 
let sortArr6 = Arr6.sort((a, b)=> a - b);
console.log("Q10-", sortArr6);


    //By Loop. 
for(let i = 0; i < Arr6.length; i++) {

    for(let j = i +1; j < Arr6.length; j++){

        if(Arr6[i] > Arr6[j]) {
            let temp = Arr6[i];
            Arr6[i] = Arr6[j];
            Arr6[j] = temp
        }

    }

}
console.log("Q10-", Arr6);




// Q11- Find the Second Largest Number.
let Arr7 = [10, 5, 20, 8, 15];
let largestNUmArr7 = Arr7[0];
let secondLargestArr7 = Arr7[0];

for(let i = 0; i < Arr7.length; i++) {
    if(Arr7[i] > largestNUmArr7) {
        largestNUmArr7 = Arr7[i]
    } else if(Arr7[i] > secondLargestArr7 && secondLargestArr7 < largestNUmArr7) {
        secondLargestArr7 = Arr7[i];
    }
}
console.log("Q11-", secondLargestArr7);




// Q12- Count Frequency of each element.
let Arr8 = ["apple", "banana", "apple", "orange", "banana", "apple"];
let frequencyOfArr8 = {};

for(let freq of Arr8) {
    frequencyOfArr8[freq] = (frequencyOfArr8[freq] || 0) +1;
}
console.log("Q12-", frequencyOfArr8);




// Q13- Find the First non-repeting Character.
let Str3 = "aabbcdde";
let frequencyOfStr3 = {};
let firstNonRepeating = '';

for(let i = 0; i < Str3.length; i++) {
    frequencyOfStr3[Str3[i]] = (frequencyOfStr3[Str3[i]] || 0) +1;
}

for(let i = 0; i < Str3.length; i++) {
    if(frequencyOfStr3[Str3[i]] === 1) {
        firstNonRepeating = Str3[i];
        break
    }
}
console.log("Q13-", firstNonRepeating);




// Q14- Check Whether Two Strings are Anagram or NOT.
let Str4I = "silent";
let Str4II = "listen";

let frequencyOfStr4 = {};

if(Str4I.length != Str4II.length) {
    console.log("Q14", false);
} else {

    for(let i = 0; i < Str4I.length; i++) {
        frequencyOfStr4[Str4I[i]] = (frequencyOfStr4[Str4I[i]] || 0) +1;
        
        
        if(!frequencyOfStr4[Str4II[i]]) {
            console.log("Q14", false)
            break
        } 
        frequencyOfStr4[Str4II] --;
        
    }
    
    console.log("Q14", true)
}