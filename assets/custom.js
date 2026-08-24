function headerTransparent(){
  if($("body.index").length > 0){  
    if($(this).scrollTop() > 10) {
      $("body.index").addClass("index-fixed-custom");
      //$("body.index .shopify-section-header-sticky").css("top", `0`);
      $("body.index .shopify-section-header-sticky").css("top", `${$("body.index  .announcement-bar-section").height()}px`)      
    }else{
      $("body.index").removeClass("index-fixed-custom");
      $("body.index .shopify-section-header-sticky").css("top", `${$("body.index  .announcement-bar-section").height()}px`)      
    }
  }
  $("body.index  .announcement-bar-section").show();
  $("body.index  .header-wrapper").show();
}

function calculateBottomInMobileAdd() {
  let heightForm = $("body.product .product .product__info-wrapper.product__info-wrapper-full").outerHeight();
  if($(window).width() < 750) {
    $("body.product").css("padding-bottom",`${heightForm}px`);
  }else{
    $("body.product").css("padding-bottom",`0px`);
  }
}

function checkScroll() {
  let heightForm = $("body.product .product .product__info-wrapper.product__info-wrapper-full").outerHeight();
  if ($(window).width() < 750) {
    let target = $(".product__media.media.media--transparent");
    $("body.product").css("padding-bottom",`${heightForm}px`);
    if (target.length) {
        let targetHeight = target.outerHeight();
        let scrollPosition = $(window).scrollTop();
        setTimeout(function () {
          if (scrollPosition >= targetHeight - 50) {
            $(".product__info-wrapper.product__info-wrapper-full").addClass("fixed");
          } else {
              $(".product__info-wrapper.product__info-wrapper-full").removeClass("fixed");
          }
        }, 300);
        
    }
  } else {
    $("body.product").css("padding-bottom",`0px`);
    $(".product__info-wrapper.product__info-wrapper-full").removeClass("fixed");
  }
}
$(function(){
  $(document).on("click", ".menu-mobile-custom-account", function(){
    $(".header__icon--search").trigger("click");
  });
  headerTransparent();
  $(window).on('scroll', function () {
    headerTransparent();
  });
  $(document).on("click", ".prevent-default-link, .more-mega-menu", function(e){
    e.preventDefault();
    $(this).parent().toggleClass("open");
  });
  
  $(document).on("click", ".mega-menu-header span", function(){
    $(".mega-menu").removeAttr("open");
    $(".mega-menu .header__menu-item").attr("aria-expanded", "false");
  });

  $(document).on("click", ".custom-colors__item.custom-colors__item__current a", function(e){
    e.preventDefault();
  });

  

  if ($("body.collection").length > 0 || $("body.search").length > 0) {
    $(".collection-product-slider-swiper").each(function (index, element) {
      let currEffect =  'slide';
      let currSpeed=  300;
      if($(window).width() > 750){
        currEffect =  'fade';
        currSpeed= 0;
      }
      let swiperInstance = new Swiper(element, {
        effect: currEffect,
        loop: false,
        autoplay: false,
        speed: currSpeed,
      });

      let autoNextInterval;

      $(element).hover(
        function () {
            swiperInstance.slideNext();
        },
        function () {
          //clearInterval(autoNextInterval);
          swiperInstance.slideTo(0);
        }
      );
    });
  }

  if($("body.product").length > 0){
    //calculateBottomInMobileAdd();
    //checkScroll();
  }

  $(window).on('resize', function () {
    //calculateBottomInMobileAdd();
    //checkScroll();
  });

  $(window).on('scroll', function () {
    //calculateBottomInMobileAdd();
    //checkScroll();
  });

  $(document).on("click", ".link-to-image", function() {
    $(".product-zoom-mobile").addClass("active");
  });

  $(document).on("click", ".product-zoom-mobile img, .product-zoom-mobile span", function() {
    $(".product-zoom-mobile").removeClass("active");
  });

  
   
  
});