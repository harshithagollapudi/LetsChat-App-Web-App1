// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAZlp0rJ0gm8IL6gG1K59dCLKyGIzkcEhg",
    authDomain: "kwitter3-f77e5.firebaseapp.com",
    databaseURL: "https://kwitter3-f77e5-default-rtdb.firebaseio.com",
    projectId: "kwitter3-f77e5",
    storageBucket: "kwitter3-f77e5.appspot.com",
    messagingSenderId: "355143517869",
    appId: "1:355143517869:web:986167b488233173a6e824",
    measurementId: "G-176YF3YNQC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem ("user_name");
Room_name = localStorage.getItem ("Room_name");
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(Room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
}
function getData() { firebase.database().ref("/"+Room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;


//End code
 } });  }); }
getData();