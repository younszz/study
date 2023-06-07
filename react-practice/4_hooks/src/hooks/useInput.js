import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event; // === (const value = event.target.value)
    console.log(value)
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value)
    }
  }
  return { value, onChange }
}
const Input = () => {
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr. ", maxLen)
  return (
    <div>
      <input placeholder="Name" {...name} />
    </div>
  )
}

export default Input;