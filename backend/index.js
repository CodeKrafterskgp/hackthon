import app from './app/app.js';
import qdb from './data/db.js';

import User from './data/schema/users.js';
import Question from './data/schema/questions.js';

import score from './data/fetch/topfive.js';

const port = 5000;

// listener
qdb()
  .then(() => {
    app.listen(port, () => {
      console.log(`running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log('DB connection failed !!!', err);
  });

// routers

app.get('/api/users', async (req, res) => {
  res.send(await User.find());
});

app.get('/api/quiz', async (req, res) => {
  res.send(await Question.find());
});

app.get('/api/score', async (req, res) => {
  res.send(await score());
});

function getUsers(name, pass) {
  return User({
    name: name,
    pass: pass,
  });
}

let currentUser = null;
app.post('/api/pp', async (req, res) => {
  console.log(req.body);
  currentUser = getUsers(req.body.name, req.body.pass);
  currentUser.save();
  return currentUser;
});

app.get('/api/loginstatus', async (req, res) => {
  if (currentUser == null) {
    res.send(false);
    console.log('f');
  } else {
    res.send(true);
    console.log('t');
  }
});
