const userAge = {
  name: 'dong',
  age: 28
}
const userEmail = {
  name: 'dong',
  email: 'tlzma789@naver.com'
}


// .assign
//출처객체(두번째인수)를 복사해서 대상객체(첫번째인수)에 집어 넣는다.
//대상객체(첫번째인수)가 변수(target)에 들어간다.
//인수를 많이 넣을 수 있다. (a, b, c) 이렇게 되면 대상객체는 a 출처객체는 b,c가 된다.
//두개 이상의 객체 데이터를 하나의 객체 데이터로 만들고 싶다면
//const target = Object.assign({},a, b, ....)
// const target = Object.assign({},userAge, userEmail)
// console.log(target)
// console.log(userAge)
// console.log(target === userAge)

// const a = { k: 123}
// const b = { k: 123}
// console.log(a === b)

const user = {
  name: 'dong',
  age: 28,
  email: 'tlzma789@naver.com'
}

//.keys
//객체 데이터의 key들만 추출되서 새로운 배열데이터가 된다.
// const keys = Object.keys(user)
// console.log(keys)
// //['name', 'age', 'email']

// console.log(user['email'])

// const values = keys.map(key => user[key])
// console.log(values)


