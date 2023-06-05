import React, { useEffect, useState } from "react";
import "./ComponentsCss/Dashboard.css";
import "./ComponentsCss/DashboardRight.css";
import quantLogo from "../Images/quantLogo.png";
import visicsLogo from "../Images/visicsLogo.svg";
import { ReactComponent as OverviewIcon } from "../Icons/overview.svg";
import { ReactComponent as Graph } from "../Icons/analytics.svg";
import { ReactComponent as ReportIcon } from "../Icons/report.svg";
import { ReactComponent as Alert } from "../Icons/alert.svg";
import { ReactComponent as Support } from "../Icons/support.svg";
import { ReactComponent as Settings } from "../Icons/settings.svg";
import { ReactComponent as Logout } from "../Icons/logout.svg";
import { HiUser } from "react-icons/hi";
import { RxBell } from "react-icons/rx";
import Report from "./Report";
import Overview from "./Overview";
import Routing from "./Helpers/Routing";
import { useNavigate } from "react-router-dom";
import { fetchDates } from "./Helpers/FetchOverviewData";
function Dashboard() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [dates,setDates]=useState([])
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };
  useEffect(()=>{
   fetchDates().then((jsonDates)=>{
    console.log(jsonDates)
    setDates(jsonDates)
   })
  },[])
  return (
    <div className="dashboard-container">
      <div className="dashboard-left">
        <div className="dashboard-left-topp">
        <div className="dashboard-title">
          <div className="dashboard-title-left">
            <div className="quant-logo">
              <img src={quantLogo} alt="quant-logo-img" className="quant-logo-img"/>

            </div>
            <div className="visics-logo">
            <img src={visicsLogo} alt="visics-logo-img" className="visics-logo-img"/>

            </div>
            
          </div>
        </div>
        <div className="dashboard-left-top">
          <div className="dashboard-left-main">
            <button
              className={`dashboard-icon-container-btn ${
                activeButton === 0 ? "active" : ""
              }`}
              onClick={() => {
                handleButtonClick(0);
                navigate("/overview");
              }}
            >
              <OverviewIcon className="icon overview-icon" />
              <span>Overview</span>
            </button>
            <button
              className={`dashboard-icon-container-btn ${
                activeButton === 2 ? "active" : ""
              }`}
              onClick={() => {
                handleButtonClick(2);
                navigate("/report");
              }}
            >
              <ReportIcon className="icon report-icon" />
              <span>Report</span>
            </button>
            <button
              className={`dashboard-icon-container-btn ${
                activeButton === 1 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(1)}
            >
              <Graph className="icon" />
              <span>Analytics</span>
            </button>
            
            <button
              className={`dashboard-icon-container-btn ${
                activeButton === 3 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(3)}
            >
              <Alert className="icon" />
              <span>Alert</span>
            </button>
            <button
              className={`dashboard-icon-container-btn ${
                activeButton === 4 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(4)}
            >
              <Support className="icon" />
              <span>Support</span>
            </button>
            <button
              className={`dashboard-icon-container-btn ${
                activeButton === 5 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(5)}
            >
              <Settings className="icon" />
              <span>Settings</span>
            </button>
          </div>
        </div>
        </div>
        

        <button
          className={`dashboard-left-footer-btn ${
            activeButton === 6 ? "active" : ""
          }`}
          onClick={() => handleButtonClick(6)}
        >
          <Logout className="icon ic" />
          <span>Logout</span>
        </button>
      </div>

      <div className="dashboard-right">
        <div className="dashboard-right-top">
          <div className="dashboard-title-right">
            <span className="dashboard-title-right-span">Welcome!</span>
            {/* <span className="dashboard-right-subtitle">
              We are ready to show your plant analytics
            </span> */}
          </div>
          <div className="dashboard-title-end">
            <button className="dashboard-right-icon-btn">
              <RxBell className="icon-right" />
            </button>
            <button className="dashboard-right-icon-btn">
              <HiUser className=" profile icon-right" />
            </button>
          </div>
        </div>
        <div className="dashboard-right-main">
          {/* <Report/> */}
          <Routing dates={dates} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
