import React from 'react';
import Chart from 'react-apexcharts';

function PieChart({ pieData }) {
  
  const options = {
    chart: {
      type: 'pie',
    },
     labels: pieData.labels,
     series: pieData.series[0].data,
  };
  console.log(pieData)
  return (
    <div>
      <Chart options={options} series={options.series} type="pie" width={380} />
    </div>
  );
}
export default PieChart;

// import React from 'react';
// import Chart from 'react-apexcharts';

// function PieChart() {
//   const options = {
//     chart: {
//       type: 'pie',
//     },
//     labels: ['Without Violation', 'Speed Violation', 'Wrong Parking', 'Wrong Direction'],
//     series: [44, 55, 13, 43],
//   };

//   return (
//     <div>
//       <Chart options={options} series={options.series} type="pie" width={380} />
//     </div>
//   );
// }

// export default PieChart;