import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import UserSignupPage from './Pages/UserSignupPage'
import Bootstrapt from './Bootstrapt.scss'
console.log(Bootstrapt);

ReactDOM.render(
  <React.StrictMode>
    <UserSignupPage />
  </React.StrictMode>,
  document.getElementById('root')
);

