import { loadImage } from "./imageLoader";

export const selectImg = (width, page) => {
  switch (true) {
    case width >= 2560:
      return loadImage(`${page}_2560`);

    case width >= 1920 && width < 2560:
      return loadImage(`${page}_1920`);

    case width >= 1280 && width < 1920:
      return loadImage(`${page}_1280`);

    case width >= 1024 && width < 1280:
      return loadImage(`${page}_1024`);

    case width >= 700 && width < 1024:
      return loadImage(`${page}_700`);

    default:
      return loadImage(`${page}_1920`);
  }
};
