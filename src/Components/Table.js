import React, { useEffect, useState, useRef } from "react";
import "./ComponentsCss/Table.css";
import { fetchData, getImageUrl } from "./Helpers/FetchTableData";
import { MdClose } from 'react-icons/md';

function Table({ selectedDate, selectedViolation, selectedCamera, selectedCategory }) {
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const modalRef = useRef(null);
  console.log(selectedCategory);

  useEffect(() => {
    fetchData().then((jsonData) => {
      if (selectedCategory === "vehicle") {
        setData(jsonData.vehicle);
      } else if (selectedCategory === "people") {
        setData(jsonData.people);
      }
    });
  }, [selectedCategory]);

  const handleOpenImage = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  const filteredData = Object.values(data).filter((item) => {
    const dateMatch = selectedDate ? item.Date === selectedDate : true;
    const violationMatch = selectedViolation ? item.Violation === selectedViolation : true;
    const cameraMatch = selectedCamera ? item.Camera === selectedCamera : true;
    console.log(selectedDate);
    console.log(selectedCamera);
    return dateMatch && violationMatch && cameraMatch;
  });

  const handleModalClick = (e) => {
    if (modalRef.current === e.target) {
      handleCloseImage();
    }
  };

  return (
    <div className="table">
      <div className="table-title">
        <span className="title title-date">Date</span>
        <span className="title">Time</span>
        <span className="title">Camera</span>
        <span className="title">Location</span>
        <span className="title">Violation</span>
        <span className="title">Number Plate</span>
        <span className="title title-img">Image</span>
      </div>
      <div className="table-content">
        {filteredData.length === 0 ? (
          <span className="no-data">No data available</span>
        ) : (
          filteredData.map((item, index) => {
            const buttonClass = index % 2 === 0 ? 'first-btn' : 'second-btn';

            return (
              <React.Fragment key={index}>
                <span className="table-body table-date">{item.Date || "no data available"}</span>
                <span className="table-body">{item.Time || "no data available"}</span>
                <span className="table-body">{item.Camera || "no data available"}</span>
                <span className="table-body">{item.Location || "no data available"}</span>
                <span className="table-body">{item.Violation || "no data available"}</span>
                <span className="table-body">{item.Number_Plate || "no data available"}</span>
                <span className="table-body image-col">
                  <button
                    onClick={() => handleOpenImage(item.Image)}
                    className={`open-image-button ${buttonClass}`}
                  >
                    Open
                  </button>
                </span>
              </React.Fragment>
            );
          })
        )}
      </div>
      {selectedImage && (
        <div className="modal-overlay" ref={modalRef} onClick={handleModalClick}>
          <div className="modal-content">
            <div className="closer" >
              <button className="close-btn" onClick={handleCloseImage}><MdClose className="close-icon"/></button>
            </div>
            <img
              src={selectedImage}
              alt="Full"
              className="full-image"
              // onClick={handleCloseImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Table;


// import React, { useEffect, useState, useRef } from "react";
// import "./ComponentsCss/Table.css";
// import { fetchData, getImageUrl } from "./Helpers/FetchTableData";
// import { MdClose } from 'react-icons/md'
// function Table({ selectedDate, selectedViolation, selectedCamera }) {
//   const [data, setData] = useState({});
//   const [selectedImage, setSelectedImage] = useState(null);
//   const modalRef = useRef(null);

//   useEffect(() => {
//     fetchData().then((jsonData) => {
//       setData(jsonData);
//       console.log(jsonData);
//     });
//   }, []);

//   const handleOpenImage = (imagePath) => {
//     setSelectedImage(imagePath);
//   };

//   const handleCloseImage = () => {
//     setSelectedImage(null);
//   };

//   const filteredData = Object.values(data).filter((item) => {
//     const dateMatch = selectedDate ? item.Date === selectedDate : true;
//     const violationMatch = selectedViolation ? item.Violation === selectedViolation : true;
//     const cameraMatch = selectedCamera ? item.Camera === selectedCamera : true;
//     console.log(selectedDate)
//     console.log(selectedCamera)
//     return dateMatch && violationMatch && cameraMatch;
//   });

//   const handleModalClick = (e) => {
//     if (modalRef.current === e.target) {
//       handleCloseImage();
//     }
//   };

//   return (
//     <div className="table">
//       <div className="table-title">
//         <span className="title title-date">Date</span>
//         <span className="title">Time</span>
//         <span className="title">Camera</span>
//         <span className="title">Location</span>
//         <span className="title">Violation</span>
//         <span className="title">Number Plate</span>
//         <span className="title title-img">Image</span>
//       </div>
//       <div className="table-content">
//         {filteredData.map((item, index) => {
//           const buttonClass = index % 2 === 0 ? 'first-btn' : 'second-btn';

//           return (
//             <React.Fragment key={index}>
//               <span className="table-body table-date">{item.Date}</span>
//               <span className="table-body">{item.Time}</span>
//               <span className="table-body">{item.Camera}</span>
//               <span className="table-body">{item.Location}</span>
//               <span className="table-body">{item.Violation}</span>
//               <span className="table-body">{item.Number_Plate}</span>
//               <span className="table-body image-col">
//                 <button
//                   onClick={() => handleOpenImage(item.Image)}
//                   className={`open-image-button ${buttonClass}`}
//                 >
//                   Open
//                 </button>
//               </span>
//             </React.Fragment>
//           );
//         })}
//       </div>
//       {selectedImage && (
//         <div className="modal-overlay" ref={modalRef} onClick={handleModalClick}>

//           <div className="modal-content">
//             <div className="closer" >
//               <button className="close-btn" onClick={handleCloseImage}><MdClose className="close-icon"/></button>

//             </div>
//             <img
//               src={selectedImage}
//               alt="Full"
//               className="full-image"
//               // onClick={handleCloseImage}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Table;

// import React, { useEffect, useState, useRef } from "react";
// import "./ComponentsCss/Table.css";
// import { fetchData, getImageUrl } from "./Helpers/FetchTableData";

// function Table({ selectedDate, selectedViolation, selectedCamera }) {
//   const [data, setData] = useState({});
//   const [selectedImage, setSelectedImage] = useState(null);
//   const modalRef = useRef(null);

//   useEffect(() => {
//     fetchData().then((jsonData) => {
//       setData(jsonData);
//       console.log(jsonData);
//     });
//   }, []);

//   const handleOpenImage = (imagePath) => {
//     setSelectedImage(imagePath);
//   };

//   const handleCloseImage = () => {
//     setSelectedImage(null);
//   };

//   const filteredData = Object.values(data).filter((item) => {
//     const dateMatch = selectedDate ? item.Date === selectedDate : true;
//     const violationMatch = selectedViolation ? item.Violation === selectedViolation : true;
//     const cameraMatch = selectedCamera ? item.Camera === selectedCamera : true;
//     return dateMatch && violationMatch && cameraMatch;
//   });

//   const handleModalClick = (e) => {
//     if (modalRef.current === e.target) {
//       handleCloseImage();
//     }
//   };

//   return (
//     <div className="table">
//       <div className="table-title">
//         <span className="title">Date</span>
//         <span className="title">Time</span>
//         <span className="title">Camera</span>
//         <span className="title">Location</span>
//         <span className="title">Violation</span>
//         <span className="title">Number Plate</span>
//         <span className="title">Image</span>
//       </div>
//       <div className="table-content">
//         {filteredData.map((item, index) => {
//           return (
//             <React.Fragment key={index}>
//               <span className="table-body">{item.Date}</span>
//               <span className="table-body">{item.Time}</span>
//               <span className="table-body">{item.Camera}</span>
//               <span className="table-body">{item.Location}</span>
//               <span className="table-body">{item.Violation}</span>
//               <span className="table-body">{item.Number_Plate}</span>
//               <span className="table-body image-col">
//                 <button
//                   onClick={() => handleOpenImage(item.Image)}
//                   className="open-image-button"
//                 >
//                   Open
//                 </button>
//               </span>
//             </React.Fragment>
//           );
//         })}
//       </div>
//       {selectedImage && (
//         <div className="modal-overlay" ref={modalRef} onClick={handleModalClick}>
//           <div className="modal-content">
//             <img
//               src={selectedImage}
//               alt="Full Image"
//               className="full-image"
//               onClick={handleCloseImage}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Table;

// import React, { useEffect, useState } from "react";
// import "./ComponentsCss/Table.css";
// import { fetchData, getData } from "./Helpers/FetchTableData";

// function Table() {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetchData().then((jsonData) => {
//       setData(jsonData);
//       console.log(jsonData);
//     });
//   }, []);

//   console.log(data)

//   return (
//     <div className="table">
//       <div className="table-title">
//         <span className="title">Date</span>
//         <span className="title">Time</span>
//         <span className="title">Camera</span>
//         <span className="title">Location</span>
//         <span className="title">Violation</span>
//         <span className="title">Number Plate</span>
//         <span className="title">Image</span>
//       </div>
//       <div className="table-content">
//         {Object.keys(data).map((key) => {
//           const item = data[key];
//           const imagePath = item.Image; // Assuming item.Image contains the image path
//           return (
//             <React.Fragment key={key}>
//               <span className="table-body">{item.Date}</span>
//               <span className="table-body">{item.Time}</span>
//               <span className="table-body">{item.Camera}</span>
//               <span className="table-body">{item.Location}</span>
//               <span className="table-body">{item.Violation}</span>
//               <span className="table-body">{item.Number_Plate}</span>
//               <span className="table-body">
//                 <a target="" href={imagePath}>Open</a>
//               </span>
//             </React.Fragment>
//           );
//         })}
//       </div>
//     </div>
//   );
// } export default Table
