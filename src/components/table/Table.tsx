import React, { useState, ChangeEvent, useEffect } from "react";
import TableModel from "../../models/tableModel";
import axios from "axios";
import { table } from "console";

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

  return (
    <div>
      <input type="date" name="date" onChange={updateTable} />
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


      <input type="radio" name="time" value="18" onChange={updateTable} />
      <input type="radio" name="time" value="21" onChange={updateTable} />

    </div>
  );
}
