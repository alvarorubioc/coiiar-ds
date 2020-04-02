//showmore dropdown  
$('.showmore').on('click', function(){
    $(this).toggleClass('open').siblings('.showmore-content').slideToggle(300);
  });

//active items menu  
$('.site-navigation > li').on('click', function(){
  $(this).toggleClass('active-item');
});


//Open sidenav menu on mobile
$('.open-menu').on('click', function(){
  $(this).html($(this).html() == '<span>Cerrar</span>' ? '<span>Menu</span>' : '<span>Cerrar</span>');
  $(this).toggleClass('active');
  $('.site-navigation').toggleClass('open-sidenav');

});

