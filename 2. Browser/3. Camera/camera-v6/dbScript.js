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

// C2
function viewMedia() {
  let body = document.querySelector("body");
  // open up a transaction to read from gallery objectStore
  let tx = db.transaction("gallery", "readonly");
  let gallery = tx.objectStore("gallery");
  // Create a cursor
  let req = gallery.openCursor();
  req.onsuccess = function (e) {
    let cursor = req.result;
    // Using the cursor get all objects stored in the store one by one
    if (cursor) {
      //Check if they are of type video or image
      if (cursor.value.type == "video") {
        //if they are of type video create a video element and render media to screen with delete and download buttons(in this version buttons will not work)
        let vidContainer = document.createElement("div");
        // This id is required later to perform delete
        vidContainer.setAttribute("data-mId", cursor.value.mId);
        vidContainer.classList.add("gallery-vid-container");
        let video = document.createElement("video");
        vidContainer.appendChild(video);

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("gallery-delete-button");
        deleteBtn.innerText = "Delete";
        let downloadBtn = document.createElement("button");
        downloadBtn.classList.add("gallery-download-button");
        downloadBtn.innerText = "Download";
        vidContainer.appendChild(deleteBtn);
        vidContainer.appendChild(downloadBtn);

        //if you dont give video controls you cannot have autoplay
        video.autoplay = true;
        video.controls = true;
        video.loop = true;
        // This creates a url of a blob object
        video.src = window.URL.createObjectURL(cursor.value.media);
        body.appendChild(vidContainer);
      } else {
        // similarly if they are image create img element and render them
        let imgContainer = document.createElement("div");
        imgContainer.setAttribute("data-mId", cursor.value.mId);
        imgContainer.classList.add("gallery-img-container");
        let img = document.createElement("img");
        img.src = cursor.value.media;
        imgContainer.appendChild(img);
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("gallery-delete-button");
        deleteBtn.innerText = "Delete";
        let downloadBtn = document.createElement("button");
        downloadBtn.classList.add("gallery-download-button");
        downloadBtn.innerText = "Download";
        imgContainer.appendChild(deleteBtn);
        imgContainer.appendChild(downloadBtn);
        body.appendChild(imgContainer);
      }
      cursor.continue();
    }
  };
}
