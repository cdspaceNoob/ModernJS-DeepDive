var str = 'string';

// 문자열은 유사 배열이므로 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
console.log(str[0]); // s

// 원시 값인 문자열이 객체처럼 동작한다.
console.log(str.length); // 6
console.log(str.toUpperCase()); // STRING

// * 인덱스로 프로퍼티 값에 접근 가능하며 length 프로퍼티를 갖는다
// * 원시값을 객체처럼 사용하면 원시값을 감싸는 래퍼 객체로 자동 변환