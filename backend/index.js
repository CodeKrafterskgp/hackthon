import app from './app/app.js';
import qdb from './data/db.js';

import User from './data/schema/users.js';
import Test from './data/schema/test.js';
import Question from './data/schema/questions.js';

import score from './data/fetch/topfive.js';

const port = 4000;

const user1 = new User({
  name: 'Someone',
  email: 'prince@gmail.com',
  pass: 'newpass',
});

const test1 = new Test({
  user: user1.id,
  score: 80,
});

const q1 = new Question({
  question:
    'A limestone is called found in seams of great thickness in non-crystalline texture with earthy appearance is called ?',
  option1: 'granular limestone',
  option2: 'compact limestone',
  option3: 'magnesium limestone',
  option4: 'kankar',
  correct: 'compact limestone',
});

// q1.save();

qdb()
  .then(() => {
    app.listen(port, () => {
      console.log(`running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log('DB connection failed !!!');
  });

// routers

app.get('/users', async (req, res) => {
  res.send(await User.find());
});

app.get('/quiz', async (req, res) => {
  res.send(await Question.find());
});

app.get('/score', async (req, res) => {
  res.send(await score());
});

app.post('/api/pp', async (req, res) => {
  console.log(req.body);
  res.send('hello');
});
