import React, { useEffect, useState } from 'react';
import "./ComponentsCss/Dropdown.css"

function ShiftDrodown({ onDateChange }) {

  return (
    <select defaultValue="" className="date-dropdown shift"  disabled={true}
    >
      <option value="" disabled>
        Shift
      </option>
      <option>Day Shift</option>
      <option>Afternoon Shift</option>
      <option>Evening Shift</option>
      
      
    </select>
  );
}

export default ShiftDrodown;