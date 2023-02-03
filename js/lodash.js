import _ from 'lodash'



////////////중복값 고유화 .uniqBy , .unionBy//////////////
// const usersA = [
//   {userId: '1', name: 'dong'},
//   {userId: '2', name: 'hyun'}
// ]
// const usersB = [
//   {userId: '1', name: 'dong'},
//   {userId: '3', name: 'lee'}
// ]
// const usersC = usersA.concat(usersB)
// console.log('concat', usersC)
// console.log('uniqBy', _.uniqBy(usersC, 'userId'))
// //이미중복이 발생한 그 배열데이터에서는 .uniqBy를 사용하면된다.
// //중복값을 제거하여 병합한다. _.uniqBy(중복된데이터가 들어있는 배열데이터, 그 중복을 구분할 고유의 속성대입)
// const usersD = _.unionBy(usersA, usersB, 'userId')
// console.log('unionBy', usersD)
// //중복이 발생할 배열데이터가 여러개가 있고 아직 합치기 전이라면 .unionBy을 사용하면된다.


/////////// 찾기.find , findIndex//////////////
// const users = [
//   {userId: '1' , name: 'Dong'},
//   {userId: '2' , name: 'Hyun'},
//   {userId: '3' , name: 'Lee'},
//   {userId: '4' , name: 'Amy'},
//   {userId: '5' , name: 'Evan'}
// ]

// const foundUser = _.find(users, {user: 'Amy'})
//                 //_.find(배열데이터, 찾을 기준 )
// const foundUserIndex = _.findIndex(users, {name: 'Amy'})
// console.log(foundUser)
// console.log(foundUserIndex)

// ////////////////삭제 .remove
// _.remove(users, {name : 'Dong'})
// console.log(users)


