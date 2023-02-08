import * as tf from "@tensorflow/tfjs";

export async function predict() {
  const model = await tf.loadLayersModel(process.env.PUBLIC_URL + "model.json");
  const preds = model.predict(tf.tensor([[57, 0, 0, 140, 241, 0, 123, 1]]));

  console.log(preds);
}
