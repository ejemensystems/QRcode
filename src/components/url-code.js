import React, { useState } from 'react';

const URLCode  = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.
    
    const [url, setUrl] =useState('');  //useState function create url and set url which allows for changes.

    const ShowUrl = (event) => {  //This function makes url whatever I set it at input.
        setUrl(event.target.value)
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    //To create functions for all I'm making use of useState and funtion calls.


    //Below I employed this form from bulma to create tabs for url.
    return (
        <div>
            <div className="field">
                <label className="label">URL</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput = {ShowUrl}/>
                </div>
                
            </div>

     
            <div>
                <QRCode value={url} size={256} />
            </div>{/**This creates the QR code, many properties like colour can be used. */}
       
   
      </div>
    )
}
    

export default URLCode;