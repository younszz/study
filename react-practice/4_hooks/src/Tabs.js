import useTabs from "./hooks/useTabs";


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

export default function Tabs(){

  const { currentItem, changeItem } = useTabs(0, content);

  return (
      <div>
        <h2>useTabs</h2>
        {content.map((section, index) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
        <div>{currentItem.content}</div>
      </div>
  );
};