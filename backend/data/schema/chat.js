import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema(
  {
    user: {
      type: 'ObjectId',
      ref: 'User',
    },
    msg: {
      type: String,
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;
