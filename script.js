var movedirection = [true,false,false,false,false];
var fps = 60;
var playerMs = 4;
const bike = document.querySelector("#bike");
var bikechords = [220,0];
var tick = 0;

const glass = document.querySelector("#gl")
const rick = document.querySelector("#ri");
const palt = document.querySelector("#pa");
const pengar = document.querySelector("#pe");

glass.style.display = ("none");
rick.style.display = ("none");
palt.style.display = ("none");
pengar.style.display = ("none");

setInterval(() => {
    tick++;
    playerMovement();
}, 1000/fps);



function uniKeyCode(event) {
    var key = event.keyCode;
    //console.log(key);
    if(key == 87) {movedirection[1] = true;};
    if(key == 83) {movedirection[2] = true;};
    if(key == 65) {movedirection[3] = true;};
    if(key == 68) {movedirection[4] = true;};
}

function logkeyup(event) {
    var keyup = event.keyCode;
    //console.log(keyup);
    if(keyup == 87) {movedirection[1] = false;}
    if(keyup == 83) {movedirection[2] = false;}
    if(keyup == 65) {movedirection[3] = false;}
    if(keyup == 68) {movedirection[4] = false;}
  }

  function playerMovement() {
    var moveammount; 
    if(movedirection[1] == true) {moveammount = bikechords[0] -= playerMs; bike.style.top = (moveammount + "px")} 
    if(movedirection[2] == true) {moveammount = bikechords[0] += playerMs; bike.style.top = (moveammount + "px")} 
    if(movedirection[3] == true) {moveammount = bikechords[1] -= playerMs; bike.style.left = (moveammount + "px")} 
    if(movedirection[4] == true) {moveammount = bikechords[1] += playerMs; bike.style.left = (moveammount + "px")}
    
    if(bikechords[1] > 300 & bikechords[0] > 180) {glass.style.display = "block"}
    if(bikechords[1] > 550 & bikechords[0] > 180) {rick.style.display = "block"}
    if(bikechords[1] > 800 & bikechords[0] > 180) {palt.style.display = "block"}
    if(bikechords[1] > 1000 & bikechords[0] > 180) {pengar.style.display = "block"}
  }