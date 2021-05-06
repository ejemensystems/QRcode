import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const EmailCode  = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.
    
    const [mail, setMail] =useState('');
    const [sub, setSub] =useState('');
    const [body, setBody] =useState('');

    const ShowMail    = (event) => {
        setMail(event.target.value)
    }

    const ShowSub    = (event) => {
        setSub(event.target.value)
    }

    const ShowBody    = (event) => {
        setBody(event.target.value)
    }   //useState function create url and set url which allows for changes.

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    //To create functions for all I'm making use of useState and funtion calls.


    //Below I employed this form from bulma to create tabs for email, body, subject, mail to and url.
    return (
        <div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" />
                </div>
            </div>

            <div className="field">
                <label className="label">Mail To</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput = {ShowMail}/>
                </div>
            </div>

            <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput = {ShowSub}/>
                </div>
            </div>

            <div className="field">
                <label className="label">Body</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput = {ShowBody}/>
                </div>
            </div>
            
            <div>
                <QRCode value={`mailto:${mail}?subject=${sub}&body=${body}`} size={256} />
            </div>
   
      </div>
    )
}
    
export default EmailCode;