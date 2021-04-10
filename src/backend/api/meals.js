const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const meals = await knex("meals").select("id", "title", "description");
    response.json(meals);
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

router.post("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    console.log(request.body);
    const reservataion = await knex("reservations").insert([
      {
        contact_name: request.body.contactName,
        contact_email: request.body.contactEmail,
        contact_number: request.body.contactNumber,
        number_of_guests: request.body.numberOfGuests,
      },
    ]);
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
