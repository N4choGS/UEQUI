import type { EvaluationArea } from '../../types/EvaluationArea';
import type { Questionnaire } from '../../types/Questionnaire';
import ColumnChart from '../Charts/ColumnChart/ColumnChart';
import './UXChartContent.scss'


export default function UXChartContent(
    {data, isLoading, evaluationArea}:{data: Questionnaire[], isLoading: boolean ,evaluationArea: EvaluationArea}
  ) {
    return (
        <div>
          <ColumnChart data={data} evaluationArea={evaluationArea}/>
        </div>
    );
};