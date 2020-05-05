import { URLSearchParams } from 'url';
import axios from 'axios';
import { setupFireStore, setupFireStorage } from './firebase';

const LINE_NOTIFY_BASE_URL = 'https://notify-api.line.me';

export async function sendMessageToAllUsers(): Promise<any[]> {
  const messages = new URLSearchParams();
  messages.append('message', await generateMessageBody());

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
  return responses.map((response) => response.data);
}

export async function generateMessageBody(): Promise<string> {
  const result = await uploadToNewJSON();
  return 'testtest';
}

export async function uploadToNewJSON() {
  const bucket = setupFireStorage().bucket();
  const file = bucket.file('data/convertCSV.json');
  const result = await file.save(JSON.stringify({}));
  return result;
}