// Configuracion de tema principal

import { createMuiTheme } from 'material-ui/styles';
import { orange } from 'material-ui/colors';

export default createMuiTheme({

    typography: {        
        fontFamily: 'Work Sans, sans-serif'
    },
    palette: {
      primary: {
        main: orange[900]
      },
      secondary: {
        main: orange[500] 
      }
    }
});