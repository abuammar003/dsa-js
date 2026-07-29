// Interview Questions on Loops =>


// 1. Write a for loop that prints the numbers from 1 to 50.
for (let i = 1; i <= 50; i++ ) {
    console.log(i);
}



// 2. Use a while that sums to print the numbers from 1 to 10.
let i2 = 1;
let sum = 0;
while (i2 <= 10) {
    // console.log(i2);
    sum += i2;
    i2++;
}
console.log("Sum:", sum);



// 3. Write a for loop that skips the even numbers and prints only the odd numbers from 1 to 20.

for (let i3 = 1; i3 <= 20; i3++) {
    // if(i3 %2 !== 0) {                    // Prints Odd Numbers.
    //     console.log(i3);
    // }

     if(i3 % 2 !== 1) {                     // Prints Even Numbers.
         console.log(i3); 
    }  
}



// 4. Write a for loop that findes the Factorial of a given number.
let num = 5;
let factorial = 1;
for(let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(`Factorial of ${num} is: ${factorial}`);
                //OR
    // let fact = 1
    // for(let i = num; i >= 1; i--) {
    //     fact *= i;
    // }
    // console.log(`Factorial of ${num} is: ${fact}`);



// 5. Use a for loop to Reverse an Array.
let arr = [1, 2, 3, 4, 5 ];
let reverseArr = [];

for(let i=arr.length -1; i >=0; i--) {
    reverseArr.push(arr[i]);
}
console.log(reverseArr);



// 6. write the loop that logs numbers from 1 to 100 divisible by 5.
let i5 = 1;
let numsDivisibleBy5 = [];
while(i5 <= 100) {
    if(i5 % 5 === 0) {
        numsDivisibleBy5.push(i5);
    }
    i5++;
}
console.log('The Numbers Divisible by 5 are:' ,numsDivisibleBy5);



// 7. Write a for...in loop to iterate over an object and log its keys.
let obj = {name: 'a', email: 'a@email.com', age: 25};

for(let key in obj) {
    console.log(key);
}

//8. Write a for...in loop to iterate over an object and log its keys and values.
for(let key in obj) {
    console.log(key, obj[key]);
}
