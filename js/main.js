// window.addEventListener("load", () => {
//     document.getElementById("loading").style.display = "none";
//   });
  // or
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 2000);

  function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);