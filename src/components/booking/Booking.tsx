import React, { useEffect } from "react";
import axios from "axios";
import Guest from "../guest/Guest";
import Table from "../table/Table";
import TableModel from "../../models/tableModel";

export default function booking(){

    let bookings: TableModel[] = [];

    useEffect(() => {
      axios.get("http://localhost:8000").then((res) => {
        console.log(res.data);
        bookings = res.data;
      });
    }, []);

    return(

        <div>
            <form>
                <Guest></Guest>
                <Table data={bookings}></Table>
            </form>
        </div>

    )

}