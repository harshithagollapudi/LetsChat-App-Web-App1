

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function Addroom() {
    Room_name = document.getElementById("Room_name").value;

      localStorage.setItem("roomname",room_name)

      purpose:"adding_room_name"

    };
    localStorage.setItem("room_name", Room_name);

    window.location = "kwitter_page.html";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_name-" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      
      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function log_out() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("Room_name");
  window.location = "index.html";

}