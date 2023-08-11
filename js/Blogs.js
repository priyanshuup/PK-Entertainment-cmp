
const dataContainer = document.getElementById("image-container");

// Fetch data from the API
fetch("https://jh-fgnk.onrender.com/api/v1/blogs")
.then((response) => response.json())
.then((data) => {
const fetchoriginals = data.blogsfinds;
console.log(fetchoriginals);

// Create a container div to hold the dynamically created divs
const slider_container = document.createElement("div");
slider_container.classList.add("slider_container"); // Add the CSS class to the container

// Create a container div to hold the dynamically created divs
const container = document.createElement("div");
container.classList.add("container"); // Add the CSS class to the container

// slider_container.appendChild(container)

// Create a container div to hold the dynamically created divs
const swiper = document.createElement("div");
swiper.classList.add("swiper"); // Add the CSS class to the container
swiper.classList.add("myswiper"); // Add the CSS class to the container

// container.appendChild(swiper)

// Create a container div to hold the dynamically created divs
const swiperwraper = document.createElement("div");
swiperwraper.classList.add("swiper-wrapper"); // Add the CSS class to the container
// swiper.appendChild(swiperwraper)

// Iterate over each object and create a <div> for each
fetchoriginals.forEach((item) => {
 const swiperslide = document.createElement("div");
 swiperslide.classList.add("swiper-sliide"); // Add the CSS class to the div
 swiperslide.classList.add("swiper-slide"); // Add the CSS class to the div

// swiperwraper.appendChild(div)

 // Create nested <div> for the image
 const imageDiv = document.createElement("div");
 imageDiv.classList.add("imagediv")

 // Create and populate the <img> tag
 const img = document.createElement("img");
 img.src = item.title;

 // Append the <img> to the nested <div>
 imageDiv.appendChild(img);

 // Append the nested <div> to the main <div>
 swiperslide.appendChild(imageDiv);

 // Create and populate the <h1> tag
 const paragraph = document.createElement("h1");
 paragraph.textContent = item.heading;
 swiperslide.appendChild(paragraph);

 // Create and populate the <p> tag
 const heading = document.createElement("p");
 heading.textContent = item.description;
 swiperslide.appendChild(heading);

 // Append the main <div> to the container
 swiperwraper.appendChild(swiperslide);
});

slider_container.appendChild(container)
container.appendChild(swiper)
swiper.appendChild(swiperwraper)
// swiperwraper.appendChild(div);
// Append the container to the document body
dataContainer.appendChild(slider_container);
})
.catch((error) => {
console.error("Error:", error);
});


