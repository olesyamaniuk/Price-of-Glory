$(function () {
  $(".o-u-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: false,
    cssEase: "linear",
    prevArrow: ".o-u-gallery-list-left",
    nextArrow: ".o-u-gallery-list-right",
  });
});

$(function () {
  $(".o-u-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".o-u-reviews-list-left",
    nextArrow: ".o-u-reviews-list-right",
  });
});
