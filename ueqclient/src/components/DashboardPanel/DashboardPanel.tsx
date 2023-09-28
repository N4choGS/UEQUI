import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Filters from "../Filters/Filters";
import { Button } from "@fluentui/react-components";
import "./DashboardPanel.scss";
import { ChartMultipleRegular } from "@fluentui/react-icons";
import React from "react";
import type { QuestionnaireRequest } from "../../types/QuestionnaireRequest";
import ChartSurface from "../ChartSurface/ChartSurface";

export default function DashboardPanel() {
  // Create on search button
  const [questionnaireRequest, setQuestionnaireRequest] =
    React.useState<QuestionnaireRequest | null>(null);
  const [projectListIds, setProjectListIds] = React.useState<string[] | null>(
    []
  );
  const [moduleListIds, setModuleListIds] = React.useState<string[] | null>([]);

  const [startDateSelected, setStartDateSelected] = React.useState<Date | null>(
    null
  );
  const [endDateSelected, setEndDateSelected] = React.useState<Date | null>(
    null
  );

  const onSearchButtonClicked = React.useCallback(() => {
    setQuestionnaireRequest({
      projectIds: projectListIds,
      moduleIds: moduleListIds,
      startDate: startDateSelected,
      endDate: endDateSelected,
    });
  }, [projectListIds, moduleListIds, startDateSelected, endDateSelected]);

  const isSearchEnabled =
    projectListIds !== null &&
    projectListIds?.length > 0 &&
    startDateSelected !== null;
  return (
    <div className="dashboardPanel">
      <DashboardHeader />
      <div>
        <div className="filteringDivision">
          <div className="filteringArea">
            <Filters
              setProjectListIds={setProjectListIds}
              setModuleListIds={setModuleListIds}
              setStartDateSelected={setStartDateSelected}
              startDateSelected={startDateSelected}
              setEndDateSelected={setEndDateSelected}
            />
            <div className="searchButtonArea">
              <Button
                disabled={!isSearchEnabled}
                appearance="primary"
                icon={<ChartMultipleRegular />}
                onClick={onSearchButtonClicked}
              >
                Search
              </Button>
            </div>
          </div>
          <div className="chartInfoArea">
            <ChartSurface questionnaireRequest={questionnaireRequest} />
          </div>
        </div>
      </div>
    </div>
  );
}
