import { NextFunction, Request, Response } from 'express';
import axios from 'axios';

import { sendMessageToAllUsers } from '../../common/lineNotifyMessage';
import { setupFireStore } from '../../common/firestore';

const { v4: uuid } = require('uuid');
const querystring = require('querystring');
const express = require('express');
const lineNotifyRouter = express.Router();

const LINE_NOTIFY_AUTH_BASE_URL = 'https://notify-bot.line.me';

const redirectUri = process.env.LINE_NOTIFY_REDIRECT_URL;

lineNotifyRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.send('hello line');
});

lineNotifyRouter.get('/auth', (req: Request, res: Response, next: NextFunction) => {
  const stateString = uuid();
  res.cookie('state', stateString);
  const lineOauthParams = {
    response_type: 'code',
    client_id: process.env.LINE_NOTIFY_CLIENT_ID,
    scope: 'notify',
    state: stateString,
    redirect_uri: redirectUri,
  };
  res.redirect(LINE_NOTIFY_AUTH_BASE_URL + '/oauth/authorize?' + querystring.stringify(lineOauthParams));
});

lineNotifyRouter.get('/callback', async (req: Request, res: Response, next: NextFunction) => {
  const lineOauthParams = {
    grant_type: 'authorization_code',
    client_id: process.env.LINE_NOTIFY_CLIENT_ID,
    client_secret: process.env.LINE_NOTIFY_CLIENT_SECRET,
    code: req.query.code,
    redirect_uri: redirectUri,
  };
  const resultResponse = await axios.post(LINE_NOTIFY_AUTH_BASE_URL + '/oauth/token?' + querystring.stringify(lineOauthParams)).catch((err) => {
    console.log(err);
    res.redirect('/');
  });
  const result = resultResponse.data;
  // ユーザーを一意に特定
  if(result && req.query.state){
    const firestore = setupFireStore();
    await firestore.collection("LineNotifyUsers").doc(req.query.state).set({
      access_token: result.access_token,
      created_at: new Date(),
    });
  }
  res.json(result);
});

lineNotifyRouter.get('/notify', async (req: Request, res: Response, next: NextFunction) => {
  const results = await sendMessageToAllUsers();
  res.json(results);
});

export { lineNotifyRouter };
