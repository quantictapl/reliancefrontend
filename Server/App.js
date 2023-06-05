const express = require("express");
const app = express();
const port = 5001;
const cors = require("cors");
const fs = require("fs");
const path = require("path");

app.use(cors());

app.get("/data", (req, res) => {
  // Replace the filePath with the actual path to your JSON file
  const reportFilePath = "C:/VsCode/quant-wiz/DemoJson/DataLatest.json";
  

  // Read the file
  fs.readFile(reportFilePath, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (error) {
        console.log("Error parsing JSON:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  });
});
app.get("/overview", (req, res) => {
  // Replace the filePath with the actual path to your JSON file
  const overviewFilePath="C:/VsCode/quant-wiz/DemoJson/Overview_data1.json";

  // Read the file
  fs.readFile(overviewFilePath, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (error) {
        console.log("Error parsing JSON:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  });
});

app.listen(port, () => {
  console.log("Server is running on port", port);
})
// const express = require('express');
// const app = express();
// const port = 7000;
// const cors = require('cors');
// const AWS = require('aws-sdk');
// AWS.config.update({
//   accessKeyId: 'AKIA24ADS5JH6NXSW3IR',
//   secretAccessKey: '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',
//   region: 'ap-south-1'
// });

// const s3 = new AWS.S3();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get('/data/:date', (req, res) => {
//   const { date } = req.params;
//   const bucketName = 'tansihq-demo';
//   const fileKey = `${date}.json`;
//   console.log(fileKey);

//   const params = {
//     Bucket: bucketName,
//     Key: fileKey,
//     ContentType: "application/json",
//   };

//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );

//   s3.getObject(params, (err, data) => {
//     if (err) {
//       console.log('Error fetching file:', err);
//       res.status(404).json({ error: 'File not found' });
//     } else {
//       const jsonData = JSON.parse(data.Body.toString());
//       res.json(jsonData);
//     }
//   });
// });

// app.get('/data', (req, res) => {
//   const bucketName = 'tansihq-demo';
//   const prefix = ''; // Updated prefix

//   const params = {
//     Bucket: bucketName,
//     Prefix: prefix,
//   };

//   s3.listObjectsV2(params, (err, data) => {
//     if (err) {
//       console.log('Error listing objects:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       const jsonFiles = data.Contents.map((object) =>
//         object.Key.replace('.json', '') // Removed prefix and file extension
//       );
//       console.log(jsonFiles); // Log the retrieved file names
//       res.json({ dates: jsonFiles });
//     }
//   });
// });

// app.listen(port, () => {
//   console.log('Server is running on aws');
// });
// ACCESS_KEY = 'AKIA24ADS5JH6NXSW3IR'
// SECRET_KEY = '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'