// C2.1
let request = indexedDB.open("Camera", 1);
// C2.5
let db;

// C2.2
request.onsuccess = function (e) {
  db = request.result;
};

// C2.3
request.onerror = function (e) {
  console.log("error");
};

// C2.4
request.onupgradeneeded = function (e) {
  // C2.6
  db = request.result;
  db.createObjectStore("gallery", { keyPath: "mId" });
};

// C3
function addMediaToGallery(data, type) {
  // open a readwrite transaction
  let tx = db.transaction("gallery", "readwrite");
  // get gallery store
  let gallery = tx.objectStore("gallery");
  // add the media to gallery
  gallery.add({ mId: Date.now(), type, media: data });
}
