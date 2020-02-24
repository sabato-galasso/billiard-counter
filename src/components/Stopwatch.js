import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.pph = React.createRef();
    this.number = props ? props.number : 0;
  }

  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    price: 0
  };

  stopwatchCalc(sec) {
    const pph = this.getFieldFloatValue();
    return this.round((pph * sec) / 3600, 2);
  }

  round(n, dec) {
    let x = n * Math.pow(10, dec);
    x = Math.round(x);
    return (x / Math.pow(10, dec)).toFixed(dec);
  }

  getFieldFloatValue() {
    if (this.pph && this.pph.current != null && this.pph.current.value !== '') {
      return parseFloat(this.pph.current.value.replace(',', '.'));
    }
    return 0.0;
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  render() {
    const { timerTime } = this.state;
    const { number } = this.props;
    const seconds = `0${Math.floor(timerTime / 1000) % 60}`.slice(-2);
    const minutes = `0${Math.floor(timerTime / 60000) % 60}`.slice(-2);
    const hours = `0${Math.floor(timerTime / 3600000)}`.slice(-2);
    const price = this.stopwatchCalc(Math.floor(timerTime / 1000));
    return (
      <>
        <td>Tavolo {number + 1}</td>
        <td>
          <input
            name="price"
            ref={this.pph}
            defaultValue="10.00"
            min="0"
            type="text"
          />
        </td>
        <td>
          {' '}
          {hours} : {minutes} : {seconds}
        </td>
        <td className="w-150">
          {this.state.timerOn === false && this.state.timerTime === 0 && (
            <button
              type="button"
              className="btn btn-outline-success btn-lg btn-60 mr-3"
              onClick={this.startTimer}
            >
              <i className="fa fa-play"></i>
            </button>
          )}
          {this.state.timerOn === true && (
            <button
              type="button"
              className="btn btn-outline-danger btn-lg btn-60 mr-3"
              onClick={this.stopTimer}
            >
              <i className="fa fa-stop"></i>
            </button>
          )}
          {this.state.timerOn === false && this.state.timerTime > 0 && (
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg btn-60 mr-3"
              onClick={this.startTimer}
            >
              <i className="fa fa-play" />
            </button>
          )}
          {this.state.timerOn === false && this.state.timerTime > 0 && (
            <button
              type="button"
              className="btn btn-outline-danger btn-lg btn-60 mr-3"
              onClick={this.resetTimer}
            >
              <i className="fa fa-fast-backward"></i>
            </button>
          )}
        </td>
        <td>
          <h3>{price} €</h3>
        </td>
      </>
    );
  }
}

export default Stopwatch;
