// Import the required packages
import { Chart } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

// Create a canvas and add it to the document body
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// Create a scatter plot chart
const chart = new Chart(canvas, {
 type: 'scatter',
 data: {
    datasets: [
      {
        label: 'Scatter Dataset',
        data: [
          { x: -10, y: 0 },
          { x: 0, y: 10 },
          { x: 10, y: 5 },
          { x: 5, y: 15 }
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
 },
 options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
    },
    plugins: {
      annotation: {
        annotations: {
          line: {
            type: 'line',
            scaleID: 'y',
            value: 10,
            borderColor: 'red',
            borderWidth: 2
          }
        }
      }
    }
 }
});