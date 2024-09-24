import React, { useState } from "react";

const ArryofObj = () => {
  const [car, setCar] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [company, setcompany] = useState("");
  const [model, setmodel] = useState("");
  const [varient, setvarient] = useState("");

  function addCar() {
    const newCar = {
      year: 2000,
      company: "Ford",
      model: "Mustang",
      varient: "Sports",
    };
    setCar((c) => [...c, newCar]);
  }
  // function RemoveaCar(){
  //   setCar(c=>[...c, newCar ]);
  // }
  const RemoveCar = ()=>{
    
  }



  function carYear(e) {
    setYear(e.target.value);
  }
  function carCompany(e) {
    setcompany(e.target.value);
  }
  function carModel() {
    setmodel(e.target.value);
  }
  function carVarient() {
    setvarient(e.target.value);
  }

  return (
    <>
      <h2>List of cars</h2>
      <ul>
        {car.map((car, index) => (
          <li key={index}>
            {car.year} {car.company} {car.model} {car.varient}
            <button onClick={removeCar}>Remove Car</button>
          </li>
          
        ))}
      </ul>
      <input type="number" value={year} onChange={carYear} />
      <br />
      <input
        type="text"
        value={company}
        onChange={carCompany}
        placeholder="Enter the car Company"
      />
      <br />
      <input
        type="text"
        value={model}
        onChange={carModel}
        placeholder="Enter the car model"
      />
      <br />
      <input
        type="text"
        value={varient}
        onChange={carVarient}
        placeholder="Enter the car varient"
      />
      <br />
      <button onClick={addCar}>Add Car</button>
    </>
  );
};

export default ArryofObj;
