import React from 'react';
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts"

// Chart lib docs
// https://www.fusioncharts.com/dev/chart-attributes/line
const dataSource = {
  data: [
    { timestamp: "2020-04-24T19:04:06.640Z", humidity: 27 },
    { timestamp: '2020-04-24T19:04:36.640Z', humidity: 25 },
    { timestamp: '2020-04-24T19:05:06.640Z', humidity: 22 },
    { timestamp: '2020-04-24T19:05:36.640Z', humidity: 80 },
    { timestamp: '2020-04-24T19:06:06.640Z', humidity: 75 },
    { timestamp: '2020-04-24T19:06:36.640Z', humidity: 65 },
    { timestamp: '2020-04-24T19:07:06.640Z', humidity: 55 },
    { timestamp: '2020-04-24T19:07:36.640Z', humidity: 50 }
  ],
  chart: {
    showXAxisLine: false,
    showYAxisLine: false,
    showBorder: false,
    // bgColor: '#00000000',
    bgAlpha: 50,
  }
};
const chartConfigs = {
  type: "line",
  width: 300,
  height: 100,
  dataFormat: "json",
  dataSource: dataSource
};

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Chart = (): React.ReactNode => (
  <>
    <ReactFC {...chartConfigs} />
  </>
)

export default Chart;
