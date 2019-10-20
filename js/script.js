var mediaSource = "https://res.cloudinary.com/acquati/video/upload/v1571345545/tcc-mateus-horta/video-teste_zeaf60.mp4"
// var mediaSource = "./media/TCC_MATEUS_CORTETESTE.mp4"
// var mediaSource = "http://techslides.com/demos/sample-videos/small.mp4"
var video = document.createElement("video");
var videoIsPlaying = false;
video.src = mediaSource;
video.loop = true;

var container = document.getElementById("container");

var canvas = document.getElementById('Canvas');
var context = canvas.getContext('2d');
canvas.width = 720; // 560 1024
canvas.height = 480; // 320 768

var opaqueCanvas = document.createElement("canvas");
opaqueCanvas.classList.add("opaque-canvas");
var opaqueCanvasContext = opaqueCanvas.getContext('2d');
opaqueCanvas.width = 720;
opaqueCanvas.height = 480;
opaqueCanvasContext.globalAlpha = 0.01;

function keyHandler() {
	if (event.keyCode == 32) {
		this.onkeydown = null;

		video.play();

		(function loop() {
			if (!video.paused) {
				context.drawImage(video, 0, 0);

				setTimeout(loop, 1000 / 24);
			}
		})();
	}
}

document.onkeydown = keyHandler;

document.onkeyup = function (event) {
	if (event.keyCode == 32) {
		this.onkeydown = keyHandler;

		opaqueCanvasContext.drawImage(video, 0, 0);

		video.pause();
	}
}

container.appendChild(opaqueCanvas);
