# Chapter3. Function

> 함수를 사용해 대규모 프로그램을 구성할 수 있고 반복을 줄일 수 있다.



[toc]

## 1. 함수 정의

function이라는 키워드로 시작하는 표현식

매개변수와 본문이 있으며 함수가 호출될 때 실행할 구문이 포함됨

매개변수를 가질수도 있고 없을수도 있음

```javascript
const makeNoise = function(){
  console.log)('Pling!');
}
// 매개변수가 없음

const power = function(base, exponent){
  let result = 1;
  for(let count = 0; count < exponent; count++){
    result *= base;
  }
  return result;
}
// 매개변수가 있음
```

makeNoise 함수와 같은 경우나 return 키워드 다음에 표현식이 없는 경우에는 함수에서 undefined를 반환



## 2. 바인딩과 범위(Binding and Scope)

모든 바인딩에는 Scope가 존재(Scope는 바인딩을 식별할 수 있는 프로그램의 영역)

> **global binding** : 함수나 블록 외부에서 정의한 바인딩. 어디서든지 참조 가능
>
> **local binding** : 함수의 매개변수나 함수 안에서 정의한 바인딩. 함수 내부에서만 참조 가능. 이 바인딩은 함수가 호출될 때마다 새 인스턴스가 생성됨

*let과 const로 선언한 binding은 binding이 선언된 블록까지가 지역 범위이므로 반복문 내부에서 선언하면 반복문 앞뒤의 코드에서는 이 바인딩을 식별할 수 없다.*

*하지만 var의 경우 전역 범위에서 식별 가능*

#### 2-1 범위중첩

자바스크립트에서는 global 바인딩과 local 바인딩을 구분

블록과 함수는 다른 블록과 함수의 내부에 생성할 수 있으며 여러단계의 지역성을 생성 가능

블록 내부에 있는 binding의 가시성은 해당 블록이 프로그램에서 어느 위치에 있느냐에 따라 결정

모든 local scope에서는 해당 scope에 포함된 모든 local scope의 binding을 식별하 수 있으며 모든 scope에서는 global scope의 binding을 식별할 수 있음. 이를 **lexical scoping**이라고 함



## 3. 함수 값

함수 바인딩은 일반적으로 프로그램의 특정 부분에 해당하는 이름을 통해 동작함

바인딩은 한 번 정의되면 절대 변경되지 않음

함수를 가지는 바인딩도 보통의 바인딩과 같으며 상수(const)가 아니라면 새로운 값을 할당할 수 있음



## 4. 선언 표기법

```javascript
function square(x){
  return x*x;
}	
```



## 5. 화살표 함수

```javascript
const power = (base, exponent) => {
  let result = 1;
  for(let cnt = 0; cnt < exponent; cnt++){
    result *= base;
  }
  return result;
}
```

함수 표현식을 장황하게 하지 않고 간결하게 작성할 수 있음

```javascript
const square = (x) => { return x * x };
// or
const square = (x) => x * x;
```



## 6. 호출 스택

함수가 반환될 떄 함수를 호출한 곳으로 돌아가야 하기 때문에 컴퓨터에서는 호출이 발생한 context를 저장

이러한 context를 저장하는 장소를 Call Stack이라고 함

1. 함수가 호출될 때마다 현재 context를 stack의 맨 위에 저장
2. 함수가 반환되면 stack에서 최상위 context를 꺼낸 후 해당 context를 실행

스택이 너무 많이 쌓이면 *out of stack space* or *too much recursion*



## 7. 선택적 인수

```javascript
function square(x){
  return x * x;
}
console.log(square(2, true, 'woo'));
// 정상적으로 4 출력
```

자바스크립트에서는 매개변수의 개수에 매우 관대함 > 추가로 전달된 매개변수는 무시함

반대로 매개변수가 부족하면 누락된 매개변수에 undefined값을 할당

but, 함수에 잘못된 개수의 인수를 전달할 가능성이 있음. 이를 이용해서 다양한 개수의 매개변수로 함수를 호출 가능

```javascript
function minus(a, b){
  if(b == undefined)
    return -a
  else
    return a - b
}
```



매개변수 다음에 **=** 연산자를 작성하고 그 뒤에 표현식을 작성하면 매개변수가 주어지지 않았을 때 해당 표현식의 값이 인수를 대체

```javascript
function power(base, exponent = 2){
  let result = 1;
  for(let cnt = 0; cnt < exponent; cnt++){
    result *= base;
  }
  rerturn result;
}

console.log(power(4))
// 16 출력
console.log(power(2, 6))
// 64 출력
```



## 8. 클로저



## 9. 재귀 함수



## 10. 함수의 발전



## 11. 함수와 부수효과



## 12. 요약

