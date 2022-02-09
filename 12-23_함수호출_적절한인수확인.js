function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      // 매개변수를 통해 전달된 인수의 타입이 부적절한 경우 에러를 발생시킨다.
      // * 이처럼 함수 내에 미리 타입에 대한 검증 표현식을 거쳐서 인수가 적절한지 판단할 수 있다.
      throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
    }
  
    return x + y;
  }
  
  console.log(add(2));        // TypeError: 인수는 모두 숫자 값이어야 합니다.
  console.log(add('a', 'b')); // TypeError: 인수는 모두 숫자 값이어야 합니다.

  