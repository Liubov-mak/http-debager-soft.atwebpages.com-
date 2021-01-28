//=require ../blocks/**/*.js
$(document).ready(function () {

  const anchors = document.querySelectorAll('a.scroll-link')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const blockID = anchor.getAttribute('href').substr(1)
      $(".js-nav").removeClass("active");
      $(".js-burger").removeClass("active");
      $("body").removeClass("overflow");
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  //input parametr
  $("input[class='premium-input']").click(function(){
    $(this).parents(".package").addClass('premium');   
  });

   $("input[class='basic-input']").click(function(){
    $(this).parents(".package").removeClass('premium');   
  });

  //animation
  AOS.init();
});