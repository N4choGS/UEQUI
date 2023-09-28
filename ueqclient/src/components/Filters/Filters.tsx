import { Dropdown, Field, Option, useId } from "@fluentui/react-components";
import useCatalogData from "../../hooks/useCatalogData";
import "./Filters.scss";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import React from "react";
import chart from "../../assets/chart.jpg";

interface FiltersProps {
  setProjectListIds: (newProjectIds: string[] | null) => void;
  setModuleListIds: (newModuleIds: string[] | null) => void;
  setStartDateSelected: (newDate: Date | null) => void;
  startDateSelected: Date | null;
  setEndDateSelected: (newDate: Date | null) => void;
}

export default function Filters({
  setProjectListIds,
  setModuleListIds,
  setStartDateSelected,
  startDateSelected,
  setEndDateSelected,
}: FiltersProps) {
  const {
    data: dataModule,
    isLoading: isLoadingModule,
    hasError: hasErrorModule,
  } = useCatalogData("Module");
  const {
    data: dataProject,
    isLoading: isLoadingProject,
    hasError: hasErrorProject,
  } = useCatalogData("Project");
  const comboModuleId = useId("combo-multi-module");
  const comboProjectId = useId("combo-multi-project");

  const onProjectSelect = React.useCallback(
    (_ev: any, data: { selectedOptions: string[] | null }) => {
      setProjectListIds(data.selectedOptions);
    },
    [setProjectListIds]
  );

  const onModuleSelect = React.useCallback(
    (_ev: any, data: { selectedOptions: string[] | null }) => {
      setModuleListIds(data.selectedOptions);
    },
    [setModuleListIds]
  );

  const onStartDateSelect = React.useCallback(
    (date: Date | null | undefined) => {
      if (date) {
        setStartDateSelected(date);
      } else {
        setStartDateSelected(null);
      }
    },
    [setStartDateSelected]
  );

  const onEndDateSelect = React.useCallback(
    (date: Date | null | undefined) => {
      if (date) {
        setEndDateSelected(date);
      } else {
        setEndDateSelected(null);
      }
    },
    [setEndDateSelected]
  );

  const shouldShowModule = !isLoadingModule && !hasErrorModule;
  const shouldShowProject = !isLoadingProject && !hasErrorProject;

  return (
    <div className="dashboardFilters">
      <img className="filterheaderImage" src={chart} alt="Filtering header" />
      <div className="filterTitleSurface">
        <div className="filterTitle">UX company filters</div>
      </div>
      <div className="filteringComponents">
        {shouldShowProject && (
          <div className="dropdownArea">
            <Field className="filterLabel" label="Project" required>
              <Dropdown
                aria-labelledby={comboProjectId}
                multiselect={true}
                placeholder="Select a project "
                onOptionSelect={onProjectSelect}
              >
                {dataProject.map((option) => (
                  <Option key={option.id} value={option.id.toString()}>
                    {option.name}
                  </Option>
                ))}
              </Dropdown>
            </Field>
          </div>
        )}

        {shouldShowModule && (
          <div className="dropdownArea">
            <div className="filterLabel" id={comboModuleId}>
              Module
            </div>
            <Dropdown
              aria-labelledby={comboModuleId}
              multiselect={true}
              placeholder="Select a module "
              onOptionSelect={onModuleSelect}
            >
              {dataModule.map((option) => (
                <Option key={option.id} value={option.id.toString()}>
                  {option.name}
                </Option>
              ))}
            </Dropdown>
          </div>
        )}

        <div className="dropdownArea">
          <Field className="filterLabel" label="Start date" required>
            <DatePicker
              placeholder="Select a start date"
              onSelectDate={onStartDateSelect}
            />
          </Field>
        </div>

        <div className="dropdownArea">
          <div className="filterLabel">End date</div>
          <DatePicker
            placeholder="Select an end date"
            minDate={startDateSelected ?? undefined}
            onSelectDate={onEndDateSelect}
            disabled={startDateSelected === null}
          />
        </div>
      </div>
    </div>
  );
}
