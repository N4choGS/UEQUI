import type { EvaluationArea } from "../types/EvaluationArea";

export default function getTitleNames (evaluationArea : EvaluationArea) {
    switch(evaluationArea) {
        case "overview":
            return "Overview";
        case "attractiveness":
            return "Attractiveness";
        case "dependability":
            return "Dependability";
        case "efficiency":
            return "Efficiency";
        case "novelty":
            return "Novelty";
        case "perspicuity":
            return "Perspicuity";
        case "stimulation":
            return "Stimulation";
        default:
            return "Default";
    }
}


