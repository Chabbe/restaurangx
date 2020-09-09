import React, { useState, ChangeEvent, useEffect } from "react";
import GuestModel from "../../models/guestModel";
import { Link } from "react-router-dom";

interface IGuest {
  // data: GuestModel[];
  set: (guestObject: GuestModel) => void;
  post: (guestObject: GuestModel) => void;
  setValidation: (message: string) => void;
  back: () => void;
  msg: string;
}

export default function Guest(props: IGuest) {
  const [guestObject, setGuestObject] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenr: 0,
  });

  const [err, setErr] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenr: "",
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
        if (event.target.value === "") {
          props.setValidation("firstname is required");
          setErr({
            ...err,
            firstname: "error",
          });
        } else if (event.target.value.length < 2) {
          props.setValidation("firstname is invalid");
          setErr({
            ...err,
            firstname: "error",
          });
        } else if (/\d/.test(event.target.value)) {
          setErr({
            ...err,
            firstname: "error",
          });
          props.setValidation("firstname can't include numbers");
        } else {
          setErr({
            ...err,
            firstname: "",
          });
          props.setValidation("");
        }
        break;
      case "lastname":
        if (event.target.value === "") {
          setErr({
            ...err,
            lastname: "error",
          });
          props.setValidation("lastname is required");
        } else if (event.target.value.length < 2) {
          setErr({
            ...err,
            lastname: "error",
          });
          props.setValidation("lastname is invalid");
        } else if (/\d/.test(event.target.value)) {
          setErr({
            ...err,
            lastname: "error",
          });
          props.setValidation("lastname can't include numbers");
        } else {
          setErr({
            ...err,
            lastname: "",
          });
          props.setValidation("");
        }
        break;
      case "email":
        if (event.target.value === "") {
          setErr({
            ...err,
            email: "error",
          });
          props.setValidation("email is required");
        } else if (
          !event.target.value.includes("@") ||
          !event.target.value.includes(".")
        ) {
          setErr({
            ...err,
            email: "error",
          });
          props.setValidation("email is invalid");
        } else {
          setErr({
            ...err,
            email: "",
          });
          props.setValidation("");
        }
        break;
      case "phonenr":
        if (event.target.value === "") {
          setErr({
            ...err,
            phonenr: "error",
          });
          props.setValidation("phonenumber is required");
        } else if (
          event.target.value.length < 9 ||
          event.target.value.length > 9
        ) {
          setErr({
            ...err,
            phonenr: "error",
          });
          props.setValidation("phonenumber is invalid");
        } else if (/[a-zA-Z]/g.test(event.target.value)) {
          setErr({
            ...err,
            phonenr: "error",
          });
          props.setValidation("phonenumber can't include letters");
        } else if (event.target.value[0].includes("0")) {
          setErr({
            ...err,
            phonenr: "error",
          });
          props.setValidation("phonenumber can't start with 0");
        } else {
          setErr({
            ...err,
            phonenr: "",
          });
          props.setValidation("");
        }
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
    <div className="guest col-12 p-0 m-0">
      <button className="goback-button" type="button" onClick={props.back}>
        change when?
      </button>
      <div id="validation-msg">
        <span>{props.msg}</span>
      </div>
      <div className="form-row firstname input-row">
        <input
          type="text"
          name="firstname"
          placeholder="Firstname "
          className={err.firstname + " form-control firstnameInput input-text"}
          onChange={updateGuest}
          onBlur={validate}
        />
      </div>
      <div className="form-row lastname input-row">
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          className={err.lastname + " form-control lastnameInput input-text"}
          onChange={updateGuest}
          onBlur={validate}
        />
      </div>
      <div className="form-row email input-row">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={err.email + " form-control emailInput input-text"}
          onChange={updateGuest}
          onBlur={validate}
        />
      </div>
      <div className="form-row phone input-row">
        <input
          type="tel"
          name="phonenr"
          placeholder="+46 phone number"
          className={
            err.phonenr + " form-control phoneInput input-text  form-group"
          }
          onChange={updateGuest}
          onBlur={validate}
        />
      </div>

      <div className="form-group">
        <div className="form-check gdprwrapper">
          <label htmlFor="gdprCheck" className="form-check-label checkboxLabel">
            <input
              className="form-check-input gdprcheckbox"
              type="checkbox"
              id="gdprCheck"
              name="gdpr"
              onBlur={validate}
            />
            <span>Jag godkänner hanteringeringen av mina personuppgifter</span>
          </label>
        </div>
      </div>
      <Link to="/cyal8ralig8r">
        <button
          type="button"
          className="make-reservation"
          onClick={postReservation}
        >
          Make a reservation
        </button>
      </Link>
    </div>
  );
}
