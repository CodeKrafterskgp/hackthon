import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  question: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
  correct: String,
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
