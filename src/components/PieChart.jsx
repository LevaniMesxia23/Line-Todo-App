import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJs,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useContext } from "react"
import { MyContext } from "../App"

ChartJs.register(ArcElement, Title, Tooltip, Legend);

function PieChart() {
  
  const {tasks} = useContext(MyContext)
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        label: 'My Pie Chart',
        data: [300, 50, 100, 150], 
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'My Pie Chart',
      },
    },
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
