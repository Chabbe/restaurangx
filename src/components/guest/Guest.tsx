import React from "react";

export default function Guest(){

    function postReservation(){
        
    }

    return(
        <div>
            <input type="text" placeholder="firstname"/>
            <input type="text" placeholder="lastname"/>
            <input type="email" placeholder="email"/>
            <input type="tel" placeholder="phonenr"/>
            <button type="submit" onClick={postReservation}>Make a reservation</button>
        </div>
    );
}

