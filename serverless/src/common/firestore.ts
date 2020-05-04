import * as firebase from 'firebase';

export function setupFireStore(){
  if(firebase.apps.length <= 0){
    firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY!,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN!,
      projectId: process.env.FIREBASE_PROJECT_ID!,
    });
  }
  return firebase.firestore();
}