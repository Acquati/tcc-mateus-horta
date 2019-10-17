var mediaSource = "http://upload.wikimedia.org/wikipedia/commons/7/79/Big_Buck_Bunny_small.ogv"
var canvas = document.getElementById('Canvas');
var context = canvas.getContext('2d');
var video = document.createElement("video");

canvas.width = 1024;
canvas.height = 768;

video.src = mediaSource;
video.width = "100";
video.height = "100";

document.body.onkeyup = function (event) {
	if (event.keyCode == 32) {
		video.play();

		(function loop() {
			if (!video.paused && !video.ended) {
				context.drawImage(video, 0, 0);
				setTimeout(loop, 1000 / 30); // drawing at 30fps
			}
		})();
	}
}