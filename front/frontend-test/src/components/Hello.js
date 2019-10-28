import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { inject, observer } from "mobx-react";

@inject('mobxStore')
@observer
class Hello extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <h1 style={{ color: "red" }}>Hello, {this.props.mobxStore.name}</h1>
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