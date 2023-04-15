const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array){
    const reduction = array.reduce((total, arrayValue) => {
    return total += arrayValue;
    }, 0);
    return reduction;
}

const multiply = function(array) {  
  if (array.length == 0){
    return 0;
  }

  const reduction = array.reduce((total, arrayValue) => {
    return total *= arrayValue;
    }, 1);
    return reduction;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(value) {
  let total = 0;
  if (value == 1 || value == 0){
    total += 1;
  }
  else {
    total = value * factorial(value - 1);
  }
  return total;
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
