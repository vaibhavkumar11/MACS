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

//SLIDER
$(document).ready(function() {
  $(".slider").slider({
    indicators: false
  });
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
$(document).ready(function() {
  $(".parallax").parallax();
});

//FOR CARD-REVEAL
$(function() {
  $(".card").hover(
    function() {
      $(this)
        .find("> .card-image > img.activator")
        .click();
    },
    function() {
      $(this)
        .find("> .card-reveal > .card-title")
        .click();
    }
  );
});

//FOR NAVBAR
window.onscroll = () => {
  const nav = document.querySelector("#my-nav");
  if (this.scrollY <= 10) nav.className = "transparent";
  else nav.className = "white";
};
