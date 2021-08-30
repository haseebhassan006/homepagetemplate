$('#inputDate').datepicker({
});


/*Center Slider*/
$(function () {
  $('#cent').slick({
    infinite: true,
    autoplay: false,
    centerMode: true,
    centerPadding: '26%',
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed:5000,
    speed:900,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerPadding: '30%',
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      },
    ]
  });

});
/*Center Slider*/

/*Resources*/
$(function () {
  $('#resource').slick({
    infinite: true,
    arrow:true,
    dots:false,
    autoplay: false,
    slidesToShow: 3,
    autoplay:true,
    autoplaySpeed:5000,
    speed:900,
    responsive: [
      {
        breakpoint: 992,
        settings: {
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      },
    ]
  });

});
/*Resources*/
/*Centers*/
$(function () {
  $('#center').slick({
    infinite: true,
    arrow:false,
    dots:true,
    autoplay: false,
    slidesToShow: 1,
    autoplaySpeed:5000,
    speed:900,
    responsive: [
      {
        breakpoint: 992,
        settings: {
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      },
    ]
  });

});
/*Centers*/