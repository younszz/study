import { useEffect, useState } from "react";

const useTitle = (innitialTitle) => {
  const [title, setTitle] = useState(innitialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title")
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const Title = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000)
  return (
    <div>
    </div>
  )
}

export default Title;