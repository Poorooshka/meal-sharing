import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Reservation from "./Reservation";

export default function Meal() {
  let { id } = useParams(); // We use the `useParams` hook here to access the dynamic pieces of the UR

  const [meal, setMeal] = useState({});
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    //fetching specific meal with id
    fetch(`/api/meals/${id}`)
      .then((response) => response.json())
      .then((meal) => {
        setMeal(meal);
      });
  }, []);

  const checkAvailable = () => {
    fetch(`/api/meals/isavailable/${id}`)
      .then((response) => response.json())
      .then((available) => {
        setAvailable(available);
      });
  };

  return (
    <main className="container">
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
  );
}
