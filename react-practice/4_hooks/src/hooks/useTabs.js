import { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section2"
  }
];

const useTabs = (initialTab, allTabs) => { //최상위에서만 Hook을 호출해야함
  
  const [currentIndex, setCurrentIndex] = useState(initialTab)
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};
const Tabs = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  )
}

export default Tabs;