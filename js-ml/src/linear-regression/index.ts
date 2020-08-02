import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
import { Tensor } from '@tensorflow/tfjs';

export const linearRegression = async () => {
  const heights = [150, 160, 170];
  const weights = [40, 50, 60];

  tfvis.render.scatterplot(
    { name: 'linear regression' },
    { values: heights.map((x, i) => ({ x, y: weights[i] })) },
    { xAxisDomain: [140, 180], yAxisDomain: [30, 70] }
  );

  const inputsTensor = tf.tensor(heights);
  const inputs = inputsTensor.sub(150).div(20); // every elements in this tensor sub 150(min number) and then div(max number - min number) 20 (归一)
  const labels = tf.tensor(weights).sub(40).div(20);

  const model = tf.sequential(); // one input and one output
  model.add(
    tf.layers.dense({
      units: 1, // Positive integer, dimensionality of the output space.
      inputShape: [1],
    })
  );
  model.compile({
    loss: tf.losses.meanSquaredError, // 方差
    optimizer: tf.train.sgd(0.1), // mini-batch gradient descent 梯度下降
  });

  await model.fit(inputs, labels, {
    batchSize: 4, // 每次训练抽样数据
    epochs: 100, // 训练次数
    callbacks: tfvis.show.fitCallbacks({ name: 'train process' }, ['loss']),
  });

  const output = model.predict(tf.tensor([180]).sub(150).div(20)) as tf.Tensor;
  alert(`if height is 180cm, then predict weight is ${output.mul(20).add(40).dataSync()}`);
};
