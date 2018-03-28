import React from 'react';

class NumbersBtn extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(num) {
    console.log(num);
  }
  render() {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <div className="number-btns">
        {numbers.map(num =>
          <button key={num} onClick={this.handleClick.bind(this, num)}>
            {num}
          </button>
        )}
      </div>
    );
  }
}

export default NumbersBtn;
