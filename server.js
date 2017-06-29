const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 7000;

const router = express.Router();
router.get('/', (req, res) => {
  res.json({ message: 'api root' });
});

// all of our routes will be prefixed with /api
app.use('/api', router);

app.use(express.static('build'));

// app.get('/', (req, res) => {
//   const index = path.join(__dirname, 'build/index.html');
//   console.log(index);
//   res.sendFile(index);
// });

app.listen(port, () => {
  console.log(`Api started on port ${port}`);
});
