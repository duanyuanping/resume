import React from 'react';
import ReactDOM from 'react-dom';
import './resumeData';
import './index.css';
// import FirstStyle from './components/firstStyle';
import SecStyle from './components/secStyle';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SecStyle />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
