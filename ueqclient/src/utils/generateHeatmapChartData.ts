
export default function generateHeatmapChartData (
    title: string, 
    dataSeries: number[][],
    dataTitles: string[],
    idName:string, 
  ) {

    const seriesFinal = []

    for (let i = 0;  i<dataSeries.length; i++){
      const dataInfoPair = dataSeries[i]
      const dataRow = {
        name: dataTitles[i],
        data: new Array()
      }
      for(let j = 0 ; j< dataInfoPair.length; j++){
        dataRow.data.push(
          {
            x : (j-3).toString(),
            y: dataInfoPair[j],
          }
        )
      }
      seriesFinal.push(dataRow)
    }

    console.log(seriesFinal)
     

    const chartData = {
        options: {
          chart: {
            id: idName + '-heatmapchart',
            width: 900, // Set the width to 500 pixels
            height: 900, // Set the height to 900 pixels
          },
          plotOptions: {
            heatmap: {
              shadeIntensity: 0.5, // Adjust the shading intensity
            },
          },
          xaxis: {
            categories: ["-3","-2","-1","0","1","2","3"],
            title: {
              text: "Score",
            },
          },
          yaxis: {
            title: {
              text: 'Pairs',
            },
          },
          title: {
            text: title,
            style: {
              fontSize: '20px',
            },
          },
        },
        series: seriesFinal,
      };
      return chartData;   
}


