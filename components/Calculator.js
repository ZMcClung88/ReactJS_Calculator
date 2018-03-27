import React from 'react';
import Display from './Display';
import NumbersBtn from './NumbersBtn';
import OperationsBtn from './OperationsBtn';
import styles from '../public/style.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-main">
        <Display />
        <div className="all-btns">
          <NumbersBtn />
          <OperationsBtn />
        </div>
      </div>
    );
  }
}
export default Calculator;
