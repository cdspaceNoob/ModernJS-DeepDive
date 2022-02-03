var person1 = {
  name: 'Lee'
};

var person2 = {
  name: 'Lee'
};

// * 일치 비교 연산자: ===는 변수에 저장되어 있는 값을 '타입 변환하지 않고 비교'한다.

console.log(person1 === person2); // ①
// * person1과 person2는 객체 리터럴 > 객체 리터럴은 평가될 때마다 새로운 객체를 생성한다.
// * person1과 person2가 가르키는 객체는 서로 다른 메모리에 저장된 별개의 정보다.
// * 따라서 false

console.log(person1.name === person2.name); // ②
// * person1.name과 person2.name은 값으로 평가되는 표현식이다.
// * 두 값은 모두 원시값 'lee'로 평가된다.
// * 따라서 True
