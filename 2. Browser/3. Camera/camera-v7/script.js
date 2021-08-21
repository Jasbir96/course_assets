let constraints = { video: true, audio: true };

let videoPlayer = document.querySelector("video");
let vidRecordBtn = document.querySelector("#record-video");

let mediaRecorder;
let chunks = [];
let recordState = false;

let filter = "";

let maxZoom = 3;
let minZoom = 1;
let currZoom = 1;

let zoomInBtn = document.getElementById("in");
let zoomOutBtn = document.getElementById("out");

zoomInBtn.addEventListener("click", function () {
  let vidScale = Number(
    videoPlayer.style.transform.split("(")[1].split(")")[0]
  );
  if (vidScale < 3) {
    currZoom = vidScale + 0.1;
    videoPlayer.style.transform = `scale(${currZoom})`;
  }
});
zoomOutBtn.addEventListener("click", function () {
  let vidScale = Number(
    videoPlayer.style.transform.split("(")[1].split(")")[0]
  );
  if (vidScale > 1) {
    currZoom = vidScale - 0.1;
    videoPlayer.style.transform = `scale(${currZoom})`;
  }
});

let allFilters = document.querySelectorAll(".filter");

for (let i = 0; i < allFilters.length; i++) {
  allFilters[i].addEventListener("click", function (e) {
    filter = e.currentTarget.style.backgroundColor;
    removeFilter();
    addFilterToScreen(filter);
  });
}

let captureBtn = document.querySelector("#click-picture");
captureBtn.addEventListener("click", function () {
  let innerDiv = captureBtn.querySelector("#click-div");
  innerDiv.classList.add("capture-animation");
  capture(filter);
  setTimeout(function () {
    innerDiv.classList.remove("capture-animation");
  }, 1000);
});

vidRecordBtn.addEventListener("click", function () {
  removeFilter();
  let innerDiv = vidRecordBtn.querySelector("#record-div");
  if (!recordState) {
    recordState = true;
    innerDiv.classList.add("recording-animation");
    currZoom = 1;
    videoPlayer.style.transform = `scale(${currZoom})`;
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
    // C4.2
    addMediaToGallery(blob, "video");
  };
});

function capture(filter) {
  let c = document.createElement("canvas");
  c.width = videoPlayer.videoWidth;
  c.height = videoPlayer.videoHeight;
  let ctx = c.getContext("2d");

  ctx.translate(c.width / 2, c.height / 2);
  ctx.scale(currZoom, currZoom);
  ctx.translate(-c.width / 2, -c.height / 2);
  ctx.drawImage(videoPlayer, 0, 0);
  if (filter !== "") {
    ctx.fillStyle = filter;
    ctx.fillRect(0, 0, c.width, c.height);
  }

  addMediaToGallery(c.toDataURL(), "img");
}

function addFilterToScreen(filterColor) {
  let filter = document.createElement("div");
  filter.classList.add("on-screen-filter");
  filter.style.height = "100vh";
  filter.style.width = "100vw";
  filter.style.position = "fixed";
  filter.style.top = "0px";
  filter.style.background = `${filterColor}`;
  document.querySelector("body").appendChild(filter);
}

function removeFilter() {
  let OnScreenfilter = document.querySelector(".on-screen-filter");
  if (OnScreenfilter) OnScreenfilter.remove();
}
