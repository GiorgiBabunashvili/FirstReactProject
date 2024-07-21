import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";

import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import TabButtons from "./components/TabButtons.jsx";
import { useState } from "react";

function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Conepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
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
      </main>
    </div>
  );
}

export default App;
