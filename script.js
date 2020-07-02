const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Create Elements for Links and Photo, aad to the DOM
function displayPhotos() {
  //run  function for each object in photosarray
  photosArray.forEach((photo) => {
    //create <a> to link to unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    // create <img> for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    // put <img> inside <a>, then both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// unsplash API
const count = 10;
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

//on load function
getPhotos();
console.log(displayPhotos);
