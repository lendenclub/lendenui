import ReactDOM from 'react-dom';
import './styles/index.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';

import routes from './routes';

injectTapEventPlugin();

ReactDOM.render(
    routes, // Load routes to the root DOM in index.html - routes.js
    document.getElementById('root')
);
