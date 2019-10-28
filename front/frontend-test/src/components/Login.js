import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { inject, observer } from "mobx-react";
import { useHistory } from "react-router-dom";


@inject('mobxStore')
@observer
class Login extends Component {
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
          </div>
          <Button variant="contained" color="primary" style={{ margin: '5px' }} onClick={onLogin}>
            Login
          </Button>
          <RegisterButton />
        </div>
      </ThemeProvider >
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

function onLogin() {

  alert('Log me in');
}

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