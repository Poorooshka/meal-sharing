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

module.exports = router;
