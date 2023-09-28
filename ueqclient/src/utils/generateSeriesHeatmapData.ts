import type { EvaluationArea } from "../types/EvaluationArea";
import type { Questionnaire } from "../types/Questionnaire";

export default function generateSeriesHeatmapData(
  data: Questionnaire[],
  evaluationArea: EvaluationArea
) {
  const questionnaireDataList = {
    attractiveness: {
      annoying_enjoyable: [0, 0, 0, 0, 0, 0, 0],
      bad_good: [0, 0, 0, 0, 0, 0, 0],
      unlikable_pleasing: [0, 0, 0, 0, 0, 0, 0],
      unpleasant_pleasant: [0, 0, 0, 0, 0, 0, 0],
      unattractive_attractive: [0, 0, 0, 0, 0, 0, 0],
      unfriendly_friendly: [0, 0, 0, 0, 0, 0, 0],
    },
    novelty: {
      dull_creative: [0, 0, 0, 0, 0, 0, 0],
      usual_leadingEdge: [0, 0, 0, 0, 0, 0, 0],
      conventional_inventive: [0, 0, 0, 0, 0, 0, 0],
      conservative_innovative: [0, 0, 0, 0, 0, 0, 0],
    },
    efficiency: {
      slow_fast: [0, 0, 0, 0, 0, 0, 0],
      inefficient_efficient: [0, 0, 0, 0, 0, 0, 0],
      impractical_practical: [0, 0, 0, 0, 0, 0, 0],
      cluttered_organized: [0, 0, 0, 0, 0, 0, 0],
    },
    dependability: {
      unpredictable_predictable: [0, 0, 0, 0, 0, 0, 0],
      notSecure_secure: [0, 0, 0, 0, 0, 0, 0],
      doesNotMeetExpectations_meetsExpectations: [0, 0, 0, 0, 0, 0, 0],
      obstructive_supportive: [0, 0, 0, 0, 0, 0, 0],
    },
    perspecuity: {
      notUnderstandable_understandable: [0, 0, 0, 0, 0, 0, 0],
      difficultToLearn_easyToLearn: [0, 0, 0, 0, 0, 0, 0],
      complicated_easy: [0, 0, 0, 0, 0, 0, 0],
      confusing_clear: [0, 0, 0, 0, 0, 0, 0],
    },
    stimulation: {
      inferior_valuable: [0, 0, 0, 0, 0, 0, 0],
      boring_exciting: [0, 0, 0, 0, 0, 0, 0],
      notInteresting_interesting: [0, 0, 0, 0, 0, 0, 0],
      motivating_demotivating: [0, 0, 0, 0, 0, 0, 0],
    },
  };

  data.forEach((questionnaire) => {
    questionnaireDataList.attractiveness.annoying_enjoyable[
      (questionnaire?.attractiveness?.annoying_enjoyable || 0) + 3
    ] += 1;
    questionnaireDataList.attractiveness.bad_good[
      (questionnaire?.attractiveness?.bad_good || 0) + 3
    ] += 1;
    questionnaireDataList.attractiveness.unlikable_pleasing[
      (questionnaire?.attractiveness?.unlikable_pleasing || 0) + 3
    ] += 1;
    questionnaireDataList.attractiveness.unpleasant_pleasant[
      (questionnaire?.attractiveness?.unpleasant_pleasant || 0) + 3
    ] += 1;
    questionnaireDataList.attractiveness.unattractive_attractive[
      (questionnaire?.attractiveness?.unattractive_attractive || 0) + 3
    ] += 1;
    questionnaireDataList.attractiveness.unfriendly_friendly[
      (questionnaire?.attractiveness?.unfriendly_friendly || 0) + 3
    ] += 1;

    questionnaireDataList.novelty.dull_creative[
      (questionnaire?.novelty?.dull_creative || 0) + 3
    ] += 1;
    questionnaireDataList.novelty.usual_leadingEdge[
      (questionnaire?.novelty?.usual_leadingEdge || 0) + 3
    ] += 1;
    questionnaireDataList.novelty.conventional_inventive[
      (questionnaire?.novelty?.conventional_inventive || 0) + 3
    ] += 1;
    questionnaireDataList.novelty.conservative_innovative[
      (questionnaire?.novelty?.conservative_innovative || 0) + 3
    ] += 1;

    questionnaireDataList.efficiency.slow_fast[
      (questionnaire?.efficiency?.slow_fast || 0) + 3
    ] += 1;
    questionnaireDataList.efficiency.inefficient_efficient[
      (questionnaire?.efficiency?.inefficient_efficient || 0) + 3
    ] += 1;
    questionnaireDataList.efficiency.impractical_practical[
      (questionnaire?.efficiency?.impractical_practical || 0) + 3
    ] += 1;
    questionnaireDataList.efficiency.cluttered_organized[
      (questionnaire?.efficiency?.cluttered_organized || 0) + 3
    ] += 1;

    questionnaireDataList.dependability.unpredictable_predictable[
      (questionnaire?.dependability?.unpredictable_predictable || 0) + 3
    ] += 1;
    questionnaireDataList.dependability.notSecure_secure[
      (questionnaire?.dependability?.notSecure_secure || 0) + 3
    ] += 1;
    questionnaireDataList.dependability.doesNotMeetExpectations_meetsExpectations[
      (questionnaire?.dependability
        ?.doesNotMeetExpectations_meetsExpectations || 0) + 3
    ] += 1;
    questionnaireDataList.dependability.obstructive_supportive[
      (questionnaire?.dependability?.obstructive_supportive || 0) + 3
    ] += 1;

    questionnaireDataList.perspecuity.notUnderstandable_understandable[
      (questionnaire?.perspecuity?.notUnderstandable_understandable || 0) + 3
    ] += 1;
    questionnaireDataList.perspecuity.difficultToLearn_easyToLearn[
      (questionnaire?.perspecuity?.difficultToLearn_easyToLearn || 0) + 3
    ] += 1;
    questionnaireDataList.perspecuity.complicated_easy[
      (questionnaire?.perspecuity?.complicated_easy || 0) + 3
    ] += 1;
    questionnaireDataList.perspecuity.confusing_clear[
      (questionnaire?.perspecuity?.confusing_clear || 0) + 3
    ] += 1;

    questionnaireDataList.stimulation.inferior_valuable[
      (questionnaire?.stimulation?.inferior_valuable || 0) + 3
    ] += 1;
    questionnaireDataList.stimulation.boring_exciting[
      (questionnaire?.stimulation?.boring_exciting || 0) + 3
    ] += 1;
    questionnaireDataList.stimulation.notInteresting_interesting[
      (questionnaire?.stimulation?.notInteresting_interesting || 0) + 3
    ] += 1;
    questionnaireDataList.stimulation.motivating_demotivating[
      (questionnaire?.stimulation?.motivating_demotivating || 0) + 3
    ] += 1;
  });

  // evaluationArea : EvaluationArea,  isGeneralArea:boolean
  /*
      ...specificCategoryNames.attractiveness,
                ...specificCategoryNames.efficiency,
                ...specificCategoryNames.perspecuity,
                ...specificCategoryNames.dependability,
                ...specificCategoryNames.stimulation,
                ...specificCategoryNames.novelty,
    
    
    */

  switch (evaluationArea) {
    case "overview":
      const numbersArray: number[][] = Object.values(
        questionnaireDataList
      ).flatMap((category) => Object.values(category));
      return numbersArray;
    case "attractiveness":
      return Object.values(questionnaireDataList.attractiveness);
    case "dependability":
      return Object.values(questionnaireDataList.dependability);
    case "efficiency":
      return Object.values(questionnaireDataList.efficiency);
    case "novelty":
      return Object.values(questionnaireDataList.novelty);
    case "perspicuity":
      return Object.values(questionnaireDataList.perspecuity);
    case "stimulation":
      return Object.values(questionnaireDataList.stimulation);
    default:
      return [];
  }
}
