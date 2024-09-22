import React, { useState } from 'react';

const StateUpdate = () => {
  const [car, setCar] = useState({
    name: 'Ford',
    model: 'Mustang',
    year: 2024,
  });

  function nameChangeHandler(event) {
    setCar((c) => ({ ...c, name: event.target.value }));
  }

  function modelChangeHandler(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  function yearChangeHandler(event) {
    setCar((c) => ({ ...c, year: Number(event.target.value) }));
  }

  return (
    <div>
      <p>Your favourite Car is {car.name} {car.model} {car.year}</p>
      <input type='text' value={car.name} onChange={nameChangeHandler} /><br />
      <input type='text' value={car.model} onChange={modelChangeHandler} /><br />
      <input type='number' value={car.year} onChange={yearChangeHandler} /><br />
    </div>
  );
}

export default StateUpdate;
