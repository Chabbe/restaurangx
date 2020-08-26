import React, { useState, ChangeEvent } from "react";
import GuestModel from "../../models/guestModel";

interface IGuest {
    // data: GuestModel[];
    post: (guestObject: GuestModel)=> void;
  }
  
export default function Guest(props: IGuest){

    const [guestObject, setGuestObject] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phonenr: 0,
    });
      
    function updateGuest(event: ChangeEvent<HTMLInputElement>){
      
        setGuestObject({
            ...guestObject,
                [event.target.name]: event.target.name === "phonenr"?  parseInt(event.target.value) : event.target.value
            });
        console.log(guestObject);
    }

    function postReservation(){

        console.log(guestObject);
        props.post(guestObject);
        
    }

    return(
        <div>
            <input type="text" name="firstname" placeholder="firstname" onChange={updateGuest}/>
            <input type="text" name="lastname" placeholder="lastname" onChange={updateGuest}/>
            <input type="email" name="email" placeholder="email" onChange={updateGuest}/>
            <input type="tel" name="phonenr" placeholder="phonenr" onChange={updateGuest}/>
            <button type="submit" onClick={postReservation}>Make a reservation</button>
        </div>
    );
    }