import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECTID
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export async function addHistory(videoId, video) {
  return set(ref(database, `history/${videoId}`), {...video})
}

export async function getHistory() {
  return get(ref(database, 'history')).then(snapshot => {
      const items = snapshot.val() || {};
      return Object.values(items);
    })
}

export async function addLiked(videoId, video) {
  return set(ref(database, `liked/${videoId}`), {...video})
}

export async function getLiked() {
  return get(ref(database, 'liked')).then(snapshot => {
    const items = snapshot.val() || {};
    return Object.values(items);
  })
}