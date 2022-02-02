// * 객체를 프로퍼티 값으로 갖는 객체의 경우
// * 얕은복사: 한 단계까지만 복사
// * 깊은복사: 객체에 중첩되어 있는 객체까지 모두 복사


const o = { x: { y: 1 } };

// 얕은 복사
const c1 = { ...o }; // 35장 "스프레드 문법" 참고 // * o의 개별값들을 목록화 
console.log(c1 === o); // false // * 완전히 동일하지 않다: 한 단계까지만 복사
console.log(c1.x === o.x); // true // * 프로퍼티 키에 대응하는 값들이 같다

// lodash의 cloneDeep을 사용한 깊은 복사
// "npm install lodash"로 lodash를 설치한 후, Node.js 환경에서 실행
const _ = require('lodash');
// 깊은 복사
const c2 = _.cloneDeep(o);
console.log(c2 === o); // false
console.log(c2.x === o.x); // false