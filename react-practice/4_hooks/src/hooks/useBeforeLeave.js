import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {

  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) onBefore()

  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle)
  }, [])
}
const BeforeLeave = () => {
  const begForLife = () => console.log("plz dont leave");
  useBeforeLeave(begForLife);
  return (
    <div>
      <p>plz dont leave</p>
    </div>
  )
}
export default BeforeLeave;