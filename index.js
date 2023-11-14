import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();


app.use(express.json());


app.use(cors());


app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('HELLO FROM TAUSEEF AKBAR ALI');
});

app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('CONNECTION ESTABLISHED SUCCESSFULLY!!');
    app.listen(PORT, () => {
      console.log(`BACKEND PORT IS : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
