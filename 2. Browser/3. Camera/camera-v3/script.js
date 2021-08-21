let constraints = { video: true, audio: true };

let videoPlayer = document.querySelector("video");
let vidRecordBtn = document.querySelector("#record-video");

let mediaRecorder;
let chunks = [];
let recordState = false;

// C2.3
let filter = "";

// C2.1
let allFilters = document.querySelectorAll(".filter");

// C2.2
for (let i = 0; i < allFilters.length; i++) {
  allFilters[i].addEventListener("click", function (e) {
    //save the filter selected
    filter = e.currentTarget.style.backgroundColor;
    // remove the previous filter
    removeFilter();
    // apply the new filter
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
  // C4
  removeFilter()
  let innerDiv = vidRecordBtn.querySelector("#record-div");
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

// C5 
// Now this function accepts filter as an argument 
function capture(filter) {
  let c = document.createElement("canvas");
  c.width = videoPlayer.videoWidth;
  c.height = videoPlayer.videoHeight;
  let ctx = c.getContext("2d");
  ctx.drawImage(videoPlayer, 0, 0);
  //If filter is not an empty string then apply that filter over the image drawn in canvas by drawing that filter colour rectangle over the entire canvas 
  if (filter !== "") {
    ctx.fillStyle = filter;
    ctx.fillRect(0, 0, c.width, c.height);
  }
  let link = document.createElement("a");
  link.download = `${Date.now()}.png`;

  link.href = c.toDataURL();
  link.click();
}

// C2.4
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

// C2.5
function removeFilter() {
  let OnScreenfilter = document.querySelector(".on-screen-filter");
  if (OnScreenfilter) OnScreenfilter.remove();
}
