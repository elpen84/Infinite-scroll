// unsplash API
const count = 10;
const apiKey = "8k9wqLKGJVLBdvsec_GboXHYNoe0aE28IShmJF-0X-I";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//   Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch Error Here
  }
}

//on load function
getPhotos();
