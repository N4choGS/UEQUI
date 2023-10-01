import { EvaluationArea } from "../../../types/EvaluationArea";
import type { Questionnaire } from "../../../types/Questionnaire";
import generateSeriesIndicator from "../../../utils/generateSeriesIndicator";
import getTitleNames from "../../../utils/getTitleNames";
import "./Indicator.scss";
import ReactApexChart from "react-apexcharts";

export default function Indicator({
  data,
  evaluationArea,
}: {
  data: Questionnaire[];
  evaluationArea: EvaluationArea;
}) {
  const series = [generateSeriesIndicator(data, evaluationArea)];
  const optionsTest = {
    chart: {
      height: 350,
    },
    colors: ["#4bfa00"],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        track: {
          background: "#333",
          startAngle: -135,
          endAngle: 135,
        },
        dataLabels: {
          name: {
            show: true,
            color: "#888",
            fontSize: "17px",
          },
          value: {
            fontSize: "30px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#f44336"],
        inverseColors: true,
        stops: [0, 100],
      },
    },
    labels: [getTitleNames(evaluationArea)],
  };

  return (
    <ReactApexChart
      options={optionsTest}
      series={series}
      type="radialBar"
      height={500}
      width={500}
    />
  );
}
