import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Booking from "./Booking";

// test("Title Restaurang X should exist", () => {
//   const { getByText } = render(<Booking />);
//   const header = getByText(/Restaurang X/i);
//   expect(header).toBeInTheDocument();
// })

test("Booking form should exist", () => {
    const { container, getByPlaceholderText, getByLabelText } = render(<Booking/>);

    let input = container.querySelectorAll("input");

    let date = input[0];
    let timeOptionOne = input[1];
    let timeOptionTwo = input[2];
    // let timeOptionOne = getByLabelText("18.00");
    // let timeOptionTwo = getByLabelText("21.00"); Varför funkar inte detta?
    let count = container.querySelectorAll("select")[0];
    let firstname = getByPlaceholderText("Firstname");
    let lastname = getByPlaceholderText("Lastname");
    let email = getByPlaceholderText("Email");
    let phonenr = getByPlaceholderText("Phone number");

    expect(date).toBeInTheDocument();
    expect(timeOptionOne).toBeInTheDocument();
    expect(timeOptionTwo).toBeInTheDocument();
    expect(count).toBeInTheDocument();
    expect(firstname).toBeInTheDocument();
    expect(lastname).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phonenr).toBeInTheDocument();
    
});

test("Booking form functionality and post", () => {
    const { container, getByPlaceholderText, getByLabelText } = render(<Booking/>);

    let firstname = getByPlaceholderText("Firstname");
    let lastname = getByPlaceholderText("Lastname");
    let email = getByPlaceholderText("Email");
    let phonenr = getByPlaceholderText("Phone number");
    // let error = container.querySelector("p");

    fireEvent.change(firstname, { target: { value: "Hej"}});
    fireEvent.change(lastname, { target: { value: "Baberiba"}});
    fireEvent.change(email, { target: { value: "homer@simpson.mi"}});
    fireEvent.change(phonenr, { target: { value: "012345678"}});

    // expect(date).toHaveValue();
    expect(firstname).toHaveValue("Hej");
    expect(lastname).toHaveValue("Baberiba");
    expect(email).toHaveValue("homer@simpson.mi");
    expect(phonenr).toHaveValue("012345678");
    
    // expect(error).toHaveValue("No zero in phonenr");



});