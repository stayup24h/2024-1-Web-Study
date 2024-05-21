## JavaScript가 DOM에 어떻게 접근하고 작동될까?
```
DOM(Document Object Model): 페이지 일부만 업데이트 하여 동적으로 서버와 통신할 수 있게 됨, tree 자료구조
```
JavaScript 언어 자체는 DOM을 포함하지 않음. <br/>
브라우저에서 실행될때 WEB API를 이용해 DOM에 접근 가능 <br/>
다른 언어(C++, python 등)도 WEB API를 이용하면 DOM에 접근 가능

출처: https://www.freecodecamp.org/news/how-javascript-works-behind-the-scenes
## 브라우저를 이루는 컴포넌트 중, JavaScript Engine은 무엇이고 어떤 일을 할까?
JavaScript Engine은 JavaScript code를 실행하는 프로그램으로 JavaScript를 기계어로 변환하는 역할을 함.
- 파싱(Parsing): 엔진은 자바스크립트 코드를 AST (Abstract Syntax Tree) 라는 자료 구조로 파싱한다. 이 과정에서 구문 오류를 확인한다 <br/>
- 컴파일(Compilation): 엔진은 AST를 기계어로 컴파일한다. <br/>
- 실행(Excution): 기계어를 실행한다.
- 최적화 (Optimization): 엔진은 코드를 최적화 시켜주기도 한다.


## 브라우저를 이루는 컴포넌트 중, JavaScript Engine은 무엇이고 어떤 일을 할까?

inline CSS만 사용한다면 웹 페이지가 조금만 커져도 유지보수가 불편해진다. <br/> 
외부 CSS를 이용해 선택자 하나만 설정해주면 복수의 요소의 스타일을 설정할 수 있는데 inline은 그렇지 못한다. <br/>
CSS 속성의 중복, 재사용성이 떨어진다. <br/>
가독성이 떨어진다.