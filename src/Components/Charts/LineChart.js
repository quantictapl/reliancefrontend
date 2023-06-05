import React from 'react';
import Chart from 'react-apexcharts';

function LineChart({ lineData }) {
  const series = lineData.series.map((data) => ({
    name: data.name,
    data: data.data.map((point) => ({
      x: new Date(point.x).getTime(),
      y: point.y,
    })),
  }));

  const dates = series.flatMap((data) => data.data.map((point) => point.x));
  const xAxisMin = Math.min(...dates);
  const xAxisMax = Math.max(...dates);

  const yValues = series.flatMap((data) => data.data.map((point) => point.y));
  const yAxisMax = Math.ceil(Math.max(...yValues) / 10) * 10;

  const options = {
    chart: {
      type: 'line',
      height: 320,
      toolbar: {
        show: false, // Hide the toolbar
      },
      zoom:false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      min: xAxisMin,
      max: xAxisMax,
      labels: {
        formatter: function (value) {
          const date = new Date(value);
          const hours = date.getHours().toString().padStart(2, '0');
          const minutes = date.getMinutes().toString().padStart(2, '0');
          return `${hours}:${minutes}`;
        },
        datetimeFormatter: {
          year: 'yyyy',
          month: 'MMM',
          day: 'dd',
          hour: 'HH:mm',
        },
      },
    },
    yaxis: {
      min: 0,
      max: yAxisMax,
    },
    series: series,
  };

  return (
    <div>
      <Chart options={options} series={options.series} type="line" height={320} />
    </div>
  );
}

export default LineChart;




// import React from 'react';
// import Chart from 'react-apexcharts';

// function LineChart() {
//   const options = {
//     chart: {
//       type: 'line',
//       height: 320,
//       toolbar: {
//         show: false, // Hide the toolbar
//       },
//     },
//     stroke: {
//       curve: 'smooth',
//     },
//     xaxis: {
//       type: 'datetime',
//       // min: Date.parse("Fri May 26 2023 6:00:00 GMT+0530 (India Standard Time)"),
//       // max: Date.parse("Fri May 26 2023 12:30:00 GMT+0530 (India Standard Time)"),
//       tickAmount: 'dataPoints',
//       labels: {
//         formatter: function (value) {
//           console.log(value)
//           const date = new Date(value);
//           const hours = date.getHours().toString().padStart(2, '0');
//           const minutes = date.getMinutes().toString().padStart(2, '0');
//           console.log(`${hours}:${minutes}`)
//           return `${hours}:${minutes}`;
//         },
//         datetimeFormatter: {
//           year: 'yyyy',
//           month: 'MMM',
//           day: 'dd',
//           hour: 'HH:mm',
//         },
//       },
//     },
//     yaxis: {
//       min: 0,
//       max: 50,
//     }, 
//     series: [
//       {
//         name: 'Violation 1',
//         data:  [
//           {
//             x:  Date.parse("Fri May 26 2023 06:00:00 GMT+0530 (India Standard Time)"),
//             y: 34
//           },
//           {
//             x:  Date.parse("Fri May 26 2023 06:30:00 GMT+0530 (India Standard Time)"),
//             y: 43
//           },
//           {
//             x:  Date.parse("Fri May 26 2023 07:30:00 GMT+0530 (India Standard Time)"),
//             y: 31
//           },
//           {
//             x:  Date.parse("Fri May 26 2023 08:30:00 GMT+0530 (India Standard Time)"),
//             y: 43
//           },
//           {
//             x:  Date.parse("Fri May 26 2023 09:30:00 GMT+0530 (India Standard Time)"),
//             y: 33
//           },
//           {
//             x:  Date.parse("Fri May 26 2023 10:30:00 GMT+0530 (India Standard Time)"),
//             y: 52
//           }
//         ]
//       },
//        {
//         name: 'Violation 2',
//          data:  [
//           {
//             x:  Date.parse("Fri May 26 2023 06:40:00 GMT+0530 (India Standard Time)"),
//             y: 22
//           },
//           {
//             x:  Date.parse("Fri May 26 2023 07:50:00 GMT+0530 (India Standard Time)"),
//             y: 33
//           },
//           {
//             x:  Date.parse("Fri May 26 2023 08:20:00 GMT+0530 (India Standard Time)"),
//             y: 44
//           },
//           {
//             x:  Date.parse("Fri May 26 2023 09:30:00 GMT+0530 (India Standard Time)"),
//             y: 21
//           },
//           {
//             x:  Date.parse("Fri May 26 2023 10:30:00 GMT+0530 (India Standard Time)"),
//             y: 34
//           },
//           {
//             x:  Date.parse("Fri May 26 2023 11:30:00 GMT+0530 (India Standard Time)"),
//             y: 52
//           }
//         ]
//       },
//       {
//         name: 'Violation 3',
//         data:  [
//           {
//             x:  Date.parse("Fri May 26 2023 06:40:00 GMT+0530 (India Standard Time)"),
//             y: 12
//           },
//           {
//             x:  Date.parse("Fri May 26 2023 07:50:00 GMT+0530 (India Standard Time)"),
//             y: 24
//           },
//           {
//             x:  Date.parse("Fri May 26 2023 08:20:00 GMT+0530 (India Standard Time)"),
//             y: 32
//           },
//           {
//             x:  Date.parse("Fri May 26 2023 09:30:00 GMT+0530 (India Standard Time)"),
//             y: 44
//           },
//           {
//             x:  Date.parse("Fri May 26 2023 10:30:00 GMT+0530 (India Standard Time)"),
//             y: 12
//           },
//           {
//             x:  Date.parse("Fri May 26 2023 11:30:00 GMT+0530 (India Standard Time)"),
//             y: 0
//           }
//         ]
//       },
//     ],
//   };
//  console.log(Date.parse("Fri Feb 10 2017 10:30:00 GMT+0530 (India Standard Time)"))
//   return (
//     <div>
//       <Chart options={options} series={options.series} type="line" height={320} />
//     </div>
//   );
// }

// export default LineChart;
