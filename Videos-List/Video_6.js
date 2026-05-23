//Video-6: Mastering Advanced Arrays.
console.log("Video 6=> Mastering Advance Arrays Part-2");


// 1- Rotation Of Elements (Left & Right).             (By My self)

// I- Left Rotation by 1 element.     
let arr1 = [1, 2, 3, 4, 5];            // output => arr1 = [2, 3, 4, 5, 1];

let lastElement = arr1[0];

for (let i = 0; i < arr1.length -1; i++) {

    arr1[i] = arr1[i +1];     //Here it puts (i +1) on (ith) index 
    
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
let arr3 = [1, 2, 3, 4, 5];        //Output => arr3 = [3, 4, 5, 1, 2];

let k = 2;           //Means Rotating by 2 elements.

let newArr3 = [];

for (let i = k; i < arr3.length; i++) {
    newArr3.push(arr3[i])
}

for (let i = 0; i < k; i++ ) {
    newArr3.push(arr3[i]);
}
console.log(newArr3)


