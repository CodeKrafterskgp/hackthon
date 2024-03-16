import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
  user: {
    type: 'ObjectId',
    ref: 'User',
  },
  score: Number,
});

const Test = mongoose.model('Test', testSchema);

export default Test;
