import React, { useState } from 'react'
import DateDropdown from './DateDropdown'
import ViolationDropdown from './ViolationDropdown'
import CameraDropdown from './CameraDropdown'
import "./ComponentsCss/Report.css"
import ShiftDrodown from './ShiftDropdown'
import Table from './Table'

function Report() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedViolation, setSelectedViolation] = useState('');
  const [selectedCamera, setSelectedCamera] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("vehicle");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log('Selected Date:', selectedDate);
    
  };

  const handleViolationChange = (violation) => {
    setSelectedViolation(violation);
    console.log('Selected Violation:', selectedViolation);
    
  };
  const handleCameraChange = (camera) => {
    setSelectedCamera(camera);
    console.log('Selected Camera:', selectedCamera); 
  };
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className='report-container'>
        <div className='dropdown-container'>
        <div>
          <button
            className={`vehicle-btn button ${
              selectedCategory === "vehicle" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("vehicle")}
          >
            Vehicle
          </button>
          <button
            className={`people-btn button ${
              selectedCategory === "people" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("people")}
          >
            People
          </button>
        </div>
            <div className='dropdown'>
            <DateDropdown onDateChange={handleDateChange} selectedCategory={selectedCategory}/>
            <ShiftDrodown/> 
            <CameraDropdown onCameraChange={handleCameraChange} selectedCategory={selectedCategory}/>
            <ViolationDropdown onViolationChange={handleViolationChange} selectedCategory={selectedCategory}/> 
            </div>
        </div>
        <div className='table-container'>
            <Table selectedDate={selectedDate} selectedViolation={selectedViolation} selectedCamera={selectedCamera} selectedCategory={selectedCategory} />

        </div>
        
      
    </div>
  )
}

export default Report;



// import React, { useState } from 'react'
// import DateDropdown from './DateDropdown'
// import ViolationDropdown from './ViolationDropdown'
// import CameraDropdown from './CameraDropdown'
// import "./ComponentsCss/Report.css"
// import ShiftDrodown from './ShiftDropdown'
// import Table from './Table'

// function Report() {
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedViolation, setSelectedViolation] = useState('');
//   const [selectedCamera, setSelectedCamera] = useState('');

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     console.log('Selected Date:', selectedDate);
    
//   };

//   const handleViolationChange = (violation) => {
//     setSelectedViolation(violation);
//     console.log('Selected Violation:', selectedViolation);
    
//   };
//   const handleCameraChange = (camera) => {
//     setSelectedCamera(camera);
//     console.log('Selected Camera:', selectedCamera);
    
//   };
//   return (
//     <div className='report-container'>
//         <div className='dropdown-container'>
//             <div className='dropdown'>
//             <DateDropdown onDateChange={handleDateChange}/>
//             <ShiftDrodown/> 
//             <CameraDropdown onCameraChange={handleCameraChange}/>
//             <ViolationDropdown onViolationChange={handleViolationChange}/> 
//             </div>
//         </div>
//         <div className='table-container'>
//             <Table selectedDate={selectedDate} selectedViolation={selectedViolation} selectedCamera={selectedCamera}/>

//         </div>
        
      
//     </div>
//   )
// }

// export default Report;




// import React from 'react'
// import DateDropdown from './DateDropdown'
// import ViolationDropdown from './ViolationDropdown'
// import CameraDropdown from './CameraDropdown'
// import "./ComponentsCss/Report.css"
// import ShiftDrodown from './ShiftDropdown'
// import Table from './Table'

// function Report() {
//   return (
//     <div className='report-container'>
//       <div className='dropdown-container'>
//         <div className='dropdown'>
//           <DateDropdown/>
//           <ShiftDrodown/> 
//           <CameraDropdown/>
//           <ViolationDropdown/> 
//         </div>
//       </div>
//       <div className='table-container'>
//         <Table/>
//       </div>
//     </div>
//   )
// }

// export default Report;


