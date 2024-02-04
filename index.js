const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/strtoobj', (req, res) => {
  const incomeString = req.body.string;

  resultObject = Array.from(incomeString).reduce((acc, cur) => {
    acc[cur] = acc[cur] === undefined ? 1 : acc[cur] += 1;
    return acc;
  }, {});

  res.json(resultObject);
})

app.listen(port, () => {
  console.log(`Сервер запущен и слушает порт ${port}`);
})
