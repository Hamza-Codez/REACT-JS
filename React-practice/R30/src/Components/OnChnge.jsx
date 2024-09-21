import React, { useState } from "react";

const OnChange = () => {
  const [name, setName] = useState("Guest");
  const [qty, setQty] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("Payoneer");
  const [shipping, setShipping] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleQtyChange = (event) => setQty(event.target.value);
  const handleCommentChange = (event) => setComment(event.target.value);
  const handlePaymentChange = (event) => setPayment(event.target.value);
  const handleShippingChange = (event) => setShipping(event.target.value);

  return (
    <div>
      <p>Name: {name}</p>
      <input value={name} onChange={handleNameChange} />

      <p>Quantity: {qty}</p>
      <input
        value={qty}
        onChange={handleQtyChange}
        type="number"
      />

      <p>Leave a Comment: {comment}</p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Any additional information about the package to be delivered"
      />

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an Option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="Payoneer">Payoneer</option>
        <option value="Swift">Swift</option>
      </select>
      <p>Set Payment Method: {payment}</p>

      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Delivery Mode: {shipping}</p>
    </div>
  );
};

export default OnChange;
