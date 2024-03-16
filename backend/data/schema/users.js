import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  pass: String,
});

const User = mongoose.model('User', userSchema);

export default User;
