$(document).ready(function(){

  //  preloader-part
  $('.preloader').delay(0).fadeOut();

  // slider-part
    $('.banner-sliders').slick({
    dots: true,
    infinite: true,
    arrows:false,
  });
  $('.screen-slider').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 5,
    arrows:false,
    dots: true,
  });

  // venubox
  new VenoBox();

  // feadback-slider
  $('.feadback-text-slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    asNavFor:".feadback-images-slider",
});
$('.feadback-images-slider').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding:"0px",
    autoplaySpeed: 3000,
    dots: true,
    asNavFor:".feadback-text-slider",
});
  // click
  $(".var-btn").click(function(){
    $(".var").toggleClass("Open-Close")
  })
})
