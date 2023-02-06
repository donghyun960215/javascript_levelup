const numbers = [1, 2, 3, 4]
const fruits = ['Apple','Banana', 'Cherry']

// .length()
// 배열 안에 갯수확인
// console.log(numbers.length)
// console.log(fruits.length)
// console.log([1,2].length)
// console.log([].length)


// .concat()
// 원본에 배열데이터에는 손상이 없으며 합쳐져서 새로운 배열데이터가 생긴다
// console.log(numbers.concat(fruits))
// console.log(numbers)
// console.log(fruits)


//.forEach()
//.forEach메소드가 붙어있는 배열데이터의 아이템갯수 만큼 콜백함수가 반복적으로 실행된다.
// 따로 반환되는 값은 없다.
// fruits.forEach(function (item, index, array) {
//   console.log(item, index ,array)
// })


// .map
// 인수로 사용하는 콜백에 내부에서 반환하는 하나의 데이터를 가지고
// 그 데이터드를 모아놓은 새로운 데이터를 만들어 반환한다. 원본 데이터의 변환 없이.
// const a = fruits.forEach(function (fruit, index) {
//   console.log(`${fruit} - ${index}`)
// })
// console.log(a)

// const b = fruits.map(function (fruit, index){
//   return `${fruit} - ${index}`
//   // return {
//   // id: index,
//   // name: fruit
//   // }
// })
// console.log(b)



// 화살표 함수 사용 
// const a = fruits.forEach( (fruit, index) => {
//   console.log(`${fruit} - ${index}`)
// })
// console.log(a)

// const b = fruits.map( (fruit, index) => ({
//   id: index,
//   name: fruit
//   }))
// console.log(b)



// .filter()
// 배열데이터 안에 들어있는 각각의 아이템들을 특정한 기준에 의해서 필터링을 한다
// 원본데이터의 변화없이 필터된 새로운 데이터를 반환한다
// 
// const a = numbers.map(number => number < 3)
// console.log(a)
// const b = numbers.filter(number => number < 3)
// console.log(b)



// .find() findIndex()
// .find() 콜백 내에서 몬가를 찾으면 반복이 멈춘다. 그 찾아진 배열의 아이템이 반환이된다.
// .findIndex() 찾아진 배열의 index 반환
// const a = fruits.find(function(fruit){
//   return /^C/.test(fruit)
// })
// console.log(a)
// const b = fruits.findIndex(fruit =>  /^C/.test(fruit))
// console.log(b)



// .includes()
// 배열데이터 부분에 인수로사용된 특정한데이터가 포함이 되어있는지 확인하는메소드
// const a = numbers.includes(3)
// console.log(a)
// const b = fruits.includes('Dong')
// console.log(b)



// .push() .unshift()
// 원본 수정됨 주의!!!
// .push() 사용되는 배열에 가장 뒤에 특정한 인수 내용을 밀어 넣는다.
// .unshift() 사용되는 배열에 가장 앞에 특정한 인수 내용을 밀어 넣는다.
// numbers.push(5)
// console.log(numbers)
// numbers.unshift(0)
// console.log(numbers)



// .reverse()
// 원본 수정됨 주의!
// 배열데이터를 거꾸로 뒤집는다.
// numbers.reverse()
// fruits.reverse()
// console.log(numbers)
// console.log(fruits)



// .splice()
// 원본 수정됨 주의!

// 첫번째 인수 번호에서 아이템 두번째인수만큼 지워라
// numbers.splice(2, 1)
// 인덱스 번호 2번에서 아이템을 1개만 지워라

// numbers.splice(2, 0, 999)
// 인덱스 번호 2번에서 아이템을 0개만 지워라(변환없음),그리고 999를 끼워넣어라

//특정한 인덱스 번호의 아이템을 제거하는 용도로도 사용되는데 그 자리에다가 끼워넣는 용도로 
// 사용도 가능하다

// console.log(numbers)

// fruits.splice(2, 0, 'dong')
// console.log(fruits)