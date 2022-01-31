var person = {
    firstName: 'Ung-mo', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
    'last-name': 'Lee'   // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
  };
  
  console.log(person); // {firstName: "Ung-mo", last-name: "Lee"}

  // * 자바스크립트 엔진은 따옴표를 생략한 last-name을 '-'연산자를 포함한 표현식으로 해석한다