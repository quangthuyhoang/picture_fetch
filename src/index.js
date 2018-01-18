import React from 'react';
import ReactDOM from 'react-dom';
// import TransitionGroup from 'react-transition-group/TransitionGroup';
import './main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const apiUrlPic = 'http://ludicrous-oval.glitch.me/api/imagesearch/';
var localpic = 'http://localhost:5000/api/pictures';
ReactDOM.render(<App local={localpic} url={apiUrlPic} />, document.getElementById('root'));
registerServiceWorker();
