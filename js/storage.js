const user = {
  name : 'dong',
  age : 28,
  emails : [
    'tlzma789@naver.com',
    'ads@naver.com'
  ]
}

// localStorage.setItem('user', JSON.stringify(user))
// //localStorage.setItem 데이터 넣기 JSON.stringify()사용하여 문자데이터로 넣기

// console.log(JSON.parse(localStorage.getItem('user')))
// //localStorage.getItem 데이터 가져오기 JSON.parse() 문자데이터를 객체데이터로 변환하기

const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 99
console.log(obj)
localStorage.setItem('user' , JSON.stringify(obj))


// localStorage.removeItem('user')
//localStorage.removeItem() 삭제하기

