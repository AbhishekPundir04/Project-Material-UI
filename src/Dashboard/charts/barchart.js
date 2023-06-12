import React from "react";
import {
  Chart as ChartsJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import classes from './barchart.module.css'
ChartsJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AirIndexMumBai = () => {
  const data = {
    labels: ["1st Jan", "1st Feb", "1st March", "1st April"],
    datasets: [
      {
        label: "2018",
        data: [60, 55, 77, 86.7],
        backgroundColor: "blue",
        borderColor: "black",
      },
      {
        label: 2019,
        data: [66, 89, 45, 77.7],
        backgroundColor: "red",
        borderColor: "black",
      },
    ],
  };
  const options = {
    plugin:{
      legend:true,
    },
    scales:{
      y:{
        min:5,
        max:100
      }
    }
  };
  return (
    <div>
      <h1>Mumbai Air Index </h1>
      <div className={classes.bar}>
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
};

export default AirIndexMumBai;