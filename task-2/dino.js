var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 720;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "bg.png";

//rock image
var rockReady = false;
var rockImage = new Image();
rockImage.onload = function () {
	rockReady = true;
};
rockImage.src = "rock.jpg";

// dino image
var dinoReady = false;
var dinoImage = new Image();
dinoImage.onload = function () {
	dinoReady = true;
};
dinoImage.src = "dino.png";

var dino = {
	speed: 17, // movement in pixels per second
	x: 100,
	y: 450,
	width: dinoImage.width,
	height: 280,
	jumping: false,
	vel: 0
};
var rock = {
	width: 160,
	height: 112,
	x: 2000,
	y: 600
};

var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	keysDown[e.keyCode] = false;
}, false);
var gravity = 2; 
var keys = function () {
	if (keysDown[32]) { // Player holding space
		if(!dino.jumping) {
   			dino.jumping = true;
   			dino.vel = -dino.speed*2;
   		}
	}
};

var xpos = 0;
var game_over=false;
var score = 0;
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
		ctx.drawImage(bgImage, bgImage.width, 0);
		ctx.drawImage(bgImage, 2*bgImage.width, 0);
		ctx.drawImage(bgImage, 3*bgImage.width, 0);
	}
	if (dino.y <= 0) {
		dino.y=0;
	}
	if (dino.y >= 450) {
		dino.y=450;
		dino.jumping= false;
	}
	if (dinoReady) {
		ctx.drawImage(dinoImage, dino.x, dino.y);
	}
  if (rockReady) {
		ctx.drawImage(rockImage, rock.x, rock.y);
	}
	var rockWidth=160;
	var rockHeight=112;
	var dinoWidth=260;
	var dinoHeight=280;
	if (dino.x < rock.x + rockWidth  && dino.x + dinoWidth  > rock.x &&
		dino.y < rock.y + rockHeight && dino.y + dinoHeight > rock.y) {
		if (!game_over) {
			alert("Game Over");
			location.reload();
		}
		game_over = true;
    
 }
  if (rock.x < (dino.x-130)) {
		rock.x+=800 + Math.floor(Math.random()*1000);
	}
	dino.vel+=gravity;
	dino.y+=dino.vel;
	dino.x+=20;
	rock.x-=5;
	score++;
  };
var offsetX = -20;
var main = function () {
	var now = Date.now();
	var delta = now - then;
	render();
	score++;
	keys();
	then = now;
	requestAnimationFrame(main);
	ctx.translate(offsetX, 0);
        document.getElementById("score").innerHTML = score;
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now();
alert("Welcome to Dino Dash! press Space to jump.");
main();