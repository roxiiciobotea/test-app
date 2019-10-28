import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { inject, observer } from "mobx-react";
import { useHistory } from "react-router-dom";
var base64 = require('base-64');

@inject('mobxStore')
@observer
class Login extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      password: ''
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
          </div>
          <Button variant="contained" color="primary" style={{ margin: '5px' }} onClick={this.onLogin}>
            Login
          </Button>
          <RegisterButton />
        </div>
      </ThemeProvider >
    );
  }

  onLogin = () => {
    if (this.state.userName !== "" && this.state.password !== "") {
      fetch('http://localhost:7000/authenticate', {
        method: 'get',
        headers: { 'Authorization': 'Basic ' + base64.encode(this.state.userName + ":" + this.state.password) }
      }).then(response => {
        if (response.status === 200) {
          this.props.mobxStore.name = this.state.userName;
          this.setState({
            userName: '',
            password: ''
          });
          this.props.history.push("/hello");
        } else {
          alert("Incorrect credentials");
        }
      });
    } else {
      alert("Please insert credentials first");
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

function RegisterButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/register");
  }

  return (
    <Button variant="contained" color="primary" style={{ margin: '5px' }} onClick={handleClick}>
      Register
    </Button>
  );
}

export default Login;