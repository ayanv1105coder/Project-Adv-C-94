  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD19PEqu9YRbSrpGTdyfLILc-l5R8EycbY",
    authDomain: "projecttest-4fc45.firebaseapp.com",
    projectId: "projecttest-4fc45",
    storageBucket: "projecttest-4fc45.appspot.com",
    messagingSenderId: "159739269044",
    appId: "1:159739269044:web:81a78def0a09934e48ace1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}