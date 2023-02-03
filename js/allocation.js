//구조분해 할당
//비구조화 할당

const user = {
  name: 'dong',
  age: 28,
  email: 'tlzma789@naver.com'
}
const {name, age, email, address} = user
console.log(`사용자의 이름은 ${name} 입니다.`)
console.log(`${name}의 나이는 ${age} 입니다.`)
console.log(`${name}의 이메일 주소는 ${email} 입니다.`)
console.log(address)

const fruits = ['Apple', 'Banana', 'Cherry']
const [a, b, c, d] = fruits
console.log(a, b, c, d)
//배열부분에서의 객체구조 분해는 순서를 지켜야한다 만일 Banana 만 추출을 하고싶다면
//const [, b] = fruits      ,표를 빼먹지말고 순서를 지켜줘야한다

