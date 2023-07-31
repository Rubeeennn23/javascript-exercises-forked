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

const sum = function(array) {
  return array.reduce((total,value)=>total+value,0)
  
}

const multiply = function(...args) {
  let mult=1
  for (let i=0; i < args.length ;i++) {
    mult = mult * args[i]
  } return mult
};

const power = function(a,b) {
	return a**b
};

const factorial = function(num) {
  let factor=1
	for (let i=num;i>0;i--) {
    factor *= i
  } return factor
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
