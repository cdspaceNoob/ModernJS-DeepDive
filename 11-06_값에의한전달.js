var score = 80;
var copy = score; // * 여기서 copy는 80으로 평가된다

console.log(score); // 80
console.log(copy);  // 80

score = 100;

console.log(score); // 100
console.log(copy);  // ?

// * 마지막에는 80이 출력된다
// * "변수에 변수를 할당했을 때 무엇이 어떻게 전달되는가?"에 집중