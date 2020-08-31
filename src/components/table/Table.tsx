import React, { useState, ChangeEvent, useEffect } from "react";
import TableModel from "../../models/tableModel";
import axios from "axios";

interface ITable {
  set: (tableObject: TableModel) => void;
}

export default function Table(props: ITable) {
  const [tableObject, setTableObject] = useState({
    date: new Date(),
    time: 0,
    count: 0,
    id: 0,
    guestId: 0
  });

  useEffect(() => {
    props.set(tableObject);
  }, [tableObject, props]);

  function updateTable(event: ChangeEvent<HTMLInputElement>) {
    setTableObject({
      ...tableObject,
      [event.target.name]:
        event.target.name === "date"
          ? new Date(event.target.value)
          : parseInt(event.target.value),
    });
  }

  return (
    <div>
      <input type="date" name="date" onChange={updateTable} />

      <input type="radio" name="count" value="1" onChange={updateTable} />
      <input type="radio" name="count" value="2" onChange={updateTable} />
      <input type="radio" name="count" value="3" onChange={updateTable} />
      <input type="radio" name="count" value="4" onChange={updateTable} />
      <input type="radio" name="count" value="5" onChange={updateTable} />
      <input type="radio" name="count" value="6" onChange={updateTable} />

      <input type="radio" name="count" value="7" onChange={updateTable} />
      <input type="radio" name="count" value="8" onChange={updateTable} />
      <input type="radio" name="count" value="9" onChange={updateTable} />
      <input type="radio" name="count" value="10" onChange={updateTable} />
      <input type="radio" name="count" value="11" onChange={updateTable} />
      <input type="radio" name="count" value="12" onChange={updateTable} />

      <input type="radio" name="time" value="18" onChange={updateTable} />
      <input type="radio" name="time" value="21" onChange={updateTable} />

    </div>
  );
}
