const images = {
  black_281: require("../assets/cloudburst_black_281px_opt.png"),
  white_281: require("../assets/cloudburst_white_281px_opt.png"),
  black_313: require("../assets/cloudburst_black_313px_opt.png"),
  white_313: require("../assets/cloudburst_white_313px_opt.png"),
  white_440: require("../assets/cloudburst_white_440px_opt.png"),
  home_1920: require("../assets/HomePage_1920px_opt.png"),
  contact_1920: require("../assets/ContactUs_1920px_opt.jpg"),
  carousel: [
    require("../assets/carouselpic1.png"),
    require("../assets/carouselpic2.png"),
    require("../assets/carouselpic3.png"),
  ],
};

export function loadImage(imageName) {
  return images[imageName];
}
