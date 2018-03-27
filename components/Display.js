import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 420
    };
  }
  render() {
    return (
      <div className="number-display">
        <h1>
          {this.state.display}
        </h1>
      </div>
    );
  }
}

export default Display;
