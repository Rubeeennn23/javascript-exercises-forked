const add = function(a,b) {
	if (a == undefined || b==undefined) {
    return 0
  } else {
  return a+b
  }
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(...args) {
  let suma = Number('0')
	for (let arg in args) {
    if (arg !== undefined) {
    suma = suma + Number(arg)
} return suma
  }
};

/*  } else if(a==undefined) {
    return b
  } else if(b==undefined) {
    return a*/

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// npm test calculator.spec.js
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
