var ctx1, ctx2, ctx3, radius = 30,
    reqY = 40,
    reqX = 70,
    ball,
    TimeX = 40,
    TimeY = 70,
    MoveTimeY = 3,
    MoveTimeX = 3,
    MoveReqY = 3,
    MoveReqX = 3,
    canvasWidth = 420,
    canvasHeight = 620;
var image = new Image();

function init() {
    image.src = "background.jpg";
    var canvas1 = document.getElementById("element1");
    ctx1 = canvas1.getContext("2d");
    var canvas2 = document.getElementById("element2");
    ctx2 = canvas2.getContext("2d");
    var canvas3 = document.getElementById("element3");
    ctx3 = canvas3.getContext("2d");

}

function draw1() {
    ctx1.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx1.drawImage(image, 0, 0);
    ctx1.beginPath();
    ctx1.fillStyle = "white";
    ctx1.arc(reqX, reqY, radius, 0, Math.PI * 2, false);
    ctx1.fill();
    ctx1.closePath();
}

function draw2() {
    ctx2.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx2.drawImage(image, 0, 0);
    ctx2.beginPath();
    ctx2.fillStyle = "gold";
    ctx2.arc(TimeX, TimeY, radius, 0, Math.PI * 2, false);
    ctx2.fill();
    ctx2.closePath();
}

function draw3() {
    ctx3.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx3.drawImage(image, 0, 0);
    ctx3.beginPath();
    ctx3.fillStyle = "black";
    ctx3.arc(reqX, reqY, radius, 0, Math.PI * 2, false);
    ctx3.fill();
    ctx3.closePath();
}
init();

function calc(pointX, pointY, val) {

    if (val == 1) {
        if (pointY + radius >= canvasHeight || pointY <= radius) {
            MoveReqY = -MoveReqY;
        }
        if (pointX + radius > canvasWidth || pointX < radius) {
            MoveReqX = -MoveReqX;
        }
        reqX += MoveReqX;
        reqY += MoveReqY;
    }
    if (val == 2) {
        if (pointY + radius >= canvasHeight || pointY <= radius) {
            MoveTimeY = -MoveTimeY;
        }
        if (pointX + radius > canvasWidth || pointX < radius) {
            MoveTimeX = -MoveTimeX;
        }
        TimeX += MoveTimeX;
        TimeY += MoveTimeY;
    }

}

function animate() {
    ball = 1;
    calc(reqX, reqY, ball);
    draw1();
    requestAnimationFrame(animate);
}
animate();

function animateset() {
    ball = 2;
    calc(TimeX, TimeY, ball);
    draw2();
    setTimeout(animateset, 200);
}
animateset();



// function animateint() {
//     calc()
//     draw3();
//     setInterval(animateint,400);
// }
// animateint();
