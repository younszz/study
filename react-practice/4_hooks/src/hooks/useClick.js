import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if(typeof onClick !== "function"){
      return;
      }
    if(element.current){
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if(element.current){
        element.current.removeEventListener("click", onClick)
      }
    };
  }, []);
  return element;
}
const App = () => {
  const sayHello = () => console.log("say hello")
  const title = useClick(sayHello);
  return (
    <div>
      <h3 ref={title}>Click here</h3>
    </div>
  )
}

export default App;