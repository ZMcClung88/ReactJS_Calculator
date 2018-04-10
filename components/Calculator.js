import React from 'react';
import styles from '../public/style.css';
import CalcDisplay from './CalcDisplay';
import FunctionBtns from './FunctionBtns';
import NumberBtns from './NumberBtns';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(obj) {
    console.log('calc click', obj);
    this.setState({ display: obj });
  }

  render() {
    return (
      <div className="calculator-main">
        <h1>attempt number 2</h1>
        <CalcDisplay displayData={this.state.display} />
        <FunctionBtns />
        <NumberBtns onClick={this.handleClick} />
      </div>
    );
  }
}
export default Calculator;
