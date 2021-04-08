import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/meals")
      .then((response) => response.json())
      .then(setMeals);
  }, []);

  return (
    <div>
      <header>
        <h1> Meals </h1>
      </header>

      <main>
        {meals.map((meal) => (
          <div key={meal.id}>
            <h2>{meal.title}</h2>
            <p>{meal.description}</p>
            <Link to={`/meals/${meal.id}`}>Click here for more details</Link>
          </div>
        ))}
      </main>
    </div>
  );
}
