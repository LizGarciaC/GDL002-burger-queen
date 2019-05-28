import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBcU4u4XpyJQFrrfdISdpNhR6wij0lvcvY",
    authDomain: "burguerqueen-6f106.firebaseapp.com",
    databaseURL: "https://burguerqueen-6f106.firebaseio.com",
    projectId: "burguerqueen-6f106",
    storageBucket: "burguerqueen-6f106.appspot.com",
    messagingSenderId: "616828888018",
    appId: "1:616828888018:web:25a822ba6683a24a"
  };
 firebase.initializeApp(config);


 export default firebase;