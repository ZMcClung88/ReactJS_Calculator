import React from 'react';

class NumberBtns extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    // console.log('button value', event.target.value);
    event.preventDefault();
    let value = event.target.value;
    this.props.onClick(value);
  }

  render() {
    return (
      <div>
        <button label={'0'} value="0" onClick={this.onClick}>
          0
        </button>
        <button label={'1'} value="1" onClick={this.onClick}>
          1
        </button>
        <button label={'2'} value="2" onClick={this.onClick}>
          2
        </button>
        <button label={'3'} value="3" onClick={this.onClick}>
          3
        </button>
        <button label={'4'} value="4" onClick={this.onClick}>
          4
        </button>
        <button label={'5'} value="5" onClick={this.onClick}>
          5
        </button>
        <button label={'6'} value="6" onClick={this.onClick}>
          6
        </button>
        <button label={'7'} value="7" onClick={this.onClick}>
          7
        </button>
        <button label={'8'} value="8" onClick={this.onClick}>
          8
        </button>
        <button label={'9'} value="9" onClick={this.onClick}>
          9
        </button>
      </div>
    );
  }
}

export default NumberBtns;
