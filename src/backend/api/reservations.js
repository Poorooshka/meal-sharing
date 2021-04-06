const { response } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const reservations = await knex("reservations");
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    console.log(request.body);
    await knex("reservations").insert(request.body);
    response.status(200).json("successful");
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const reservationId = parseInt(request.params.id);

    if (isNaN(reservationId)) {
      response.status(400).json("ID should be a number");
      throw error;
    } else {
      const selectedReservation = await knex("reservations").where({
        id: reservationId,
      });
      response.send(selectedReservation);
    }
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const reservationId = parseInt(request.params.id);

    if (isNaN(reservationId)) {
      response.status(400).json("ID should be a number");
      throw error;
    } else {
      await knex("reservations")
        .where({ id: reservationId })
        .update(request.body);
    }
    response.status(200).json("successful");
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const reservationId = parseInt(request.params.id);

    if (isNaN(reservationId)) {
      response.status(400).json("ID should be a number");
      throw error;
    } else {
      await knex("reservations").where({ id: reservationId }).delete();
    }
    response.status(200).json("successful");
  } catch (error) {
    throw error;
  }
});
module.exports = router;
