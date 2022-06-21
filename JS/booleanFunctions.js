const functionOne = (something) => {
  if (something) {
    console.log("I am false!");
    return true;
  } else {
    console.log("I am true !");
    return false;
  }
};

const functionTwo = () => {
  console.log("Sister function is returning true !");
};

const functionJudge = () => {
  functionOne() && functionTwo();
};

functionJudge();

// To run this file use the command node functionJudge.js
