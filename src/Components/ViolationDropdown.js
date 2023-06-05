import React, { useEffect, useState } from 'react';
import "./ComponentsCss/Dropdown.css"
import { fetchData } from "./Helpers/FetchTableData";

function ViolationDropdown({ onViolationChange, selectedCategory }) {
  const [violation, setViolation] = useState([]);
  const [selectedViolation, setSelectedViolation] = useState('');

  useEffect(() => {
    fetchViolations();
  }, [violation]);

  const fetchViolations = () => {
    fetchData().then((jsonData) => {
      let violationData = [];
      if (selectedCategory === "vehicle") {
        violationData = Object.values(jsonData.vehicle).map(item => item.Violation);
      } else if (selectedCategory === "people") {
        violationData = Object.values(jsonData.people).map(item => item.Violation);
      }
      const uniqueViolation = [...new Set(violationData)];
      setViolation(uniqueViolation);
    }).catch(error => console.log("Error fetching violations:", error));
  };

  const handleViolationChange = (event) => {
    const selectedViolation = event.target.value;
    setSelectedViolation(selectedViolation);
    onViolationChange(selectedViolation);
  };

  const handleAllOptionClick = () => {
    setSelectedViolation('');
    onViolationChange('');
  };

  return (
    <select
      value={selectedViolation}
      onChange={handleViolationChange}
      className="date-dropdown"
    >
      <option value="" onClick={handleAllOptionClick}>
        Violations
      </option>
      {violation.map((violation, index) => (
        <option key={index} value={violation}>
          {violation}
        </option>
      ))}
    </select>
  );
}

export default ViolationDropdown;