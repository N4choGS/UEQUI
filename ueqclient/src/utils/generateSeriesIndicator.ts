import type { EvaluationArea } from "../types/EvaluationArea";
import type { Questionnaire } from "../types/Questionnaire";

function getSeriesIndicator(
  data: Questionnaire[],
  evaluationArea: EvaluationArea
) {
  const questionnaireDataList = {
    attractiveness: [0, 0, 0, 0, 0, 0, 0],
    novelty: [0, 0, 0, 0, 0, 0, 0],
    efficiency: [0, 0, 0, 0, 0, 0, 0],
    dependability: [0, 0, 0, 0, 0, 0, 0],
    perspecuity: [0, 0, 0, 0, 0, 0, 0],
    stimulation: [0, 0, 0, 0, 0, 0, 0],
  };

  data.forEach((questionnaire) => {
    questionnaireDataList.attractiveness[
      (questionnaire?.attractiveness?.annoying_enjoyable || 0) + 3
    ] += 1;
    questionnaireDataList.attractiveness[
      (questionnaire?.attractiveness?.bad_good || 0) + 3
    ] += 1;
    questionnaireDataList.attractiveness[
      (questionnaire?.attractiveness?.unlikable_pleasing || 0) + 3
    ] += 1;
    questionnaireDataList.attractiveness[
      (questionnaire?.attractiveness?.unpleasant_pleasant || 0) + 3
    ] += 1;
    questionnaireDataList.attractiveness[
      (questionnaire?.attractiveness?.unattractive_attractive || 0) + 3
    ] += 1;
    questionnaireDataList.attractiveness[
      (questionnaire?.attractiveness?.unfriendly_friendly || 0) + 3
    ] += 1;
    questionnaireDataList.novelty[
      (questionnaire?.novelty?.dull_creative || 0) + 3
    ] += 1;
    questionnaireDataList.novelty[
      (questionnaire?.novelty?.usual_leadingEdge || 0) + 3
    ] += 1;
    questionnaireDataList.novelty[
      (questionnaire?.novelty?.conventional_inventive || 0) + 3
    ] += 1;
    questionnaireDataList.novelty[
      (questionnaire?.novelty?.conservative_innovative || 0) + 3
    ] += 1;
    questionnaireDataList.efficiency[
      (questionnaire?.efficiency?.slow_fast || 0) + 3
    ] += 1;
    questionnaireDataList.efficiency[
      (questionnaire?.efficiency?.inefficient_efficient || 0) + 3
    ] += 1;
    questionnaireDataList.efficiency[
      (questionnaire?.efficiency?.impractical_practical || 0) + 3
    ] += 1;
    questionnaireDataList.efficiency[
      (questionnaire?.efficiency?.cluttered_organized || 0) + 3
    ] += 1;

    questionnaireDataList.dependability[
      (questionnaire?.dependability?.unpredictable_predictable || 0) + 3
    ] += 1;
    questionnaireDataList.dependability[
      (questionnaire?.dependability?.notSecure_secure || 0) + 3
    ] += 1;
    questionnaireDataList.dependability[
      (questionnaire?.dependability
        ?.doesNotMeetExpectations_meetsExpectations || 0) + 3
    ] += 1;
    questionnaireDataList.dependability[
      (questionnaire?.dependability?.obstructive_supportive || 0) + 3
    ] += 1;

    questionnaireDataList.perspecuity[
      (questionnaire?.perspecuity?.notUnderstandable_understandable || 0) + 3
    ] += 1;
    questionnaireDataList.perspecuity[
      (questionnaire?.perspecuity?.difficultToLearn_easyToLearn || 0) + 3
    ] += 1;
    questionnaireDataList.perspecuity[
      (questionnaire?.perspecuity?.complicated_easy || 0) + 3
    ] += 1;
    questionnaireDataList.perspecuity[
      (questionnaire?.perspecuity?.confusing_clear || 0) + 3
    ] += 1;

    questionnaireDataList.stimulation[
      (questionnaire?.stimulation?.inferior_valuable || 0) + 3
    ] += 1;
    questionnaireDataList.stimulation[
      (questionnaire?.stimulation?.boring_exciting || 0) + 3
    ] += 1;
    questionnaireDataList.stimulation[
      (questionnaire?.stimulation?.notInteresting_interesting || 0) + 3
    ] += 1;
    questionnaireDataList.stimulation[
      (questionnaire?.stimulation?.motivating_demotivating || 0) + 3
    ] += 1;
  });

  switch (evaluationArea) {
    case "overview":
      return getOverviewResult(Object.values(questionnaireDataList));
    case "attractiveness":
      return questionnaireDataList.attractiveness;
    case "dependability":
      return questionnaireDataList.dependability;
    case "efficiency":
      return questionnaireDataList.efficiency;
    case "novelty":
      return questionnaireDataList.novelty;
    case "perspicuity":
      return questionnaireDataList.perspecuity;
    case "stimulation":
      return questionnaireDataList.stimulation;
    default:
      return [0, 0, 0, 0, 0, 0, 0];
  }

  // [23,56,43,78,98]
}

function getOverviewResult(resultMatrix: number[][]) {
  const result = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < resultMatrix[0]?.length; i++) {
    const category = resultMatrix[i];
    for (let j = 0; j < category?.length; j++) {
      result[j] += category[j];
    }
  }

  return result;
}

export default function generateSeriesChartPie(
  data: Questionnaire[],
  evaluationArea: EvaluationArea
) {
  const values = [1, 2, 3, 4, 5, 6, 7];
  const pieChartData = getSeriesIndicator(data, evaluationArea);
  let result = 0;
  let votes = 0;

  for (let i = 0; i < pieChartData.length; i++) {
    votes += pieChartData[i];
    result += pieChartData[i] * values[i];
  }

  return Number(((result * 100) / (votes * 7)).toFixed(2));
}
