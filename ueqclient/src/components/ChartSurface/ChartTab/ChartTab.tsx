import { Tab, TabList } from "@fluentui/react-components";
import "./ChartTab.scss";
import type { EvaluationArea } from "../../../types/EvaluationArea";
import React from "react";

export default function ChartTab({
  setSelectedEvaluationArea,
}: {
  setSelectedEvaluationArea: (evalArea: EvaluationArea) => void;
}) {
  const onSearchButtonClicked = React.useCallback(
    (_event: any, data: any) => {
      setSelectedEvaluationArea(data?.value || "overview");
    },
    [setSelectedEvaluationArea]
  );

  return (
    <TabList
      onTabSelect={onSearchButtonClicked}
      defaultSelectedValue="overview"
      appearance="subtle"
    >
      <Tab value="overview">Overview</Tab>
      <Tab value="attractiveness">Attractiveness</Tab>
      <Tab value="efficiency">Efficiency</Tab>
      <Tab value="perspicuity">Perspicuity</Tab>
      <Tab value="dependability">Dependability</Tab>
      <Tab value="stimulation">Stimulation</Tab>
      <Tab value="novelty">Novelty</Tab>
    </TabList>
  );
}
