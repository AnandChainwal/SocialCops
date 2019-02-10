$(function(){
    $("#big-image img:eq(0)").nextAll().hide();
    $(".btn_container img").click(function(e){
        var index = $(this).index();
        $("#big-image img").eq(index).show().siblings().hide();
    });
});


$(window).scroll(function(){
	$('nav').toggleClass('scroll', $(this).scrollTop() > 50); 
  
  $('.nav-link').toggleClass('scroll', $(this).scrollTop() > 50);
  
  $('.nav-link').toggleClass('nav_scroll', $(this).scrollTop() > 50);//temp sol
  
  if($(this).scrollTop() > 50){ $('.navbar-brand img').attr('src', 'https://socialcops.com/images/old/global/logo-socialcops-dark.svg');
                          }
  else{
    $('.navbar-brand img').attr('src', 'https://socialcops.com/images/old/global/logo-socialcops-light.svg');
  }
  
});