import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VirtualDrivetrain from './Components/VirtualDrivetrain';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<VirtualDrivetrain />, document.getElementById('root'));

serviceWorker.unregister()