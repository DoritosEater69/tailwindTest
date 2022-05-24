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

  $(".socials-close").click(function(){
    $(".social-jumper").fadeToggle();
    $(".social-closed").show()
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


  /* In-view Testing */

$.fn.isInViewport = function(){
/* Nimm Obere Position vom Element */
  var elemTop = $(this).offset().top;
/* Nimm Untere Position vom Element (Größe des Elements mit Border, Padding usw) */  
  var elemBottom = elemTop + $(this).outerHeight();

/* Nimm Oberen Punkt des Screens */
  var viewTop = $(window).scrollTop();
/* Nimm Unteren Punkt des Screens (Größe des Oberen Viewports um Unten zu finden) */
  var viewBottom = viewTop + $(window).height();

/* Gib größere Bottom Position von Top View UND das kleinere View Bottom von oberer Position */
  return elemBottom > viewTop && elemTop < viewBottom;
};

  /* Wenn Fenster gescrollt oder resized wird, dann... */
$(window).on('resize scroll', function(){
  var socialJumper = $('.social-jumper');

  if(socialJumper.is(":hidden")){
    $('.social-closed').each(function(){
    var socialsBar = $('.social-closed');

  /* Nimm die Social Bar und färbe sie so: */
      if ($('#who').isInViewport()) {
        socialsBar.fadeIn("slow");
        socialsBar.css('background-color', 'red');            
        socialsBar.text("Who we are").append('&nbsp;&nbsp;<i class="fa-solid fa-location-arrow text-center pr-4"></i>');      
      }
      else if ($('#connect').isInViewport()) {
        socialsBar.fadeIn("slow");
        socialsBar.css('background-color', 'blue');      
        socialsBar.text("Connect with us").append('&nbsp;&nbsp;<i class="fa-solid fa-location-arrow text-center pl-4"></i>');
      }
      else if ($('#gallery').isInViewport()) {
        socialsBar.fadeIn("slow");
        socialsBar.css('background-color', 'green');      
        socialsBar.text("Gallery").append('&nbsp;&nbsp;<i class="fa-solid fa-location-arrow text-center pl-4"></i>');
      }
      else if ($('#rating').isInViewport()) {
        socialsBar.fadeIn("slow");
        socialsBar.css('background-color', 'green');      
        socialsBar.text("What our Customers think").append('&nbsp;&nbsp;<i class="fa-solid fa-location-arrow text-center pl-4"></i>');
      }
      else if ($('#info').isInViewport()) {
        socialsBar.fadeIn("slow");
        socialsBar.css('background-color', 'green');      
        socialsBar.text("Info").append('&nbsp;&nbsp;<i class="fa-solid fa-location-arrow text-center pl-4"></i>');
      }
      else{
        socialsBar.css('background-color', 'black');   
        socialsBar.text("Socials").append('&nbsp;&nbsp;<i class="fa-solid fa-location-arrow text-center pl-4"></i>');   
      }
    })
  }  
  else{
    if ($('#who').isInViewport()) {
        socialJumper.fadeOut("slow");
      }
  }
});

});