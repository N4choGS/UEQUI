import type { EvaluationArea } from "../types/EvaluationArea";
import getCategoryNames from "./getCategoryNames";

export default function generateChartData (title: string, idName:string, evaluationArea : EvaluationArea,  isGeneralArea:boolean ) {
    const chartData = {
        options: {
          chart: {
            id: idName + '-chart',
          },
          xaxis: {
            categories: getCategoryNames(evaluationArea, isGeneralArea),
            title: {
              text: isGeneralArea ? 'Area' : 'Pair',
            },
          },
          yaxis: {
            min: -3, // Minimum value on the y-axis
            max: 3, // Maximum value on the y-axis
            title: {
              text: 'Score',
            },
          },
          title: {
            text: title,
            style: {
              fontSize: '20px',
            },
          },
        },
        series: [
          {
            name: 'Score',
            data: [2, 1, -1.45, 0.50, 2.49],
          },
        ],
      };
      return chartData;   
}


