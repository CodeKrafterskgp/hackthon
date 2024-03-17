import Chat from '../schema/chat.js';

const chater = async () => {
  const data = await Chat.find({}).populate('user');
  console.log(data);
  return data;
};

export default chater;
