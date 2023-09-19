import useQuestionnaireData from '../../hooks/useQuestionnaireData';
import type { EvaluationArea } from '../../types/EvaluationArea';
import type { QuestionnaireRequest } from '../../types/QuestionnaireRequest';
import './ChartSurface.scss'
import ChartTab from './ChartTab/ChartTab';
import React from 'react'
import Error from "../../assets/error.png"


export default function ChartSurface({questionnaireRequest}: {questionnaireRequest : QuestionnaireRequest|null}) {

  const {data, isLoading, hasError} = useQuestionnaireData( 
    questionnaireRequest?.projectIds || [],
    questionnaireRequest?.startDate || null,
    questionnaireRequest?.moduleIds || [], 
    questionnaireRequest?.endDate
  )

  const [selectedEvaluationArea, setSelectedEvaluationArea] = React.useState<EvaluationArea>("overview")


  
  return (
      <>
        <ChartTab setSelectedEvaluationArea={setSelectedEvaluationArea}/>
        <div className='chartContent'>
          {
            questionnaireRequest?.projectIds?.length === 0 || 
            questionnaireRequest?.startDate == null|| hasError ?  
              <>
                <img src={Error} className="chartWarningImage" alt='Warning'></img>
                <div className='chartWarning'>{hasError ? "There is an error in the App" : "Select the filters to view the data"}</div>
              </>
            : 
              <>content</>
          }
        </div>
      </>
  );
};
