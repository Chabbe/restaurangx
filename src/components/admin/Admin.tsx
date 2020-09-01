import React, { useState, useEffect } from "react";
import axios from "axios";
import TableModel from "../../models/tableModel";
import GuestModel from "../../models/guestModel";

export default function Admin() {
    const [booking, setBooking] = useState([])

    axios.get("http://localhost:8000/table").then((res) => {
        setBooking(res.data)

    })

    return (
        <div >
            <ul>
                {booking.map((b: TableModel, index) => {
                    return <li key={index}>{b.count} {(b.date).toString().slice(0, 10)} {b.time}:00</li>
                })}
            </ul>
        </div>
    )
}