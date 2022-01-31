$(function () {
  $(".slider").slick({
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: "linear",
    prevArrow: "<img src='../img/icons/arrow_left.svg' class='prev' alt='1'>",
    nextArrow: "<img src='../img/icons/arrow_right.svg' class='next' alt='2'>",
  });
});
