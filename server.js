const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));


// stand-in for a database during development
const testPosts = [
  {
    title: 'Title 1',
    content: 'This is the content of post 1',
    author: 'foo.bar',
    id: 1,
  },
  {
    title: 'Title 2',
    content: 'This is the content of post 2',
    author: 'MEEEE',
    id: 2,
  },
  {
    title: 'Title 3',
    content: 'This is the content of post 3',
    author: 'IDKLOL',
    id: 3,
  },
];

// router handles all api requests
const router = express.Router();

router.get('/posts', (req, res) => {
  res.json(testPosts);
});

router.get('/posts/:id', (req, res) => {
  res.json(testPosts[req.params.id - 1]);
});

// all api routes will are prefixed with /api
app.use('/api', router);


const port = process.env.PORT || 7000;

// serve build only if run with NODE_ENV=production
if (process.env.NODE_ENV === 'production') {
  console.log(`Serving client at http://localhost:${port}`);

  // all non-api routes are handled by the client
  app.get('*', (req, res) => {
    const index = path.join(__dirname, 'build', 'index.html');
    console.log(index);
    res.sendFile(index);
  });
}

app.listen(port, () => {
  console.log(`Api started at http://locahost:${port}/api`);
});
