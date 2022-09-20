(function($) {
  "use strict";

  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });

  $(document).ready(function() {
    //Video Animation

    function _OnBigScreen() {
      console.log("Big Screen setup!");
      $(".product_bl").hover(
        function() {
          $(this).children("video").get(0).play();
        },
        function() {
          $(this).children("video").get(0).pause();
          $(this).children("video").get(0).currentTime = 0;
        });
    }

    function _OnMobileScreen() {
      console.log("Mobile setup!");
      $(window).scroll(function() {
        $('video').each(function() {
          if ($(this).is(":in-viewport")) {
            $(this)[0].play();
          } else {
            $(this)[0].pause();
          }
        });
      });
    }

    function init() {
      if (window.innerWidth > 600) {
        return (_OnBigScreen());
      } else {
        return (_OnMobileScreen());
      }
    }

    // Swiper
    const mySwiper = new Swiper('.swiper-container', {
      resistanceRatio: 0.7,
      spaceBetween: 30,
      effect: 'fade',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });
    // Video Animations
    init();

  });

  AOS.init();
})(jQuery);
