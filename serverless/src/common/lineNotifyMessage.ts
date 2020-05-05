import { URLSearchParams } from 'url';
import axios from 'axios';
import { setupFireStore, setupFireStorage } from './firebase';

const fs = require('fs');
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

export function parseCSV(): { [s: string]: any }[] {
  const data = fs.readFileSync("hackcrisis-jp-data.csv").toString()
  const results: { [s: string]: any }[] = [];
  const rows = data.split("\r\n");
  const columnNames = rows[0].split(",");
  for(let i = 1;i < rows.length;++i){
    const jsonColumn = {};
    const cells = rows[i].split(",");
    for(let j = 0;j < columnNames.length;++j){
      jsonColumn[columnNames[j]] = cells[j];
    }
    results.push(jsonColumn);
  }
  return results;
}

export async function generateMessageBody(): Promise<string> {
  const jsonObjects = parseCSV();
  const result = await uploadToNewJSON(jsonObjects);
  const messageBodies = ["新しく給付金情報が追加されました!!"];
  for(const jsonObject of jsonObjects){
    const messageBodyArr = []
    const keys = Object.keys(jsonObject);
    for(const key of keys){
      messageBodyArr.push(jsonObject[key])
    }
    messageBodies.push(messageBodyArr.join(" "))
  }
  return messageBodies.join("\r\n");
}

export async function uploadToNewJSON(jsonObjects: { [s: string]: any }[]) {
  const bucket = setupFireStorage().bucket();
  const file = bucket.file('data/convertCSV.json');
  const result = await file.save(JSON.stringify(jsonObjects));
  return result;
}