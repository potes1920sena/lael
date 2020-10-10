$(document).ready(function () {
  $(document).on("click", "#menu", function () {
    $(".magazin").show();
  });
  $(document).on("click", "#blog", function () {
    $(".magazin").show();
  });
  $(document).on("click", "#producto", function () {
    $(".magazin").hide();
  });
  $(document).on("click", "#nosotros", function () {
    $(".magazin").show();
  });
  $(document).on("click", "#contacto", function () {
    $(".magazin").hide();
    $(".lateral-a").addClass("lateral-a-cambio");
  });

  $(".caracteristicas-a").addClass("caracteristicas-a-cambio");
  $(".caracteristicas-b").addClass("caracteristicas-b-cambio");
  $(".caracteristicas-c").addClass("caracteristicas-c-cambio");
  $(".caracteristicas-d").addClass("caracteristicas-d-cambio");
  $(".caracteristicas-e").addClass("caracteristicas-e-cambio");
  $(".caracteristicas-f").addClass("caracteristicas-f-cambio");
  $(".caracteristicas-g").addClass("caracteristicas-g-cambio");
  $(".caracteristicas-h").addClass("caracteristicas-h-cambio");

  var altura = $(".menu").offset().top;

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > altura) {
      $(".menu").addClass("menu-fixed");
      $(".logo").addClass("logo-cambio");
      $(".lateral-a").addClass("lateral-a-cambio");
      $(".lateral-b").addClass("lateral-b-cambio");
    } else {
      $(".menu").removeClass("menu-fixed");
      $(".logo").removeClass("logo-cambio");
      $(".lateral-a").removeClass("lateral-a-cambio");
      $(".lateral-b").removeClass("lateral-b-cambio");
    }
  });
  var altura_blog = $("#ancla-2").offset().top;

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > altura_blog) {
      $(".container-fluid").addClass("container-fluid-cambio");
      $(".img-left").removeClass("img-left-cambio");
      $(".img-right").removeClass("img-right-cambio");
      $(".title-blog").addClass("title-blog-cambio");
    } else {
      $(".container-fluid").removeClass("container-fluid-cambio");
      $(".title-blog").removeClass("title-blog-cambio");
      $(".img-left").addClass("img-left-cambio");
      $(".img-right").addClass("img-right-cambio");
    }
  });

  var altura_blog = $("#ancla-3").offset().top;

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > altura_blog) {
      $(".container-fluid").addClass("container-fluid-cambio");
      $(".img-left").removeClass("img-left-cambio");
      $(".img-right").removeClass("img-right-cambio");
      $(".title-blog").addClass("title-blog-cambio");
    } else {
      $(".container-fluid").removeClass("container-fluid-cambio");
      $(".title-blog").removeClass("title-blog-cambio");
      $(".img-left").addClass("img-left-cambio");
      $(".img-right").addClass("img-right-cambio");
    }
  });

  var altura_copyright = $("#ancla-4").offset().bottom;
  if ($(window).scrollTop() < altura_copyright) {
    $(".magazin").show();
  }

  $(document).on("click", "#cart-a", function () {
    $(".caracteristicas-a").removeClass("caracteristicas-a-cambio");

  });

  $(document).on("click", "#cerrar", function () {
    $(".caracteristicas-a").addClass("caracteristicas-a-cambio");
  });

//a

  $(document).on("click", "#cart-b", function () {
    $(".caracteristicas-b").removeClass("caracteristicas-b-cambio");

  });

  $(document).on("click", "#cerrar", function () {
    $(".caracteristicas-b").addClass("caracteristicas-b-cambio");
  });

//b

  $(document).on("click", "#cart-c", function () {
    $(".caracteristicas-c").removeClass("caracteristicas-c-cambio");

  });

  $(document).on("click", "#cerrar", function () {
    $(".caracteristicas-c").addClass("caracteristicas-c-cambio");
  });

  $(document).on("click", "#cart-d", function () {
    $(".caracteristicas-d").removeClass("caracteristicas-d-cambio");

  });

  $(document).on("click", "#cerrar", function () {
    $(".caracteristicas-d").addClass("caracteristicas-d-cambio");
  });

  $(document).on("click", "#cart-e", function () {
    $(".caracteristicas-e").removeClass("caracteristicas-e-cambio");

  });

  $(document).on("click", "#cerrar", function () {
    $(".caracteristicas-e").addClass("caracteristicas-e-cambio");
  });

  $(document).on("click", "#cart-f", function () {
    $(".caracteristicas-f").removeClass("caracteristicas-f-cambio");

  });

  $(document).on("click", "#cerrar", function () {
    $(".caracteristicas-f").addClass("caracteristicas-f-cambio");
  });

  $(document).on("click", "#cart-g", function () {
    $(".caracteristicas-g").removeClass("caracteristicas-g-cambio");

  });

  $(document).on("click", "#cerrar", function () {
    $(".caracteristicas-g").addClass("caracteristicas-g-cambio");
  });

});
