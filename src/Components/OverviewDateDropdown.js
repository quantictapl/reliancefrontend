import React, { useEffect, useState } from 'react';
import { fetchData } from './Helpers/FetchOverviewData';
import { useDispatch } from 'react-redux';
import { setDatesArr } from './Store/Actions';


function DateDropdown({  onDateChange }) {
  const [dates,setDates]=useState([]);
  const dispatch = useDispatch();
  
  const [selectedDate, setSelectedDate] = useState('');
  
 

  useEffect(() => {
    fetchData()
      .then((jsonData) => {

        const dateList = Object.keys(jsonData);
        dispatch(setDates(dateList)) 
        console.log(dateList)// Dispatch the action to set the dates in the store
      })
      .catch((error) => {
        console.log('Error fetching dates:', error);
      });
  }, [dispatch]);
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    onDateChange(selectedDate);
  };
  const handleAllOptionClick = () => {
    setSelectedDate('');
    onDateChange('');
  };

  return (
    <select   value={selectedDate} defaultValue="" className="date-dropdown" onChange={handleDateChange}>
      <option value="" onClick={handleAllOptionClick} disabled>
        Date
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