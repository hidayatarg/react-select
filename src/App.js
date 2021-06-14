import React from "react";
import SelectBox from "./SelectBox";
import Select from "./Select"

import "./App.css";
import "./styles.css";


const options = [
  { value: "United States", id: 1 },
  { value: "Canada", id: 2 },
  { value: "Mexico", id: 3 },
  { value: "Japan", id: 4 }
];

function App() {
  return (
    <div className="App">
      <h1>Custom Select</h1>
      {/* <div style={{ margin: "16px", position: "relative" }} /> */}
      {/* <SelectBox items={options} /> */}
      <h1>2.Custom Select</h1>
      <Select options={options}/>

    </div>
  );
}

export default App
