import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return (
    typeof duration !== "number" || typeof delay !== "number" ? undefined : element,
    { ref: element, style: { opacity: 0 } }
  )
};


const FadeIn = () => {
  const fadeIn1 = useFadeIn(1, 2);
  const fadeIn2 = useFadeIn(5, 10);
  return (
    <div>
      <h2 {...fadeIn1}>useFadeIn test...1</h2>
      <h2 {...fadeIn2}>useFadeIn test...2</h2>
    </div>
  );
}

export default FadeIn;