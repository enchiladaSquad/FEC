const path = require('path');
const express = require('express'); // npm installed
const axios = require('axios');

const API_KEY = require('./config.js');
const baseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';
const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(express.json());
// other configuration...

// app should receive a post request

/* WILDCARD */

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
  console.log('METHOD:', req.method);
  console.log('PATH:', req.url);
  const url = `${baseUrl}${req.url}`;
  axios({
    method: req.method,
    url,
    headers: { Authorization: API_KEY },
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

// /* PRODUCT PATHS */

// app.get(`/products`, (req, res) => {
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

// app.get(`/products/:product_id`, (req, res) => {
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

// app.get(`/products/:product_id/styles`, (req, res) => {
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

// app.get(`/products/:product_id/related`, (req, res) => {
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

// /* REVIEWS PATHS */

// app.get(`/reviews`, (req, res) => {
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

// app.get(`/reviews/meta`, (req, res) => {
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

// app.post(`/reviews`, (req, res) => {
//   axios({
//     method: req.method,
//     url: `${baseUrl}${req.route.path}`,
//     headers: { Authorization: API_KEY },
//   })
//     .then(() => {
//       res.status(201).end();
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

// app.put(`/reviews/:review_id/helpful`, (req, res) => {
//   axios({
//     method: req.method,
//     url: `${baseUrl}${req.route.path}`,
//     headers: { Authorization: API_KEY },
//   })
//     .then(() => {
//       res.status(204).end();
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

// app.put(`/reviews/:review_id/report`, (req, res) => {
//   axios({
//     method: req.method,
//     url: `${baseUrl}${req.route.path}`,
//     headers: { Authorization: API_KEY },
//   })
//     .then(() => {
//       res.status(204).end();
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

// /* QUESTIONS & ANSWERS PATHS */

// app.get(`/qa/questions`, (req, res) => {
//   axios({
//     method: req.method,
//     url: `${baseUrl}${req.route.path}`,
//     headers: { Authorization: API_KEY },
//   })
//     .then((data) => {})
//     .catch((err) => {});
// });

// app.get(`/qa/questions/:question_id/answers`, (req, res) => {
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
// app.post(`/qa/questions`, (req, res) => {
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

// app.post(`/qa/questions/:question_id/answers`, (req, res) => {
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

// app.put(`/qa/questions/:question_id/helpful`, (req, res) => {
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

// app.put(`/qa/questions/:question_id/report`, (req, res) => {
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

// app.put(`/qa/answers/:answer_id/helpful`, (req, res) => {
//   axios({
//     method: req.method,
//     url: `${baseUrl}${req.route.path}`,
//     headers: { Authorization: API_KEY },
//   })
//     .then(() => {
//       res.status(204).end();
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

// app.put(`/qa/answers/:answer_id/report`, (req, res) => {
//   axios({
//     method: req.method,
//     url: `${baseUrl}${req.route.path}`,
//     headers: { Authorization: API_KEY },
//   })
//     .then(() => {
//       res.status(204).end();
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

// /* CART PATHS */

// app.get('/cart', (req, res) => {
//   axios({
//     method: req.method,
//     url: `${baseUrl}${req.route.path}`,
//     headers: { Authorization: API_KEY },
//   })
//     .then(() => {
//       res.status(200).end();
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

// app.post('/cart', (req, res) => {
//   axios({
//     method: req.method,
//     url: `${baseUrl}${req.route.path}`,
//     headers: { Authorization: API_KEY },
//   })
//     .then(() => {
//       res.status(201).end();
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// });

// /* INTERACTIONS PATHS */

// app.post('/interactions', (req, res) => {
//   const result = !['element', 'widget', 'time'].includes(req.body);

//   console.log('result:', result);

//   if (result) {
//     res.status(422).send('UNPROCESSABLE ENTITY');
//   }

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

// app.listen(PORT, `Server is listening on port:${PORT}`);
