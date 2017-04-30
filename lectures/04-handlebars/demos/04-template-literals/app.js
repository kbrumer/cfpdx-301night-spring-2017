'use strict'
console.log("\n\n\n")

var quoteStr = 'hello world! I am a string.'
//console.log(quoteStr)

var someStr = 'Cats and boots!'

var space = ' '

var strConcat = quoteStr + space + space + someStr
// console.log(strConcat)

var backtickStr = `hello world! I am a string, too.`
// console.log(backtickStr)

var obj = {
  name: 'Scott',
  age: 34,
  ninja: true
}

var templateStr = `hello world! My name is ${obj.name}!`
// console.log(templateStr)

var numOne = 25
var numTwo = 35

var jsExpressions = `the sum of ${numOne} and ${numTwo} is ${numOne + numTwo}! Boom.`
console.log(jsExpressions)

console.log("\n\n\n")
