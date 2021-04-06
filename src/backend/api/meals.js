const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    console.log(request.query.maxPrice);

    const maxPrice = request.query.maxPrice;
    const maxReservation = request.query.availableReservations;
    const title = request.query.title;
    const createdAfter = request.query.createdAfter;
    const limit = request.query.limit;
    if (maxPrice) {
      const meals = await knex("meals").where("price", "<", maxPrice);
      response.json(meals);
    } else if (maxReservation) {
      const meals = await knex("meals").where("max_reservations", ">", 0);
      response.json(meals);
    } else if (title) {
      const meals = await knex("meals").where("title", "like", `%${title}%`);
      response.json(meals);
    } else if (createdAfter) {
      const mealDate = new Date(createdAfter);
      const meals = await knex("meals").where("created_date", ">", mealDate);
      response.json(meals);
    } else if (limit) {
      const meals = await knex("meals").limit(limit);
      response.json(meals);
    } else {
      const meals = await knex("meals");
      response.json(meals);
    }
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    //console.log(request.body);
    await knex("meals").insert(request.body); //inserting data from postman/client side into database
    response.status(200).json("successful"); //giving a message in postman response if the insertion to database was successful
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

    const selectedMeal = await knex("meals").where({ id: mealId });
    response.send(selectedMeal);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const mealId = parseInt(request.params.id);

    if (isNaN(mealId)) {
      response.status(400).json("ID should be number");
      throw error;
    }

    //console.log(request.body);

    await knex("meals").where({ id: mealId }).update(request.body);
    response.status(200).json("successful");
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const mealId = parseInt(request.params.id);
    console.log(typeof mealId);

    if (isNaN(mealId)) {
      response.status(400).json("ID should be number");
      throw error;
    }

    await knex("meals").where({ id: mealId }).del();
    response.status(200).json("successful");
  } catch (error) {
    throw error;
  }
});

module.exports = router;
