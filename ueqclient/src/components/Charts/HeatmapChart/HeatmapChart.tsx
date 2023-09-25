import { EvaluationArea } from '../../../types/EvaluationArea';
import type { Questionnaire } from '../../../types/Questionnaire';
import generateHeatmapChartData from '../../../utils/generateHeatmapChartData';
import generateSeriesHeatmapData from '../../../utils/generateSeriesHeatmapData';
import getCategoryNames from '../../../utils/getCategoryNames';
import './HeatmapChart.scss'
import ReactApexChart from 'react-apexcharts';


export default function LineChart({data, evaluationArea}:{data: Questionnaire[],evaluationArea: EvaluationArea}) {
  // Sample data for the chart
  const categoryNames = getCategoryNames(evaluationArea, false)
  console.log(categoryNames);

  const heatMapData  = generateSeriesHeatmapData(data,evaluationArea )
  console.log(heatMapData)

  const resultData = generateHeatmapChartData("Heatmap "+ evaluationArea, heatMapData, categoryNames, evaluationArea+evaluationArea);

  console.log(resultData)
  
  return (
      <div >
        <ReactApexChart options={resultData.options} series={resultData.series} type="heatmap" height={350} />
      </div>
  );
};
