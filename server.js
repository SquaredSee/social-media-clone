const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

// const router = express.Router();
app.get('/api', (req, res) => {
  res.json({ message: 'api root' });
});

// all of our routes will be prefixed with /api
// app.use('/api', router);

const port = process.env.PORT || 7000;

// serve build only if run with NODE_ENV=production
// run client and server seperately during development
if (process.env.NODE_ENV === 'production') {
  console.log(`Serving client at http://localhost:${port}`);
  app.get('*', (req, res) => {
    const index = path.join(__dirname, 'build', 'index.html');
    console.log(index);
    res.sendFile(index);
  });
}

app.listen(port, () => {
  console.log(`Api started at http://locahost:${port}/api`);
});
