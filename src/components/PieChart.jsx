import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJs,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useContext } from "react";
import { MyContext } from "../App";

ChartJs.register(ArcElement, Title, Tooltip, Legend);

function PieChart() {
  const { tasks } = useContext(MyContext);

  const completedTasks = tasks.filter(task => task.completed).length;
  const inProgressTasks = tasks.filter(task => !task.completed).length;
  const stuckTasks = tasks.filter(task => task.isImportance).length;
  const totalTasks = tasks.length;

  const data = {
    labels: [
      `Completed (${((completedTasks / totalTasks) * 100).toFixed(1)}%)`,
      `In Progress (${((inProgressTasks / totalTasks) * 100).toFixed(1)}%)`,
      `Important (${((stuckTasks / totalTasks) * 100).toFixed(1)}%)`,
    ],
    datasets: [
      {
        data: [completedTasks, inProgressTasks, stuckTasks],
        backgroundColor: [
          '#80BC00',
          '#FFA400',
          '#6E7C7C',
        ],
        borderWidth: 2, 
        borderColor: '#FFFFFF',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'start',
        labels: {
          boxWidth: 20,
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw;
            const percentage = ((value / totalTasks) * 100).toFixed(1);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col mt-10">
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
