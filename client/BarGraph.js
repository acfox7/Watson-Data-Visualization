import React from 'react';
import Chart from 'chart.js';
import styles from './Graph.module.css';
import pattern from 'patternomaly';

class BarGraph extends React.Component {
  constructor(props) {
    super(props);
    this.GraphRef = React.createRef();
  }
  componentDidMount() {
    const myGraphRef = this.GraphRef.current.getContext('2d');
    const labels = [];
    const data = [];

    Object.keys(this.props.totalData).forEach((key) => {
      labels.push(key);
      data.push(this.props.totalData[key]);
    });

    const newGraph = new Chart(myGraphRef, {
      type: 'bar',
      data: {
        labels: labels,
        // labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
          {
            label: 'Emotions',
            data: data,
            // data: [10, 20, 30, 40, 50]
            backgroundColor: [
              pattern.draw('dash', 'rgba(54, 162, 235, 0.2)'),
              pattern.draw('disc', 'rgba(255, 205, 86, 0.2)'),
              pattern.draw('zigzag', 'rgba(153, 102, 255, 0.2)'),
              pattern.draw('cross', 'rgba(75, 192, 192, 0.2)'),
              pattern.draw('square', 'rgba(255, 99, 132, 0.2)'),
            ],
            borderColor: [
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(153, 102, 255)',
              'rgb(75, 192, 192)',
              'rgb(255, 99, 132)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 20,
            bottom: 20,
          },
        },
        title: {
          display: true,
          text: this.props.title,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 0.05,
              },
            },
          ],
        },
      },
    });
  }
  render() {
    return (
      <div className={styles.graphContainer}>
        <canvas id="myGraph" ref={this.GraphRef}></canvas>
      </div>
    );
  }
}

export default BarGraph;
