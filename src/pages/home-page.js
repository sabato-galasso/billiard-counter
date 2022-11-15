import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Stopwatch from '../components/Stopwatch';
const names = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class Home extends Component {
  render() {
    return (
      <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Tavoli</th>
                <th scope="col">Importo /1h</th>
                <th scope="col">Timer</th>
                <th scope="col">Avvia/Ferma</th>
                <th scope="col">Prezzo</th>
              </tr>
            </thead>
            <tbody>
              {names.map(function(name, i) {
                return (
                  <tr key={i}>
                    <Stopwatch number={i} />
                  </tr>
                );
              })}
            </tbody>
          </table>
      </div>
    );
  }
}

export default withRouter(Home);
