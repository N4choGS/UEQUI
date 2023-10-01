import { EvaluationArea } from "../../../types/EvaluationArea";
import type { Questionnaire } from "../../../types/Questionnaire";
import generateChartData from "../../../utils/generateChartData";
import generateSeriesData from "../../../utils/generateSeriesData";
import getTitleNames from "../../../utils/getTitleNames";
import "./PieChart.scss";
import ReactApexChart from "react-apexcharts";

export default function PieChart({
  data,
  evaluationArea,
}: {
  data: Questionnaire[];
  evaluationArea: EvaluationArea;
}) {
  const series = [44, 55, 13, 43, 22]; // Replace these values with your actual data

  const options = {
    labels: ["Bad", "Below Average", "Above Average", "Good", "Excellent"],
    colors: ["#FF0000", "#FFA500", "#808080", "#90EE90", "#008000"], // Specify the colors here
    title: {
      text: "General Satisfaction",
      style: {
        fontSize: "20px", // Customize the font size as needed
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={350}
      />
    </div>
  );
}
