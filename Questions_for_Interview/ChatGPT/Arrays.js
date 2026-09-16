
// ===================== Arrays Coding Questions By ChatGPT =======================
    console.log("Arrays Questions By ChatGPT...");


// Q1- Create an Array & Print it in Console.
const arr1 = [1, 2, 3, 4, 5];
console.log("Q1-", arr1);



// Q2- Find & Log 2nd element of the Array.
const arr2 = [1, 2, 3, 4, 5];
console.log("Q2-", arr2[1]);



// Q3- Add 2(Two) New elements to the Start of the Array.
const arr3 = [1, 2, 3, 4, 5];
const newElements = arr3.unshift(-1, 0);
console.log("Q3-", arr3);



// Q4- Remove the Last Element of the Array.
const arr4 = [1, 2, 3, 4, 5];
const removeLastElement = arr4.pop();
console.log("Q4-", arr4);



// Q5- Use slice() method to extract first 5 elements of the Array.
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const first5Elements = arr5.slice(0, 5);
console.log("Q5-", first5Elements);



// Q6- Find the Index of the Specific elements in the Array using indexOf().
const arr6 = [1, 2, 3, 4, 5];
console.log("Q6-", arr6.indexOf(2));



// Q7- Check if value Exists in the Array using includes().
const arr7 = [1, 2, 3, 4, 5];
console.log("Q7-", arr7.includes(7));



// Q8- Combine Two Array into Single Array using (concate(), Spread Operator & Loop).
const Iarr8 = [1, 2, 3, 4, 5] ,  IIarr8 = [6, 7, 8, 9, 10];

    // Using concat().
    const concatingArrays = Iarr8.concat(IIarr8);
    console.log("Q8-", concatingArrays);
    

    // Using Spread Operator.
    const combineBySpredOperator = [...Iarr8, ...IIarr8];
    console.log("Q8-", combineBySpredOperator); 


    // Using Loop.
    const combiningByLoop = [];

        // For 1st Array. 
    for(let i = 0; i < Iarr8.length; i++) { 
        combiningByLoop.push(Iarr8[i]);
    }
        
        // For 2nd Array. 
    for(let j = 0; j < IIarr8.length; j++) {
        combiningByLoop.push(IIarr8[j]);
    }

    console.log("Q8-", combiningByLoop);




//Q9- Sort an Array in Ascending Order using(sort() & Loop).
const arr9 = [5, 20, 18, 10, 9, 16];

    // Using sort().
    const sortByMethod = arr9.sort((a, b)=> a - b);
    console.log("Q9-", sortByMethod);


    // Using Loop.
    const sortByLoop = arr9;

    for(let i = 0; i < sortByLoop.length; i++) {
        for(let j = i +1; j < sortByLoop.length; j++) {
   
            if(sortByLoop[i] > sortByLoop[j]) {
                let temp = sortByLoop[i];
                sortByLoop[i] = sortByLoop[j];
                sortByLoop[j] = temp;
            }
            
        }
    }
    console.log("Q9-", sortByLoop);




// Q10- 