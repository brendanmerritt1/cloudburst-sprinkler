const images = {
  black: require("../assets/cloudburst_black.png"),
  white: require("../assets/cloudburst_white.png"),
  carousel: [
    require("../assets/carouselpic1.png"),
    require("../assets/carouselpic2.png"),
    require("../assets/carouselpic3.png"),
  ],
};

export function loadImage(imageName) {
  return images[imageName];
}
