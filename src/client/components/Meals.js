import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [maxReservations, setMaxReservations] = useState(0);

  useEffect(() => {
    fetch("/api/meals")
      .then((response) => response.json())
      .then((meals) => setMeals(meals));
  }, []);

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
        window.location.reload();
      });
  };

  return (
    <main>
      {meals &&
        meals.map((meal) => (
          <div key={meal.id}>
            <h2>{meal.title}</h2>
            <p>{meal.description}</p>
            <Link to={`/meals/${meal.id}`}>Details</Link>
          </div>
        ))}

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
    </main>
  );
}
