import React, { useState, ChangeEvent, useEffect, KeyboardEvent } from "react";
import TableModel from "../../models/tableModel";

interface ITable {
  set: (tableObject: TableModel) => void;
  setValidation: (message: string) => void;
}

export default function Table(props: ITable) {
  const [tableObject, setTableObject] = useState({
    date: new Date(),
    time: 0,
    count: 0,
    id: 0,
    guestId: 0,
  });

  useEffect(() => {
    props.set(tableObject);
  }, [tableObject]);

  function checkDate(event: KeyboardEvent<HTMLInputElement>) {
    if (!/\d/.test(event.key)) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  function updateTable(event: ChangeEvent<any>) {
    setTableObject({
      ...tableObject,
      [event.target.name]:
        event.target.name === "date"
          ? new Date(event.target.value)
          : parseInt(event.target.value),
    });
  }

  function validate(event: ChangeEvent<HTMLInputElement>) {
    const currentDate = new Date().toDateString().slice(4, 15);

    const selectedDate = new Date(event.target.value);

    if (selectedDate < new Date(currentDate))
      props.setValidation("invalid date");
    else props.setValidation("");
  }

  return (
    <div className="form-group col-12">
      <div className="row date justify-content-center">
        <h1>Which day?</h1>
        <input
          type="text"
          name="date"
          id="dateYear"
          className="dateInput"
          placeholder={new Date().toString().slice(11,15)}
          onKeyPress={checkDate}
          onChange={updateTable}
          onBlur={validate}
          autoComplete="none"
          /><p>-</p>
        <input
          type="text"
          name="date"
          className="dateInput"
          placeholder={(new Date().getMonth()+1) < 10 ? "0"+(new Date().getMonth()+1).toString() : (new Date().getMonth()+1).toString()}
          onKeyPress={checkDate}
          onChange={updateTable}
          onBlur={validate}
          autoComplete="none"
          /><p>-</p>
        <input
          type="text"
          name="date"
          className="dateInput"
          placeholder={new Date().toString().slice(8,10)}
          onKeyPress={checkDate}
          onChange={updateTable}
          onBlur={validate}
          autoComplete="none"
          />
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
          Count
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
    </div>
  );
}
