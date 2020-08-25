import React, { useState, ChangeEvent } from "react";
import TableModel from "../../models/tableModel";


interface ITable {
  data: TableModel[];
}

export default function Table(props: ITable) {
  const [tableObject, setTableObject] = useState({
    date: new Date(),
    time: 0,
    count: 0,
  });

  // const [dateNumber, setDateNumber] = useState(0)

  function availability() {
    console.log(props.data)
  }

  function updateDate(event: ChangeEvent<HTMLInputElement>) {
    setTableObject({
      ...tableObject,
      [event.target.name]: new Date(event.target.value),
    });
  }

  function updateTime(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setTableObject({
      ...tableObject,
      [event.target.name]: parseInt(event.target.value),
    });
  }

  function updateCount(event: ChangeEvent<HTMLInputElement>) {
    setTableObject({
      ...tableObject,
      [event.target.name]: parseInt(event.target.value),
    });
  }

  return (
    <div>
      <input type="date" name="date" onChange={updateDate} />

      <input type="radio" name="count" value="1" onChange={updateCount} />
      <input type="radio" name="count" value="2" onChange={updateCount} />
      <input type="radio" name="count" value="3" onChange={updateCount} />
      <input type="radio" name="count" value="4" onChange={updateCount} />
      <input type="radio" name="count" value="5" onChange={updateCount} />
      <input type="radio" name="count" value="6" onChange={updateCount} />

      <input type="radio" name="time" value="18" onChange={updateTime} />
      <input type="radio" name="time" value="21" onChange={updateTime} />

      <button type="button" onClick={availability}>
        Check if available
      </button>
    </div>
  );
}
