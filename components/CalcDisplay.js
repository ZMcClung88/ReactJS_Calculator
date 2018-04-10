import React from 'react';

class CalcDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>
          {this.props.displayData}
        </h1>
      </div>
    );
  }
}

export default CalcDisplay;
