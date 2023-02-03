const str ='Hello world'

/*
console.log(str.length)
length 사용시 문자열 갯수 확인 가능 
const str = '0123'
*/

/*
console.log(str.indexOf('world')) 
indexOf()메소드사용시 -1이 아닌 다른 숫자가 뜬다면 인수로 사용한 문자데이터가 대상의 문자데이터 안에 있다는 뜻
-1이 넘어오면 없다는 뜻

console.log(str.indexOf('world') !== -1) 
비교연산자를 사용하게 된다면 바로 false true 변환가능
*/

/*
console.log(str.slice(6,11))
문자열의 일부를 추출하면서 새로운 문자열을 반환한다
*/

/*
console.log(str.replace('world', 'dong'))
첫번째 인수에 있는 문자를 찾아서 두번째 인수에 있는 문자로 교체를 해준다.
*/

/*
const str1 = 'tlzma789@naver.com'
const result = str1.match(/.+(?=@)/)[0]
console.log(`${result}`)
console.log(str1.match(/.+(?=@)/)[0])
특정한문자데이터에서 정규식표현을 같이 사용하면서 특정한 문자를 매치시킬 수 있고 배열데이터[0]로 변환한다.
*/

/*
const str2 = '       Hello world   '
console.log(str2.trim())
공백제거
*/