import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import Filter from "../filter/Filter"
import TableModel from "../../models/tableModel";

export default function Admin() {
    const [tableData, setTableData] = useState([]);
    const [updatedTable, setUpdatedTable] = useState({
        date: new Date(),
        time: 0,
        count: 0,
    });

    useEffect(() => {

        getTableData();

    }, []);

    function getTableData() {

        axios.get("http://localhost:8000/table").then((res) => {
            setTableData(res.data);
        });

    }

    function updateTable(event: ChangeEvent<HTMLInputElement>) {

        setUpdatedTable({
            ...updatedTable,
            [event.target.name]:
                event.target.name === "date"
                    ? new Date(event.target.value)
                    : parseInt(event.target.value),
        });

    }

    function unbook(id: number) {
        axios
            .delete("http://localhost:8000/unbook/" + id)
            .then(() => getTableData());
    }

    function editBooking(id: number) {
        axios.post("http://localhost:8000/availabilty", updatedTable).then((res) => {
            if (res.data.success) axios.put("http://localhost:8000/edit/" + id, updatedTable).then((res) => getTableData())
        })
    }

    function edit(id: number) {
        return (
            <div>
                <input
                    type="date"
                    name="date"
                    placeholder="date"
                    onChange={updateTable}
                />
                <input
                    type="text"
                    name="time"
                    placeholder="time"
                    onChange={updateTable}
                />
                <input
                    type="text"
                    name="count"
                    placeholder="count"
                    onChange={updateTable}
                />
                <button onClick={() => editBooking(id)}>edit</button>
            </div>
        );
    }

    function getData(data: any) {
        setTableData(data)
    };

    return (
        <div>
            <Filter sendData={getData}></Filter>
            <ul>
                {tableData.map((data: TableModel, index) => {
                    return (
                        <li key={index}>
                            id: {data.id} date: {data.date.toString().slice(0, 10)} time:{" "}
                            {data.time} count: {data.count} guestId: {data.guestId}
                            <button
                                onClick={() => {
                                    unbook(data.id);
                                }}
                            >
                                unbook
                            </button>
                            {edit(data.id)}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
