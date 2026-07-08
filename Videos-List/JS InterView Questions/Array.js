// Interview Questions on Arrays =>


// 1. Create an array of your top 5 favorite movies and print them to the console.
let favMovieArray = ["Avengers", "Obession", "3-idiots", "Man of War", "The Punisher"];
favMovieArray.forEach((movies) => {
    console.log(movies);
});



//2. Find and log the second element of the array.
let arr = [10, 20, 30, 40, 50];
console.log("Second Element of the Array:", arr[1]);


//3. Add Two (2) new elements to the start of the array.
let arr2 = [1, 2, 3, 4, 5];
arr2.unshift(-1, 0);
console.log(arr2);



//4. Remove the last element from the array.
let arr3 = [1, 2, 3, 4, 5];
arr3.pop();
console.log(arr3);



//5. Use .slice() to extract the first five elements of the array.
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("First 5 elements of the Array:", arr4.slice(0, 5));
        //OR
let firstFiveElementsOfArr4 = arr4.slice(0,5);
console.log(firstFiveElementsOfArr4);



//6. Find the index of a specific element in the array using .indexOf().
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr5.indexOf(7));  //output: 6;



// 7. Check if a value exists in the array using .includes().
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Chacking 5 is exists:", arr6.includes(5));  //output: true;
console.log("Chacing 15 is exists:", arr6.includes(15));  //output: false;



// 8. Combine two arrays into one using .concat().
let arr7 = [1, 2, 3, 4, 5];
let arr8 = [6, 7, 8, 9, 10];
let combineTwoArrays = arr7.concat(arr8);
console.log(`Combination of Two Arrays is: ${combineTwoArrays}`);

 

// 9. Sort the array in Ascending Odred.
let arr9 = [3, 4, 8, 1, 2, 5];
let ascendingOrderedArray = arr9.sort((a, b) => a - b);
console.log("Array sotred in Ascending Order using sort():", ascendingOrderedArray);
                // OR
for(let i = 0; i <= arr9.length; i++) {
    for(let j = i +1; j <= arr9.length; j++) {

        if(arr9[j] < arr9[i]) {
            let tempValue = arr9[i];
            arr9[i] = arr9[j];
            arr9[j] = tempValue;
        }

    }
}
console.log("Array sotred in Ascending Order using Loop:", arr9);
