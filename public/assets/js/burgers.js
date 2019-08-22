// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#devourBurger").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("devour");
  
      var newDevourState = {
        devoured: devour
      };
    
      // Send the PUT request.
      $.ajax("/api/burgers/devoured/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed burger to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".addBurger").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let newBurger = {
        name: $("#name").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  