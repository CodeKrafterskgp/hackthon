import Test from '../schema/test.js';

const score = async () => {
  const data = await Test.find({}).populate('user');
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[i].score > data[j].score) {
        let gg = data[i];
        data[i] = data[j];
        data[j] = gg;
      }
    }
  }
  let newData = [];
  for (let i = 0; i < 5; i++) {
    newData.push({
      name: data[i].user.name,
      score: data[i].score,
    });
  }
  return newData;
};

export default score;
