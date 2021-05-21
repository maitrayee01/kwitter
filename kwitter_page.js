var firebaseConfig = {
      apiKey: "AIzaSyC9Np46Gm14X5UkeXNxqUg4WW3Q0AEFfog",
      authDomain: "kwitter-cbf8b.firebaseapp.com",
      databaseURL: "https://kwitter-cbf8b-default-rtdb.firebaseio.com",
      projectId: "kwitter-cbf8b",
      storageBucket: "kwitter-cbf8b.appspot.com",
      messagingSenderId: "238251038258",
      appId: "1:238251038258:web:93fb54d04f1fb3efc90e2b"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
                        
    function send()
    {
          msg = document.getElementById("msg").value;  
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";

    }
//YOUR FIREBASE LINKS

function getData()
 { 
       firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
       snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       childData = childSnapshot.val();
       if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
      } });  }); }
getData();












function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";  
}