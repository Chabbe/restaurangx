import React from "react";


export default function Confirmation(){


    return(
        <div className="container-fluid ty-page">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-8 col-lg-8 text-center text-wrapper">
                    <h1 id="thanks">Thanks for your reservation</h1>
                    <span className="email-info">We have sent you an email with information about your reservation.</span>
                    <br/>
                    <span className="changes-info">If you have and questions or if you wish to make any changes to your reservation please give us a call on 08-XXX XXX</span>
                </div>
            </div>
        </div>
    )

}