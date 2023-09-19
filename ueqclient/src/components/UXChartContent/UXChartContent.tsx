import type { EvaluationArea } from '../../types/EvaluationArea';
import type { Questionnaire } from '../../types/Questionnaire';
import './UXChartContent.scss'


export default function UXChartContent(
    {data, isLoading, evaluationArea}:
    {data: Questionnaire[], isLoading: boolean ,evaluationArea: EvaluationArea}
  ) {
    console.log(data)
    console.log(isLoading)
    console.log(evaluationArea)
    return (
        <div>
          Insert UX Chart 
        </div>
    );
};
