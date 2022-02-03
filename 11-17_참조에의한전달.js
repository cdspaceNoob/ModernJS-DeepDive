var person = {
    name: 'Lee'
  };
  
  // 참조값을 복사(얕은 복사). copy와 person은 동일한 참조값을 갖는다. // * 참조값이란 메모리 주소를 의미한다.
  var copy = person;
  
  // copy와 person은 동일한 객체를 참조한다. // * 메모리 주소를 따라가면 객체 정보를 얻을 수 있다.
  console.log(copy === person); // true
  
  // copy를 통해 객체를 변경한다.
  copy.name = 'Kim';
  
  // person을 통해 객체를 변경한다.
  person.address = 'Seoul';
  
  // copy와 person은 동일한 객체를 가리킨다.
  // * 따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 주고 받는다.
  // * 원시 값 자체를 복사하여 각각의 메모리에 할당하는 방식과 다르다.
  console.log(person); // {name: "Kim", address: "Seoul"}
  console.log(copy);   // {name: "Kim", address: "Seoul"}