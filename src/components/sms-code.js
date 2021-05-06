import React, { useState } from 'react';

const SMSCode = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [num, setNum] = useState('');
    const [message, setMessage] = useState('');

    const ShowNum = (event) => {           
        setNum(event.target.value)
    }      //useState function create url and set url which allows for changes.


    const ShowMessage = (event) => {
        setMessage(event.target.value)
    }

    //To create functions for all I'm making use of useState and funtion calls.


    //Below I employed this form from bulma to create tabs for name, email, department, age, subject, mail to and url.
    return (
        <div>
            <div className="field">
                <label className="label">Number</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={ShowNum} />
                </div>
            </div>

            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={ShowMessage} />
                </div>
            </div>

            <div>
                <QRCode value={`SMS:${num}:${message}`} size={256} />
            </div>

        </div>
    )
}


export default SMSCode;