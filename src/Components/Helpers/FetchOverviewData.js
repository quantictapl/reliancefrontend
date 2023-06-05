let data = null;
let dates = null;

export const fetchData = async (date) => {
  try {
    const response = await fetch(`http://192.168.1.106:5001/overview/`);
    const jsonData = await response.json();
    data = jsonData;
    return jsonData;
  } catch (error) {
    console.log("Error fetching JSON data:", error);
    return null;
  }
};

export const fetchDates = async () => {
  try {
    const response = await fetch(`http://192.168.1.106:5001/overview/`);
    const jsonData = await response.json();
    data = jsonData;
    dates = Object.keys(jsonData);
    return dates;
  } catch (error) {
    console.log("Error fetching JSON data:", error);
    return null;
  }
};

export const getImageUrl = (imagePath) => {
  if (imagePath) {
    return `/Images/${imagePath}`;
  }
  return "";
};

export const getData = () => {
  return data;
};