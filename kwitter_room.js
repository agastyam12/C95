// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDcRNoHGglKrLVw3RkpfvmBwr_8c27rYBk",
  authDomain: "kwitter-b392c.firebaseapp.com",
  databaseURL: "https://kwitter-b392c-default-rtdb.firebaseio.com",
  projectId: "kwitter-b392c",
  storageBucket: "kwitter-b392c.appspot.com",
  messagingSenderId: "837043921936",
  appId: "1:837043921936:web:8626b398fc352d05f71695",
  measurementId: "G-NNLJSYYRX3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var analytics = getAnalytics(app);
user_name = localStorage.getItem("user_name" , user_name);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
         console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
         document.getElementById("output").innerHTML += row;  
      });});}
getData();

function addRoom(){
     room_name = document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
     });

     localStorage.setItem("room_name" , room_name);

     window.location = "kwitter_page.html";
}


function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location="kwitter_page.html";
    
}