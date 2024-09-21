import React, { useState } from 'react';

const ColourPicker = () => {
  const [color, setColor] = useState('#000');

  const handleCChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className='color-picker-container flex items-center flex-col gap-3 font-sans'>
      <h1 style={{ color }} className="font-extrabold">
        Choose Your Color
      </h1>
      <h1>Color Picker: {color}</h1>
      <div
        className="color-display px-[3rem] py-[4rem] rounded-md"
        style={{ backgroundColor: color }}
      >
        Color Selected: {color}
      </div>
      <br />
      <label className='font-bold'>Select a Color</label>
      <input className='rounded-md' type="color" value={color} onChange={handleCChange} />
    </div>
  );
};

export default ColourPicker;
