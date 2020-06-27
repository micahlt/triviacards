/*  VARIABLE DECLARATIONS  */
let landingDiv = document.querySelector("#landing");
let gameDiv = document.querySelector("#app");
let monitorDiv = document.querySelector("#monitor");
let hostDiv = document.querySelector("#host");
let joinDiv = document.querySelector("#join");
let hostBtn = document.querySelector("#hostGame");
let joinBtn = document.querySelector("#joinGame");
let roomNameToCreate = document.querySelector("#roomNameToCreate");
let roomNameToJoin = document.querySelector("#roomNameToJoin");
let startHosting = document.querySelector("#startHosting");
let startJoining = document.querySelector("#startJoining");

/*  EVENT LISTENERS  */
hostBtn.addEventListener('click', function() {
  landingDiv.style.opacity = "0";
  window.setTimeout(function() {
    landingDiv.style.display = "none";
    hostDiv.style.display = "block";
    hostDiv.style.opacity = "1";
  }, 200)
});

joinBtn.addEventListener('click', function() {
  landingDiv.style.opacity = "0";
  window.setTimeout(function() {
    landingDiv.style.display = "none";
    joinDiv.style.display = "block";
    joinDiv.style.opacity = "1";
  }, 200)
});

startHosting.addEventListener('click', function() {
  hostGame(roomNameToCreate.value);
})

/*  CONNECTIONS  */
let hostGame = (id) => {
  let peer = new Peer(id);
  peer.on('connection', function(conn) {
    console.log(data);
  });
}