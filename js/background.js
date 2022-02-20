const images = ["1.jpg", "2.jpg", "3.jpeg", "4.jpg", "5.jpg"];
const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `image/${choseImage}`;
document.body.appendChild(bgImage);
