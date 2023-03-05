export const windowResize = (setter) => {
  const handleWindowResize = () => {
    setter(window.screen.width);
  };
  window.addEventListener("resize", handleWindowResize);
  return () => window.removeEventListener("resize", handleWindowResize);
};
