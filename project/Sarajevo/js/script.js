$(document).ready(function () {
  $('header .nav-link').click(function(e){
    e.preventDefault();
    $('header .nav-link').removeClass('active');
    $(this).addClass('active');
  })
  $('.burger').click(function(){
    if($(this).children().hasClass('fa-bars') == true){
      $(this).children().removeClass('fa-bars');
      $(this).children().addClass('fa-times');
      $('.navbar').animate({
        top: 60
      }, 800)
    }
    else{
      $(this).children().removeClass('fa-times');
      $(this).children().addClass('fa-bars');
      $('.navbar').animate({
        top: -150
      }, 800)
    }
  })
  
  function filterPhoto(photo){
    $('.all').filter('.' + photo).animate({
      opacity: 1
    }, 500,function(){
      $('.all').filter('.' + photo).css('display', 'block');
    });
    
    $('.all').not('.' + photo).animate({
      opacity: 0
    }, 500, function(){
      $('.all').not('.' + photo).css('display', 'none');
    });
  }
  $('.buttons .btn').click(function(){
    filterPhoto($(this).attr('data-photo'));
    $('.buttons .btn').removeClass('active');
    $(this).addClass('active');
  })
  
  $('.team a').click(function(e){
    if($(this).parents('.card-hover').css('opacity') == 0){
      e.preventDefault();
    }
  })
  $('.number').counterUp({
    delay: 10,
    time: 2000
  });
});