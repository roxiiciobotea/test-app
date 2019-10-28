import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      password: '',
      repeatedPassword: ''
    };
  }

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
              value={this.state.userName}
              onChange={e => this.setState({
                userName: e.target.value
              })}
            />
            <TextField
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              value={this.state.password}
              onChange={e => this.setState({
                password: e.target.value
              })}
            />
            <TextField
              label="Repeat password"
              type="password"
              margin="normal"
              variant="outlined"
              value={this.state.repeatedPassword}
              onChange={e => this.setState({
                repeatedPassword: e.target.value
              })}
            />
          </div>
          <Button variant="contained" color="primary" onClick={this.onRegister}>
            Register
      </Button>
        </div>
      </ThemeProvider>
    );
  }

  onRegister = () => {
    if (this.state.password === this.state.repeatedPassword) {
      fetch('http://localhost:7000/user', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "userName": this.state.userName,
          "userData": {
            "password": this.state.password
          }
        })
      }).then(response => {
        this.setState({
          userName: '',
          password: '',
          repeatedPassword: ''
        });

        this.props.history.push("/");
      });
    } else {
      alert("The passwords do not match");
    }
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff3d00',
    }
  },
});

export default withRouter(Register);