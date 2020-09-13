//module imports
const express = require('express');

//local imports
const db = require('../util/database.js')

const router = express.Router();

router.get('/overview', (req, res, next) => {
  db.connection.query('SELECT * FROM guardian_overall')
    .then(([rowData, columnData]) => {
      let universities = [];
      rowData.forEach(rowValue => {
        universities.push(rowValue);
      });
      universities = JSON.stringify(universities);
      res.render('guardianParallelPlot.ejs', {
        pageTitle: 'TheGuardian Overview',
        passedUniData: universities,
      });
    })
    .catch((err) => console.log(err));
});

router.get('/byMetric', (req, res, next) => {
  db.connection.query('SELECT * FROM guardian_overall')
    .then(([rowData, columnData]) => {
      let universities = [];
      rowData.forEach(rowValue => {
        universities.push(rowValue);
      });
      universities = JSON.stringify(universities);
      res.render('guardianMetricBarCharts.ejs', {
        pageTitle: 'TheGuardian Metrics View',
        passedUniData: universities,
      });
    })
    .catch((err) => console.log(err));
});

function repsond(res, pageName, pageTitle, dataSet1, dataSet2, dataSet3) {
  res.render(pageName, {
    pageTitle: pageTitle,
    dataSet1: dataSet1,
    dataSet2: dataSet2,
    dataSet3: dataSet3
  })
};

module.exports = {
  router: router
};