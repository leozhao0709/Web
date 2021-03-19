import * as tf from '@tensorflow/tfjs-node';

const data = () => {
  return [
    [1, 2, 3, 4, 5],
    [1, 3, 5, 7, 9],
  ];
};

const main = async () => {
  const [xs, ys] = data();

  const inputs = tf.tensor(xs);
  const labels = tf.tensor(ys);

  const model = tf.sequential();

  model.add(
    tf.layers.dense({
      units: 1,
      inputShape: [1],
      activation: 'relu',
      kernelInitializer: 'randomNormal',
    })
  );

  model.compile({
    loss: tf.losses.meanSquaredError,
    optimizer: tf.train.sgd(0.05),
  });

  await model.fit(inputs, labels, {
    batchSize: 4,
    epochs: 200,
  });

  console.log(model.predict(tf.tensor([6])).toString());
};

export default main;
