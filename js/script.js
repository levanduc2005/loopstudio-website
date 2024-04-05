const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.onclick = () => {
  if (menu.classList.contains("flex")) {
    btn.parentElement.classList.replace("md:visible", "md:hidden");
  }
  navToggle();
};

window.onresize = () => {
  if (menu.classList.contains("flex")) {
    btn.parentElement.classList.replace("md:hidden", "md:visible");
  } else {
    if (btn.parentElement.classList.contains("md:visible")) {
      btn.parentElement.classList.replace("md:visible", "md:hidden");
    }
  }
};

const navToggle = () => {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
};
