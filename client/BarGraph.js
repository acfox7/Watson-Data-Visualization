import React from 'react';
import Chart from 'chart.js';

class BarGraph extends React.Component {
  constructor(props) {
    super(props);
    this.GraphRef = React.createRef();
  }
  componentDidMount() {
    const myGraphRef = this.GraphRef.current.getContext('2d');
    const newGraph = new Chart(myGraphRef, {
      type: 'bar',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
          {
            label: 'First Dataset',
            data: [10, 20, 30, 40, 50],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {},
    });
  }
  render() {
    return (
      <div>
        <canvas id="myGraph" ref={this.GraphRef}></canvas>
      </div>
    );
  }
}

export default BarGraph;
