import {
  Dropdown,
  Option,
  useId,
} from "@fluentui/react-components";
import useCatalogData from '../../hooks/useCatalogData';
import './Filters.scss'
import { DatePicker } from "@fluentui/react-datepicker-compat";
import React from 'react'
import chart from '../../assets/chart.jpg'

interface FiltersProps {
  setProjectListIds: (newProjectIds: string[]|null) => void;
  projectListIds:string[] | null;
  setModuleListIds: (newModuleIds: string[]|null) => void;
  moduleListIds:string[] | null;
  setStartDateSelected: (newDate: Date) => void;
  startDateSelected: Date | null;
  setEndDateSelected: (newDate: Date) => void;
  endDateSelected:  Date | null
}

export default function Filters({
  setProjectListIds, 
  projectListIds, 
  setModuleListIds, 
  moduleListIds ,
  setStartDateSelected, 
  startDateSelected, 
  setEndDateSelected,
  endDateSelected
}:FiltersProps) {
  const {data: dataModule, isLoading: isLoadingModule, hasError: hasErrorModule}= useCatalogData("Module")
  const {data: dataProject, isLoading: isLoadingProject, hasError: hasErrorProject} =   useCatalogData("Project")
  const comboModuleId = useId("combo-multi-module");
  const comboProjectId = useId("combo-multi-project");

  const onProjectSelect = React.useCallback((_ev: any, data: { selectedOptions: string[] | null; }) => {
    console.log(data)
    setProjectListIds(data.selectedOptions);}
  , []);

  const shouldShowModule = !isLoadingModule && !hasErrorModule
  const shouldShowProject = !isLoadingProject && !hasErrorProject
    return (
      <div className="dashboardFilters">
        <img className="filterheaderImage" src={chart}/>
        <div className="filterTitleSurface">
          <div className="filterTitle">
              UX company filters
          </div>
        </div>
        <div className="filteringComponents">
          {shouldShowProject && (
                <div className="dropdownArea">
                      <div className="filterLabel" id={comboProjectId}>Project</div>
                      <Dropdown
                        aria-labelledby={comboProjectId}
                        multiselect={true}
                        placeholder="Select a project "
                      >
                        {dataProject.map((option) => (
                          <Option key={option.id} >
                            {option.name}
                          </Option>
                        ))}
                      </Dropdown>
                </div>
              )}

            {shouldShowModule && (
              <div className="dropdownArea">
                <div className="filterLabel" id={comboModuleId}>Module</div>
                  <Dropdown
                    aria-labelledby={comboModuleId}
                    multiselect={true}
                    placeholder="Select a module "
                  >
                    {dataModule.map((option) => (
                      <Option key={option.id} >
                        {option.name}
                      </Option>
                    ))}
                  </Dropdown>
              </div>
            )}

              <div className="dropdownArea">
                <div className="filterLabel">Start date</div>
                <DatePicker placeholder="Select a start date" />
              </div>

              <div className="dropdownArea">
                <div className="filterLabel" >End date</div>
                <DatePicker placeholder="Select an end date" />
              </div>


        </div>
            

      </div>
     
    );
};
