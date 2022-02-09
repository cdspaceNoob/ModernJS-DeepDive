function add(x, y) {
    return x + y;
  }
  
  console.log(add(2, 5, 10)); // 7

  // * 10은 버려지는 것이 아니라, 암묵적으로 arguments 객체의 프로퍼티로 보관된다.
