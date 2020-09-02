import React, { useState, ChangeEvent, useEffect } from "react";
import GuestModel from "../../models/guestModel";

interface IGuest {
  // data: GuestModel[];
  set: (guestObject: GuestModel) => void;
  post: (guestObject: GuestModel) => void;
}

export default function Guest(props: IGuest) {
  const [guestObject, setGuestObject] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenr: 0,
  });

  useEffect(() => {
    props.set(guestObject);
  }, [guestObject, props]);

  function updateGuest(event: ChangeEvent<HTMLInputElement>) {
    setGuestObject({
      ...guestObject,
      [event.target.name]:
        event.target.name === "phonenr"
          ? parseInt(event.target.value)
          : event.target.value,
    });
  }

  function postReservation() {
    props.post(guestObject);
  }

  return (
    <div>
      <input
        type="text"
        name="firstname"
        placeholder="firstname"
        onChange={updateGuest}
      />
      <input
        type="text"
        name="lastname"
        placeholder="lastname"
        onChange={updateGuest}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={updateGuest}
      />
      <input
        type="tel"
        name="phonenr"
        placeholder="phonenr"
        onChange={updateGuest}
      />
      <button type="button" onClick={postReservation}>
        Make a reservation
      </button>
    </div>
  );
}
