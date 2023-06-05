import React, { useState, useEffect } from "react";
import OverviewDateDropdown from "./OverviewDateDropdown";
import ShiftDrodown from "./ShiftDropdown";
import "./ComponentsCss/Overview.css";
import PieChart from "./Charts/PieChart";
import LineChart from "./Charts/LineChart";
import { fetchData, fetchDates } from "./Helpers/FetchOverviewData";
import noImg from "../Images/no-img.png"
import moment from 'moment';
import { useSelector, useDispatch } from "react-redux";
import { setDatesArr } from "./Store/Actions";
function Overview({dates}) {
  const [selectedDate, setSelectedDate] = useState();
  const [overviewData, setOverviewData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("vehicle");
  const today = moment().format('DD-MM-YYYY');
  console.log(today)
  // const dates = useSelector((state) => state.dates);
  // console.log(typeof(dates[0]))
  // console.log(typeof(selectedDate))
  // console.log(typeof("30-05-2023"))
  
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (dates && dates.includes(today)) {
      setSelectedDate(today);
      console.log(true)
    } else {
      console.log('Today is not part of the dates array.');
      setSelectedDate(dates[0] || '');
    }

    fetchDates()
  .then((jsonData) => {
    if (jsonData && jsonData.length > 0) {
      // Sort the jsonData array in descending order
      jsonData.sort((a, b) => moment(b, 'DD-MM-YYYY').valueOf() - moment(a, 'DD-MM-YYYY').valueOf());

      setSelectedDate(jsonData[0]);
    } else {
      console.log('No dates available.');
    }
  })
  .catch((error) => {
    console.log('Error fetching dates:', error);
  });
    fetchData(selectedDate)
      .then((jsonData) => {
        setOverviewData(jsonData);
        console.log(jsonData);
        setDatesArr(Object.keys(jsonData))
        if (!overviewData) {
          console.log('Overview data is null');
          return <div>Loading data...</div>;
        }
      })
      .catch((error) => {
        console.log("Error fetching overview data:", error);
      });

    const interval = setInterval(() => {
      console.log("Fetching data...");

      fetchData(selectedDate)
        .then((jsonData) => {
          setOverviewData(jsonData);
          console.log("Overview data:", jsonData);
        })
        .catch((error) => {
          console.log("Error fetching overview data:", error);
        });
    }, 2 * 60 * 1000); // Fetch data every 2 minutes

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const renderOverviewContent = () => {
    
    if (!overviewData) {
      return <div>Loading data...</div>;
    }
    
    
  
    const dataForDate = overviewData[selectedDate];
    const sortedData = dataForDate[selectedCategory];
    console.log(sortedData?.line_chart);
    if (!sortedData) {
      return <div>No data available for the selected date and category.</div>;
    }
  
    return (
      <div>
        <div className="overview-content-top">
          <div className="overview-content-top-left">
            <div className="overview-count">
              <span>Count</span>
              <span>IN: {sortedData?.count[0] || ""}</span>
              <span>OUT: {sortedData?.count[1] || ""}</span>
            </div>
            <div className="overview-violation">
              <span>Violation</span>
              <span>{sortedData?.violation || ""}</span>
            </div>
            <div className="overview-pie-chart">
              <PieChart pieData={sortedData?.pie_chart} />
            </div>
          </div>
          <div className="overview-content-top-right line-chart">
            <LineChart lineData={sortedData?.line_chart} />
          </div>
        </div>
        <div className="overview-content-bottom">
          <div className="overview-bottom-left">
            <div className="overview-botton-violation-top">
              <span className="overview-content-title">Frequent Violation</span>
              {Object.entries(sortedData?.frequent_violation || {}).map(([violation, count], index) => (
                <div className="violation-name" key={index}>
                  <span>{violation}</span>
                  <span>{count}</span>
                </div>
              ))}
            </div>
            <div className="overview-botton-violation-bottom">
              <span className="overview-content-title">Most Violated Area</span>
              <div className="violation-location">
                <span>{sortedData?.most_violated_area || ""}</span>
              </div>
            </div>
          </div>
          <div className="overview-bottom-right">
            <span className="overview-content-title">Recent Incidents</span>
            <div className="recent-incidents-container">
              {sortedData?.recent_incidents?.Date?.map((date, index) => (
                <div className="recent-incident" key={index}>
                  <img className="incident-img" src={sortedData?.recent_incidents?.Image[index] || noImg} alt="" />
                  <div className="incident-report">
                    <div className="incident">
                      <span>Date</span>
                      <span>-</span>
                      <span>{date  || ""}</span>
                    </div>
                    <div className="incident">
                      <span>Time</span>
                      <span>-</span>
                      <span>{sortedData?.recent_incidents?.Time[index] || ""}</span>
                    </div>
                    <div className="incident">
                      <span>Violation</span>
                      <span>-</span>
                      <span>{sortedData?.recent_incidents?.Violation[index] || ""}</span>
                    </div>
                    <div className="incident">
                      <span>Area</span>
                      <span>-</span>
                      <span>{sortedData?.recent_incidents?.Location[index] || ""}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="overview-top-btn-container">
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
        <div>
          <OverviewDateDropdown
            // dates={["30 May, 2023", "31 May, 2023"]}
            
            onDateChange={handleDateChange}
          />
          <ShiftDrodown />
        </div>
      </div>
      <div className="overview-content-container">
        {renderOverviewContent()}
      </div>
    </div>
  );
}

export default Overview;


