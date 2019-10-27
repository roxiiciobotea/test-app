import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import { decorate } from 'mobx';
// import { inject, observer } from 'mobx-react';

class Register extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <div style={{ display: "grid" }}>
            <TextField
              label="Username"
              type="text"
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Repeat password"
              type="password"
              margin="normal"
              variant="outlined"
            />
          </div>
          <Button variant="contained" color="primary" onClick={onRegister}>
            Register
      </Button>
        </div>
      </ThemeProvider>
    );
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff3d00',
    }
  },
});

function onRegister() {
  alert('Register new user');
  // => go to register page
}

export default Register;