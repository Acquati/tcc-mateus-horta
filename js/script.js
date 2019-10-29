// var mediaSource = "https://res.cloudinary.com/acquati/video/upload/v1571345545/tcc-mateus-horta/video-teste_zeaf60.mp4"
var mediaSource = "./media/TQFQFNMF_corte_3_25102019.mp4"
// var mediaSource = "http://techslides.com/demos/sample-videos/small.mp4"
var video = document.createElement("video");
var videoIsPlaying = false;
video.src = mediaSource;
video.loop = true;

var container = document.getElementById("container");

var canvas = document.getElementById('Canvas');
var context = canvas.getContext('2d');
canvas.width = 1024; // 560 480 1024
canvas.height = 768; // 320 720 768

var opaqueCanvas = document.createElement("canvas");
opaqueCanvas.classList.add("opaque-canvas");
var opaqueCanvasContext = opaqueCanvas.getContext('2d');
opaqueCanvas.width = 1024;
opaqueCanvas.height = 768;
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
		context.clearRect(0, 0, canvas.width, canvas.height);

		video.pause();
	}
}

container.appendChild(opaqueCanvas);
