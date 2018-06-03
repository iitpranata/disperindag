$('.pengumuman').owlCarousel({
    animateOut: 'fadeOut',
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:false,
    dots: false,
})

$('.berita').owlCarousel({
    animateOut: 'fadeOut',
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:8000,
    autoplayHoverPause:false,
    dots: true,
})

$('.galeri').owlCarousel({
    animateOut: 'fadeOut',
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:8000,
    autoplayHoverPause:false,
    dots: true,
})

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
  
  
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
    });
  
  
    return false;
  });