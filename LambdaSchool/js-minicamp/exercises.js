//Do not change any of the function names

function multiplyByTen(num) {
  return num * 10;
}

function subtractFive(num) {
  return num - 5;
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

function areEqual(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

function lessThanNinety(num) {
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}

function greaterThanFifty(num) {
  if (num > 50) {
    return true;
  } else {
    return false;
  }
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function divide(x, y) {
  return x/y;
}

function multiply(x, y) {
  return x * y;
}

function getRemainder(x, y) {
  return x%y;
}

function isEven(num) {
  if (num%2==0) {
    return true;
  }
  else {
    return false;
  }
}

function isOdd(num) {
  if (num%2!==0) {
    return true;
  } else {
    return false;
  }
}

function square(num) {
  return Math.pow(num, 2);
}

function cube(num) {
  return Math.pow(num, 3);
}

function raiseToPower(num, exponent) {
  return Math.pow(num, exponent);
  //raise num to whatever power is passed in as exponent
  //code here
}

function roundNumber(num) {
  return Math.round(num);
  //round num and return it
  //code here
}

function roundUp(num) {
  return Math.ceil(num);
  //round num up and return it
  //code here
}

function addExclamationPoint(str) {
  return str + '!';
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
}

function combineNames(firstName, lastName) {
  return firstName + ' ' + lastName;
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
}

function getGreeting(name) {
  return 'Hello ' + name + '!';
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  return length * width;
  //return the area of the rectangle by using length and width
  //code here
}

function getTriangleArea(base, height) {
  return (base * height) / 2;
  //return the area of the triangle by using base and height
  //code here
}

function getCircleArea(radius) {
  return Math.round(radius * radius * 3.14);
  //return the rounded area of the circle given the radius
  //code here
}

function getRectangularPrismVolume(length, width, height) {
  return length * width * height;
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
