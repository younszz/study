import { useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      runCb(true);
    }
  };
  const exitFull = () => {
    if (document.fullscreenElement !== null) 
      document.exitFullscreen();
      runCb(false);
    
  };
  return { element, triggerFull, exitFull };
};


const Fullscreen = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div>
      <div ref={element}>
        <img
          ref={element}
          src="https://i.ibb.co/R6RwNxx/grape.jpg"
          alt="grape"
          width="250"
          style={{display: "block"}}
        />
        <button onClick={exitFull}>exit full screen</button>
      </div>
      <button onClick={triggerFull}>make full screen</button>
    </div>
  );
};

export default Fullscreen;