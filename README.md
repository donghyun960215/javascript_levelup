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
Math.abs(0) | 인수로 들오는 값의 절대값을 표현한다. | console.log('abs :',Math.abs(-12))
Math.min(1,2,3) | 인수로 들어온 숫자데이터중에 가장 작은 데이터 표현 | console.log('min:',Math.min(2, 8,))
Math.max(1,2,3) | 인수로 들어온 숫자데이터중에 가장 큰 데이터 표현 |console.log('max:',Math.max(2, 8))
Math.ceil(3.14) | 올림처리 | console.log('ceil:',Math.ceil(3.14))
Math.floor(3.14) | 내림처리 | console.log('floor:',Math.floor(3.14))
Math.round(3.74) | 반올림내림 처리 | console.log('round:',Math.round(3.14))
Math.random() | 랜덤 | console.log('random:',Math.random())



##

