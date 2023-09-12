import useQuestionnaireData from '../../hooks/useQuestionnaireData';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Filters from '../Filters/Filters';
import { Button } from "@fluentui/react-components";
import './DashboardPanel.scss'
import {
  ChartMultipleRegular,
} from "@fluentui/react-icons";
import React from 'react'
import type { QuestionnaireRequest } from '../../types/QuestionnaireRequest';

const projectIds = ['1', '4', '8'];
const startDate = new Date('2022-01-01');
const moduleIds = ['6', '3', "12"];
const endDate = new Date('2022-02-20');

export default function DashboardPanel() {
    // Create on search button 
    const [questionnaireRequest, setQuestionnaireRequest] = React.useState<QuestionnaireRequest|null>(null)
    const [projectListIds, setProjectListIds] = React.useState<string[]|null>([])
    const [moduleListIds, setModuleListIds] = React.useState<string[]|null>([])

    const [startDateSelected, setStartDateSelected] = React.useState<Date|null>(null);
    const [endDateSelected, setEndDateSelected] = React.useState<Date|null>(null);

    const onSearchButtonClicked = React.useCallback(()=>{
        console.log("Buscar")
        setQuestionnaireRequest(
          {
            projectIds: projectListIds ,
            moduleIds: moduleListIds,
            startDate: startDateSelected ,
            endDate:  endDateSelected ,
          }
        )
    },[])
    useQuestionnaireData(projectIds, startDate, moduleIds, endDate)
    return (
        <div className='dashboardPanel' >
          <DashboardHeader/>
          <div className='filteringArea'>
            <Filters 
              setProjectListIds={setProjectListIds}
              projectListIds={projectListIds}
              setModuleListIds={setModuleListIds}
              moduleListIds={moduleListIds}
              setStartDateSelected={setStartDateSelected}
              setEndDateSelected={setEndDateSelected}
            />
            <div className='searchButtonArea'>
              <Button appearance="primary" icon={<ChartMultipleRegular />}
                onClick={onSearchButtonClicked}>
                  Search
              </Button>
            </div>
          </div>
        </div>
    );
};
