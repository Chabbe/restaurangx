import React, { useState, ChangeEvent } from "react";
import TableModel from "../../models/tableModel";
import axios from "axios";


interface ITable {
  set: (tableObject: TableModel)=> void;
}

export default function Table(props: ITable) {
  const [tableObject, setTableObject] = useState({
    date: new Date(),
    time: 0,
    count: 0
  });

  // const [dateNumber, setDateNumber] = useState(0)

  // function availability(tableObject: TableModel) {
  //     axios.post("http://localhost:8000/table", tableObject).then((res)=> {



  //     })
  // }

  function updateTable(event: ChangeEvent<HTMLInputElement>) {
    setTableObject({
      ...tableObject,
      [event.target.name]: event.target.name === "date" ? new Date(event.target.value) :parseInt(event.target.value) 
    })
    props.set(tableObject);
    // availability(tableObject)
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

      <input type="radio" name="time" value="18" onChange={updateTable} />
      <input type="radio" name="time" value="21" onChange={updateTable} />

      <button type="button">
        Check if available
      </button>
    </div>
  );
}
