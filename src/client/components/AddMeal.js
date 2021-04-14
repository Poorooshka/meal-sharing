import React, { useState } from "react";

const AddMeal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [maxReservations, setMaxReservations] = useState(0);

  const createNewMeal = () => {
    fetch("/api/meals", {
      method: "POST",
      body: JSON.stringify({ title, description, price, maxReservations }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setTitle("");
        setDescription("");
        setPrice(0);
        alert("Your meal was successfully added");
      });
  };

  return (
    <div>
      <h3>Interested To Become a Host?</h3>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>description</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Price</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(+e.target.value)} //+"10" equals 10- converting string to numbers
      />
      <label>Max Reservations</label>
      <input
        type="number"
        value={maxReservations}
        onChange={(e) => setMaxReservations(+e.target.value)} //+"10" equals 10- converting string to numbers
      />
      <button onClick={createNewMeal}>Create New meal</button>
    </div>
  );
};

export default AddMeal;
