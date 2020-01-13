const showMobileMenu = () => {
  const nav = document.querySelector(".navigation");
  const burger = document.querySelector(".burger-icon");

  burger.addEventListener("click", function() {
    if (!nav.className.includes("show")) {
      nav.classList.toggle("hide");
    } else {
      nav.classList.remove("show");
      nav.classList.toggle("hide");
    }
  });
};

const toggleBtnColor = () => {
  const btn = document.querySelectorAll(".staff-btn");

  btn.forEach(x => {
    x.addEventListener("click", function(y) {
      let element = y.target;
      element.classList.toggle("colored-bg");
    });
  });
};

const toggleMapImage = () => {
  const map = document.querySelectorAll(".map-img");
  const prev = document.querySelector(".direction-left");
  const next = document.querySelector(".direction-right");

  let currentSlide = 0;

  if (location.href.includes("page2.html")) {
    next.addEventListener("click", function() {
      map[currentSlide].className = "map-img";

      currentSlide = (currentSlide + 1) % map.length;

      map[currentSlide].className = "map-img showing";
    });

    prev.addEventListener("click", function() {
      map[currentSlide].className = "map-img";

      currentSlide = (currentSlide - 1) % map.length;

      map[currentSlide].className = "map-img showing";
    });
  }
};

toggleMapImage();

toggleBtnColor();

showMobileMenu();
