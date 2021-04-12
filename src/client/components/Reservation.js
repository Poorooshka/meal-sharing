import React, { useState, useEffect } from "react";

export default function Reservation({ id }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [guests, setGuests] = useState(0);

  const saveReservation = () => {
    const reservation = {
      meal_id: id,
      number_of_guests: guests,
      contact_phonenumber: number,
      contact_name: name,
      contact_email: email,
    };
    //sending the reservation object to the backend
    fetch("/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservation),
    })
      .then((response) => response.json())
      .then((isAdded) => {
        if (isAdded) alert("reservation added");
      });
  };

  return (
    <div>
      <h3>Make a reservation</h3>
      <label>Contact Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Contact Email</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Contact Number</label>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(+e.target.value)} //+"10" equals 10- converting string to numbers
      />
      <input
        type="number"
        value={guests}
        onChange={(e) => setGuests(+e.target.value)} //+"10" equals 10- converting string to numbers
      />
      <button onClick={saveReservation}>save reservation</button>
    </div>
  );
}
