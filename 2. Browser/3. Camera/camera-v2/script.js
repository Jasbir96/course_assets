let constraints = { video: true, audio: true };

let videoPlayer = document.querySelector("video");
let vidRecordBtn = document.querySelector("#record-video");

let mediaRecorder;
let chunks = [];
let recordState = false;
let captureBtn = document.querySelector("#click-picture");
captureBtn.addEventListener("click", function () {
  // C5
  // find the inner div to animate from inside our captureBtn
  let innerDiv = captureBtn.querySelector("#click-div");
  // add animation class to animate that div
  innerDiv.classList.add("capture-animation");
  capture();
  //remove that class after 1 second because it take 1 sec to run the animation 
  setTimeout(function () {
    innerDiv.classList.remove("capture-animation");
  }, 1000);
});

// C6 
// In similar fashion as for captureBtn add Animation for vidRecordBtn
vidRecordBtn.addEventListener("click", function () {
  let innerDiv = vidRecordBtn.querySelector("#record-div")
  if (!recordState) {
    recordState = true;
    innerDiv.classList.add("recording-animation");
    mediaRecorder.start();
  } else {
    recordState = false;
    innerDiv.classList.remove("recording-animation");
    mediaRecorder.stop();
  }
});

navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {
  videoPlayer.srcObject = mediaStream;

  mediaRecorder = new MediaRecorder(mediaStream);

  mediaRecorder.ondataavailable = function (e) {
    chunks.push(e.data);
  };

  mediaRecorder.onstop = function () {
    let blob = new Blob(chunks, { type: "video/mp4" });
    chunks = [];

    var blobUrl = URL.createObjectURL(blob);

    var link = document.createElement("a");
    link.href = blobUrl;
    link.download = `${Date.now()}.mp4`;
    link.click();
    link.remove();
  };
});

function capture() {
  let c = document.createElement("canvas");
  c.width = videoPlayer.videoWidth;
  c.height = videoPlayer.videoHeight;
  let ctx = c.getContext("2d");
  ctx.drawImage(videoPlayer, 0, 0);
  let link = document.createElement("a");
  link.download = `${Date.now()}.png`;

  link.href = c.toDataURL();
  link.click();
}
