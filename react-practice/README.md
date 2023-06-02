# ReactJs
1. [JSX](##-JSX)
2. [useState](##-useState)
3. [props](##-props)
4. [useEffect](##-useEffect)


## JSX
---

- 자바스크립트 확장 문법으로 XML과 비슷하게 생겼음
- 코드를 작성할 때 마다 React.createElement 함수를 사용한다면 불편   
→ JSX를 사용하여 HTML과 같은 규칙으로 작성하고  
브라우저에서 실행되기 전 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환 

```JSX
//JSX
function App(){
	return (
		<div>
			Hello
		</div>
	);
}

//변환 후
function App(){
	return React.createElement("div", null, "Hello");
}
```

<details>
<summary>JSX 규칙</summary>
<div markdown="1">

- 감싸인 요소    

    컴포넌트 내부는 하나의 DOM트리 구조로 이루어져야한다   
    → 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있다
    
    ```JSX
    // 에러
    function App(){
    	return(
    		<h1>Hello</h1>
    		<h2>Hihi</h2>
    	);
    }
    
    // 성공
    function App(){
    	return(
    		<div>
    			<h1>Hello</h1>
    			<h2>Hihi</h2>
    		</div>
    	);
    }
    ```

- 태그 닫기
    
    ```JSX
    function App(){
    	return (
    		<div>
    			<input type="text />
    		</div>
    	);
    }
    ```
    

- 주석
    
    `{/* */}` 형식 사용
    
- JavaScript 표현

    자바스크립트 표현식을 작성하려면 JSX 내부에 `{ }` 사용
    
    ```jsx
    function App(){
    	const name = "youn";
    	return(
    		<div>
    			<h1>Hello {name}</h1>
    		</div>
    	);
    }
    
    export default App;
    ```

- 조건문
    
    JSX 내부의 JS표현식에서 if문 사용할 수 없다   
    { }안에 삼항 연산자와 AND연산자 사용
    
    ```jsx
    function App(){
    	const name = "youn";
    	return(
    		<div>
    			{name === 'youn' ? (
    				<h1>true</h1>
    			) : (
    				<h1>false</h1>
    			)}
    		</div>
    	);
    }
    
    function App(){
    	const name = "youn";
    	return(
    		<div>
    			{name === 'youn' && <h1>true</h1>} //false일땐 null
    		</div>
    	);
    }
    ```
    
- style
    
    인라인 방식(스타일 객체니까 중괄호 두번 `{{ }}`)   
    카멜 표기법으로 작성
    
    ```jsx
    function App(){
    	return (
    		<div
    			style={{
    				backgroundColor: "tomato",
    				color: "white",
    				fontSize: "20px"
    			}}
    		>
    			Hello
    		</div>;
    	);
    }
    
    //style 객체 미리 선언
    function App(){
    	const style = {
    		backgroundColor: "tomato",
    		color: "white",
    		fontSize: "20px"
    	};
    	return <div style={style}>Hello</div>;
    }
    ```

- class → className

    ```JSX
    function App(){
      return <div className="title">Hello</div>;
    }
    ```

</div>
</details>

## useState
---

- `const [data, setData] = React.useState(0)`   
data를 받아서 컴포넌트 안에서 이벤트 발생-> setData함수 호출   
데이터 업데이트시 HTML에서 업데이트 되는 부분만 리렌더링

- 배열 비구조화 할당

```jsx
const array = [1, 2];
const [one, two] = array; // one === 1, two === 2
```

- useState 함수가 호출되면 배열을 반환하는데   
배열의 첫 번째 원소는 현재상태값, 두 번째 원소는 상태를 설정하는 함수(setter함수)이다

  배열 비구조화 할당을 통해 이름을 자유롭게 정할수 있다

```jsx
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0); //counter의 기본값을 0으로 설정
  const onClick = () => setValue((prev) => prev + 1);
//함수에 파라미터를 넣어서 호출-> 전달받은 파라미터로 값이 바뀌고 컴포넌트 리렌더링

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
```

- useState 여러번 사용하기
    
    하나의 useState 함수는 하나의 상태 값만 관리할 수 있어서 컴포넌트에 관리해야 할 상태가 여러개 라면 useState를 여러 번 사용

```JSX
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}
```

## props
---

properties   
부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법

```jsx
function Btn({ text, big }) { //props.text의 단축(비구조화 할당 문법)
  return (
    <button
			style={{
				fontSize: big ? 18 : 16, //조건문 가능
			}}
		>
      {text}
    </button>
  );
}
function App() {
  return (
    <div>
      <Btn text="Save Changes" big={trun} />
      <Btn text="Continue" big={false} />
    </div>
  );
}
```

- propTypes
    - 컴포넌트의 필수 props를 지정하거나(isRequired)
    - props의 타입을 지정할때 사용
    - 코드는 유효하니까 ui내 에러는 나지 않지만 콘솔에 경고 메시지 출력됨
    - [propsType 종류](https://ko.legacy.reactjs.org/docs/typechecking-with-proptypes.html)

```jsx
import PropType from 'prop-types';

function Btn({ text, fontSize }) {
  return (
    <button style={{fontSize}}>
      {text}
    </button>
  );
}

Btn.propTypes = {
	text: PropType.string.isRequired,
	fontSize: PropType.number,
}
function App() {
  return (
    <div>
      <Btn text="Save Changes" fontSize={18} />
      <Btn text={14} fontSize={"Continue"} /> //타입 잘못 입력될 경우
    </div>
  );
}
```

## useEffect
---

리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정   
렌더링되고 난 직후마다 실행되는데 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행 조건 달라진다

```jsx
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("i run only once")
  }, **[]**); //두번째 파라미터를 빈 배열로 넣어주면 컴포넌트가 처음 나타날 때만 실행

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("i run when 'keyword' changes", keyword);
    }
  }, [keyword]) //배열 안에 검사하고 싶은 값 입력
				//keyword가 변화할 때만 실행

  useEffect(() => {
    console.log("t run when 'counter' changes")
  }, [counter]) //counter가 변화할 때만 실행

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}
```
