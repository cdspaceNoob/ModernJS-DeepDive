function add(x, y) {
  return x + y;
}

console.log(add(2));        // NaN
console.log(add('a', 'b')); // 'ab'

// ** JS는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.
// ** JS는 동적인 언어다. 따라서 JS 함수는 매개변수 타입을 사전에 지정(선언)할 수 없다.