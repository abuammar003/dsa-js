// Interview Questions based on Functions =>


// 1. Write a Function to check if a number is Even or Odd.
function checkEvenOdd() {
    for(let i = 1; i <= 10; i++) {
        if(i %2 === 0) {
            console.log("The Number is Even:", i);
        } else if (i %2 === 1) {
            console.log("The Number is Odd:", i)
        }
    }
}
checkEvenOdd();

                    // OR
function evenOddCheck(value) {
    if(value %2 === 0) return "Even";
    else return "Odd";
}
console.log("The value is:", evenOddCheck(13));




// 2. Write a Function that accepts an Array and return the sum of its elements.
function enterArrayAndSum() {
    let arr = [1, 2, 3, 4, 5];
    let sum = 0;
    for(let i = 0; i <= arr.length -1; i++) {
        sum += arr[i];
    }
    console.log("The Sum of the Array:", sum);
}  
enterArrayAndSum();



// 3. 