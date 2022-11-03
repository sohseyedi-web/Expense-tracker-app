import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const Charts = ({ invest, expense, saving }) => {
  const config = {
    data: {
      datasets: [
        {
          data: [invest, saving, expense],
          backgroundColor: ["#2146c7", "#FFCD56", "#d9376e"],
          hoverOffset: 4,
          spacing: 10,
          borderRadius: 10,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };

  return <Doughnut {...config}></Doughnut>;
};

export default Charts;
