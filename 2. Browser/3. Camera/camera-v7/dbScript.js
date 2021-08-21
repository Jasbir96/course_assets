let request = indexedDB.open("Camera", 1);
let db;

request.onsuccess = function (e) {
  db = request.result;
};

request.onerror = function (e) {
  console.log("error");
};

request.onupgradeneeded = function (e) {
  db = request.result;
  db.createObjectStore("gallery", { keyPath: "mId" });
};

function addMediaToGallery(data, type) {
  let tx = db.transaction("gallery", "readwrite");
  let gallery = tx.objectStore("gallery");
  gallery.add({ mId: Date.now(), type, media: data });
}

function viewMedia() {
  let body = document.querySelector("body");
  let tx = db.transaction("gallery", "readonly");
  let gallery = tx.objectStore("gallery");
  let req = gallery.openCursor();
  req.onsuccess = function (e) {
    let cursor = req.result;
    if (cursor) {
      if (cursor.value.type == "video") {
        let vidContainer = document.createElement("div");
        vidContainer.setAttribute("data-mId", cursor.value.mId);
        vidContainer.classList.add("gallery-vid-container");
        let video = document.createElement("video");
        vidContainer.appendChild(video);

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("gallery-delete-button");
        deleteBtn.innerText = "Delete";
        // C3.2
        deleteBtn.addEventListener("click", deleteBtnHandler);
        let downloadBtn = document.createElement("button");
        downloadBtn.classList.add("gallery-download-button");
        downloadBtn.innerText = "Download";
        // C4.2
        downloadBtn.addEventListener("click", donwloadBtnHandler);
        vidContainer.appendChild(deleteBtn);
        vidContainer.appendChild(downloadBtn);

        video.autoplay = true;
        video.controls = true;
        video.loop = true;
        video.src = window.URL.createObjectURL(cursor.value.media);
        body.appendChild(vidContainer);
      } else {
        let imgContainer = document.createElement("div");
        imgContainer.setAttribute("data-mId", cursor.value.mId);
        imgContainer.classList.add("gallery-img-container")
        let img = document.createElement("img");
        img.src = cursor.value.media;
        imgContainer.appendChild(img);
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("gallery-delete-button");
        deleteBtn.innerText = "Delete";
        // C3.3
        deleteBtn.addEventListener("click", deleteBtnHandler);
        let downloadBtn = document.createElement("button");
        downloadBtn.classList.add("gallery-download-button");
        downloadBtn.innerText = "Download";
        // C4.3
        downloadBtn.addEventListener("click", donwloadBtnHandler);
        imgContainer.appendChild(deleteBtn);
        imgContainer.appendChild(downloadBtn);
        body.appendChild(imgContainer);
      }
      cursor.continue();
    }
  };
}

// C2
function deleteMediaFromGallery(mId) {
  let tx = db.transaction("gallery", "readwrite");
  let gallery = tx.objectStore("gallery");
  console.log(mId);
  //Typecasting to a number is imp because we have stored Date.now() which gives us a number
  gallery.delete(Number(mId));
}

// C3.1
function deleteBtnHandler(e) {
  let mId = e.currentTarget.parentNode.getAttribute("data-mId");
  deleteMediaFromGallery(mId);
  e.currentTarget.parentNode.remove();
}

// C4.1
function donwloadBtnHandler(e) {
  let a = document.createElement("a");
  a.href = e.currentTarget.parentNode.children[0].src;
  // checks if the element is video or img so that we can define the extension 
  if (e.currentTarget.parentNode.children[0].nodeName == "IMG") {
    a.download = "image.png";
  } else {
    a.download = "video.mp4";
  }
  a.click()
  a.remove()
}
