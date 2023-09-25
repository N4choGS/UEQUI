import type { EvaluationArea } from "../types/EvaluationArea";
import type { Questionnaire } from "../types/Questionnaire";

export default function generateSeriesData (data: Questionnaire[],  evaluationArea : EvaluationArea,  isGeneralArea:boolean ) {
  const questionnaireDataList = {
    attractiveness: {
      annoying_enjoyable: new Array<number>(),
      bad_good:new Array<number>(),
      unlikable_pleasing:new Array<number>(),
      unpleasant_pleasant:new Array<number>(),
      unattractive_attractive:new Array<number>(),
      unfriendly_friendly:new Array<number>(),
    },
    novelty: {
        dull_creative:new Array<number>(),
        usual_leadingEdge:new Array<number>(),
        conventional_inventive:new Array<number>(),
        conservative_innovative:new Array<number>(),
    },
    efficiency: {
        slow_fast:new Array<number>(),
        inefficient_efficient:new Array<number>(),
        impractical_practical:new Array<number>(),
        cluttered_organized:new Array<number>(),
    },
    dependability: {
        unpredictable_predictable:new Array<number>(),
        notSecure_secure:new Array<number>(),
        doesNotMeetExpectations_meetsExpectations:new Array<number>(),
        obstructive_supportive:new Array<number>(),
    },
    perspecuity: {
        notUnderstandable_understandable:new Array<number>(),
        difficultToLearn_easyToLearn:new Array<number>(),
        complicated_easy:new Array<number>(),
        confusing_clear:new Array<number>(),
    },
    stimulation: {
        inferior_valuable:new Array<number>(),
        boring_exciting:new Array<number>(),
        notInteresting_interesting:new Array<number>(),
        motivating_demotivating:new Array<number>(),
    }
  }

  data.forEach(questionnaire => {
    questionnaireDataList.attractiveness.annoying_enjoyable.push(questionnaire?.attractiveness?.annoying_enjoyable || 0)
    questionnaireDataList.attractiveness.bad_good.push(questionnaire?.attractiveness?.bad_good || 0)
    questionnaireDataList.attractiveness.unlikable_pleasing.push(questionnaire?.attractiveness?.unlikable_pleasing || 0)
    questionnaireDataList.attractiveness.unpleasant_pleasant.push(questionnaire?.attractiveness?.unpleasant_pleasant || 0)
    questionnaireDataList.attractiveness.unattractive_attractive.push(questionnaire?.attractiveness?.unattractive_attractive || 0)
    questionnaireDataList.attractiveness.unfriendly_friendly.push(questionnaire?.attractiveness?.unfriendly_friendly || 0)

    questionnaireDataList.novelty.dull_creative.push(questionnaire?.novelty?.dull_creative || 0)
    questionnaireDataList.novelty.usual_leadingEdge.push(questionnaire?.novelty?.usual_leadingEdge || 0)
    questionnaireDataList.novelty.conventional_inventive.push(questionnaire?.novelty?.conventional_inventive || 0)
    questionnaireDataList.novelty.conservative_innovative.push(questionnaire?.novelty?.conservative_innovative || 0)

    questionnaireDataList.efficiency.slow_fast.push(questionnaire?.efficiency?.slow_fast || 0)
    questionnaireDataList.efficiency.inefficient_efficient.push(questionnaire?.efficiency?.inefficient_efficient || 0)
    questionnaireDataList.efficiency.impractical_practical.push(questionnaire?.efficiency?.impractical_practical || 0)
    questionnaireDataList.efficiency.cluttered_organized.push(questionnaire?.efficiency?.cluttered_organized || 0)

    questionnaireDataList.dependability.unpredictable_predictable.push(questionnaire?.dependability?.unpredictable_predictable || 0)
    questionnaireDataList.dependability.notSecure_secure.push(questionnaire?.dependability?.notSecure_secure || 0)
    questionnaireDataList.dependability.doesNotMeetExpectations_meetsExpectations.push(questionnaire?.dependability?.doesNotMeetExpectations_meetsExpectations || 0)
    questionnaireDataList.dependability.obstructive_supportive.push(questionnaire?.dependability?.obstructive_supportive || 0)

    questionnaireDataList.perspecuity.notUnderstandable_understandable.push(questionnaire?.perspecuity?.notUnderstandable_understandable || 0)
    questionnaireDataList.perspecuity.difficultToLearn_easyToLearn.push(questionnaire?.perspecuity?.difficultToLearn_easyToLearn || 0)
    questionnaireDataList.perspecuity.complicated_easy.push(questionnaire?.perspecuity?.complicated_easy || 0)
    questionnaireDataList.perspecuity.confusing_clear.push(questionnaire?.perspecuity?.confusing_clear || 0)

    questionnaireDataList.stimulation.inferior_valuable.push(questionnaire?.stimulation?.inferior_valuable || 0)
    questionnaireDataList.stimulation.boring_exciting.push(questionnaire?.stimulation?.boring_exciting || 0)
    questionnaireDataList.stimulation.notInteresting_interesting.push(questionnaire?.stimulation?.notInteresting_interesting || 0)
    questionnaireDataList.stimulation.motivating_demotivating.push(questionnaire?.stimulation?.motivating_demotivating || 0)

  })

  console.log(questionnaireDataList)

  const questionnaireDataResult = {
    attractiveness: {
      annoying_enjoyable: 0,
      bad_good:0,
      unlikable_pleasing:0,
      unpleasant_pleasant:0,
      unattractive_attractive:0,
      unfriendly_friendly:0,
    },
    novelty: {
        dull_creative:0,
        usual_leadingEdge:0,
        conventional_inventive:0,
        conservative_innovative:0,
    },
    efficiency: {
        slow_fast:0,
        inefficient_efficient:0,
        impractical_practical:0,
        cluttered_organized:0,
    },
    dependability: {
        unpredictable_predictable:0,
        notSecure_secure:0,
        doesNotMeetExpectations_meetsExpectations:0,
        obstructive_supportive:0,
    },
    perspecuity: {
        notunderstandable_understandable:0,
        difficultToLearn_easyToLearn:0,
        complicated_easy:0,
        confusing_clear:0,
    },
    stimulation: {
        inferior_valuable:0,
        boring_exciting:0,
        notInteresting_interesting:0,
        motivating_demotivating:0,
    }
  }


    questionnaireDataResult.attractiveness.annoying_enjoyable = calculateAverage(questionnaireDataList.attractiveness.annoying_enjoyable);
    questionnaireDataResult.attractiveness.bad_good = calculateAverage(questionnaireDataList.attractiveness.bad_good);
    questionnaireDataResult.attractiveness.unlikable_pleasing = calculateAverage(questionnaireDataList.attractiveness.unlikable_pleasing);
    questionnaireDataResult.attractiveness.unpleasant_pleasant = calculateAverage(questionnaireDataList.attractiveness.unpleasant_pleasant);
    questionnaireDataResult.attractiveness.unattractive_attractive = calculateAverage(questionnaireDataList.attractiveness.unattractive_attractive);
    questionnaireDataResult.attractiveness.unfriendly_friendly = calculateAverage(questionnaireDataList.attractiveness.unfriendly_friendly);

    questionnaireDataResult.novelty.dull_creative = calculateAverage(questionnaireDataList.novelty.dull_creative);
    questionnaireDataResult.novelty.usual_leadingEdge = calculateAverage(questionnaireDataList.novelty.usual_leadingEdge);
    questionnaireDataResult.novelty.conventional_inventive =calculateAverage(questionnaireDataList.novelty.conventional_inventive);
    questionnaireDataResult.novelty.conservative_innovative = calculateAverage(questionnaireDataList.novelty.conservative_innovative);

    questionnaireDataResult.efficiency.slow_fast = calculateAverage(questionnaireDataList.efficiency.slow_fast);
    questionnaireDataResult.efficiency.inefficient_efficient = calculateAverage(questionnaireDataList.efficiency.inefficient_efficient);
    questionnaireDataResult.efficiency.impractical_practical = calculateAverage(questionnaireDataList.efficiency.impractical_practical);
    questionnaireDataResult.efficiency.cluttered_organized = calculateAverage(questionnaireDataList.efficiency.cluttered_organized);

    questionnaireDataResult.dependability.unpredictable_predictable = calculateAverage(questionnaireDataList.dependability.unpredictable_predictable);
    questionnaireDataResult.dependability.notSecure_secure = calculateAverage(questionnaireDataList.dependability.notSecure_secure);
    questionnaireDataResult.dependability.doesNotMeetExpectations_meetsExpectations = calculateAverage(questionnaireDataList.dependability.doesNotMeetExpectations_meetsExpectations);
    questionnaireDataResult.dependability.obstructive_supportive = calculateAverage(questionnaireDataList.dependability.obstructive_supportive);

    questionnaireDataResult.perspecuity.notunderstandable_understandable = calculateAverage(questionnaireDataList.perspecuity.notUnderstandable_understandable);
    questionnaireDataResult.perspecuity.difficultToLearn_easyToLearn = calculateAverage(questionnaireDataList.perspecuity.difficultToLearn_easyToLearn);
    questionnaireDataResult.perspecuity.complicated_easy = calculateAverage(questionnaireDataList.perspecuity.complicated_easy);
    questionnaireDataResult.perspecuity.confusing_clear =  calculateAverage(questionnaireDataList.perspecuity.confusing_clear);

    questionnaireDataResult.stimulation.inferior_valuable =  calculateAverage(questionnaireDataList.stimulation.inferior_valuable);
    questionnaireDataResult.stimulation.boring_exciting =  calculateAverage(questionnaireDataList.stimulation.boring_exciting);
    questionnaireDataResult.stimulation.notInteresting_interesting =  calculateAverage(questionnaireDataList.stimulation.notInteresting_interesting);
    questionnaireDataResult.stimulation.motivating_demotivating =  calculateAverage(questionnaireDataList.stimulation.motivating_demotivating);

    // evaluationArea : EvaluationArea,  isGeneralArea:boolean
    /*
      ...specificCategoryNames.attractiveness,
                ...specificCategoryNames.efficiency,
                ...specificCategoryNames.perspecuity,
                ...specificCategoryNames.dependability,
                ...specificCategoryNames.stimulation,
                ...specificCategoryNames.novelty,
    
    
    */

    console.log(questionnaireDataResult)

    if (isGeneralArea  && evaluationArea === "overview"){
      return [
        calculateAverage(Object.values(questionnaireDataResult.attractiveness)),
        calculateAverage(Object.values(questionnaireDataResult.efficiency)),
        calculateAverage(Object.values(questionnaireDataResult.perspecuity)),
        calculateAverage(Object.values(questionnaireDataResult.dependability)),
        calculateAverage(Object.values(questionnaireDataResult.stimulation)),
        calculateAverage(Object.values(questionnaireDataResult.novelty)),
      ]
    }

    switch(evaluationArea) {
      case "overview":
          const numbersArray: number[] = Object.values(questionnaireDataResult).flatMap((category) => Object.values(category));
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




function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0; // Handle the case where the array is empty to avoid division by zero.
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return Number((sum / numbers.length).toFixed(2));
}
