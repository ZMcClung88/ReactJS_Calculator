import React from 'react';

class FunctionBtns extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let value = event.target.value;
    console.log('function button', value);
    this.props.onClick(value);
  }
  render() {
    return (
      <div>
        <button label={'/'} value="/" onClick={this.handleClick}>
          /
        </button>
        <button label={'*'} value="*" onClick={this.handleClick}>
          *
        </button>
        <button label={'+'} value="+" onClick={this.handleClick}>
          +
        </button>
        <button label={'-'} value="-" onClick={this.handleClick}>
          -
        </button>
      </div>
    );
  }
}

export default FunctionBtns;
