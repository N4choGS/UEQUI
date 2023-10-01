import { EvaluationArea } from "../../../types/EvaluationArea";
import type { Questionnaire } from "../../../types/Questionnaire";
import generateBoxPlotChartData from "../../../utils/generateBoxPlotChartData";
import generateSeriesBoxPlotData from "../../../utils/generateSeriesBoxPlotData";
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
    "Voting performance for " + evaluationArea,
    boxPlotData,
    categoryNames,
    evaluationArea + evaluationArea
  );

  return (
    <div className="boxplotCustom">
      <ReactApexChart
        options={boxPloxResultChartData.options}
        series={boxPloxResultChartData.series}
        type="boxPlot"
        height={1000}
        width={600}
      />
    </div>
  );
}
