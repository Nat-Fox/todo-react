import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import themes
import { MuiThemeProvider, CssBaseline} from 'material-ui'
import Theme from './theme'

// envolver app en el mui theme 
ReactDOM.render(<MuiThemeProvider theme={Theme}>
                  <App />
                </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
