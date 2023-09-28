import type { EvaluationArea } from "../types/EvaluationArea";
import type { Questionnaire } from "../types/Questionnaire";

export default function generateSeriesBoxPlotData(
  data: Questionnaire[],
  evaluationArea: EvaluationArea
) {
  const questionnaireDataList = {
    attractiveness: {
      annoying_enjoyable: new Array<number>(),
      bad_good: new Array<number>(),
      unlikable_pleasing: new Array<number>(),
      unpleasant_pleasant: new Array<number>(),
      unattractive_attractive: new Array<number>(),
      unfriendly_friendly: new Array<number>(),
    },
    novelty: {
      dull_creative: new Array<number>(),
      usual_leadingEdge: new Array<number>(),
      conventional_inventive: new Array<number>(),
      conservative_innovative: new Array<number>(),
    },
    efficiency: {
      slow_fast: new Array<number>(),
      inefficient_efficient: new Array<number>(),
      impractical_practical: new Array<number>(),
      cluttered_organized: new Array<number>(),
    },
    dependability: {
      unpredictable_predictable: new Array<number>(),
      notSecure_secure: new Array<number>(),
      doesNotMeetExpectations_meetsExpectations: new Array<number>(),
      obstructive_supportive: new Array<number>(),
    },
    perspecuity: {
      notUnderstandable_understandable: new Array<number>(),
      difficultToLearn_easyToLearn: new Array<number>(),
      complicated_easy: new Array<number>(),
      confusing_clear: new Array<number>(),
    },
    stimulation: {
      inferior_valuable: new Array<number>(),
      boring_exciting: new Array<number>(),
      notInteresting_interesting: new Array<number>(),
      motivating_demotivating: new Array<number>(),
    },
  };

  data.forEach((questionnaire) => {
    questionnaireDataList.attractiveness.annoying_enjoyable.push(
      questionnaire?.attractiveness?.annoying_enjoyable || 0
    );
    questionnaireDataList.attractiveness.bad_good.push(
      questionnaire?.attractiveness?.bad_good || 0
    );
    questionnaireDataList.attractiveness.unlikable_pleasing.push(
      questionnaire?.attractiveness?.unlikable_pleasing || 0
    );
    questionnaireDataList.attractiveness.unpleasant_pleasant.push(
      questionnaire?.attractiveness?.unpleasant_pleasant || 0
    );
    questionnaireDataList.attractiveness.unattractive_attractive.push(
      questionnaire?.attractiveness?.unattractive_attractive || 0
    );
    questionnaireDataList.attractiveness.unfriendly_friendly.push(
      questionnaire?.attractiveness?.unfriendly_friendly || 0
    );

    questionnaireDataList.novelty.dull_creative.push(
      questionnaire?.novelty?.dull_creative || 0
    );
    questionnaireDataList.novelty.usual_leadingEdge.push(
      questionnaire?.novelty?.usual_leadingEdge || 0
    );
    questionnaireDataList.novelty.conventional_inventive.push(
      questionnaire?.novelty?.conventional_inventive || 0
    );
    questionnaireDataList.novelty.conservative_innovative.push(
      questionnaire?.novelty?.conservative_innovative || 0
    );

    questionnaireDataList.efficiency.slow_fast.push(
      questionnaire?.efficiency?.slow_fast || 0
    );
    questionnaireDataList.efficiency.inefficient_efficient.push(
      questionnaire?.efficiency?.inefficient_efficient || 0
    );
    questionnaireDataList.efficiency.impractical_practical.push(
      questionnaire?.efficiency?.impractical_practical || 0
    );
    questionnaireDataList.efficiency.cluttered_organized.push(
      questionnaire?.efficiency?.cluttered_organized || 0
    );

    questionnaireDataList.dependability.unpredictable_predictable.push(
      questionnaire?.dependability?.unpredictable_predictable || 0
    );
    questionnaireDataList.dependability.notSecure_secure.push(
      questionnaire?.dependability?.notSecure_secure || 0
    );
    questionnaireDataList.dependability.doesNotMeetExpectations_meetsExpectations.push(
      questionnaire?.dependability?.doesNotMeetExpectations_meetsExpectations ||
        0
    );
    questionnaireDataList.dependability.obstructive_supportive.push(
      questionnaire?.dependability?.obstructive_supportive || 0
    );

    questionnaireDataList.perspecuity.notUnderstandable_understandable.push(
      questionnaire?.perspecuity?.notUnderstandable_understandable || 0
    );
    questionnaireDataList.perspecuity.difficultToLearn_easyToLearn.push(
      questionnaire?.perspecuity?.difficultToLearn_easyToLearn || 0
    );
    questionnaireDataList.perspecuity.complicated_easy.push(
      questionnaire?.perspecuity?.complicated_easy || 0
    );
    questionnaireDataList.perspecuity.confusing_clear.push(
      questionnaire?.perspecuity?.confusing_clear || 0
    );

    questionnaireDataList.stimulation.inferior_valuable.push(
      questionnaire?.stimulation?.inferior_valuable || 0
    );
    questionnaireDataList.stimulation.boring_exciting.push(
      questionnaire?.stimulation?.boring_exciting || 0
    );
    questionnaireDataList.stimulation.notInteresting_interesting.push(
      questionnaire?.stimulation?.notInteresting_interesting || 0
    );
    questionnaireDataList.stimulation.motivating_demotivating.push(
      questionnaire?.stimulation?.motivating_demotivating || 0
    );
  });

  console.log(questionnaireDataList);

  const questionnaireDataResult = {
    attractiveness: {
      annoying_enjoyable: new Array<number>(),
      bad_good: new Array<number>(),
      unlikable_pleasing: new Array<number>(),
      unpleasant_pleasant: new Array<number>(),
      unattractive_attractive: new Array<number>(),
      unfriendly_friendly: new Array<number>(),
    },
    novelty: {
      dull_creative: new Array<number>(),
      usual_leadingEdge: new Array<number>(),
      conventional_inventive: new Array<number>(),
      conservative_innovative: new Array<number>(),
    },
    efficiency: {
      slow_fast: new Array<number>(),
      inefficient_efficient: new Array<number>(),
      impractical_practical: new Array<number>(),
      cluttered_organized: new Array<number>(),
    },
    dependability: {
      unpredictable_predictable: new Array<number>(),
      notSecure_secure: new Array<number>(),
      doesNotMeetExpectations_meetsExpectations: new Array<number>(),
      obstructive_supportive: new Array<number>(),
    },
    perspecuity: {
      notUnderstandable_understandable: new Array<number>(),
      difficultToLearn_easyToLearn: new Array<number>(),
      complicated_easy: new Array<number>(),
      confusing_clear: new Array<number>(),
    },
    stimulation: {
      inferior_valuable: new Array<number>(),
      boring_exciting: new Array<number>(),
      notInteresting_interesting: new Array<number>(),
      motivating_demotivating: new Array<number>(),
    },
  };

  questionnaireDataResult.attractiveness.annoying_enjoyable =
    calculateSummaryStatistics(
      questionnaireDataList.attractiveness.annoying_enjoyable
    );
  questionnaireDataResult.attractiveness.bad_good = calculateSummaryStatistics(
    questionnaireDataList.attractiveness.bad_good
  );
  questionnaireDataResult.attractiveness.unlikable_pleasing =
    calculateSummaryStatistics(
      questionnaireDataList.attractiveness.unlikable_pleasing
    );
  questionnaireDataResult.attractiveness.unpleasant_pleasant =
    calculateSummaryStatistics(
      questionnaireDataList.attractiveness.unpleasant_pleasant
    );
  questionnaireDataResult.attractiveness.unattractive_attractive =
    calculateSummaryStatistics(
      questionnaireDataList.attractiveness.unattractive_attractive
    );
  questionnaireDataResult.attractiveness.unfriendly_friendly =
    calculateSummaryStatistics(
      questionnaireDataList.attractiveness.unfriendly_friendly
    );

  questionnaireDataResult.novelty.dull_creative = calculateSummaryStatistics(
    questionnaireDataList.novelty.dull_creative
  );
  questionnaireDataResult.novelty.usual_leadingEdge =
    calculateSummaryStatistics(questionnaireDataList.novelty.usual_leadingEdge);
  questionnaireDataResult.novelty.conventional_inventive =
    calculateSummaryStatistics(
      questionnaireDataList.novelty.conventional_inventive
    );
  questionnaireDataResult.novelty.conservative_innovative =
    calculateSummaryStatistics(
      questionnaireDataList.novelty.conservative_innovative
    );

  questionnaireDataResult.efficiency.slow_fast = calculateSummaryStatistics(
    questionnaireDataList.efficiency.slow_fast
  );
  questionnaireDataResult.efficiency.inefficient_efficient =
    calculateSummaryStatistics(
      questionnaireDataList.efficiency.inefficient_efficient
    );
  questionnaireDataResult.efficiency.impractical_practical =
    calculateSummaryStatistics(
      questionnaireDataList.efficiency.impractical_practical
    );
  questionnaireDataResult.efficiency.cluttered_organized =
    calculateSummaryStatistics(
      questionnaireDataList.efficiency.cluttered_organized
    );

  questionnaireDataResult.dependability.unpredictable_predictable =
    calculateSummaryStatistics(
      questionnaireDataList.dependability.unpredictable_predictable
    );
  questionnaireDataResult.dependability.notSecure_secure =
    calculateSummaryStatistics(
      questionnaireDataList.dependability.notSecure_secure
    );
  questionnaireDataResult.dependability.doesNotMeetExpectations_meetsExpectations =
    calculateSummaryStatistics(
      questionnaireDataList.dependability
        .doesNotMeetExpectations_meetsExpectations
    );
  questionnaireDataResult.dependability.obstructive_supportive =
    calculateSummaryStatistics(
      questionnaireDataList.dependability.obstructive_supportive
    );

  questionnaireDataResult.perspecuity.notUnderstandable_understandable =
    calculateSummaryStatistics(
      questionnaireDataList.perspecuity.notUnderstandable_understandable
    );
  questionnaireDataResult.perspecuity.difficultToLearn_easyToLearn =
    calculateSummaryStatistics(
      questionnaireDataList.perspecuity.difficultToLearn_easyToLearn
    );
  questionnaireDataResult.perspecuity.complicated_easy =
    calculateSummaryStatistics(
      questionnaireDataList.perspecuity.complicated_easy
    );
  questionnaireDataResult.perspecuity.confusing_clear =
    calculateSummaryStatistics(
      questionnaireDataList.perspecuity.confusing_clear
    );

  questionnaireDataResult.stimulation.inferior_valuable =
    calculateSummaryStatistics(
      questionnaireDataList.stimulation.inferior_valuable
    );
  questionnaireDataResult.stimulation.boring_exciting =
    calculateSummaryStatistics(
      questionnaireDataList.stimulation.boring_exciting
    );
  questionnaireDataResult.stimulation.notInteresting_interesting =
    calculateSummaryStatistics(
      questionnaireDataList.stimulation.notInteresting_interesting
    );
  questionnaireDataResult.stimulation.motivating_demotivating =
    calculateSummaryStatistics(
      questionnaireDataList.stimulation.motivating_demotivating
    );

  switch (evaluationArea) {
    case "overview":
      const numbersArray: number[][] = Object.values(
        questionnaireDataResult
      ).flatMap((category) => Object.values(category));
      return numbersArray;
    case "attractiveness":
      return Object.values(questionnaireDataResult.attractiveness);
    case "dependability":
      return Object.values(questionnaireDataResult.dependability);
    case "efficiency":
      return Object.values(questionnaireDataResult.efficiency);
    case "novelty":
      return Object.values(questionnaireDataResult.novelty);
    case "perspicuity":
      return Object.values(questionnaireDataResult.perspecuity);
    case "stimulation":
      return Object.values(questionnaireDataResult.stimulation);
    default:
      return [];
  }
}

function calculateSummaryStatistics(arr: number[]): number[] {
  // Step 1: Sort the array in ascending order
  const sortedArr = arr.slice().sort((a, b) => a - b);

  // Step 2: Calculate the median (Q2)
  const n = sortedArr.length;
  let median;
  if (n % 2 === 1) {
    median = sortedArr[Math.floor(n / 2)];
  } else {
    const middle1 = sortedArr[n / 2 - 1];
    const middle2 = sortedArr[n / 2];
    median = (middle1 + middle2) / 2.0;
  }

  // Step 3: Split the array into lower and upper halves
  const lowerHalf = sortedArr.slice(0, Math.floor(n / 2));
  const upperHalf = sortedArr.slice(Math.ceil(n / 2));

  // Step 4: Calculate Q1 and Q3
  const q1 = calculateMedian(lowerHalf);
  const q3 = calculateMedian(upperHalf);

  // Step 5: Find the minimum and maximum
  const minimum = sortedArr[0];
  const maximum = sortedArr[n - 1];

  return [minimum, q1, median, q3, maximum];
}

function calculateMedian(arr: number[]): number {
  const n = arr.length;
  if (n % 2 === 1) {
    return arr[Math.floor(n / 2)];
  } else {
    const middle1 = arr[n / 2 - 1];
    const middle2 = arr[n / 2];
    return (middle1 + middle2) / 2.0;
  }
}
