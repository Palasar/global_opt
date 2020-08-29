$(document).ready(function(){
  $('ul.header__list').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
  });
  
  $('.feedback__slider').slick(
    {
      centerMode: true,
      centerPadding: '-60px',
      slidesToShow: 1,
      
      // responsive: [
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       arrows: false,
      //       centerMode: true,
      //       centerPadding: '40px',
      //       slidesToShow: 3
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       arrows: false,
      //       centerMode: true,
      //       centerPadding: '40px',
      //       slidesToShow: 1
      //     }
      //   }
      // ]
    }
  );
  });
    