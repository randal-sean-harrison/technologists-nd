$(document).ready(function() {

  function writePeople (fileName) {

    $.getJSON(fileName, function(data) {

      // Sort the json resources object
      function sortJson(a, b) {
        return a.name > b.name ? 1 : -1;
      }

      data.people.sort(sortJson);

      var template = $("#all-the-people").html();
      var html = Mustache.to_html(template, data);
      $("#people-div").html(html);

      // Show the counts in the buttons
      var allCount = $("#people-div").find(".card").length;
      $("#all").append("&nbsp; ( " + allCount + " )");;


      var webCount = $("#people-div").find(".web").length;
      var toolCount = $("#people-div").find(".tool").length;
      var teachingCount = $("#people-div").find(".teach").length;
      var designCount = $("#people-div").find(".design").length;
      var gameCount = $("#people-div").find(".game").length;


      $("#web").append("&nbsp; ( " + webCount + " )");
      $("#tool").append("&nbsp; ( " + toolCount + " )");
      $("#teach").append("&nbsp; ( " + teachingCount + " )");
      $("#design").append("&nbsp; ( " + designCount + " )");
      $("#game").append("&nbsp; ( " + gameCount + " )");

    });

  }

  writePeople ("json/people.json");


  // Clear the search
  $("#search-refresh-button").on("click", function() {
    // Show all the cards
    $(".card-container").css("display", "block");
    $(".card-container").removeClass("d-none");
    $("#search-input").val("");

    // Reset the filter buttons
    $("#filter-buttons .btn").removeClass("active");
    $("#filter-buttons .btn").find(".all").addClass("active");

  });


  // Filter buttons selection ----------------------------------------------
   $("#filter-buttons button").on("click", function(event) {

      $("#search-input").val("");

      // show everyting to start
      // $(".card-container").removeClass("d-none");

      // Then hide everyting to start
      $(".card-container").addClass("d-none");

      // Add color to the selected button
      $("#filter-buttons button").removeClass("active");
      $(this).addClass("active");

      // Get the id text of the button clicked
      var buttonClicked = event.target.id;

      // Turn the id text into a class name
      var show = "." + buttonClicked;

      if (buttonClicked === "all") {

         $(".card-container").fadeIn("slow").removeClass("d-none");

      } else {

         // show all the panels with this class name
         // $(show).removeClass("hidden");
         $(show).parent().removeClass("d-none").css("display", "block");

      }

   });

   // Show all panels on focus into the input field
   $("#search-input").on("focus", function() {

      // Clear all other the buttons
      $("#filter-buttons .btn").removeClass("active");
      $("#filter-buttons .btn").find(".all").addClass("active");

      // Show all panels
      $(".card-container").fadeIn("slow").removeClass("d-none");
   });

   // Search field filter
   $("#search-input").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#people-div .card-container").filter(function() {
         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
   });

});
