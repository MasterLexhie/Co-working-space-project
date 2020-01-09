const showMobileMenu = () => {
  const nav = document.querySelector(".navigation");
  const burger = document.querySelector(".burger-icon");

  burger.addEventListener("click", function() {
    if (!nav.className.includes("show")) {
      // nav.classList.remove("hide");
      nav.classList.toggle("hide");
      // nav.classList.toggle("show");
    } else {
      nav.classList.remove("show");
      nav.classList.toggle("hide");
    }
  });
};

// burger.addEventListener("click", showMobileMenu);

showMobileMenu();
