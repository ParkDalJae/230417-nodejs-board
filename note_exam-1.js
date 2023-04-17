function examOne(first, second) {
  //매개변수가 문자열일 경우, 다음과 같은 문자열이 나타나도록 작성하시오
  //"문자열 데이터를 입력하셨습니다."
  if (typeof first === "string" || typeof second === "string") {
    console.log("문자열 데이터를 입력하셨습니다." + 1);
  } else {
    return first + second;
  }
}
function examTwo(first, second, third) {
  //숫자여야만 실행되도록 타입을 확인하는 로직을 작성하시오
  if (
    typeof first === "number" &&
    typeof second === "number" &&
    typeof third === "number"
  ) {
    return first * second * third;
  } else {
    console.log("숫자가 아닌 값이 입력되었습니다." + 2);
  }
}
function examThree(str) {
  //문자열만 실행되도록 타입을 확인하는 로직을 작성하시오
  // length 프로퍼티를 사용하지 않고 길이값을 구하시오
  if (typeof str === "string") {
    let a = str.split("");
    let b = 0;
    for (let i in a) {
      b++;
    }
    return b;
  } else {
    console.log("문자열이 아닙니다.");
  }
}

function examFour(array) {
  //배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오
  if (Array.isArray(array)) {
    let a = array[0];
    for (let i in array) {
      if (array[i] < a) {
        a = array[i];
      }
    }
    return a;
  } else {
    return "배열아님";
  }
}
function examFive(array) {
  //배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
  if (Array.isArray(array)) {
    let a = 0;
    for (let i in array) {
      a += array[i];
    }
    return a;
  } else {
    return "배열아님";
  }
}

// console.log("hi");
console.log(examOne(2, 3)); //Question 1 덧셈 로직 만들기
console.log(examTwo(2, 3, 4)); //Question 2 곱셈 로직 만들기
console.log(examThree("hello")); //Question 3 문자열 길이 구하기
console.log(examFour([7, 6, 4, 2])); //Question 4 최솟값 판별하기
console.log(examFive([1, 2, 3, 4, 5, 6])); //Question 5 배열값 누산(총합)하기
