import React, { useState, ChangeEvent, useEffect, KeyboardEvent } from "react";
import TableModel from "../../models/tableModel";

interface ITable {
  set: (tableObject: TableModel) => void;
  overbooked: string;
}

export default function Table(props: ITable) {
  const [dateValidation, setDateValidation] = useState({
    validMsg: "",
    valid: false,
  });

  const [dateBlur, setDateBlur] = useState({
    year: false,
    month: false,
    day: false,
  });

  const [tableObject, setTableObject] = useState({
    date: new Date(),
    time: 0,
    count: 1,
    id: 0,
    guestId: 0,
  });

  const [dateTable, setDateTable] = useState({
    year: 0,
    month: 0,
    day: 0,
  });

  useEffect(() => {
    props.set(tableObject);
  }, [tableObject]);

  useEffect(() => {
    tableObject.date = new Date(
      dateTable.year,
      dateTable.month - 1,
      dateTable.day + 1
    );
  }, [dateTable]);

  useEffect(() => {
    for (const [key, value] of Object.entries(dateBlur)) {
      if (!value) return;
    }

    const currentDate = new Date().toDateString().slice(4, 15);

    const selectedDate = new Date(tableObject.date);

    if (selectedDate < new Date(currentDate))
      setDateValidation({ validMsg: "invalid date", valid: false });
    else setDateValidation({ validMsg: "", valid: true });
  }, [dateBlur]);

  function checkDate(event: KeyboardEvent<HTMLInputElement>) {
    if (!/\d/.test(event.key)) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  function updateTable(event: ChangeEvent<any>) {
    setTableObject({
      ...tableObject,
      [event.target.name]: parseInt(event.target.value),
    });
  }

  function updateDate(event: ChangeEvent<HTMLInputElement>) {
    setDateTable({
      ...dateTable,
      [event.target.name]: parseInt(event.target.value),
    });
  }

  function validation(event: ChangeEvent<HTMLInputElement>) {
    setDateBlur({
      ...dateBlur,
      [event.target.name]: true,
    });
  }

  return (
    <div className="form-group table col-12">
      <div className="row date justify-content-center">
        <h1>Which day?</h1>
        <input
          type="text"
          name="year"
          id="dateYear"
          className="dateInput"
          placeholder={new Date().toString().slice(11, 15)}
          onKeyPress={checkDate}
          onChange={updateDate}
          onBlur={validation}
          autoComplete="none"
        />
        <p>-</p>
        <input
          type="text"
          name="month"
          className="dateInput"
          placeholder={
            new Date().getMonth() + 1 < 10
              ? "0" + (new Date().getMonth() + 1).toString()
              : (new Date().getMonth() + 1).toString()
          }
          onKeyPress={checkDate}
          onChange={updateDate}
          onBlur={validation}
          autoComplete="none"
        />
        <p>-</p>
        <input
          type="text"
          name="day"
          className="dateInput"
          placeholder={new Date().toString().slice(8, 10)}
          onKeyPress={checkDate}
          onChange={updateDate}
          onBlur={validation}
          autoComplete="none"
        />
        <p id="invalid-date">{dateValidation.validMsg}</p>
        <p id="availability">{props.overbooked}</p>
      </div>
      <div className="row times justify-content-center">
        <h1>What time?</h1>
        <label htmlFor="time18">
          18:00
          <input
            type="radio"
            className="timeInput"
            name="time"
            value="18"
            id="time18"
            onChange={updateTable}
          />
          <span className="checkbox"></span>
        </label>
        <label htmlFor="time21">
          21:00
          <input
            className="timeInput"
            type="radio"
            name="time"
            value="21"
            id="time21"
            onChange={updateTable}
          />
          <span className="checkbox"></span>
        </label>
      </div>
      <div className="row count justify-content-center">
        <h1>How many?</h1>
        <label>
          <select name="count" value={tableObject.count} onChange={updateTable}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        </label>
      </div>
      <a href="#validation-msg">
        <button className="book-button" type="button">▼ Book a table ▼</button>
      </a>
    </div>
  );
}
