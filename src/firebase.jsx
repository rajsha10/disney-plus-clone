const firebaseConfig = {
    apiKey: "AIzaSyBZIOsE_vnksJk67KzfQMKnzaGs2GwHP6w",
    authDomain: "disneyplus-clone-c32bb.firebaseapp.com",
    projectId: "disneyplus-clone-c32bb",
    storageBucket: "disneyplus-clone-c32bb.appspot.com",
    messagingSenderId: "315615000983",
    appId: "1:315615000983:web:4cbbdc479da6a2bb366cd2",
    measurementId: "G-K17E4XYZGG"
  };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;