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



// 3. Write a Function to Find the Area of the Circle.
function area(r) {
    return Math.PI * r * r;        //Formula of Area of the Circle: PI x r square.
}
console.log(area(10));



// 4. Write a Function that checks if a String Starts from a apesific Character.
function string(str) {
    if(str[0] === "A") {
        return "True"
    } else {
        return "False"
    }
}
console.log(string("ammar"));



// 5. Write a Function to find the Maximum of two Numbers.  (10, 20) here 20 is Maxixmum.
function maxTwoNums(num1, num2) {
    if(num1 > num2) {
        return "num1 > num2"
    } else if (num1 < num2) {
        return "num1 < num2"
    } else if (num1 === num2) {
        return "num1 = num2"
    }
} 
console.log(maxTwoNums(10, 20));



// 6. Write a Function that Takes a number and return its Factorial.
function factorialOfNum(num) {
    let Factorial = 1;
    for(let i = 1; i <= num; i++) {
        Factorial *= i;
    }
    return Factorial;
}
console.log(factorialOfNum(6));



// 7. Write a Function that Accepts a String and Return its Reverse.
function strReverse() {
    let str = "Ammar";
    for(let i = str.length -1; i >= 0; i--) {
         console.log(str[i]);
    }
    
                    // OR   (By reverse Method.)
    return str.split("").reverse().join("");
}
console.log(strReverse());



// 8. Write a Function to Find the Largest number of the Array.
function largestNumOfArr(arr) {
    let largest = arr[0];

    for(let i = 0; i <= arr.length; i++) {

        if(largest < arr[i]) {
            largest = arr[i];
        }
    }
    
    return largest;

}
console.log(largestNumOfArr([5, 20, 10, 3, 8]));