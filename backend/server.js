const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.post('/calculate', (req, res) => {
  const sum = 0;
  res.json({ sum });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})