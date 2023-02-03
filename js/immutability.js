// 데이터 불변성 (Immutability)
// 원시데이터 : String, Number, Boolean, undefind, null
// 참조형 데이터 : Object, Array, Function

//원시 데이터
// let a = 1
// let b = 4
// console.log(a, b, a === b)
// b = a
// console.log(a, b, a === b)
// a = 7
// console.log(a, b, a === b)
// let c = 1
// console.log(b, c, b === c)

//참조형 데이터
let a = { k: 1}
let b = { k: 1}
console.log(a, b, a === b)
a.k = 7
b = a
console.log(a, b, a === b)
a.k = 2
console.log(a, b, a === b)
let c = b
console.log(a, b, c, a === c)
a.k = 9
console.log(a, b, c, a === c)


