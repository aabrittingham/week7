import React, { Component } from "react";

class JumpRope extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumps: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>
          Jumps Skipped:
          {this.state.jumps}
        </h2>
        <button onClick={() => this.setState({ jumps: this.state.jumps + 1 })}>
          Jumps Skipped
        </button>
        <button onClick={() => this.setState({ jumps: 0 })}>
          Reset Counter
        </button>
      </div>
    );
  }
}

export default JumpRope;
