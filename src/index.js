import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const starship = document.getElementById("starship");

document.onmousemove = ev => {
    const positionX = (window.innerWidth / 2 - ev.x) / 4;
    const positionY = -ev.y / 5;
    // console.log(positionX, positionY);
    starship.style.transform = `translate(${positionX}px, ${positionY}px)`;
  };