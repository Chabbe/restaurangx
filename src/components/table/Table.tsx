import React, { useState, ChangeEvent, useEffect } from "react";
import TableModel from "../../models/tableModel";
import { ConnectionStates } from "mongoose";

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
    <div className="row">
      <div className="col-12 bg-secondary p-3">
        <div className="form-row">
          <div className="form-group col-12">
            <input
              type="date"
              name="date"
              onChange={updateTable}
              onBlur={validate}
            />
            <label htmlFor="time18">
              18:00
              <input
                type="radio"
                name="time"
                value="18"
                id="time18"
                onChange={updateTable}
              />
            </label>
            <label htmlFor="time21">
              21:00
              <input
                type="radio"
                name="time"
                value="21"
                id="time21"
                onChange={updateTable}
              />
            </label>
          </div>
        </div>
        <label>Count</label>
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
      </div>
    </div>
  );
}
