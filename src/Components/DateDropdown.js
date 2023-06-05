import React, { useEffect, useState } from 'react';
import './ComponentsCss/Dropdown.css';
import { fetchData } from './Helpers/FetchTableData';


function DateDropdown({ onDateChange, selectedCategory }) {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    fetchDates();
  }, [selectedCategory]);

  const fetchDates = () => {
    fetchData().then((jsonData) => {
      let dateData = [];
      if (selectedCategory === 'vehicle') {
        dateData = Object.values(jsonData.vehicle).map((item) => item.Date);
      } else if (selectedCategory === 'people') {
        dateData = Object.values(jsonData.people).map((item) => item.Date);
      }
      const uniqueDates = [...new Set(dateData)];
      setDates(uniqueDates);
    }).catch((error) => console.log('Error fetching dates:', error));
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
    onDateChange(selectedDate);
  };

  const handleAllOptionClick = () => {
    setSelectedDate('');
    onDateChange('');
  };

  return (
    <select
      value={selectedDate}
      onChange={handleDateChange}
      className="date-dropdown"
    >
      <option value="" onClick={handleAllOptionClick} >
        Select Date
      </option>
      {dates.map((date, index) => (
        <option key={index} value={date}>
          {date}
        </option>
      ))}
    </select>
  );
}

export default DateDropdown;




// import React, { useEffect, useState } from 'react';

// import "./ComponentsCss/Dropdown.css"
// function DateDropdown({ onDateChange }) {
//   const [dates, setDates] = useState([]);

// //   useEffect(() => {
// //     fetchDates();
// //   }, []);

// //   const fetchDates = () => {
// //     fetch("http://localhost:5001/data")
// //       .then(response => response.json())
// //       .then(jsonData => {
// //         const fileNames = jsonData.dates;
// //         setDates(fileNames);
// //       })
// //       .catch(error => console.log("Error fetching dates:", error));
// //   };

// //   const handleSelectChange = (event) => {
// //     const selectedDate = event.target.value;
// //     onDateChange(selectedDate);
// //   };

//   return (
//     <select defaultValue="" className="date-dropdown" 
//     // onChange={handleSelectChange}
//     >
//       <option value="" disabled>
//         Select Date
//       </option>
//       <option>2023-05-19</option>
//       {/* {dates.map((date, index) => (
//         <option key={index} value={date}>
//           {date}
//         </option>
//       ))} */}
//     </select>
//   );
// }

// export default DateDropdown;