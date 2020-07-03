$(document).ready(function() {
      // init Isotope
        var $grid = $('.grid').isotope({
          itemSelector: '.filter',
          layoutMode: 'fitRows',
        });
        // filter items on button click
        $('.filters ul li a').on( 'click', function() {
            $('.filters ul li a').removeClass("active");
            $(this).addClass("active");
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({
              filter: filterValue 
          });
            return false;
        });
    
  
    
    $('.card-img-top').mouseover(function(){
       
        $(this).parent().children('.OverImg').css("display","inline-block");
        $(this).css("cursor","pointer");
    
    }).mouseout(function(){
        $(this).parent().children('.OverImg').css("display","none");

    });
    
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        slideBy:1,
        dots:false,
        autoplay:true,
        autoplayTimeout:1000,
        autoplaySpeed:1000,
        responsiveRefreshRate:100,
     
        responsive:{
            0:{
                items:5
            },
            600:{
                items:5
            },
            1000:{
                items:8
            }
        }
})

          
    
    
    
});