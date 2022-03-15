const main = document.querySelector('#main');
const scene1 = document.querySelector('#scene1');
const scene2 = document.querySelector('#scene2');
const chatbox = document.querySelector('#chat');
const video = document.querySelector('#video');
const acceptBtn = document.querySelector('#cool');
const rejectBtn = document.querySelector('#no');
const fuckOffBtn = document.querySelector('#fuckoff');

function handleAccept() {
  scene1.setAttribute('hidden', 'true');
  scene2.removeAttribute('hidden');
}
function handleReject() {
  console.log('Clicked');
}
function handleFuckOff() {
  console.log('Clicked');
}

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  // faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  // faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
]).then(() => {
  console.log('Face Regconize Is Ready');
  startVideo();
});

acceptBtn.addEventListener('click', handleAccept);
rejectBtn.addEventListener('click', handleReject);
fuckOffBtn.addEventListener('click', handleFuckOff);

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
