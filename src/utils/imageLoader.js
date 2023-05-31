const images = {
  /* LOGOS */
  black: require("../assets/logos/cloudburst_black.png"),
  white: require("../assets/logos/cloudburst_white.png"),

  /* HOMEPAGE */
  home: require("../assets/pages/neighborhood-sprinkler-system.jpg"),

  /* CONTACT US */
  contact: require("../assets/pages/sprinkler-system-garden.jpg"),

  /* ABOUT US */
  about_us: require("../assets/pages/residential-sprinkler-system.jpg"),

  /* COMMERCIAL */
  commercial: require("../assets/pages/commercial-property-irrigation.jpg"),
  commercialCarousel: [
    require("../assets/carousel/Commercial-slide-1000px-01.jpg"),
    require("../assets/carousel/Commercial-slide-1000px-02.jpg"),
    require("../assets/carousel/Commercial-slide-1000px-03.jpg"),
    require("../assets/carousel/Commercial-slide-1000px-04.jpg"),
  ],

  /* RESIDENTIAL */
  residential: require("../assets/pages/residential-backyard-sprinklers.jpg"),
  res_grass: require("../assets/pages/dewy-grass-maintenance.jpg"),
  residentialCarousel: [
    require("../assets/carousel/residential-slide-1000px-01.jpg"),
    require("../assets/carousel/residential-slide-1000px-02.jpg"),
    require("../assets/carousel/residential-slide-1000px-03.jpg"),
    require("../assets/carousel/residential-slide-1000px-04.jpg"),
  ],

  /* JOIN US */
  join_us: require("../assets/pages/cloudburst-commercial-irrigation.jpg"),

  /* CERTIFICATIONS */
  certifications: [
    require("../assets/logos/IA-Logo.jpg"),
    require("../assets/logos/IAofNJ-Logo.jpg"),
  ],

  /* GALLERY */
  gallery: require("../assets/pages/home-lawn-sprinklers.jpg"),
  galleryPage: [
    {
      src: require("../assets/carousel/residential-slide-1000px-01.jpg"),
      alt: "landscaping-wilmington-de",
      idx: 0
    },
    {
      src: require("../assets/carousel/residential-slide-1000px-02.jpg"),
      alt: "residential-slideshow-02",
      idx: 1
    },
    {
      src: require("../assets/carousel/residential-slide-1000px-03.jpg"),
      alt: "residential-slideshow-03",
      idx: 2
    },
    {
      src: require("../assets/carousel/residential-slide-1000px-04.jpg"),
      alt: "sprinkler-system-garden",
      idx: 3
    },
    {
      src: require("../assets/carousel/Commercial-slide-1000px-01.jpg"),
      alt: "commercial-slideshow-01",
      idx: 4
    },
    {
      src: require("../assets/carousel/Commercial-slide-1000px-02.jpg"),
      alt: "commercial-slideshow-02",
      idx: 5
    },
    {
      src: require("../assets/carousel/Commercial-slide-1000px-03.jpg"),
      alt: "commercial-slideshow-03",
      idx: 6
    },
    {
      src: require("../assets/pages/cloudburst-commercial-irrigation.jpg"),
      alt: "cloudburst-commercial-irrigation",
      idx: 7
    },
    {
      src: require("../assets/carousel/Commercial-slide-1000px-04.jpg"),
      alt: "landscaping-eagleville-pa",
      idx: 8
    },
    {
      src: require("../assets/carousel/neighborhood-sprinkler-system.jpg"),
      alt: "neighborhood-sprinkler-system",
      idx: 9
    },
    {
      src: require("../assets/carousel/commercial-property-irrigation.jpg"),
      alt: "commercial-property-irrigation",
      idx: 10
    },
    {
      src: require("../assets/carousel/commercial-sprinkler-system.jpg"),
      alt: "residential-sprinkler",
      idx: 11
    },
    {
      src: require("../assets/carousel/cloudburst-construction.jpg"),
      alt: "residential-backyard-sprinklers",
      idx: 12
    },
    {
      src: require("../assets/carousel/sprinkler-baseball-field.jpg"),
      alt: "sprinkler-baseball-field",
      idx: 13
    },
    {
      src: require("../assets/carousel/residential-frontyard-sprinklers.jpg"),
      alt: "residential-frontyard-sprinklers",
      idx: 14
    },
    {
      src: require("../assets/carousel/cloudburst-labor.jpg"),
      alt: "cloudburst-labor",
      idx: 15
    },
        {
      src: require("../assets/carousel/baseball-field-springfield.jpg"),
      alt: "baseball-field-springfield",
      idx: 16
    },
  ],

  /* AREAS SERVICED */
  areas_serviced: require("../assets/pages/dewy-grass-maintenance.jpg"),
};

export function loadImage(imageName) {
  return images[imageName];
}

export function loadGallery() {
  return images.galleryPage;
}
