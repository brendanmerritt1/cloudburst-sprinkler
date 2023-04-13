function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
};

export const windowResize = (setter) => {
  const dbHandleWindowResize = debounce(function handleWindowResize() {
    setter(window.innerWidth);
  }, 100);
  window.addEventListener("resize", dbHandleWindowResize);
  return () => window.removeEventListener("resize", dbHandleWindowResize);
};
