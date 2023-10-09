$(document).ready(function () {
  const loadMoreButton = $("#load-more");
  const loadLessButton = $("#load-less");
  const hiddenImages = $(".work__image-container:nth-child(n+9)");

  loadMoreButton.click(function (e) {
    e.preventDefault();
    hiddenImages.show();
    loadMoreButton.hide();
    loadLessButton.show();
    workProcessContainer.css({
      position: "absolute",
      top: "100px",
    });
  });

  loadLessButton.click(function (e) {
    e.preventDefault();
    hiddenImages.hide();
    loadMoreButton.show();
    loadLessButton.hide();
    workProcessContainer.css({
      position: "static",
      top: "auto",
    });
  });

  $(".open").click(function (event) {
    event.preventDefault();
    $.fancybox.open(
      [
        {
          src: "img/right-image.jpg",
          opts: { thumb: "img/right-image.jpg" },
        },
        {
          src: "img/right-image-2.jpg",
          opts: { thumb: "img/right-image-2.jpg" },
        },
        {
          src: "img/right-image-3.jpg",
          opts: {
            thumb: "img/right-image-3.jpg",
          },
        },
        {
          src: "img/right-image-4.jpg",
          opts: {
            thumb: "img/right-image-4.jpg",
          },
        },
        {
          src: "img/right-image-5.jpg",
          opts: {
            thumb: "img/right-image-5.jpg",
          },
        },
        {
          src: "img/right-image-6.jpg",
          opts: {
            thumb: "img/right-image-6.jpg",
          },
        },
        {
          src: "img/right-image.jpg",
          opts: {
            thumb: "img/right-image.jpg",
          },
        },
      ],
      { loop: true, thumbs: { autoStart: true } }
    );
  });
  const swiper = new Swiper(".swiper-container", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
    },
  });
  const burgerMenu = $(".burger-menu");
  const menuList = $(".list");

  burgerMenu.click(function () {
    burgerMenu.toggleClass("active");
    menuList.toggleClass("active");
  });

  const showFormButton = document.getElementById("showContactForm");
  const formContainer = document.getElementById("formContainer");
  const overlay = document.getElementById("overlay");
  const closeFormButton = document.getElementById("closeForm");

  showFormButton.addEventListener("click", function () {
    formContainer.style.display = "block";
    overlay.style.display = "block";
  });

  closeFormButton.addEventListener("click", function () {
    formContainer.style.display = "none";
    overlay.style.display = "none";
  });
});
