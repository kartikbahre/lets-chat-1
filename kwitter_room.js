
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBEEQq3dQo9x-urlve5cCv8b5MA7b0hgOs",
    authDomain: "kwitter1-ffd5d.firebaseapp.com",
    databaseURL: "https://kwitter1-ffd5d-default-rtdb.firebaseio.com",
    projectId: "kwitter1-ffd5d",
    storageBucket: "kwitter1-ffd5d.appspot.com",
    messagingSenderId: "389651703112",
    appId: "1:389651703112:web:3dc558232e7f9c6b383f7d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }    

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
          console.log("roomname: "+Room_names);
          row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"<div><hr>";
          document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}