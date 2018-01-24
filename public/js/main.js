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
$(".carousel.carousel-slider").carousel({
  fullWidth: true,
  indicators: true
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

//FOR GALLERY PAGE
$(function() {
  $(".img-w").each(function() {
    $(this).wrap("<div class='img-c'></div>");
    let imgSrc = $(this)
      .find("img")
      .attr("src");
    $(this).css("background-image", "url(" + imgSrc + ")");
  });

  $(".img-c").click(function() {
    let w = $(this).outerWidth();
    let h = $(this).outerHeight();
    let x = $(this).offset().left;
    let y = $(this).offset().top;

    $(".active")
      .not($(this))
      .remove();
    let copy = $(this).clone();
    copy
      .insertAfter($(this))
      .height(h)
      .width(w)
      .delay(500)
      .addClass("active");
    $(".active").css("top", y - 8);
    $(".active").css("left", x - 8);

    setTimeout(function() {
      copy.addClass("positioned");
    }, 0);
  });
});

$(document).on("click", ".img-c.active", function() {
  let copy = $(this);
  copy.removeClass("positioned active").addClass("postactive");
  setTimeout(function() {
    copy.remove();
  }, 500);
});
