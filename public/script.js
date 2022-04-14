$(document).ready(function(){

  $(".header").click(function(){
    $(".content").slideToggle();
    $(".down-btn").fadeToggle();
    setTimeout(function(){
      $(".header").toggleClass("flex");
      $(".animate-inputs").toggleClass("animate-inputs");
    },500);     
  });  



});