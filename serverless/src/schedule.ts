import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

import { URLSearchParams } from 'url';
import axios from 'axios';
import { setupFireStore } from './common/firestore';

const LINE_NOTIFY_BASE_URL = 'https://notify-api.line.me';

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  console.log(event);
  const messages = new URLSearchParams();
  messages.append('message', 'testtest');

  const firestore = setupFireStore();
  const docsQuery = await firestore.collection('LineNotifyUsers').get();
  const responses = await Promise.all(
    docsQuery.docs.map((doc) => {
      const docData = doc.data();
      return axios.post(LINE_NOTIFY_BASE_URL + '/api/notify', messages, {
        headers: {
          Authorization: 'Bearer ' + docData.access_token,
        },
      });
    }),
  );
  const responseBody = JSON.stringify(
    responses.map((response) => response.data)
  , null, 2);
  console.log(responseBody);

  return {
    statusCode: 200,
    body: responseBody,
  };
}
