const images = {
  black_281: require("../assets/cloudburst_black_281px_opt.png"),
  white_281: require("../assets/cloudburst_white_281px_opt.png"),
  black_313: require("../assets/cloudburst_black_313px_opt.png"),
  white_313: require("../assets/cloudburst_white_313px_opt.png"),
  white_440: require("../assets/cloudburst_white_440px_opt.png"),
  home_1920: require("../assets/neighborhood-sprinkler-system-1920.jpg"),
  contact_1920: require("../assets/sprinkler-system-garden-1920.jpg"),
  about_us: require("../assets/residential-sprinkler-1920.jpg"),
  commercial: require("../assets/commercial-property-irrigation-1920.jpg"),
  gallery: require("../assets/residential-lawn-sprinklers-1920.jpg"),
  residential: require("../assets/residential-backyard-sprinklers-1920.jpg"),
  join_us: require("../assets/cloudburst-commercial-irrigation-1920.jpg"),
  carousel: [
    require("../assets/carouselpic1.png"),
    require("../assets/carouselpic2.png"),
    require("../assets/carouselpic3.png"),
  ],
  certifications: [
    require("../assets/bbb-logo.png"),
    require("../assets/IA-Logo.png"),
    require("../assets/IA-of-NJ-logo.png"),
  ],
};

export function loadImage(imageName) {
  return images[imageName];
}
