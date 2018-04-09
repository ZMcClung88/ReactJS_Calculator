import React from 'react';
import styles from '../public/style.css';
import CalcDisplay from './CalcDisplay';
import FunctionBtns from './FunctionBtns';
import NumberBtns from './NumberBtns';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="calculator-main">
        <h1>attempt number 2</h1>
        <CalcDisplay />
        <FunctionBtns />
        <NumberBtns />
      </div>
    );
  }
}
export default Calculator;
