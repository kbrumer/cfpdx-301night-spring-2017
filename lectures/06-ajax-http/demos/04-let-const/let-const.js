// 'use strict'
// console.log('i outside the scope of the for loop', i)

// let y = 'a'
// if(true) {
//   let x = 25
//   console.log('x inside the scope of the if block', x)
// }
// console.log('x outside the scope of the if block', x)

// for(var i = 0; i < 3; i++) {
//   let y = 'Flibbity'
//   console.log('y inside the scope of the for loop', y)
// }
// console.log('y outside the scope of the for loop', y)
// console.log('i outside the scope of the for loop', i)


const jibbit = 'hello world'
console.log(jibbit)
// jibbit = 'goodbye world'
// console.log(jibbit)

const newObj = {
  name: 'Scott'
}
console.log(newObj.name)
newObj.name = 'Dan'
console.log(newObj.name)
newObj = {}
