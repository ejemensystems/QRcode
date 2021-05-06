import React from 'react';
import './App.css';
import EmailCode from './components/email-code';
import SMSCode from './components/sms-code';
import URLCode from './components/url-code';

const app = () => {
  return (
    <div class="Container">
      <div class="Column1">
        <EmailCode />
      </div>
      <div class="Column2">
        <SMSCode />
      </div>
      <div class="Column3">
        <URLCode />
      </div>
    </div>
  );
}

export default app;