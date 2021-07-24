const path = require('path');
const express = require('express'); // npm installed
const axios = require('axios');

const API_KEY = require('./config.js');
const baseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';
const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(express.json());

const getStatusCode = (method) => {
  switch (method) {
    case 'GET':
      return 200;
    case 'POST':
      return 201;
    case 'PUT':
      return 204;
  }
};

app.all('/*', (req, res) => {
  // console.log('METHOD:', req.method);
  // console.log('PATH:', req.url);
  const url = `${baseUrl}${req.url}`;
  axios({
    method: req.method,
    url,
    headers: {
      Authorization: API_KEY,
      'Content-Type': 'application/json',
    },
    data: req.body,
  })
    .then((apiRes) => {
      const statusCode = getStatusCode(req.method);
      res.status(statusCode).send(apiRes.data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

// app.get('*', (req, res) => {
//   axios({
//     method: req.method,
//     url: `${baseUrl}${req.route.path}`,
//     headers: { Authorization: API_KEY },
//   })
//     .then((data) => {
//       res.status(200).send(data);
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

// app.post('*', (req, res) => {
//   axios({
//     method: req.method,
//     url: `${baseUrl}${req.route.path}`,
//     headers: { Authorization: API_KEY },
//   })
//     .then((data) => {
//       res.status(201).send(data);
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

// app.put('*', (req, res) => {
//   axios({
//     method: req.method,
//     url: `${baseUrl}${req.route.path}`,
//     headers: { Authorization: API_KEY },
//   })
//     .then((data) => {
//       res.status(204).send(data);
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
