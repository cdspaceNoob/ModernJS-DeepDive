// 단축평가를 사용하면 if문을 대체할 수 있다

// *done 변수에 무엇이 들어가느냐에 따라
var done = true;
var message = '';

// 주어진 조건이 true일 때
if (done) message = '완료';

// *아래의 할당문을 if문처럼 사용할 수 있게 된다
// if 문은 단축 평가로 대체 가능하다.
// done이 true라면 message에 '완료'를 할당
message = done && '완료';
console.log(message); // 완료