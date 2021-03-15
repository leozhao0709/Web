import * as tf from '@tensorflow/tfjs-node';

const main = () => {
  console.log(basicKnnAlgorithm());
};

const basicKnnAlgorithm = () => {
  const feature = tf.tensor([
    [-121, 47],
    [-121.2, 46.5],
    [-122, 46.4],
    [-120.9, 46.7],
  ]);

  const label = tf.tensor([[200], [250], [215], [240]]);

  const predictionPoint = tf.tensor([-121, 47]);
  const k = 2;

  return (
    (feature.sub(predictionPoint).pow(2).sum(1).pow(0.5).expandDims(1).concat(label, 1).arraySync() as number[][])
      .sort((a, b) => a[0] - b[0])
      .slice(0, k)
      .reduce((acc, pair) => acc + pair[1], 0) / k
  );
};

const fundamental = () => {
  const data1 = tf.tensor([1, 2, 3]);
  const otherData = tf.tensor([4, 5, 6]);

  data1.div(otherData).print();
  console.log(data1.arraySync()[0]);

  const data2 = tf.tensor([
    [20, 30, 40],
    [50, 60, 70],
    [50, 60, 70],
    [50, 60, 70],
    [50, 60, 70],
    [50, 60, 70],
  ]);

  data2.slice([0, 1], [6, 1]).print();
  data2.slice([0, 1], [-1, 1]).print();

  const data3 = tf.tensor([
    [1, 2, 3],
    [4, 5, 6],
  ]);

  const data4 = tf.tensor([
    [7, 8, 9],
    [10, 11, 12],
  ]);

  data3.concat(data4, 1).print();
  data3.sum(1).print();
  data3.sum(1, true).print();
};

export default main;
