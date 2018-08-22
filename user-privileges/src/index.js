import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WrappedApp from './App';
import registerServiceWorker from './registerServiceWorker';
import "./semantic-dist/semantic.min.css";

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
registerServiceWorker();
