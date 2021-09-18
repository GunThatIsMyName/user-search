import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_DOMAIN;
const clientID =process.env.REACT_APP_CLIENT;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
          domain={domain}
          clientId={clientID}
          redirectUri={window.location.origin}      
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
