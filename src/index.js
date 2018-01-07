import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const apiUrlPic = 'http://ludicrous-oval.glitch.me/api/imagesearch/';
const test = 'http://ludicrous-oval.glitch.me/api/imagesearch/pastries%20chocolate?ofsfset=1';

ReactDOM.render(<App url={apiUrlPic} />, document.getElementById('root'));
registerServiceWorker();
