export const scrollToTop = (top: number) => {
  window.scrollTo({
    top,
    behavior: "smooth", // This enables smooth scrolling
  });
};
