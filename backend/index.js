import app from './app/app.js';
import qdb from './data/db.js';

import User from './data/schema/users.js';
import Question from './data/schema/questions.js';

import score from './data/fetch/topfive.js';

import Chat from './data/schema/chat.js';

import Test from './data/schema/test.js';

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

function makeL(user) {
  let hg = new Test({
    user: user,
    score: Math.random() * 100,
  });
  hg.save();
}
const validator = async (name, pass) => {
  const ausers = await User.find();
  console.log(ausers);
  ausers.map((u) => {
    if (name == u.name && pass == u.pass) {
      return [true, u];
    } else return [false, null];
  });
  // ausers.map((u) => {
  //   makeL(u._id);
  // });
};

// validator('name', 'pass');

let currentUser = null;
app.post('/api/pp', async (req, res) => {
  console.log(req.body);
  let veli = await validator(req.body.name, req.body.pass);
  // if (veli[0]) {
  //   currentUser = veli[1];
  //   res.send({ sta: 1 });
  // } else {
  //   res.send({ sta: 0 });
  // }
  // console.log(veli);
});

app.get('/api/loginstatus', async (req, res) => {
  if (currentUser == null) {
    res.send(false);
  } else {
    res.send(true);
  }
});

app.get('/api/getuser', async (req, res) => {
  if (currentUser == null) {
    res.send(null);
  } else {
    res.send(currentUser);
  }
});

import chater from './data/fetch/getchat.js';
import e from 'express';
app.get('app/chats', async (req, res) => {
  res.send(await chater());
});

function getChat(userid, msg) {
  return Chat({
    user: userid,
    msg: msg,
  });
}

app.post('/api/setchat', async (req, res) => {
  console.log(req.body);
  currentUser = getChat(req.body.name, req.body.msg);
  currentUser.save();
  return currentUser;
});
