const express = require('express');
const cors = require('cors');
const { getNextPrime } = require('./utils')

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.post('/calculate', (req, res) => {
  const { num1, num2 } = req.body;
  const prime = getNextPrime(Math.max(num1, num2));
  const sum = num1 + num2 + prime;

  res.json({ sum, prime });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})