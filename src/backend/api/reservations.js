const express = require("express");
const router = express.Router();
const knex = require("../database");

router.post("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    console.log(request.body);
    const reservataion = await knex("reservations").insert([
      {
        meal_id: request.body.meal_id,
        number_of_guests: request.body.number_of_guests,
        contact_phonenumber: request.body.contact_phonenumber,
        contact_name: request.body.contact_name,
        contact_email: request.body.contact_email,
      },
    ]);

    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
