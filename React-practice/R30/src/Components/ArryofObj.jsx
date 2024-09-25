import React from "react";
import { useState } from "react";
function ArrayOfObj() {
  const [car, setCar] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [company, setcompany] = useState("");
  const [model, setmodel] = useState("");
  const [varient, setvarient] = useState("");

  function addCar() {
    const newCar = {
      year: year,
      company: company,
      model: model,
      varient: varient,
    };

    setCar((car) => [...car, newCar]);
    setcompany("");
    setmodel("");
    setvarient("");
  }

  const RemoveHandler = (i) => {
    setCar((c) => c.filter((car, index) => index !== i));
  };

  return (
    <>
      <h2>List of cars</h2>

      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={company}
        onChange={(e) => setcompany(e.target.value)}
        placeholder="Enter the car Company"
      />
      <br />
      <input
        type="text"
        value={model}
        onChange={(e) => setmodel(e.target.value)}
        placeholder="Enter the car model"
      />
      <br />
      <input
        type="text"
        value={varient}
        onChange={(e) => setvarient(e.target.value)}
        
        placeholder="Enter the car varient"
      />
      <br />
      <button onClick={addCar}>Add Car</button>

      <ul>
        {car.length > 0 ? (
          car.map((car, index) => (
            <li key={index}>
              {car.year} {car.company} {car.model} {car.varient}
              <button onClick={() => RemoveHandler(index)}>Remove Car</button>
            </li>
          ))
        ) : (
          <li>No cars added yet.</li>
        )}
      </ul>
    </>
  );
}

export default ArrayOfObj;