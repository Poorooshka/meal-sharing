import React, { useState, useEffect } from "react";

export default function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/meals")
      .then((response) => response.json())
      .then(setMeals);
  }, []);

  return (
    <div>
      <header>
        <h1> Home </h1>
      </header>

      <main>
        {meals.map((meal) => (
          <div key={meal.id}>
            <h2>{meal.title}</h2>
            <p>{meal.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
