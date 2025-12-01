
document.addEventListener("scroll", ()=> {
  document.querySelector('.nav').style.background = window.scrollY > 50 ? "#ffffffaa" : "transparent";
});
