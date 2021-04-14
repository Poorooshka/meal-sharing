import React, { useState, useEffect } from "react";

export default function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("/api/meals")
      .then((response) => response.json())
      .then(setMeals);
  }, []);

  return (
    <main>
      {meals.map((meal) => (
        <div key={meal.id}>
          <h2>{meal.title}</h2>
          <p>{meal.description}</p>
        </div>
      ))}
    </main>
  );
}
