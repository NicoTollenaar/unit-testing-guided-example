function sum(a, b) {
  if (a !== undefined && b !== undefined) {
  return a + b;
  } else if (a !== undefined && b === undefined) {
    return a;
  } else {
    return 0;
  }
}

function subtract(a, b) {
  if (a !== undefined && b !== undefined) {
    return a - b;
    } else if (a !== undefined && b === undefined) {
      return a;
    } else {
      return 0;
    }
}

function divide(a, b) {

  if (b === 0) {
    throw new Error("Cannot divide by 0!");
  } else {
    return a / b;    
  }
}

function multiply(a, b) {
  if (a !== undefined && b !== undefined) {
    return a * b;
    } else if (a !== undefined && b === undefined) {
      return 0;
    } else {
      return 0;
    }
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
