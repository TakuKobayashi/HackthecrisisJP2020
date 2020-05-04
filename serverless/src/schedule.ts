import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

import { sendMessageToAllUsers } from './common/lineNotifyMessage';

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  console.log(event);
  const results = await sendMessageToAllUsers();
  const responseBody = JSON.stringify(results, null, 2);

  return {
    statusCode: 200,
    body: responseBody,
  };
}
