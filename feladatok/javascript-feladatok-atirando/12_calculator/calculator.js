const add = function(x, y) {
  return x+y
};

const subtract = function(x,y) {
	return x-y
};

const sum = function(arr) {
	let sum = 0
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
    
  }
  return sum
};

const multiply = function(arr) {
  let sum = 1
  for (let index = 0; index < arr.length; index++) {
    sum *= arr[index];
    
  }
  return sum
};

const power = function(x,y) {
	return Math.pow(x,y)
};

const factorial = function(x) {
	let fact = 1
  for (let index = 2; index <= x; index++) {
    fact *= index
  }
  return fact
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
