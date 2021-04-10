import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Resr}

export default function Meal() {
  let { id } = useParams(); // We use the `useParams` hook here to access the dynamic pieces of the UR

  const [meal, setMeal] = useState({});

  useEffect(() => {
    //fetching specific meal with id
    fetch(`http://localhost:5000/api/meals/${id}`)
      .then((response) => response.json())
      .then((meal) => {
        setMeal(meal);
      });
  }, []);

  const createNewReservation = () => {
    fetch("http://localhost:5000/api/meals", {
      method: "POST",
      body: JSON.stringify({
        contactName,
        contactEmail,
        contactNumber,
        numberOfGuests,
      }),
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
          <button onClick={createNewReservation}>Book Reservation</button>
        </div>
      </main>
    </div>
  );
}
