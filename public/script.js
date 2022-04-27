$(document).ready(function(){

  $(".header").click(function(){
    $(".content").slideToggle();
    $(".down-btn").fadeToggle();
    setTimeout(function(){
      $(".header").toggleClass("flex");
      $(".animate-inputs").toggleClass("animate-inputs");
    },500);     
  });  

  $(".burger-menu, .mobile-close").click(function(){
    $(".burger-content").fadeToggle();
  });


/* Selektor "name" bekommt ein Hashtag - wird dann zur ID gescrollt - animiert wird nach unten zu den oberen Pixeln 
von dem Content mit der erzeugten ID */
  function scrollTo(selector){
    const destination = $("#" + selector);
    console.log(destination);
    $('html, body').animate({
      scrollTop: destination.offset().top
    }, 'slow');
  }

/* Bei Klick auf Link mit .smoothScroll ID -> Nimm Name von Element -> scrollTo Funktion mit namen als Selektor */
  $(document).on('click', '.smoothScroll', function(){
    const naming = this.name;
    scrollTo(naming);
  });
});