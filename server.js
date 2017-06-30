const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));


const testPosts = [
  {
    title: 'Title 1',
    content: 'This is the content of post 1',
    authorName: 'foo bar',
    authorUsername: 'foo.bar',
    id: 1,
  },
  {
    title: 'Title 2',
    content: 'This is the content of post 2',
    authorName: 'MEEEE',
    authorUsername: 'MEEEE',
    id: 2,
  },
  {
    title: 'Title 3',
    content: 'This is the content of post 3',
    authorName: 'RANDOM DUDE',
    authorUsername: 'IDKLOL',
    id: 3,
  },
];

const router = express.Router();
router.get('/posts', (req, res) => {
  res.json(testPosts);
});

// all of our api routes will be prefixed with /api
app.use('/api', router);


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
