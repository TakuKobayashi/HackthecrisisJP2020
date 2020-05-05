import 'source-map-support/register';

import { APIGatewayEvent, APIGatewayProxyHandler, Context } from 'aws-lambda';
import * as awsServerlessExpress from 'aws-serverless-express';
import * as express from 'express';

import { setupFireStorage } from './common/firebase';

import { lineNotifyRouter } from './routes/line/notify';

const app = express();
const server = awsServerlessExpress.createServer(app);
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(cors({ origin: true }));

app.use('/line/notify', lineNotifyRouter);

app.get('/', (req, res) => {
  const bucket = setupFireStorage().bucket();
  const file = bucket.file('data/sample.json');
  file.save(JSON.stringify({})).then(result => {
    console.log(result);
  });
  res.json({ hello: 'world' });
});

export const handler: APIGatewayProxyHandler = (event: APIGatewayEvent, context: Context) => {
  awsServerlessExpress.proxy(server, event, context);
};
