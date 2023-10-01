import type { EvaluationArea } from "../types/EvaluationArea";
import type { Questionnaire } from "../types/Questionnaire";

export default function generateSeriesChartPie(
  data: Questionnaire[],
  evaluationArea: EvaluationArea
) {
  const questionnaireDataList = {
    attractiveness: [0, 0, 0, 0, 0],
    novelty: [0, 0, 0, 0, 0],
    efficiency: [0, 0, 0, 0, 0],
    dependability: [0, 0, 0, 0, 0],
    perspecuity: [0, 0, 0, 0, 0],
    stimulation: [0, 0, 0, 0, 0],
  };

  data.forEach((questionnaire) => {
    questionnaireDataList.attractiveness[
      getStage(questionnaire?.attractiveness?.annoying_enjoyable || 0)
    ] += 1;
    questionnaireDataList.attractiveness[
      getStage(questionnaire?.attractiveness?.bad_good || 0)
    ] += 1;
    questionnaireDataList.attractiveness[
      getStage(questionnaire?.attractiveness?.unlikable_pleasing || 0)
    ] += 1;
    questionnaireDataList.attractiveness[
      getStage(questionnaire?.attractiveness?.unpleasant_pleasant || 0)
    ] += 1;
    questionnaireDataList.attractiveness[
      getStage(questionnaire?.attractiveness?.unattractive_attractive || 0)
    ] += 1;
    questionnaireDataList.attractiveness[
      getStage(questionnaire?.attractiveness?.unfriendly_friendly || 0)
    ] += 1;
    questionnaireDataList.novelty[
      getStage(questionnaire?.novelty?.dull_creative || 0)
    ] += 1;
    questionnaireDataList.novelty[
      getStage(questionnaire?.novelty?.usual_leadingEdge || 0)
    ] += 1;
    questionnaireDataList.novelty[
      getStage(questionnaire?.novelty?.conventional_inventive || 0)
    ] += 1;
    questionnaireDataList.novelty[
      getStage(questionnaire?.novelty?.conservative_innovative || 0)
    ] += 1;
    questionnaireDataList.efficiency[
      getStage(questionnaire?.efficiency?.slow_fast || 0)
    ] += 1;
    questionnaireDataList.efficiency[
      getStage(questionnaire?.efficiency?.inefficient_efficient || 0)
    ] += 1;
    questionnaireDataList.efficiency[
      getStage(questionnaire?.efficiency?.impractical_practical || 0)
    ] += 1;
    questionnaireDataList.efficiency[
      getStage(questionnaire?.efficiency?.cluttered_organized || 0)
    ] += 1;

    questionnaireDataList.dependability[
      getStage(questionnaire?.dependability?.unpredictable_predictable || 0)
    ] += 1;
    questionnaireDataList.dependability[
      getStage(questionnaire?.dependability?.notSecure_secure || 0)
    ] += 1;
    questionnaireDataList.dependability[
      getStage(
        questionnaire?.dependability
          ?.doesNotMeetExpectations_meetsExpectations || 0
      )
    ] += 1;
    questionnaireDataList.dependability[
      getStage(questionnaire?.dependability?.obstructive_supportive || 0)
    ] += 1;

    questionnaireDataList.perspecuity[
      getStage(
        questionnaire?.perspecuity?.notUnderstandable_understandable || 0
      )
    ] += 1;
    questionnaireDataList.perspecuity[
      getStage(questionnaire?.perspecuity?.difficultToLearn_easyToLearn || 0)
    ] += 1;
    questionnaireDataList.perspecuity[
      getStage(questionnaire?.perspecuity?.complicated_easy || 0)
    ] += 1;
    questionnaireDataList.perspecuity[
      getStage(questionnaire?.perspecuity?.confusing_clear || 0)
    ] += 1;

    questionnaireDataList.stimulation[
      getStage(questionnaire?.stimulation?.inferior_valuable || 0)
    ] += 1;
    questionnaireDataList.stimulation[
      getStage(questionnaire?.stimulation?.boring_exciting || 0)
    ] += 1;
    questionnaireDataList.stimulation[
      getStage(questionnaire?.stimulation?.notInteresting_interesting || 0)
    ] += 1;
    questionnaireDataList.stimulation[
      getStage(questionnaire?.stimulation?.motivating_demotivating || 0)
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
      return [0, 0, 0, 0, 0];
  }
}

function getStage(index: number) {
  switch (index) {
    case -3:
      return 0;
    case -2:
      return 0;
    case -1:
      return 1;
    case 0:
      return 2;
    case 1:
      return 2;
    case 2:
      return 3;
    case 3:
      return 4;
    default:
      return 4;
  }
}

function getOverviewResult(resultMatrix: number[][]) {
  const result = [0, 0, 0, 0, 0];

  for (let i = 0; i < resultMatrix[0].length; i++) {
    const category = resultMatrix[i];
    for (let j = 0; j < category.length; j++) {
      result[j] += category[j];
    }
  }

  return result;
}
