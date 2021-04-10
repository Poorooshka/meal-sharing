import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Reservation from "./Reservation";

export default function Meal() {
  let { id } = useParams(); // We use the `useParams` hook here to access the dynamic pieces of the UR

  const [meal, setMeal] = useState({});
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    //fetching specific meal with id
    fetch(`http://localhost:5000/api/meals/${id}`)
      .then((response) => response.json())
      .then((meal) => {
        setMeal(meal);
      });
  }, []);

  const checkAvailable = () => {
    fetch(`http://localhost:5000/api/meals/isavailable/${id}`)
      .then((response) => response.json())
      .then((available) => {
        setAvailable(available);
      });
  };

  return (
    <div>
      <header>
        <h1> Meal </h1>
      </header>
      <main>
        <div>
          <h2>{meal.title}</h2>
          <h3>Description: {meal.description}</h3>
          <h4> Price: {meal.price}</h4>
        </div>
        <div>
          <button onClick={checkAvailable}>Book Reservation</button>
        </div>
        {available && <Reservation id={id} />}
      </main>
    </div>
  );
}
