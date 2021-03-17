import * as tf from '@tensorflow/tfjs-node';

const csvUrl = 'file:///Users/leizhao/Documents/my_git/Web/js-ml/udemy_stephen/basic/data/kc_house_data.csv';

const csvDataset = tf.data
  .csv(csvUrl, {
    hasHeader: true,
    columnConfigs: {
      lat: { required: true },
      long: { required: true },
      price: { required: true, isLabel: true },
    },
    configuredColumnsOnly: true,
  })
  .shuffle(3);

const main = async () => {
  console.log(await csvDataset.toArray());
};

export default main;
