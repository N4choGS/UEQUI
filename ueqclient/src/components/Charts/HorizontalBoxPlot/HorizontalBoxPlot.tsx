import { EvaluationArea } from "../../../types/EvaluationArea";
import type { Questionnaire } from "../../../types/Questionnaire";
import generateBoxPlotChartData from "../../../utils/generateBoxPlotChartData";
import generateHeatmapChartData from "../../../utils/generateHeatmapChartData";
import generateSeriesBoxPlotData from "../../../utils/generateSeriesBoxPlotData";
import generateSeriesHeatmapData from "../../../utils/generateSeriesHeatmapData";
import getCategoryNames from "../../../utils/getCategoryNames";
import "./HorizontalBoxPlot.scss";
import ReactApexChart from "react-apexcharts";

export default function HorizontalBoxPlot({
  dataTest,
  evaluationArea,
}: {
  dataTest: Questionnaire[];
  evaluationArea: EvaluationArea;
}) {
  const boxPlotData = generateSeriesBoxPlotData(dataTest, evaluationArea);
  const categoryNames = getCategoryNames(evaluationArea, false);
  const boxPloxResultChartData = generateBoxPlotChartData(
    "BoxPlot " + evaluationArea,
    boxPlotData,
    categoryNames,
    evaluationArea + evaluationArea
  );

  return (
    <ReactApexChart
      options={boxPloxResultChartData.options}
      series={boxPloxResultChartData.series}
      type="boxPlot"
      height={900}
      width={1200}
    />
  );
}
