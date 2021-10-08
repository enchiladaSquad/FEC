const path = require('path');
const express = require('express'); // npm installed
const axios = require('axios');
const morgan = require('morgan');
const config = require('../config');

const API_KEY = config.GITHUB_TOKEN;

const baseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';
const PORT = process.env.PORT || 3000;

const app = express();

const routeMiddleware = function (req, res, next) {
  if (!/(^\/api\/*)/.test(req.url)) {
    return res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  }
  next();
};

app.use('*.js' || '*.jsx', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.json());
app.use(morgan('common'));
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

app.all('/api/*', (req, res) => {
  const url = `${baseUrl}${req.url.slice(4)}`;
  console.debug(req.method, 'URL:', url);
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
      console.debug(
        'apiRes.data:',
        JSON.stringify(apiRes.data, null, 2).slice(0, 100),
        '...',
      );
      const statusCode = getStatusCode(req.method);
      res.status(statusCode).send(apiRes.data);
    })
    .catch((err) => {
      console.error(
        'Error proxying request:',
        err.message,
        err.data ? err.data : '',
      );
      if (err.response) {
        res.status(err.response.status).send(err);
      } else {
        res.status(500).send(err);
      }
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
