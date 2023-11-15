import React from "react";
import ColorPicker from "./colorpicker";
import "./App.css";

function App() {
  const colors = [
    "red",
    "lime",
    "blue",
    "yellow",
    "magenta",
    "cyan",
    "orange",
    "purple",
    "pink",
    "green",
    "#f56044",
    "cyan",
    "brown",
    "#ff8c04",
    "#4884b4",
    "#ffd404",
  ];

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;