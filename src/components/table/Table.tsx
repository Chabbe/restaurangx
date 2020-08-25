import React from "react";
import TableModel from "../../models/tableModel";


interface ITable{
    data: TableModel[];
}

export default function table(props: ITable){

    function availability(){
        
        console.log();
    }

    return(
        <div>
            <input type="date"/>
            <select name="count" id="select-count">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            <input type="radio" name="time" value="18.00"/>
            <input type="radio" name="time" value="21.00"/>
            <button type="button" onClick={availability}>Check if available</button>
        </div>
    );
}