const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document
    .querySelector("meta[name='theme-color']")
    .setAttribute("content", "#121212");
  document.body.setAttribute("data-theme", currentTheme);
} else {
  document
    .querySelector("meta[name='theme-color']")
    .setAttribute("content", "#FAFAFA");
}

function switchTheme() {
  if (document.body.hasAttribute("data-theme")) {
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute("content", "#FAFAFA");
    localStorage.removeItem("theme");
    document.body.removeAttribute("data-theme");
  } else {
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute("content", "#121212");
    localStorage.setItem("theme", "dark");
    document.body.setAttribute("data-theme", "dark");
  }
}
