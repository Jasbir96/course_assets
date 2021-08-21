let constraints = { video: true, audio: true };

let videoPlayer = document.querySelector("video");
let vidRecordBtn = document.querySelector("#record-video");

let mediaRecorder;
let chunks = [];
let recordState = false;

let filter = "";

// C3

let maxZoom = 3;
let minZoom = 1;
let currZoom = 1;

let zoomInBtn = document.getElementById("in");
let zoomOutBtn = document.getElementById("out");

// C4.1
zoomInBtn.addEventListener("click", function () {
  // C4.3
  // Getting the scale value
  let vidScale = Number(
    videoPlayer.style.transform.split("(")[1].split(")")[0]
  );
  // checking if video scale is greater than maxZoom, if not then increase it by 0.1 and show the effects on UI
  if (vidScale < 3) {
    currZoom = vidScale + 0.1;
    videoPlayer.style.transform = `scale(${currZoom})`;
  }
});
// C4.4
// Similarly do it for zoomOut
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
    // C4.5 
    //Set the currZoom to 1 and vid scale to 1 as video does not support zooming.
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

    var blobUrl = URL.createObjectURL(blob);

    var link = document.createElement("a");
    link.href = blobUrl;
    link.download = `${Date.now()}.mp4`;
    link.click();
    link.remove();
  };
});

// C5
// Shifting the origin and zooming
function capture(filter) {
  let c = document.createElement("canvas");
  c.width = videoPlayer.videoWidth;
  c.height = videoPlayer.videoHeight;
  let ctx = c.getContext("2d");

  // The zooming have to be done before drawimg image ,if you do it after scaling canvas wont scale your drawn images

  // these coordinates will give us centre
  ctx.translate(c.width / 2, c.height / 2);
  ctx.scale(currZoom, currZoom);
  ctx.translate(-c.width / 2, -c.height / 2);
  
  ctx.drawImage(videoPlayer, 0, 0);
  if (filter !== "") {
    ctx.fillStyle = filter;
    ctx.fillRect(0, 0, c.width, c.height);
  }
  console.log(currZoom);

  let link = document.createElement("a");
  link.download = `${Date.now()}.png`;

  link.href = c.toDataURL();
  link.click();
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
