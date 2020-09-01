import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

import TableModel from "../../models/tableModel";

export default function Filter(){
    const [filterDate, setfilterDate] = useState(new Date())

    function filterBookings(e: ChangeEvent <HTMLInputElement>){
        setfilterDate(new Date(e.target.value))
    }

    return(
        <div>
            <input type="date" name="date" onChange={filterBookings}></input>
        </div>
    )
};