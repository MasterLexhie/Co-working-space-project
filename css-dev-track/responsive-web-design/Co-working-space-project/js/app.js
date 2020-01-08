const showMobileMenu = () => {
  const nav = document.querySelector(".navigation");
  const burger = document.querySelector(".burger-icon");

  if (nav.classList.value === "navigation") {
    burger.addEventListener("click", function() {
      nav.classList.add("show");
      console.log("add: ", nav.classList);
    });
  } else if (nav.classList.value === "navigation show") {
    burger.addEventListener("click", function() {
      nav.classList.remove("show");
      console.log("remove: ", nav.classList);
    });
  }
};

addEventListener("click", showMobileMenu);
