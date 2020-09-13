import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from 'express-jwt';
import jsonwebtoken from 'jsonwebtoken';

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => res.json({
  foo: 'bar',
}));

const jwtSecret = 'secret123';

app.get('/api/v1/auth/signin', (req, res) => {
  res.json({
    token: jsonwebtoken.sign({ user: 'johndoe' }, jwtSecret),
  });
});

app.use(jwt({ secret: jwtSecret, algorithms: ['HS256'] }));

const foods = [
  {
    id: 1,
    description: 'burritos',
  },
  {
    id: 2,
    description: 'quesadillas',
  },
  {
    id: 3,
    description: 'churos',
  },
];
app.get('/api/v1/foods', (req, res) => {
  res.json(foods);
});

module.exports = app;
