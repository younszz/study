# ReactJs

## react, react-dom import

<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>

<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>

## JSX

<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<script type="text/babel"></script>

브라우저가 JSX 코드를 이해할 수 있도록 변환하기 위해 Babel 사용

일반적인 HTML과 같은 규칙으로 코드 작성

`<h2 id="title" onMouseEnter={func}></h2>`

## React.useState()

`const [data, setData] = React.useState(0)`

data를 받아서 컴포넌트 안에서 이벤트 발생-> setData함수 호출

데이터 업데이트시 HTML에서 업데이트 되는 부분만 리렌더링
