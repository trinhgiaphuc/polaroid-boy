const video = document.querySelector('#video');

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  // faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  // faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
]).then(() => {
  console.log('Face Regconize Is Ready');
  startVideo();
});

function startVideo() {
  // navigator.getUserMedia(
  //   { video: {} },
  //   stream => (video.srcObject = stream),
  //   err => console.error(err)
  // );
}

// video.addEventListener('play', () => {
// const canvas = faceapi.createCanvasFromMedia(video);
// const { width, height } = video;
// faceapi.matchDimensions(canvas, { width, height });
// document.body.append(canvas);
// setInterval(async () => {
//   const result = await faceapi
//     .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
//     .withFaceLandmarks();
//   const resizeDetections = faceapi.resizeResults(result, { width, height });
//   canvas.getContext('2d', { width, height }).clearRect(0, 0, width, height);
//   faceapi.draw.drawDetections(canvas, resizeDetections);
// }, 100);
// });
