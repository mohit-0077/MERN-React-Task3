import React, { useState } from "react";
import "./colorpicker.css";
function ColorPicker({ colors }) {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-picker">
        <div className="inner-box" style={{ backgroundColor: selectedColor }}>
          <div className="color-buttons">
            {colors.map((color, index) => (
              <button
                key={index}
                className="color-button"
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></button>
            ))}
          </div>
          <div className="text-container">
            <p className="text">Pick a color</p>
          </div>
        </div>
    </div>
  );
}

export default ColorPicker;