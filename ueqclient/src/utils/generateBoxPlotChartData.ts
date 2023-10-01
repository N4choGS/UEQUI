export default function generateBoxPlotChartData(
  title: string,
  dataSeries: number[][],
  dataTitles: string[],
  idName: string
) {
  const seriesFinal = [];

  for (let i = 0; i < dataSeries.length; i++) {
    const dataRow = {
      y: dataSeries[i],
      x: dataTitles[i],
    };
    seriesFinal.push(dataRow);
  }

  const chartData = {
    options: {
      chart: {
        id: idName + "-boxPlotchart",
        width: 900, // Set the width to 500 pixels
        height: 900, // Set the height to 900 pixels
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "60%",
        },
        boxPlot: {
          colors: {
            upper: "#008FFB",
            lower: "#FEB019",
          },
        },
      },
      stroke: {
        colors: ["#6c757d"],
      },
      yaxis: {
        categories: ["-3", "-2", "-1", "0", "1", "2", "3"],
        title: {
          text: "Score",
        },
      },
      title: {
        text: title,
        style: {
          fontSize: "20px",
        },
      },
    },
    series: [{ data: seriesFinal }],
  };
  return chartData;
}
