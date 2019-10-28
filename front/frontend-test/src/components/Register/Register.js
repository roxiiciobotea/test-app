import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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

// const request = require("request");

function onRegister() {
  fetch('http://localhost:7000/user', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "userName": "test",
      "userData": {
        "name": "Jhonny",
        "surname": "Test",
        "password": "alabalaportocla"
      }
    })
  }).then(function (response) {
    console.log(response);
  });
}

export default Register;