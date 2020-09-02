import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

import TableModel from "../../models/tableModel";

interface IFilter {
    sendData: (data: any) => void
}

export default function Filter(props: IFilter) {
    const [filterDate, setfilterDate] = useState(new Date())
    const [filterName, setFilterName] = useState({})
    
    useEffect(() => {
        axios.post("http://localhost:8000/filter", { date: filterDate }).then((res) => {
            props.sendData(res.data)
        });
    }, [filterDate])

    useEffect(()=> {
        axios.post("http://localhost:8000/findname", {filterName}).then((res) => {
            axios.post("http://localhost:8000/filter", {data: res.data.id}).then((res)=> {                
                props.sendData(res.data)
            })
        })
    }, [filterName])

    function filterBookings(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.name === "date") setfilterDate(new Date(e.target.value))
        else setFilterName({
            ...filterName,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <input type="date" name="date" onChange={filterBookings} />
            <input type="text" name="firstname" onChange={filterBookings} />
            <input type="text" name="lastname" onChange={filterBookings} />
        </div>
    )
};