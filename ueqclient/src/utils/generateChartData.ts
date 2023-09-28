import type { EvaluationArea } from "../types/EvaluationArea";
import getCategoryNames from "./getCategoryNames";

export default function generateChartData(
  title: string,
  dataSeries: number[],
  idName: string,
  evaluationArea: EvaluationArea,
  isGeneralArea: boolean
) {
  const chartData = {
    options: {
      chart: {
        id: idName + "-chart",
        width: 600,
      },
      xaxis: {
        categories: getCategoryNames(evaluationArea, isGeneralArea),
        title: {
          text: isGeneralArea ? "Area" : "Pair",
        },
      },
      yaxis: {
        min: -3, // Minimum value on the y-axis
        max: 3, // Maximum value on the y-axis
        tickAmount: 6,
        labels: {
          formatter: function (val: number) {
            return val.toFixed(1); // Format tick labels as integers
          },
        },
        title: {
          text: "Score",
        },
      },
      title: {
        text: title,
        style: {
          fontSize: "20px",
        },
      },
    },
    series: [
      {
        name: "Score",
        data: dataSeries,
      },
    ],
  };
  return chartData;
}
