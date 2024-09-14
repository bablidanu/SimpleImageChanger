const img = document.getElementsByTagName("img")[0];
const images = [
  "http://127.0.0.1:5500/assets/puppy-1207816_960_720.jpg",
  "http://127.0.0.1:5500/assets/english-bulldog-562723_1280.jpg",
  "http://127.0.0.1:5500/assets/istockphoto-1391774586-612x612.jpg",
  "http://127.0.0.1:5500/assets/istockphoto-500301842-612x612.jpg",
  "http://127.0.0.1:5500/assets/labrador-8554882_640.webp",
];

let index = 1;

function handleClick() {
  index %= images.length;
  img.src = images[index++];
}
