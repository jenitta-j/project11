const images = [
  { src: "https://placeimg.com/300/200/nature", title: "Forest", category: "nature" },
  { src: "https://placeimg.com/300/200/animals", title: "Cat", category: "animals" },
  { src: "https://placeimg.com/300/200/architecture", title: "Building", category: "architecture" },
  { src: "https://placeimg.com/300/200/nature?2", title: "Mountain", category: "nature" },
  { src: "https://placeimg.com/300/200/animals?2", title: "Dog", category: "animals" },
  { src: "https://placeimg.com/300/200/architecture?2", title: "Bridge", category: "architecture" },
  { src: "https://placeimg.com/300/200/nature?3", title: "River", category: "nature" },
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");

function displayImages() {
  const search = searchInput.value.toLowerCase();
  const category = categorySelect.value;

  const filtered = images.filter(img => {
    const matchCategory = category === "all" || img.category === category;
    const matchSearch = img.title.toLowerCase().includes(search);
    return matchCategory && matchSearch;
  });

  gallery.innerHTML = "";

  filtered.forEach(img => {
    const image = document.createElement("img");
    image.src = img.src;
    image.alt = img.title;
    gallery.appendChild(image);
  });
}

searchInput.addEventListener("input", displayImages);
categorySelect.addEventListener("change", displayImages);

window.onload = displayImages;
