import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SpeechProvider appId="3adf8136-8854-4388-8905-6318f21313a1" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>
);