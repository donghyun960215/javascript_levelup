import _ from 'lodash'

import checkType from './getType'  
//default 로 되어 있는 경우 이름 지정없이 그냥 가져올수 있다.
//해당 js의 함수 이름이 필요 없다.  하나의 데이터만 내보낼 수 있다.
//해당 js 파일 확인

import {random, user} from './getRandom'
// import * as R from './getRandom'  // 한번에 다 가져올 때 * 사용 이름은 원하는걸로 가능
//이름이 필요한 함수의 데이터는 중괄호로 묶어서 가져와야한다.
// 이름이 있는 데이터는 몇개를 내보내도 상관없다.
//가져온 이름이 맘에 안들면 바꿀 수 있다 as 사용  {user as dong}
//해당 js 파일 확인

console.log(_.camelCase('the hello world'))
console.log(checkType([1, 2, 3]))
console.log(random(), random())
// console.log(R)