import React, { useState, ChangeEvent, useEffect } from "react";
import GuestModel from "../../models/guestModel";
import { Link } from "react-router-dom";

interface IGuest {
  // data: GuestModel[];
  set: (guestObject: GuestModel) => void;
  post: (guestObject: GuestModel) => void;
  setValidation: (message: string) => void;
  back: () => void;
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

  function validate(event: ChangeEvent<HTMLInputElement>) {
    switch (event.target.name) {
      case "firstname":
        if (event.target.value === "")
          props.setValidation("firstname is required");
        else if (event.target.value.length < 2)
          props.setValidation("firstname is invalid");
        else if (/\d/.test(event.target.value))
          props.setValidation("firstname can't include numbers");
        else props.setValidation("");
        break;
      case "lastname":
        if (event.target.value === "")
          props.setValidation("lastname is required");
        else if (event.target.value.length < 2)
          props.setValidation("lastname is invalid");
        else if (/\d/.test(event.target.value))
          props.setValidation("lastname can't include numbers");
        else props.setValidation("");
        break;
      case "email":
        if (event.target.value === "") props.setValidation("email is required");
        else if (
          !event.target.value.includes("@") ||
          !event.target.value.includes(".")
        )
          props.setValidation("email is invalid");
        else props.setValidation("");
        break;
      case "phonenr":
        if (event.target.value === "")
          props.setValidation("phonenumber is required");
        else if (event.target.value.length < 9 || event.target.value.length > 9)
          props.setValidation("phonenumber is invalid");
        else if (/[a-zA-Z]/g.test(event.target.value))
          props.setValidation("phonenumber can't include letters");
        else if (event.target.value[0].includes("0"))
          props.setValidation("phonenumber can't start with 0");
        else props.setValidation("");
        break;
      case "gdpr":
        if (!event.target.checked)
          props.setValidation("You have to accept to GDPR");
        else props.setValidation("");
        break;
      default:
        props.setValidation("");
    }
  }

  function postReservation() {
    props.post(guestObject);
  }

  return (
    <div className="guest col-12 p-3 m-0">
    <button type="button" onClick={props.back}>change when?</button>
      <div className="form-row">
        <div className="form-group col-12">
          <input
            type="text"
            name="firstname"
            placeholder="Firstname"
            className="form-control"
            onChange={updateGuest}
            onBlur={validate}
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
            onBlur={validate}
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
            onBlur={validate}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-1" id="phoneprefix">
          +46
        </div>
        <input
          type="tel"
          name="phonenr"
          placeholder="Phone number"
          className="form-control form-group col-11"
          onChange={updateGuest}
          onBlur={validate}
        />
      </div>

      <div className="form-group">
        <div className="form-check">
          <label htmlFor="gdprCheck" className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              id="gdprCheck"
              name="gdpr"
              onBlur={validate}
            ></input>
            Jag godkänner hanteringeringen av mina personuppgifter
          </label>
        </div>
      </div>
      <Link to="/cyal8ralig8r">
        <button
            type="button"
            className="btn btn-secondary"
            onClick={postReservation}
          >
            Make a reservation
          </button>
        </Link>
    </div>
  );
}
