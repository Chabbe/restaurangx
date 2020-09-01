import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

import TableModel from "../../models/tableModel";

interface IFilter{
    sendData: (data: any)=> void 
}

export default function Filter(props: IFilter){
    const [filterDate, setfilterDate] = useState(new Date())
  
     useEffect(()=>{
         console.log(filterDate)
         axios.post("http://localhost:8000/filter", {date: filterDate}).then((res) => {
              props.sendData(res.data)
         });
    }, [filterDate])

    function filterBookings(e: ChangeEvent <HTMLInputElement>){
        setfilterDate(new Date(e.target.value))
    
    }

    return(
        <div>
            <input type="date" name="date" onChange={filterBookings}></input>
        </div>
    )
};