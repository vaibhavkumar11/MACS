//FOR SIDENAV
$(document).ready(function() {
  $(".sidenav").sidenav();
});

//FOR TABS
$(document).ready(function() {
  $(".menu .item").tab();
});

//MODALS
$(document).ready(function() {
  $(".modal").modal();
});

//FOR PRELOADER
$(document).ready(function() {
  //Preloader
  $(window).load(function() {
    preloaderFadeOutTime = 500;
    function hidePreloader() {
      var preloader = $(".sk-cube-grid");
      preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
  });
});

//SLIDER
$(document).ready(function() {
  $(".slider").slider({});
});

//CAROUSEL
$(document).ready(function() {
  $(".carousel").carousel();
});

//FIXED ACTION BUTTON
$(document).ready(function() {
  $(".fixed-action-btn").floatingActionButton({});
});

//PARALLAX
$(document).ready(function(){
  $('.parallax').parallax();
});

