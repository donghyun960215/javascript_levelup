//전개 연산자(Spread)

const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits)
console.log(...fruits)

function toObject(a, b, c){
  return{
    a: a,
    b: b,
    c: c
  }
}

  //화살표함수 변환
  // const toObject = (a, b, c) => ({a, b, c})
console.log(toObject(...fruits))