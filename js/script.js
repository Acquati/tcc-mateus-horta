// var mediaSource = "https://res.cloudinary.com/acquati/video/upload/v1571345545/tcc-mateus-horta/video-teste_zeaf60.mp4"
var mediaSource = "http://techslides.com/demos/sample-videos/small.mp4"
var canvas = document.getElementById('Canvas');
var context = canvas.getContext('2d');
var video = document.createElement("video");
var videoIsPlaying = false;

video.src = mediaSource;
video.loop = true;

canvas.width = 560;
canvas.height = 320;

document.onkeydown = function (event) {
	if (event.keyCode == 32) {
		console.log('AOOOOOOBA');
		// videoIsPlaying = true;
		// video.play();

		// (function loop() {
		// 	if (!video.paused) {
		// 		context.drawImage(video, 0, 0);
		// 		setTimeout(loop, 1000 / 20);
		// 	}
		// })();
	}
}

// window.onclick = function () {
// 	if (videoIsPlaying) {
// 		videoIsPlaying = false;
// 		video.pause();
// 	} else {
// 		videoIsPlaying = true;
// 		video.play();

// 		(function loop() {
// 			if (!video.paused) {
// 				// context.save();
// 				context.clearRect(0, 0, canvas.width, canvas.height);
// 				context.globalAlpha = 0.5;
// 				context.drawImage(video, 0, 0);
// 				// context.restore();
// 				setTimeout(loop, 1000 / 20);
// 			}
// 		})();
// 	}
// }