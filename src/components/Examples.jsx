import TabButtons from "./TabButtons";
import { EXAMPLES } from "../data";
import { useState } from "react";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleClick = (selecteButton) => {
    setSelectedTopic(selecteButton);
  };

  let content = "Please click a button";
  if (selectedTopic) {
    content = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButtons
          onSelect={() => handleClick("components")}
          isSelected={selectedTopic === "components"}
        >
          Component
        </TabButtons>
        <TabButtons
          onSelect={() => handleClick("jsx")}
          isSelected={selectedTopic === "jsx"}
        >
          JSX
        </TabButtons>
        <TabButtons
          onSelect={() => handleClick("props")}
          isSelected={selectedTopic === "props"}
        >
          Props
        </TabButtons>
        <TabButtons
          onSelect={() => handleClick("state")}
          isSelected={selectedTopic === "state"}
        >
          State
        </TabButtons>
      </menu>
      {content}
    </section>
  );
};

export default Examples;
