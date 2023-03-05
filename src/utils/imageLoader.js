const images = {
  /* LOGOS */
  black_281: require("../assets/cloudburst_black_281px_opt.png"),
  white_281: require("../assets/cloudburst_white_281px_opt.png"),
  black_313: require("../assets/cloudburst_black_313px_opt.png"),
  white_313: require("../assets/cloudburst_white_313px_opt.png"),
  white_440: require("../assets/cloudburst_white_440px_opt.png"),

  /* HOMEPAGE */
  home_1920: require("../assets/neighborhood-sprinkler-system-1920.jpg"),

  /* CONTACT US */
  contact_1920: require("../assets/sprinkler-system-garden-1920.jpg"),

  /* ABOUT US */
  about_us: require("../assets/residential-sprinkler-1920.jpg"),
  about_us_v2: require("../assets/AboutUs-1920x900.jpg"),
  about_us_v3: require("../assets/AboutUs-1920x900.jpg"),

  /* COMMERCIAL */
  commercial_2560: require("../assets/commercial-property-irrigation-2560x1210.jpg"),
  commercial_1920: require("../assets/commercial-property-irrigation-1920x900.jpg"),
  commercial_1280: require("../assets/commercial-property-irrigation-1280x600.jpg"),
  commercial_1024: require("../assets/commercial-property-irrigation-1024x480.jpg"),
  commercial_700: require("../assets/commercial-property-irrigation-700x475.jpg"),
  commercialCarousel: [
    require("../assets/Commercial-slide-1000px-01.jpg"),
    require("../assets/Commercial-slide-1000px-02.jpg"),
    require("../assets/Commercial-slide-1000px-03.jpg"),
    require("../assets/Commercial-slide-1000px-04.jpg"),
  ],

  /* RESIDENTIAL */
  residential: require("../assets/residential-backyard-sprinklers-1920.jpg"),
  res_grass: require("../assets/dewy-grass-maintenance.jpg"),
  residentialCarousel: [
    require("../assets/residential-slide-1000px-01.jpg"),
    require("../assets/residential-slide-1000px-02.jpg"),
    require("../assets/residential-slide-1000px-03.jpg"),
    require("../assets/residential-slide-1000px-04.jpg"),
  ],

  /* JOIN US */
  join_us: require("../assets/cloudburst-commercial-irrigation-1920.jpg"),

  /* CERTIFICATIONS */
  certifications: [
    require("../assets/IA-Logo.jpg"),
    require("../assets/IAofNJ-Logo.jpg"),
  ],

  /* GALLERY */
  gallery: require("../assets/home-lawn-sprinklers-1920.jpg"),
  galleryPage: [
    {
      src: require("../assets/residential-slide-1000px-01.jpg"),
      alt: "landscaping-wilmington-de",
      idx: 0
    },
    {
      src: require("../assets/residential-slide-1000px-02.jpg"),
      alt: "residential-slideshow-02",
      idx: 1
    },
    {
      src: require("../assets/residential-slide-1000px-03.jpg"),
      alt: "residential-slideshow-03",
      idx: 2
    },
    {
      src: require("../assets/residential-slide-1000px-04.jpg"),
      alt: "sprinkler-system-garden",
      idx: 3
    },
    {
      src: require("../assets/Commercial-slide-1000px-01.jpg"),
      alt: "commercial-slideshow-01",
      idx: 4
    },
    {
      src: require("../assets/Commercial-slide-1000px-02.jpg"),
      alt: "commercial-slideshow-02",
      idx: 5
    },
    {
      src: require("../assets/Commercial-slide-1000px-03.jpg"),
      alt: "commercial-slideshow-03",
      idx: 6
    },
    {
      src: require("../assets/cloudburst-commercial-irrigation-1920.jpg"),
      alt: "cloudburst-commercial-irrigation",
      idx: 7
    },
    {
      src: require("../assets/Commercial-slide-1000px-04.jpg"),
      alt: "landscaping-eagleville-pa",
      idx: 8
    },
    {
      src: require("../assets/neighborhood-sprinkler-system-1920.jpg"),
      alt: "neighborhood-sprinkler-system",
      idx: 9
    },
    {
      src: require("../assets/commercial-property-irrigation-1920x900.jpg"),
      alt: "commercial-property-irrigation",
      idx: 10
    },
    {
      src: require("../assets/residential-sprinkler-1920.jpg"),
      alt: "residential-sprinkler",
      idx: 11
    },
    {
      src: require("../assets/residential-backyard-sprinklers-1920.jpg"),
      alt: "residential-backyard-sprinklers",
      idx: 12
    },
  ],
};

export function loadImage(imageName) {
  return images[imageName];
}

export function loadGallery() {
  return images.galleryPage;
}
