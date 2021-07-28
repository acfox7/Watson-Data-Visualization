import React from 'react';
import BarGraph from './BarGraph';

class Main extends React.Component {
  render() {
    return (
      <div id="container">
        <header>
          <h1>Test Bar Graph</h1>
        </header>
        <BarGraph />
      </div>
    );
  }
}

export default Main;
