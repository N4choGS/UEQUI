import { EvaluationArea } from '../../../types/EvaluationArea';
import type { Questionnaire } from '../../../types/Questionnaire';
import generateChartData from '../../../utils/generateChartData';
import generateSeriesData from '../../../utils/generateSeriesData';
import getTitleNames from '../../../utils/getTitleNames';
import './ColumnChart.scss'
import ReactApexChart from 'react-apexcharts';


export default function ColumnChart({data, evaluationArea}:{data: Questionnaire[],evaluationArea: EvaluationArea}) {
  const dataseries = generateSeriesData(data,evaluationArea, true)
  const chartData = generateChartData(
      getTitleNames(evaluationArea), 
      dataseries,
      evaluationArea+evaluationArea, 
      evaluationArea, 
      true
    );
  return (
      <div >
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
      </div>
  );
};
