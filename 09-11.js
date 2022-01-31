if ('')    console.log('1');
if (true)  console.log('2');
if (0)     console.log('3');
if ('str') console.log('4');
if (null)  console.log('5');

// 2 4
// 제어문(if문, for문) 또는 삼항 조건 연산자의 "조건식은 불리언 값으로 평가되어야" 한다
// 조건식의 평가값이 0이면 true 그렇지 아니하면 false

// [중요] JS엔진은 불리언 타입이 아닌 값을 Truthy값 또는 Falsy값으로 구분한다
// [중요] Truthy값은 true로, Falsy값은 false로 암묵적 타입 변환된다


