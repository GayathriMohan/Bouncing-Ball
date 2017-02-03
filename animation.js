var ctx1, ctx2, ctx3, ball, radius = 30;
var reqY, reqX, TimeY, TimeX, InterY, InterX, MoveReqY, MoveReqX, MoveTimeY, MoveTimeX, MoveInterX, MoveInterY;
reqX = TimeX = InterX = 40;
reqY = TimeY = InterY = 70;
MoveReqY = MoveReqX = MoveInterY = MoveInterX = MoveTimeY = MoveTimeX = 3;
var canvasWidth = 420;
var canvasHeight = 620;

var image = new Image();

function init() {
    image.src = "background.jpg";
    var canvas1 = document.getElementById("element1");
    ctx1 = canvas1.getContext("2d");
    var canvas2 = document.getElementById("element2");
    ctx2 = canvas2.getContext("2d");
    var canvas3 = document.getElementById("element3");
    ctx3 = canvas3.getContext("2d");
    animate(ctx1);
    animateTimeOut(ctx2);
    animateInterval(ctx3);
}

//optimse the code

function draw(ball, context, reqX, reqY, TimeX, TimeY, InterX, InterY) {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.drawImage(image, 0, 0);
    context.beginPath();
    context.fillStyle = "white";
    if (ball == 1)
        context.arc(reqX, reqY, radius, 0, Math.PI * 2, false);
    else if (ball == 2)
        context.arc(TimeX, TimeY, radius, 0, Math.PI * 2, false);
    else
        context.arc(InterX, InterY, radius, 0, Math.PI * 2, false);
    context.fill();
    context.closePath();
}

init();

function calc(pointX, pointY, ball, context) {

    if (ball == 1) {
        if (pointY + radius >= canvasHeight || pointY <= radius) {
            MoveReqY = -MoveReqY;
        }
        if (pointX + radius > canvasWidth || pointX < radius) {
            MoveReqX = -MoveReqX;
        }
        reqX += MoveReqX;
        reqY += MoveReqY;
    } else if (ball == 2) {
        if (pointY + radius >= canvasHeight || pointY <= radius) {
            MoveTimeY = -MoveTimeY;
        }
        if (pointX + radius > canvasWidth || pointX < radius) {
            MoveTimeX = -MoveTimeX;
        }
        TimeX += MoveTimeX;
        TimeY += MoveTimeY;
    } else {
        if (pointY + radius >= canvasHeight || pointY <= radius) {
            MoveInterY = -MoveInterY;
        }
        if (pointX + radius > canvasWidth || pointX < radius) {
            MoveInterX = -MoveInterX;
        }
        InterX += MoveInterX;
        InterY += MoveInterY;
    }
    draw(ball, context, reqX, reqY, TimeX, TimeY, InterX, InterY);
}

function animate(context) {
    ball = 1;
    calc(reqX, reqY, ball, context);
    requestAnimationFrame(function() { animate(context) });
}

function animateTimeOut(context) {
    ball = 2;
    calc(TimeX, TimeY, ball, context);
    setTimeout(function() { animateTimeOut(context) }, 100);
}

function animateInterval(context) {
    ball = 3;
    calc(InterX, InterY, ball, context)
    setInterval(function() { animateInterval(context) }, 400);
}
