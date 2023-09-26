import type { EvaluationArea } from '../../types/EvaluationArea';
import type { Questionnaire } from '../../types/Questionnaire';
import ColumnChart from '../Charts/ColumnChart/ColumnChart';
import HeatmapChart from '../Charts/HeatmapChart/HeatmapChart';
import HorizontalBoxPlot from '../Charts/HorizontalBoxPlot/HorizontalBoxPlot';
import RadarChart from '../Charts/RadarChart/RadarChart';
import './UXChartContent.scss'


export default function UXChartContent(
    {data, isLoading, evaluationArea}:{data: Questionnaire[], isLoading: boolean ,evaluationArea: EvaluationArea}
  ) {
    return (
        <div>
          <ColumnChart data={data} evaluationArea={evaluationArea}/>
          <RadarChart data={data} evaluationArea={evaluationArea}/>

          <HeatmapChart data={data} evaluationArea={evaluationArea}/>
          <HorizontalBoxPlot dataTest={data} evaluationArea={evaluationArea}/>
        </div>
    );
};
