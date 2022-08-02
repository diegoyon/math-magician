/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="grid">
        <input className="grid-item-0" type="input" placeholder="0" />

        <button className="grid-item-1" type="button">AC</button>
        <button className="grid-item-2" type="button">+/-</button>
        <button className="grid-item-3" type="button">%</button>
        <button className="grid-item-4" type="button">÷</button>

        <button className="grid-item-5" type="button">7</button>
        <button className="grid-item-6" type="button">8</button>
        <button className="grid-item-7" type="button">9</button>
        <button className="grid-item-8" type="button">x</button>

        <button className="grid-item-9" type="button">4</button>
        <button className="grid-item-10" type="button">5</button>
        <button className="grid-item-11" type="button">6</button>
        <button className="grid-item-12" type="button">-</button>

        <button className="grid-item-13" type="button">1</button>
        <button className="grid-item-14" type="button">2</button>
        <button className="grid-item-15" type="button">3</button>
        <button className="grid-item-16" type="button">+</button>

        <button className="grid-item-17" type="button">0</button>
        <button className="grid-item-18" type="button">.</button>
        <button className="grid-item-19" type="button">=</button>
      </div>

    );
  }
}

export default Calculator;
