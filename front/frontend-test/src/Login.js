import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Login.css';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff3d00',
    }
  },
});

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function onLogin() {
  alert('Log me in');
}


function onRegister() {
  alert('Register me as a new user');
  // => go to register page
}

function Login() {
  const classes = useStyles();

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
        <Button variant="contained" color="primary" className={classes.margin} onClick={onLogin}>
          Login
    </Button>
        <Button variant="contained" color="primary" className={classes.margin} onClick={onRegister}>
          Register
    </Button>
      </div>
    </ThemeProvider>
  );
}

export default Login;