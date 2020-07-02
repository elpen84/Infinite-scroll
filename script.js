const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

let photosArray = [];

//helper function to set attributes on dom elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//check if all images are loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}

// Create Elements for Links and Photo, aad to the DOM
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  //run  function for each object in photosarray
  photosArray.forEach((photo) => {
    //create <a> to link to unsplash
    const item = document.createElement("a");
    // item.setAttribute("href", photo.links.html);
    // item.setAttribute("target", "_blank");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    // create <img> for photo
    const img = document.createElement("img");
    // img.setAttribute("src", photo.urls.regular);
    // img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    //Event Listener, check when eash is done loading
    img.addEventListener("load", imageLoaded);
    // put <img> inside <a>, then both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// unsplash API
const count = 30;
const apiKey = "8k9wqLKGJVLBdvsec_GboXHYNoe0aE28IShmJF-0X-I";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//   Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch Error Here
  }
}

//check to see if scrolling near bottom of page, load more photos
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

//on load function
getPhotos();
