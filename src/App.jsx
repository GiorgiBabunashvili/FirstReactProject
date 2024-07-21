import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";

import { CORE_CONCEPTS } from "./data.js";
import TabButtons from "./components/TabButtons.jsx";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");

  const handleClick = (selecteButton) => {
    setSelectedTopic(selecteButton);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Conepts</h2>
          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons onSelect={() => handleClick("component")}>
              Component
            </TabButtons>
            <TabButtons onSelect={() => handleClick("jsx")}>JSX</TabButtons>
            <TabButtons onSelect={() => handleClick("props")}>Props</TabButtons>
            <TabButtons onSelect={() => handleClick("state")}>State</TabButtons>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
