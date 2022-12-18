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
  gallery: require("../assets/home-lawn-sprinklers-1920.jpg"),
  residential: require("../assets/residential-backyard-sprinklers-1920.jpg"),
  join_us: require("../assets/cloudburst-commercial-irrigation-1920.jpg"),
  res_grass: require("../assets/dewy-grass-temp.jpeg"),
  carousel: [
    require("../assets/carouselpic1.png"),
    require("../assets/carouselpic2.png"),
    require("../assets/carouselpic3.png"),
  ],
  certifications: [
    require("../assets/IA-Logo.jpg"),
    require("../assets/IAofNJ-Logo.jpg"),
  ],
  masonryGallery: [
    {
      src: require("../assets/neighborhood-sprinkler-system-1920.jpg"),
      width: 4,
      height: 3,
    },
    {
      src: require("../assets/sprinkler-system-garden-1920.jpg"),
      width: 3,
      height: 4,
    },
    {
      src: require("../assets/commercial-property-irrigation-1920.jpg"),
      width: 3,
      height: 2,
    },
    {
      src: require("../assets/residential-sprinkler-1920.jpg"),
      width: 2,
      height: 1,
    },
    {
      src: require("../assets/residential-backyard-sprinklers-1920.jpg"),
      width: 2,
      height: 1,
    },
    {
      src: require("../assets/cloudburst-commercial-irrigation-1920.jpg"),
      width: 3,
      height: 2,
    },
    {
      src: require("../assets/dewy-grass-temp.jpeg"),
      width: 3,
      height: 2,
    },
    {
      src: require("../assets/carouselpic1.png"),
      width: 2,
      height: 1,
    },
  ],
};

export function loadImage(imageName) {
  return images[imageName];
}

export function loadGallery() {
  return images.masonryGallery;
}
