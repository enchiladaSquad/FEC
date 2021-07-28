import React from 'react';
import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import axios from 'axios';

import mockProductIdResponse from '../../../server/data/exampleProductIdRes';
// import app, { getStatusCode } from '../../../server/src/index';

// app.all('/*', (req, res) => {
//   console.log('METHOD:', req.method);
//   console.log('PATH:', req.url);
//   const url = `${baseUrl}${req.url}`;
//   axios({
//     method: req.method,
//     url,
//     headers: {
//       Authorization: API_KEY,
//       'Content-Type': 'application/json',
//     },
//     data: req.body,
//   })
//     .then((apiRes) => {
//       const statusCode = getStatusCode(req.method);
//       res.status(statusCode).send(apiRes.data);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send(err);
//     });
// });

// const server = setupServer(
//   rest.get('/products/:product_id', (req, res, ctx) => {
//     res.send(mockProductIdResponse);
//   }),
// );

// beforeAll(() => server.listen());

// describe('mock product id path', () => {
//   it('should return product id mock data', async () => {
//     server.use(
//       rest.get('/products/:product_id', (req, res, ctx) => res(mockProductIdResponse)),
//     );

//     const result = waitFor(await axios.get('/products/:product_id'));
//     expect(result).toEqual(mockProductIdResponse);
//   });
// });

describe('placeholder test', () => {
  it('should hold a place', () => {
    expect(true).toBe(true);
  });
});
