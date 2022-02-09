function add(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
  }
  
  console.log(add(1, 2, 3)); // 6
  console.log(add(1, 2)); // 3
  console.log(add(1)); // 1
  console.log(add()); // 0

  // * 위처럼 길게 매개변수의 기본값을 잡아주는 것보다 아래처럼 작성하는 것이 더 편하다.
  // * 단, 아래와 같은 경우에는 1.매개변수에 인수가 전달되지 않았을 때, 2.undefined를 전달했을 때만 기본값으로 사용된다.

  function add(a = 0, b = 0, c = 0) {
      // * 매개변수의 기본값을 미리 할당했다.
    return a + b + c;
  }
  
  console.log(add(1, 2, 3)); // 6
  console.log(add(1, 2)); // 3
  console.log(add(1)); // 1
  console.log(add()); // 0
  // * 1.매개변수에 인수가 전달되지 않았을 때에 해당하며 0의 기본값을 가지고 연산됭었다.