# javascript_levelup

## String
#### 자주 사용되는 메소드
```js
const str ='Hello world'
```
메소드 | 속성 | 예제
--|--|--
length() | 문자열 갯수 확인 가능. | console.log(str.length)
indexOf('AAA') | 메소드사용시 -1이 아닌 다른 숫자가 뜬다면 인수로 사용한 문자데이터가</br>대상의 문자데이터 안에 있다는 뜻 하지만 -1이 넘어오면 없다는 뜻이다.</br>만약 str.indexOf('world') !== -1 이와 같은 비교 연산자를 사용한다면 false ture 변환이 가능하다. | console.log(str.indexOf('world'))
slice(1,2) | 문자열의 일부를 추출하면서 새로운 문자열을 반환한다. 인수는 사용자에 맞게 변경하여 사용한다. | console.log(str.slice(6,11))
replace('AA','BB') | 첫번째 인수에 있는 문자를 찾아서 두번째 인수에 있는 문자로 교체를 해준다. | console.log(str.replace('world', 'dong'))
match() | 특정한문자데이터에서 정규식표현을 같이 사용하면서 특정한 문자를 매치시킬 수 있다.(email) | console.log(str.match(/.+(?=@)/)[0])
trim() | 공백제거  | console.log(str.trim())


## Number
#### 자주 사용되는 메소드
메소드 | 속성 | 예제
--|--|--
toFixed(2) | 인자값 만큼 소수점 표출 string로 변환이 된다.number로 다시 변환을 하기 위해서는  parseInt()정수, parseFloat()소수 를 사용하여 변환을 해준다. | console.log(pi.toFixed(2))
Math.abs(0) | 인수로 들오는 값의 절대값을 표현한다. | console.log('abs:', Math.abs(-12))
Math.min(1,2,3) | 인수로 들어온 숫자데이터중에 가장 작은 데이터 표현 | console.log('min:', Math.min(2, 8,))
Math.max(1,2,3) | 인수로 들어온 숫자데이터중에 가장 큰 데이터 표현 |console.log('max:', Math.max(2, 8))
Math.ceil(3.14) | 올림처리 | console.log('ceil:', Math.ceil(3.14))
Math.floor(3.14) | 내림처리 | console.log('floor:', Math.floor(3.14))
Math.round(3.74) | 반올림내림 처리 | console.log('round:', Math.round(3.14))
Math.random() | 랜덤 | console.log('random:', Math.random())



## array
#### 자주 사용되는 메소드
```js
const numbers = [1, 2, 3, 4]
const fruits = ['Apple','Banana', 'Cherry']
```
메소드 | 속성 | 예제
--|--|--
.length() | 배열 안에 갯수 확인 | console.log(number.length) </br>console.log([1,2].length)
.concat() | 원본에 배열데이터에는 손상이 없으며 합쳐져서 새로운 배열 데이터가 생긴다 | console.log(number.comcat(fruits))
.forEach() | 메소드가 붙어있는 배열데이터의 아이템 갯수 만큼 콜백함수가 반복적으로 실행된다.| fruits.forEach(function (iftem, index, array){  console.log(item,index,array)</br>})
.map | 인수로 사용하는 콜백에 내부에서 반환하는 하나의 데이터를 가지고</br>그 데이터들을 모아놓은 새로운 데이터를 만들어 반환한다. 원본 데이터의 변환은 없다.| const b = fruits.map(function(fruit,index){</br> return `${fruit} - ${index}`</br>})</br>console.log(b)
.filter() | 배열데이터 안에 들어있는 각각의 아이템들을 특정한 기준에 의해서 필터링한다</br>원본데이터의 변화없이 필터된 새로운 데이터를 반환한다. | const a = numbers.map(number => number < 3)</br>console.log(a)</br>const b = numbers.filter(number => number <ㅠ 3)</br>console.log(b)
.find() | 콜백 내에서 몬가를 찾으면 반복이 멈춘다. 그 찾이진 배열의 아이템이 반환된다. |const a = fruits.find(function(fruit){</br>return /^C/.test(fruit)</br>})</br>console.log(a)
.findIndex() | 찾아진 배열의 index 반환 | const b = fruits.findIndex(fruit => /^C/.test(fruit))</br>console.log(b)
.includes() | 배열데이터 부분에 인수로 사용된 특정한데이터가 포함이 되어있는지 확인하는 메소드 | const a = numbers.includes(3)</br>console.log(a)</br>const b = fruits.includes('Dong')</br>console.log(b)
.push() | 배열에 가장 뒤에 특정한 인수 내용을 밀어 넣는다.</br>원본이 수정됨으로 주의한다. | numbers.push(5)</br>console.log(numbers)
.unshift() | 가장 앞에 특정한 인수 내용을 밑어 넣는다. </br> 원본이 수정됨으로 주의한다. | numbers.unshift(0)</br>console.log(numbers)
.reverse() | 배열데이터를 거로 뒤집는다.</br>원본이 수정됨으로 주의한다. | number.reverse()
.splice() | 첫번쨰 인수 인덱스 번호에서 두번째인수만큼 지운다.</br>원본이 수정됨으로 주의한다. | number.splice(2, 1)
.splice() | 첫번쨰 인수 인덱스 번호에서 두번째인수만큼 지운다.세번째 인수값을 끼워 넣는다.</br>원본이 수정됨으로 주의한다. | number.splice(2, 1, 999)

## Object
#### 자주 사용되는 메소드
```js
const userAge = {
  name: 'dong',
  age: 28
}
const userEmail = {
  name: 'dong',
  email: 'tlzma789@naver.com'
}
const user = {
  name: 'dong',
  age: 28,
  email: 'tlzma789@naver.com'
}
```
메소드 | 속성 | 예제
--|--|--
.assign | 출처객체(두번째인수)를 복사해서 대상객체(첫번째인수)에 집어넣는다.</br>인수를 많이 넣을 수 있으며 (a, b, c) 이렇게 되면 대상객체는 a 출처객체는 b,c가 된다.</br> 두개 이상의 객체 데이터를 하나의 객체 데이터로 만들고 싶다면 대상객체를 {} 처리해준다| const target = Object.assign(userAge, userEmail)</br>const target = Object.assign({},userAge, userEmail)
.keys | 객체 데이터의 key들만 추출되서 새로운 배열데이터가 된다 | const keys = Object.keys(user)</br>console.log(keys)</br> = ['name', 'age', 'email'] </br> console.log(user['email'])</br> = tlzma789@naver.com
