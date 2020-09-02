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
    <div className="row">
      <div className="col-12 bg-light p-3">
        <div className="form-row">
          <div className="form-group col-12">
            <input
              type="text"
              name="firstname"
              placeholder="Firstname"
              className="form-control"
              onChange={updateGuest}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-12">
            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              className="form-control"
              onChange={updateGuest}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-12">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              onChange={updateGuest}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-12">
            <input
              type="tel"
              name="phonenr"
              placeholder="Phone number"
              className="form-control"
              onChange={updateGuest}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="form-check">
            <label htmlFor="gdprCheck" className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                id="gdprCheck"
              ></input>
              Jag godkänner hanteringeringen av mina personuppgifter
            </label>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={postReservation}
        >
          Make a reservation
        </button>
      </div>
    </div>
  );
}
