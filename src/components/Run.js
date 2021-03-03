import React, { Component } from "react";

class Run extends Component {
  constructor(props) {
    super(props);
    this.state = {
      miles: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>
          Miles Ran:
          {this.state.miles}
        </h2>
        <button onClick={() => this.setState({ miles: this.state.miles + 1 })}>
          Miles Ran
        </button>
        <button onClick={() => this.setState({ miles: 0 })}>
          Reset Counter
        </button>
      </div>
    );
  }
}

export default Run;
