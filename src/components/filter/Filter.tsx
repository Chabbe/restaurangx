import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import TableModel from "../../models/tableModel";

interface IFilter {
  sendData: (data: TableModel) => void;
  reset: () => void;
}

export default function Filter(props: IFilter) {
  const [filterDate, setfilterDate] = useState(new Date());
  const [filterName, setFilterName] = useState({});

  useEffect(() => {
    axios
      .post("http://localhost:8000/filter", { date: filterDate })
      .then((res) => {
        props.sendData(res.data);
      });
  }, [filterDate]);

  useEffect(() => {
    console.log("hej");
    axios.post("http://localhost:8000/findname", { filterName }).then((res) => {
      axios
        .post("http://localhost:8000/filter", { data: res.data.id })
        .then((res) => {
          props.sendData(res.data);
        });
    });
  }, [filterName]);

  function filterBookings(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "date") setfilterDate(new Date(e.target.value));
    else
      setFilterName({
        ...filterName,
        [e.target.name]: e.target.value,
      });
  }

  return (
    <div className="row justify-content-center ">
      <div className="col-10 mt-2">
        <form className="mt-5">
          <div className="form-row">
            <div className="form-group col-md-3">
              <input
                type="date"
                name="date"
                className="form-control"
                onChange={filterBookings}
              />
            </div>
            <div className="form-group col-md-4">
              <input
                type="text"
                name="firstname"
                className="form-control"
                placeholder="Firstname"
                onChange={filterBookings}
              />
            </div>
            <div className="form-group col-md-4">
              <input
                type="text"
                name="lastname"
                className="form-control"
                placeholder="Lastename"
                onChange={filterBookings}
              />
            </div>
            <div className="form-group col-md-1">
              <button className="admninBtn" type="button" onClick={props.reset}>
                reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
