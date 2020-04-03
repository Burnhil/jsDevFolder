// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.


const convertNumberString = () => {
  let number = 10;
  let numString = number.toString();
  document.getElementById("numberToString").innerHTML = number + " " +  typeof numString ;
  //console.log(typeof number, number);
  //console.log(typeof numString, numString)
}


// Write a JavaScript program to convert a string to the number.
const convertStringToNumber = () => {
  let numberToString = "40";
  let number = parseInt(numberToString);
  document.getElementById("stringToNumber").innerHTML = number + " " + typeof number;
  //console.log(typeof numberToString, numberToString);
  //console.log(typeof number, number)
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
  const dataTypes = () => {
    let inputInfo = 47;
    let dataType = typeof inputInfo;

    if(dataType == "number"){
      document.getElementById("testDataType").innerHTML = "data type is number";
    } else if(dataType == "string"){
      document.getElementById("testDataType").innerHTML = "data type is string";
    } else if(dataType == "boolean"){
      document.getElementById("testDataType").innerHTML = "data type is boolean";
    } else if(dataType == "null"){
      document.getElementById("testDataType").innerHTML = "data type is null";
    } else if(dataType == "undefined"){
      document.getElementById("testDataType").innerHTML = "data type is undefined";
    } else if(dataType == "NaN"){
      document.getElementById("testDataType").innerHTML = "data type is NaN";
    }

    
  }

  
// Write a JavaScript program that adds 2 numbers together.

const addTwoNumbers = () => {
  let number1 = 42;
  let number2 = 47;
  sum = number1 + number2;
  document.getElementById("addingTwoNumbers").innerHTML = sum;

}

// Write a JavaScript program that runs only when 2 things are true.

const runWhenTwoThingsTrue = () => {

  let number1 = 10;
  let number2 = 15;

  if(number1 == 10 && number2 == 15){
    document.getElementById("runWhenTrueTwo").innerHTML = "button click only works if both numbers are true";
  }

  
}

// Write a JavaScript program that runs when 1 of 2 things are true.

const oneOfTwoAreTrue = () => {

  let number1 = 10;
  let number2 = 15;

  if(number1 == 10 || number2 == 10){
    document.getElementById("oneOfTwoTrue").innerHTML = "button click only one is true";
  }
  
}



// Write a JavaScript program that runs when both things are not true.  

const noneIsTrueNow = () => {

  let number1 = 10;
  let number2 = 15;

  if(!(number1 == 1) && !(number2 == 10)){
    document.getElementById("noneIsTrue").innerHTML = "button click only both are not true";
  }

}


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
