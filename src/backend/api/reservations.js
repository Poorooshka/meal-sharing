router.post("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    console.log(request.body);
    const reservataion = await knex("reservations").insert(request.body);
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});
