//Video-6: Mastering Advanced Arrays.
console.log("Video 6=> Mastering Advance Arrays Part-2");


// 1- Rotation Of Elements (Left & Right).             (By My self)

// I- Left Rotation by 1 element.     
let arr1 = [1, 2, 3, 4, 5];            // output => arr1 = [2, 3, 4, 5, 1];

let lastElement = arr1[0];

for (let i = 0; i < arr1.length -1; i++) { 

    arr1[i] = arr1[i +1];     //Here it puts Value of(i +1)th Index on (ith) index 
    
}
arr1[arr1.length -1] = lastElement;
console.log(arr1);


// II- Right Rotation by 1 element.     
let arr2 = [1, 2, 3, 4, 5];            // output => arr1 = [5, 1, 2, 3, 4];

let firstElement = arr2[arr1.length -1];            //firstElement => Last element of the Array.

for (let i = arr2.length -1; i > 0; i--) {      //Loop Starts From Last index. 

    arr2[i] = arr2[i -1];     //Here it puts (i -1) on (ith) index. 
    
}
arr2[0] = firstElement;       //Here we Put The Last Element of Array on 0th index.
console.log(arr2);





// 2- Left & Right Rotation By k Element.      (k = User's Defined Value {Means by How much index to Rotate Element})

// I- Left Rotation by k Element.
// let arr3 = [1, 2, 3, 4, 5];        //Output => arr3 = [3, 4, 5, 1, 2];

// let k = 2;           //Means Rotating by 2 elements.

// let newArr3 = [];

// for (let i = k; i < arr3.length; i++) {
//     newArr3.push(arr3[i])
// }

// for (let i = 0; i < k; i++ ) {
//     newArr3.push(arr3[i]);
// }
// console.log(newArr3)



// II- Right Rotation by k Element.
let arr4 = [1, 2, 3, 4, 5, 6, 7];         //Output => arr4 = [5, 6, 7, 1, 2, 3, 4];

let k2 = 3;
let newArr4 = [];

for (let i = arr4.length -k2; i < arr4.length; i++) {
    newArr4.push(arr4[i]);
}

for (let i = 0; i < arr4.length -k2; i++) {
    newArr4.push(arr4[i])
}
console.log(newArr4);



// III- Rotation of Element By K value from Propmt. (Left Rotation).
// let arr5 = [1, 2, 3, 4, 5];

// let k3 = Number(prompt("Enter K Value"));

// for (let j = 0; j < k3; j++) {              //Looping/Rotating the Array's Element By k number of Time.
   
//     //Normal Left Rotation By 1 element.
//     let lastValue = arr5[0];
//     for (let i = 0; i < arr5.length -1; i++) {
//         arr5[i] = arr5[i +1];
//     }
//     arr5[arr5.length -1] = lastValue;

// }
// console.log(arr5)





// 3- Remove Duplicates From a Sorted Array.

// I- Remove Duplicates from Array and Return Length of Unique Numbers from Array.

let arr6 = [0, 0, 1, 1, 2, 3, 3];           //Output=> nums = [0, 1, 2, 3, 2, 3, 3];  & k = 4 (No. of Unique Element). 

function removeDuplicates(arr6) {
   let j = 1;

    for(let i = 0; i < arr6.length -1; i++) {
        if(arr6[i] !== arr6[i+1]) {
            arr6[j] = arr6[i + 1];
            j++;
        }
    }

    return j;
}

let kDup = removeDuplicates(arr6);

console.log(kDup);
console.log(arr6);



// II- Remove Duplicates from Array and Return Only Unique Numbers from Array & its Length.
let arr7 = [0, 0, 1, 1, 2, 3, 3];       //Output=>  [0, 1, 2, 3];

function removeDuplicates2(arr7) {
    let j = 1;

    for(let i = 0; i < arr7.length -1; i++) {

        if(arr7[i] !== arr7[i+1]) {
            arr7[j] = arr7[i+1];
            j++;
        }
    
    }

    return j;
}

let kDup2 = removeDuplicates2(arr7);
console.log(kDup2);     //Returns Length of Unique Numbers.

let uniqueNums = arr7.slice(0, kDup2);         //It Gives elements from 0 - KDup2 length.
console.log(uniqueNums);    //Returns the Array of Unique Numbers Only.





// 4- Merge Sorted Array.
let arr8 = [2, 5, 6];
let arr9 = [1, 3, 4, 7, 8];
let merge = new Array(arr8.length + arr9.length);      //Output=> merge= [1, 2, 3, 4, 5, 6, 7];

let i = 0, j = 0, k = 0;

while (i < arr8.length && j < arr9.length) {          //Runs Loop from 0 to Array's Length.

    if(arr8[i] < arr9[j]) {      //if Value of arr8[i]<arr9[j] => Store [i] in merge[k] & go to Next Index. (i++, k++)
        merge[k] = arr8[i];
        k++; i++;
    } else {
        merge[k] = arr9[j];     //else Store [j] in merge[k] & go to Next Index.(j++, k++).
        k++; j++;
    }

}


// After the main loop ends:
// Either arr8 is finished.
// Or arr9 is finished.
// Never both unfinished.
// So we need these loops to copy the leftover elements from whichever array still has data.

while(i < arr8.length) {
    merge[k] = arr8[i];
    k++; i++;
}

while(j < arr9.length) {
    merge[k] = arr9[j];
    k++; j++;
}

console.log(merge);





// 5- Best Time to Buy & Sell Stocks.