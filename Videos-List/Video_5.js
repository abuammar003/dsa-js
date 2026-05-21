//Video-5: Mastering Arrays.
console.log("Video 5=> Mastering Arrays Part-1");

// Array => Array is a the Collection of elements Which Contains Different Types Of Data, It is Written inside Square Bracket [].          e.g: const arr = [ 10, 20, "Ammar", false ];


// Dynamic Array => An Array Whose Length is Not Defined.



// 1- Storing Values in Array By Prompt (We want to Store 5 Values by Propmt).

// const arr1 = new Array(5);

// for (let i = 0; i < arr1.length; i++ ) {
    
//     arr1[i] = prompt("Enter a Value.");

// }
// console.log(arr1);





// 2- Sum of n Element of Array  (Sum of all Every Elements of Array).

let arr2 = [10, 35, 15, 40, 70];

let sum = 0;

for (let i = 0; i < arr2.length; i++) {

    sum = sum + arr2[i];

}
console.log("The n Sum of the Array:", sum);

 



//3- Finding Maximum Value from Array.

let arr3 = [10, 35, 20, 80, 98, 30];
let max = arr3[0];

for (let i = 0; i < arr3.length; i++) {

    if(max < arr3[i]) {           
        max = arr3[i]
    }
   
}
console.log("Maximum Value:" ,max);





//4- Finding 2nd Maximum Value from Array.

let arr4 = [20, 30, 83, 65, 4];

let firstMax = arr4[0];

let secondMax = arr4[0];


for(let i = 0; i < arr4.length; i++) {

    if(firstMax < arr4[i]) {
        secondMax = firstMax;   //Yahan Par sMax me Max Rakhna Hai, Then Fir Aage ki Condition me Smax Find Karna Hai.
        firstMax = arr4[i]
    } 
    else if(secondMax < arr4[i]) {       
        secondMax = arr4[i]     
    }

}
console.log(`First Max: ${firstMax}, Second Max: ${secondMax}`);
// console.log("Second Max Value:", secondMax);





// 5- Find 2nd Max If Many Max Values in Array.

let arr5 = [20, 30, 18, 50, 50, 50];

let fMax = Math.max(arr5[0], arr5[1]);

let sMax = Math.min(arr5[0], arr5[1]);


for(let i = 0; i < arr5.length; i++) {

    if(fMax < arr5[i]) {
        sMax = fMax;         //Yahan Par sMax me Max Rakhna Hai, Then Fir Aage ki Condition me Smax Find Karna Hai.
        fMax = arr5[i]
    }      
    else if(sMax < arr5[i] && arr5[i] !== fMax) {      //(&& => Condition)- If So Many Max Val. in Array.
        sMax = arr5[i]     
    }

}
console.log(`Many Same Max Values=> First Max: ${fMax}, Second Max: ${sMax}`);
// console.log("Second Max Value:", secondMax);




// 6- 