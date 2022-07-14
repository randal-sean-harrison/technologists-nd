$(document).ready(function() {

  // Load footer
  $("#site-footer").load("footer.html", function() {
    console.log("Footer loaded.");
    // Enable popovers
    $('[data-toggle="popover"]').popover();
    // Enable tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Add the current year to copyright
    const thisYear = new Date().getFullYear();
    $("#footer-year").text(thisYear);

  });

  // Jumbotron
  // Write the image to the jumbotron
  $(".jumbotron").css("background", "linear-gradient(rgba(12, 35, 64, 0.6), rgba(12, 35, 64, 0.6)), url('img/jumbotron.jpg') no-repeat center center/cover");

  // Back to top button -- when the user scrolls down 20px from the top of the document, show the button

  // In-page sccroll-to links
  $("a.scroll-link").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 130
    }, 400);
  });


  window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("topper").style.display = "block";
    } else {
      document.getElementById("topper").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  $("#topper").on("click", function() {
    $("html").animate({
      scrollTop: 0
    }, 400);
  });

  // Redirect to URL on data-url attr and if has target = _self, then open in same window
  $(document).on("click", "[data-link]", function() {
    window.open($(this).attr("data-link"), $(this).attr('data-target'));
  });

});
// document.ready
