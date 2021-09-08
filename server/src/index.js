const path = require('path');
const express = require('express'); // npm installed
const axios = require('axios');

const API_KEY = process.env.API_KEY || require('../config');

const baseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';
const PORT = process.env.PORT || 3000;

const app = express();

const routeMiddleware = function (req, res, next) {
  if (!/(^\/api\/*)/.test(req.url)) {
    return res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  }
  next();
};

app.use(express.json());
app.use(express.static(path.join(__dirname, '../../client/dist')));
app.use(routeMiddleware);

const getStatusCode = (method) => {
  switch (method) {
    case 'GET':
      return 200;
    case 'POST':
      return 201;
    case 'PUT':
      return 204;
    default:
      return 200;
  }
};

app.get('/favicon.ico', (req, res) => {});

app.all('/api/*', (req, res) => {
  console.log('METHOD:', req.method);
  console.log('PATH:', req.url);
  const url = `${baseUrl}${req.url.slice(4)}`;
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
      // console.error(err);
      res.status(500).send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
