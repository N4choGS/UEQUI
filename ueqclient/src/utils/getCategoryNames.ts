import type { EvaluationArea } from "../types/EvaluationArea";

const generalCategoryNames = [
    "Attractiveness", 
    "Perspicuity",
    "Efficiency",
    "Dependability",
    "Stimulation",
    "Novelty"
]

const specificCategoryNames = {
    attractiveness: [
        'Annoying-Enjoyable',
        'Bad-Good',
        'Unlikable-Pleasing',
        'Unpleasant-Pleasant',
        'Unattractive-Attractive',
        'Unfriendly-Friendly',
    ],
    novelty: [
        'Dull-Creative',
        'Usual-Leading Edge',
        'Conventional-Inventive',
        'Conservative-Innovative',
    ],
    efficiency: [
        'Slow-Fast',
        'Inefficient-Efficient',
        'Impractical-Practical',
        'Cluttered-Organized',
    ],
    dependability: [
        'Unpredictable-Predictable',
        'NotSecure-Secure',
        'Does Not Meet Expectations-Meets Expectations',
        'Obstructive-Supportive',
    ],
    perspecuity: [
        'Unpredictable-Predictable',
        'DifficultToLearn-Easy To Learn',
        'Complicated-Easy',
        'Confusing-Clear',
    ],
    stimulation: [
        'Inferior-Valuable',
        'Boring-Exciting',
        'NotInteresting-Interesting',
        'Motivating-Demotivating',
    ]  
}

export default function getCategoryNames (evaluationArea : EvaluationArea,  isGeneralArea:boolean) {
    if (isGeneralArea && evaluationArea === "overview"){
        return generalCategoryNames;
    }

    switch(evaluationArea) {
        case "overview":
            return[
                ...specificCategoryNames.attractiveness,
                ...specificCategoryNames.efficiency,
                ...specificCategoryNames.perspecuity,
                ...specificCategoryNames.dependability,
                ...specificCategoryNames.stimulation,
                ...specificCategoryNames.novelty,
            ]
        case "attractiveness":
            return  specificCategoryNames.attractiveness;
        case "dependability":
            return specificCategoryNames.dependability;
        case "efficiency":
            return specificCategoryNames.efficiency;
        case "novelty":
            return specificCategoryNames.novelty;
        case "perspicuity":
            return specificCategoryNames.perspecuity;
        case "stimulation":
            return specificCategoryNames.stimulation;
        default:
            return [];
    }
}


