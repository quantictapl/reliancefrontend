import React, { useEffect, useState } from 'react';
import "./ComponentsCss/Dropdown.css";
import { fetchData } from "./Helpers/FetchTableData";

function CameraDropdown({ onCameraChange, selectedCategory }) {
  const [cameras, setCameras] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState('');

  useEffect(() => {
    fetchCameras();
  }, [selectedCategory]);

  const fetchCameras = () => {
    fetchData().then((jsonData) => {
      let cameraData = [];
      if (selectedCategory === "vehicle") {
        cameraData = Object.values(jsonData.vehicle).map(item => item.Camera);
      } else if (selectedCategory === "people") {
        cameraData = Object.values(jsonData.people).map(item => item.Camera);
      }
      const uniqueCameras = [...new Set(cameraData)];
      setCameras(uniqueCameras);
    }).catch(error => console.log("Error fetching cameras:", error));
  };

  const handleCameraChange = (event) => {
    const selectedCamera = event.target.value;
    setSelectedCamera(selectedCamera);
    onCameraChange(selectedCamera);
  };

  const handleAllOptionClick = () => {
    setSelectedCamera('');
    onCameraChange('');
  };

  return (
    <select value={selectedCamera} onChange={handleCameraChange} className="date-dropdown">
      <option value="" onClick={handleAllOptionClick}>
        Cameras
      </option>
      {cameras.map((camera, index) => (
        <option key={index} value={camera}>
          {camera}
        </option>
      ))}
    </select>
  );
}

export default CameraDropdown;

