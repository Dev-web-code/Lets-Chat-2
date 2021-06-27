//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCcwFtts-koGfz7-XZ4dCn1LMpmnAq8oyQ",
    authDomain: "lets-chat-2984a.firebaseapp.com",
    databaseURL: "https://lets-chat-2984a-default-rtdb.firebaseio.com",
    projectId: "lets-chat-2984a",
    storageBucket: "lets-chat-2984a.appspot.com",
    messagingSenderId: "67889821599",
    appId: "1:67889821599:web:04d4e5d0fffc9acc20afaa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
