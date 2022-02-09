function add(x, y) {
    console.log(arguments);
    // Arguments(3) [2, 5, 10, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  
    return x + y;
  }
  
  add(2, 5, 10);

  // * [Arguments] { '0': 2, '1': 5, '2': 10 } 이런 식으로 보관된다
  // * 이후에 arguments 프로퍼티 목차에서 자세히 알 수 있다