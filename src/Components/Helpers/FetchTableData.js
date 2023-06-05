let data = null;

export const fetchData = () => {
  return fetch("http://192.168.1.106:5001/data")
    .then((response) => response.json())
    .then((jsonData) => {
      // console.log(jsonData)
      return jsonData;
    })
    .catch((error) => {
      console.log("Error fetching JSON data:", error);
      return null;
    });
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