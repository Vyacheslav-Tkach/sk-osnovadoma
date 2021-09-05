$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            var plus = -50;
            $("html, body").animate({scrollTop: $(_href).offset().top + plus +  "px"}, 800);
            return false;
    });
  });


  
    // Прилипающее меню
    $(document).ready(function () {
      var navPos, winPos, navHeight;
      function refreshVar() {
        navPos = $('.header__content').offset().top;
        navHeight = $('.header__content').outerHeight(true);
      }
      refreshVar();
      $(window).resize(refreshVar);
      $('<div class="clone-nav"></div>').insertBefore('.header__content').css('height', navHeight).hide();
      $(window).scroll(function () {
        winPos = $(window).scrollTop();
        if (winPos >= navPos) {
          $('.header__content').addClass('fixed shadow');
          $('.clone-nav').show();
        } else {
          $('.header__content').removeClass('fixed shadow');
          $('.clone-nav').hide();
        }
      });
    });
  
    // Добавление класса для плавного уменьшения падинга у прилипающего меню
    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
          $('.header__content').addClass('slow_padding');
        } else {
          $('.header__content').removeClass('slow_padding');
        }
      });
    });
  
    
  
  
  
  
  