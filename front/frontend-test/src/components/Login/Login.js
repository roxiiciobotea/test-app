import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { inject, observer } from "mobx-react";

@inject('mobxStore')
@observer
class Login extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          {/* <TextField value={this.props.mobxStore.test} /> */}
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
          <Button variant="contained" color="primary" style={{ margin: '5px' }} onClick={onRegister}>
            Register
    </Button>
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


function onRegister() {
  alert('Register me as a new user');
  // => go to register page
}

export default Login;