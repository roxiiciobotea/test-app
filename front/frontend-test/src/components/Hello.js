import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class Hello extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Typography variant="h1" component="h2">
          Hello
        </Typography>
      </ThemeProvider >
    );
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff3d00',
    }
  }
});

export default Hello;