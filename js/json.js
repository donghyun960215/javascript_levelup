//JSON  자바스크립트의 객체 표기법
//JSON은 정확하게는 문자 데이터이다. 가져오면서 객체데이터로 변환이 된다.
// import myData from '../myData.json'

// console.log(myData)

// const user = {
//   name : 'dong',
//   age : 28,
//   emails : [
//     'tlzma789@naver.com',
//     'nemo@naver.com'
//   ]
// }
// console.log('user', user)

// const str = JSON.stringify(user)
// //JSOM.stringify JSON의 형태로 문자데이터화 시켜준다.
// console.log('str', str)
// console.log(typeof str)

// const obj = JSON.parse(str)
// //JSON.parse 분석을 해서 자바스크립트에서 활용을 할 수 있는 데이터로 재조립을 할 수 있다.
// console.log('obj', obj)
// console.log(typeof obj)

const user = {
  name : 'dong',
  age : 28,
  emails : [
    'tlzma789@naver.com',
    'nemo@naver.com'
  ]
}