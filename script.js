//JAVASCRIPT BASICS

//shorthand notation

 let apples = 10;

 apples++; // adds  +1 
 apples--; // subs -1

 apples += 10; // adds 10 
 apples -= 5; // subs 5 
 apples *= 2; // mult 2
 apples /= 2; // divides by 2

console.log(apples);



//Template string way

 const title = 'Best reads of 2022';
 const author = 'Mrio';
 const likes = '20';

 let result = `The blog called ${title} by ${author} has ${likes} likes`;
 console.log(result);



// Creating html templates 

 let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
 `;
 console.log(html);



// Array methods 
 let ninjas = ['shaun', 'parker', 'ryan'];

 let result0 = ninjas.concat(['ken', 'crystal']); // concat means joining things together
 console.log(result0);

// this push method alters the original value.
 let result01 = ninjas.push('ken'); // adds another value to the original array and gives us back length(number or elements) in console.

 let result02 = ninjas.pop(); // pop method erase the last element in the array. in this example the element it erased will be shown on the display.


// Methods can return booleans 
 let email = 'luigi@gmail.com';

// includes method will return true or false on console.
 let resultEmail = email.includes('@'); // this will return true, because there is an '@' in the email variable.
 console.log(resultEmail);



// Comparison operators
 let age1 = 25;

 console.log(age1 == 30); // this ask if age equals to 30 and returns false.
 console.log(age1 == 25); // ask if age equals to 25 and returns true. 
 console.log(age1 != 30); // ask if age does not equal to 30 and returns true. 


// Loose vs Strict Comparisons
// Loose comparison (different types can still be equal)

 let age = 25; 

 console.log(age == 25); // returns true. asks if age is equal to 25.
 console.log(age == '25'); // returns true. it will read the string as a number and evaluate it as true.
 console.log(age != 25); // returns false. asks if age is not equal to 25.
 console.log(age != '25'); // returns false. it will read string as a number and evaluate it as false.

// Strict Comparison (different types cannot be equal);
 console.log(age === 25); // returns true.
 console.log(age === '25'); // returns false.
 console.log(age !== 25); // returns false.
 console.log(age !== '25'); // returns true.


// Type Conversion
 let score = '100';
 score = Number(score); // converts the string to a number
 console.log(score + 1); // adds 1 to the variable
 console.log(typeof score); // displays what data type.

 let result1 = Number('hello'); // converts the string to a number, console show NaN, not a number
 let result2 = String(50); // converts number to string
 let result3 = Boolean(0); // returns false. 
 let result4 = Boolean(' '); // returns true. because this asks if its a string

 console.log(result1, typeof result1, result2, result3, result4);




// CONTROL FLOW BASICS

// for loops

 for(let i = 0; i < 5; i++) {
    console.log('in loop: ', i);
 };
 console.log('loop finished');

 const names = ['eren', 'mikasa', 'armin'];
// if you dont know how many elements there is in the array, use 'abc.length'.
for(let i=0; i < names.length; i++) { 
    //console.log(names[i]);
     let html = `<div>${names[i]}</div>`;
     console.log(html);
};
 
//while loops 

const namae = ['mario', 'luigi', 'frog'];
let i = 0;

while(i < namae.length) {
    console.log(namae[i]);
    i++;
};

//do while loops
let j = 3;

do {
    console.log('val of j is: ', j);
    j++;
} while(j < 5);



// if, else if, else statements + logical operators or ||, and &&

const password = 'p@ss';

if(password.length >= 12 && password.includes('@')){
    console.log("Thats a long a** password, proud of you son!!!");
} else if(password.length >= 8 || password.includes('@') && password.length > 5){
    console.log("good enough password, barely made it...");
} else {
    console.log("Fam..the password's hella mid, are you not embarrrassed?!");
}

// logical NOT (!)

let user = false;

if(!user) { //without the '!' the if statement doesnt display anythin on console, because the user = true.
    console.log("you must log in to continue");
}

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++) {
    if(scores[i] === 0){
        continue; //this will take out element "0" on the console and continue with the loop. 
    }

    console.log("your score: ", scores[i]);

    if(scores[i] === 100){
        console.log("You got the mf HIGHEST score dawggg, AYEEEEE");
        break;
    }
};

// switch statements 

const grade = 'A';

switch(grade) {
    case 'A':
        console.log("You got an A,damnnnn!");
        break;
    case 'B':
        console.log("grade B, das wassup");
        break;
    case 'C':
        console.log("grade C sheeeesh");
        break;
    case 'D':
        console.log("grade D, is aight");
        break;
    case 'E':
        console.log("grade E, mid..");
        break;
    default:
        console.log("not a grade????");
};


// variables and block scope

let anos = 30;

if(true) {
    let anos = 40;
    let jeSuis = 'Mario';
    console.log("inside the 1st code block: ", anos, jeSuis);

    if(true) {
        let anos = 50;
        console.log("inside the 2nd code block: ", anos);
    }
}

console.log("outside the code block: ", anos);