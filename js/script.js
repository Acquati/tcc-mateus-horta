var mediaSource = "./media/video-teste.mp4"
var canvas = document.getElementById('Canvas');
var context = canvas.getContext('2d');
var video = document.createElement("video");
var videoIsPlaying = false;

canvas.width = 1024;
canvas.height = 768;

video.src = mediaSource;
// video.width = 100;
// video.height = 100;

document.body.onkeyup = function (event) {
	if (event.keyCode == 32) {
		if (videoIsPlaying) {
			videoIsPlaying = false;
			video.pause();
		} else {
			videoIsPlaying = true;
			video.play();
	
			(function loop() {
				if (!video.paused && !video.ended) {
					context.drawImage(video, 0, 0);
					setTimeout(loop, 1000 / 20);
				}
			})();
		}
	}
}