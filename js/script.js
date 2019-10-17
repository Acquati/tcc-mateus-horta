var mediaSource = "https://res.cloudinary.com/acquati/video/upload/v1571345545/tcc-mateus-horta/video-teste_zeaf60.mp4"
var canvas = document.getElementById('Canvas');
var context = canvas.getContext('2d');
var video = document.createElement("video");
var videoIsPlaying = false;

// if (window.innerWidth < 720) {
// 	canvas.width = window.innerWidth;
// 	canvas.height = window.innerHeight;
// } else {
// 	canvas.width = 720;
// 	canvas.height = 480;
// }

canvas.width = 720;
canvas.height = 480;

video.src = mediaSource;

// document.body.onkeyup = function (event) {
// 	if (event.keyCode == 32) {
// 		if (videoIsPlaying) {
// 			videoIsPlaying = false;
// 			video.pause();
// 		} else {
// 			videoIsPlaying = true;
// 			video.play();

// 			(function loop() {
// 				if (!video.paused && !video.ended) {
// 					context.drawImage(video, 0, 0);
// 					setTimeout(loop, 1000 / 20);
// 				}
// 			})();
// 		}
// 	}
// }

window.onclick = function () {
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