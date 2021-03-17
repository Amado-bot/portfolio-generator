// // Using function expression syntax
// const addNums = function(numOne, numTwo) {
//     return numOne + numTwo;
//   };
  
//   // Using new arrow function syntax
//   const addNums = (numOne, numTwo) => {
//     return numOne + numTwo;
//   };

// //only one parameter, you can completely omit the parentheses wrapping it,
// const printProfileData = profileDataArr => {
//     console.log(profileDataArr);
//   };

//if we only need to perform one action we can omit the culry braces. implicit return
// const addNums = (numOne, numTwo) => numOne + numTwo;

// const sum = addNums(5, 3); // sum would be 8

// If we have more than one action to perform
// const addNums = (numOne, numTwo) => {
//     console.log(numOne, numTwo);
//     return numOne + numTwo;
//   };

// var is function-scoped, so redeclaring it in a block will cause its value outside the block to change as well:
// 'let' is block-scoped, so redeclaring a 'let' variable inside of a block creates a different 'let' variable with the same name whose scope is inside the block:


// //cleaner for loops
// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach((profileItem) => {
//       console.log(profileItem)
//     });
//   };

// //even cleaner for loops
// profileDataArr.forEach(profileItem => console.log(profileItem));


// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

const fs = require('fs')

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name,github] = profileDataArgs;

fs.writeFile('./generated.html',generatePage(name, github), err =>{
    if(err) throw err;
    console.log('portfolio complete! checkout index.html to see the output!')
});
