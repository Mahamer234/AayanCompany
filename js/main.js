(function ($) {
  "use strict";
  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();
  // Initiate the wowjs
  new WOW().init();
  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });
  // Testimonials carousel testimonial-carouselar
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });
  /* =======owl for arbic======= */
  $(".testimonial-carouselar").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    rtl: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });
  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
      $(".back-to-top").css("display", "flex");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
  /* ========== to prevent fixed navbar take from section content ========= */
  /*  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    var targetId = $(this).attr("href");
    var targetElement = $(targetId);
    var navbarHeight = $(".navbar").outerHeight();

    $("html, body").animate(
      {
        scrollTop: targetElement.offset().top - navbarHeight,
      },
      500
    );
    // Close the navbar when a link is clicked on mobile screens
    if ($(".navbar-collapse").hasClass("show")) {
      $(".navbar-collapse").collapse("hide");
    }
  }); */
  $('a[href^="#"]').on("click", function (e) {
    // Close the navbar when a link is clicked on mobile screens
    if ($(".navbar-collapse").hasClass("show")) {
      $(".navbar-collapse").collapse("hide");
    }
  });
})(jQuery);
