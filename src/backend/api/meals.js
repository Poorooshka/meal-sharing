const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const meals = await knex("meals").select("*");
    response.json(meals);
  } catch (error) {
    throw error;
  }
});

router.get("/isavailable/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const mealId = parseInt(request.params.id);
    const meals = await knex("meals").select("*").where({ id: mealId });
    console.log(request.params.id);

    const meal = await knex("reservations")
      .select("meal_id")
      .sum("number_of_guests")
      .groupBy("meal_id")
      .where({ meal_id: mealId });

    const total = Object.keys(meal[0])[1];
    //console.log(meal[0][total]);
    let available = false;

    if (meal.length > 0) {
      if (meals[0].max_reservations > meal[0][total]) {
        available = true;
      }
    } else {
      available = true;
    }

    response.json(available);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    console.log(request.body);
    const meal = await knex("meals").insert([
      {
        title: request.body.title,
        description: request.body.description,
        price: request.body.prices,
      },
    ]);
    response.json(meal);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const mealId = parseInt(request.params.id); // extracting id from what comes after / and converting it to number
    //console.log(typeof mealId);

    if (isNaN(mealId)) {
      response.status(400).json("ID should be number");
      throw error;
    }

    const meal = await knex("meals").where({ id: mealId });
    response.send(meal[0]);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
