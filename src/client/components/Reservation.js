import React, { useState, useEffect } from "react";

export default function AddReservation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [guests, setGuests] = useState(0);

  return (
    <div>
      <h3>Make a reservation</h3>
      <label>Contact Name</label>
      <input
        type="text"
        value={contactName}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Contact Email</label>
      <input
        type="text"
        value={contactEmail}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Contact Number</label>
      <input
        type="number"
        value={contactNumber}
        onChange={(e) => setNumber(+e.target.value)} //+"10" equals 10- converting string to numbers
      />
      <input
        type="number"
        value={numberOfGuests}
        onChange={(e) => setGuests(+e.target.value)} //+"10" equals 10- converting string to numbers
      />
      <button onClick={}>Create New meal</button>
    </div>
  );
}
