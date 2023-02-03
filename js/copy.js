import _ from 'lodash'

//얕은 복사 , 깊은 복사

//얕은 복사
const user = {
  name: 'dong',
  age: 28,
  emails: ['tlzma789@naver.com']
}
//const copyUser = user
console.log(copyUser === user)

// user.age = 22
// console.log('user', user)
// console.log('copyUser', copyUser)

// 위의 처럼 user의 값을 변경을 하면 copyUser 값도 같이 변경이 된다.
// 같은 데이터 주소를 바라보고 있기 때문이다 이것을 방지하기 위해 복사를 하기 위해서는 

// .assign{}을 사용한다.
// const copyUser = Object.assign({}, user)
// user.age = 99
// console.log('user', user)
// console.log('copyUser', copyUser)
// console.log(copyUser === user)

//전개 연산자를 통해서도 사용가능
// const copyUser = {...user}
// user.age = 99
// console.log('user', user)
// console.log('copyUser', copyUser)
// console.log(copyUser === user)

// console.log('-------------------')
// user.emails.push('tadasdasdasd@naver.com')
// console.log(user.emails === copyUser.emails)
//얕은 복사는 user 안에 있는 데이터객체를 푸시로 밀어 넣으면 copyUser 값까지 변한다.


//깊은 복사는 lodash패키지를 가져와서 사용한다.
const copyUser = _.cloneDeep(user)
user.age = 99
console.log('user', user)
console.log('copyUser', copyUser)
console.log(copyUser === user)

console.log('-------------------')
user.emails.push('tadasdasdasd@naver.com')
console.log(user.emails === copyUser.emails)

