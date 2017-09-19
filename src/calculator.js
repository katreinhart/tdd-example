const calculator = {}

calculator.add = function(a, b){
  return a + b
}

calculator.subtract = function(a, b) {
  return a - b
}

calculator.multiply = (a, b) => {
  return a * b
}

calculator.divide = (a, b) => {
  return a / b  
}

module.exports = calculator
