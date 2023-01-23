import os

import tensorflow as tf
from tensorflow import keras
import tensorflowjs as tfjs

directory = os.path.join('.', 'src', 'pages', 'UCI')
model = keras.models.load_model(os.path.join(directory, '32-48-32.h5'))

tfjs.converters.save_keras_model(model, directory)