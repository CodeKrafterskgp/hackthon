import mongoose from 'mongoose';

const dbname = 'quiz';

const uri = `mongodb+srv://mcwarenr:${encodeURIComponent(
  'mcbclkb32.'
)}@cluster0.mqj9tmi.mongodb.net/${dbname}`;

const qdb = async () => {
  try {
    const connInst = await mongoose.connect(uri);
    console.log('connected');
  } catch (error) {
    console.log('MongoBD connection error', error);
    process.exit(1);
  }
};

export default qdb;
