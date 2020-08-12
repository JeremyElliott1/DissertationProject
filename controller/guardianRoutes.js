const db = require('../util/database.js')

getGuardianTeachingScorePage = (req, res, next) => {
  db.connection.query('SELECT * FROM guardian_overall')
    .then(([rowData, columnData]) => {
      let universities = [];
      rowData.forEach(rowValue => {
        universities.push(rowValue);
      });
      universities = JSON.stringify(universities);
      res.render('guardianTeachingScore.ejs', {
        pageTitle: 'TheGuardian Teaching Scores',
        passedUniData: universities,
      });
    })
    .catch((err) => console.log(err));
};

getCareerProspectsPage = (req, res, next) => {
  db.connection.query('SELECT * FROM guardian_overall')
    .then(([rowData, columnData]) => {
      let universities = [];
      rowData.forEach(rowValue => {
        universities.push(rowValue);
      });
      universities = JSON.stringify(universities);
      res.render('guardianCareerProspects.ejs', {
        pageTitle: 'The Guardian Career Prospects',
        passedUniData: universities,
      });
    })
    .catch((err) => console.log(err));

};

getParallelPlotPage = (req, res, next) => {
  db.connection.query('SELECT * FROM guardian_overall')
    .then(([rowData, columnData]) => {
      let universities = [];
      rowData.forEach(rowValue => {
        universities.push(rowValue);
      });
      universities = JSON.stringify(universities);
      res.render('guardianParallelPlot.ejs', {
        pageTitle: 'Parallel Plot',
        passedUniData: universities,
      });
    })
    .catch((err) => console.log(err));

};

module.exports = {
  getGuardianTeachingScorePage: getGuardianTeachingScorePage,
  getCareerProspectsPage: getCareerProspectsPage,
  getParallelPlotPage: getParallelPlotPage
};