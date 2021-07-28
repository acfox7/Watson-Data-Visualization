import React from 'react';
import BarGraph from './BarGraph';
import styles from './Main.module.css';

class Main extends React.Component {
  render() {
    return (
      <div id="container">
        <header>
          <h1>Test Bar Graph</h1>
        </header>
        <div className={styles.graphsContainer}>
          <BarGraph />
          <BarGraph />
          <BarGraph />
          <BarGraph />
          <BarGraph />
          <BarGraph />
        </div>
      </div>
    );
  }
}

export default Main;
