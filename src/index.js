import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './styles'
import './scripts'
import IndexView from './views/IndexView'

ReactDOM.render(<IndexView />, document.getElementById('root'));
registerServiceWorker();
