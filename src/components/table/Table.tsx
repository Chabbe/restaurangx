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
    guestId: 0,
  });

  useEffect(() => {
    props.set(tableObject);
  }, [tableObject]);

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
    <div className="row">
      <div className="col-12 bg-secondary p-3">
        <div className="form-row">
          <div className="form-group col-12">
            <input type="date" name="date" onChange={updateTable} />
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
        <label>1
        <input type="radio" name="count" value="1" onChange={updateTable} />
        </label>
        <label>2
        <input type="radio" name="count" value="2" onChange={updateTable} />
        </label>
        <label>3
        <input type="radio" name="count" value="3" onChange={updateTable} />
        </label>
        <label>4
        <input type="radio" name="count" value="4" onChange={updateTable} />
        </label>
        <label>5
        <input type="radio" name="count" value="5" onChange={updateTable} />
        </label>
        <label>6
        <input type="radio" name="count" value="6" onChange={updateTable} />
        </label>
        <label>7
        <input type="radio" name="count" value="7" onChange={updateTable} />
        </label>
        <label>8
        <input type="radio" name="count" value="8" onChange={updateTable} />
        </label>
        <label>9
        <input type="radio" name="count" value="9" onChange={updateTable} />
        </label>
        <label>10
        <input type="radio" name="count" value="10" onChange={updateTable} />
        </label>
        <label>11
        <input type="radio" name="count" value="11" onChange={updateTable} />
        </label>
        <label>12
        <input type="radio" name="count" value="12" onChange={updateTable} />
        </label>
      </div>
    </div>
  );
}
