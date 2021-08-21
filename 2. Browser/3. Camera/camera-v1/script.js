let constraints = { video: true, audio: true };

let videoPlayer = document.querySelector("video");
let vidRecordBtn = document.querySelector("#record-video");

let mediaRecorder;
let chunks = [];
let recordState = false;

// C2.2
let captureBtn = document.querySelector("#click-picture");
captureBtn.addEventListener("click", function () {
    // C3.2
    capture();
});

vidRecordBtn.addEventListener("click", function () {
  if (!recordState) {
    recordState = true;
    mediaRecorder.start();
    vidRecordBtn.innerText = "Recording...";
  } else {
    recordState = false;
    mediaRecorder.stop();
    vidRecordBtn.innerText = "Record";
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

// C3.1
// In this function we are creating a canvas setting its height and width according to video's height and width and then drawing at the moment image of the video track from the video element of html. After that converting that canvas to a data url, creating an achor tag setting that data url to the achor tag and clicking on it to download the image. 
function capture() {
  let c = document.createElement("canvas");
  c.width = videoPlayer.videoWidth;
  c.height = videoPlayer.videoHeight;
  let ctx = c.getContext("2d");
  ctx.drawImage(videoPlayer, 0, 0);
    let link = document.createElement("a");
    //using this we are setting name of the image file and date.now will always give it a unique name
    // Reference : //stackoverflow.com/a/18678698 (Google how to make a download btn in JS) 
  link.download = `${Date.now()}.png`;

 link.href = c.toDataURL(); 
  link.click();
}
