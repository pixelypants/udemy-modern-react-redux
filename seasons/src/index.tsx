import React, { Component } from "react";
import ReactDOM from "react-dom";

interface Props {}
interface State {
  lat?: number;
  errorMessage: string;
}

class App extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = { lat: undefined, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latatude: {this.state.lat}</div>;
    }

    return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));